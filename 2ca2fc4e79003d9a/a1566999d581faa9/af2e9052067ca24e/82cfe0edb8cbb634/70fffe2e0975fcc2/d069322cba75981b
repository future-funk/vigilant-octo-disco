const withDelay = <T>(promise: T, delay = 400) =>
  Promise.all([
    promise,
    new Promise((resolve) => setTimeout(resolve, delay)),
  ]).then(([moduleExports]) => moduleExports)

export default withDelay
