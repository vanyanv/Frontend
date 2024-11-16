interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  variants: {
    id: string;
    color: string;
    size: string;
    stock: number;
    price: number;
  }[];
}

interface Order {
  id: string;
  userId: string;
  items: {
    variantId: string;
    quantity: number;
    priceAtPurchase: number;
  }[];
  status: 'pending' | 'shipped' | 'delivered';
  orderDate: string;
}

interface Customer {
  id: string;
  name: string;
  tier: 'bronze' | 'silver' | 'gold';
  registeredDate: string;
}

interface CategorySales {
  category: string;
  subcategory: string;
  totalRevenue: number;
  totalOrders: number;
  popularProducts: {
    productId: string;
    productName: string;
    salesCount: number;
  }[];
}

interface CustomerHistory {
  customerId: string;
  customerName: string;
  customerTier: string;
  totalSpent: number;
  orderCount: number;
  favoriteCategories: string[];
  lastOrder: string;
}

interface ProductMetrics {
  productId: string;
  productName: string;
  revenue: number;
  unitsSold: number;
  stockStatus: 'Low' | 'Medium' | 'High';
  popularity: number; // Based on sales velocity
}

async function analyzeEcommerceData(): Promise<{
  categorySales: CategorySales[];
  customerHistories: CustomerHistory[];
  productMetrics: ProductMetrics[];
  lowStockAlerts: string[];
}> {
  // TODO: Implement this function
  try {
    const ecommerseJson = await fetch(
      'https://run.mocky.io/v3/9158e647-f59b-4385-b78d-18937d9a6607'
    );
    const ecommerseData = await ecommerseJson.json();
    const prodcuts = ecommerseData.products;
    const orders = ecommerseData.orders;
    const customers = ecommerseData.customers;

    const categorySales: CategorySales[] = prodcuts.map((product: Product) => {
      const totalRevenue = orders.reduce((acc: number, order: Order) => {
        const orderTotal = order.items.reduce((orderAcc, item) => {
          if (item.variantId === product.id) {
            return orderAcc + item.priceAtPurchase * item.quantity;
          }
          return orderAcc;
        }, 0);
        return acc + orderTotal;
      }, 0);

      return {
        category: product.category,
        subcategory: product.subcategory,
        totalRevenue,
      };
    });
    return {
      categorySales: [],
      customerHistories: [],
      productMetrics: [],
      lowStockAlerts: [],
    };
  } catch (error) {
    console.log('Unable to get E-Commerce Data from API', error);
    throw error;
  }
}

analyzeEcommerceData();
