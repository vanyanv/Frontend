interface DebouncedFunction<T> {
  (args: T): void;
  cancel(): void;
  flush(): void;
}

export default function debounce<T>(
  func: (args: T) => void, // Corrected to return void, since you're not returning `T`
  wait: number,
  immediate: boolean = false // Add an option for immediate invocation
): DebouncedFunction<T> {
  let timeoutId: number | NodeJS.Timeout | undefined | null;
  let lastArgs: T | undefined;

  const debounced = function (args: T) {
    lastArgs = args; // Save the arguments for potential flush
    const callNow = immediate && !timeoutId;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func(lastArgs!); // Execute delayed function
      }
    }, wait);

    if (callNow) {
      func(args); // Execute immediately
    }
  };

  debounced.cancel = function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  debounced.flush = function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
      func(lastArgs!); // Immediately invoke with the last args
      timeoutId = null;
    }
  };

  return debounced as DebouncedFunction<T>;
}
