# E-commerce Data Transformation

## Problem 6: E-commerce Data Transformation

### Interfaces

```typescript
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
```

### Sample Data

```typescript
const sampleData = {
    products: [
        {
            id: "P1",
            name: "Classic T-Shirt",
            category: "Apparel",
            subcategory: "T-Shirts",
            variants: [
                { id: "V1", color: "black", size: "M", stock: 10, price: 19.99 },
                { id: "V2", color: "white", size: "L", stock: 5, price: 19.99 }
            ]
        }
    ],
    orders: [
        {
            id: "O1",
            userId: "U1",
            items: [
                { variantId: "V1", quantity: 2, priceAtPurchase: 19.99 }
            ],
            status: "delivered",
            orderDate: "2024-01-15"
        }
    ],
    customers: [
        {
            id: "U1",
            name: "John Doe",
            tier: "silver",
            registeredDate: "2023-06-01"
        }
    ]
};
```

### Transformation Goals

Transform this data to get:
1. Sales by category
2. Customer purchase history
3. Product performance metrics
4. Inventory alerts

### Transformation Interfaces

```typescript
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
```

### Analysis Function

```typescript
function analyzeEcommerceData(data: typeof sampleData): {
    categorySales: CategorySales[];
    customerHistories: CustomerHistory[];
    productMetrics: ProductMetrics[];
    lowStockAlerts: string[];
} {
    // TODO: Implement this function
    return {
        categorySales: [],
        customerHistories: [],
        productMetrics: [],
        lowStockAlerts: []
    };
}
```
