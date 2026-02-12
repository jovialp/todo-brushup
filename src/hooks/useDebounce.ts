import { useCallback, useEffect, useRef } from "react";

/**
 * A hook that returns a debounced version of the provided function.
 * @param fn The function to debounce
 * @param delay Delay in milliseconds (default: 300ms)
 */
function useDebounce<T extends (...args: never[]) => void>(fn: T, delay: number = 300): (...args: Parameters<T>) => void {
  // Use a ref for the timer to avoid re-renders and keep it persistent across calls
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Return a memoized debounced function
  return useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );
}

export default useDebounce;





// use below code if not using React
// function debounce (fn, delay=300){
//   let timer;
//   return function(...args){
//     clearTimeout(timer);
//     timer= setTimeout(()=>{
//       fn.apply(this, args);
//     }, delay)
//   }
// }