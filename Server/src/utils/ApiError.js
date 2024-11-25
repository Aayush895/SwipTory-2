class ApiError extends Error {
  constructor(status, message, isOperational = true) {
    super(message);
    this.status = status;
    // isOperational is for figuring out if the error is regarding issues such as auth or not found errors. If false then the error is something else and therefore not api related. These errors can be Database connection errors, Server misconfigurations, Internal server errors due to unexpected code issues (eg., uncaught exceptions, syntax errors, etc.)

    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
