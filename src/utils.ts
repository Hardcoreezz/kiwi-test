export const throttle = (callback: any, limit: number) => {
  let waiting = false;
  return (...args: any[]) => {
    if (!waiting) {
      callback(args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  }
}
