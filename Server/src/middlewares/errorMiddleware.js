import loggerConfig from "../config/loggerConfig.js";

const errorMiddleware = (err, req, res, next) => {
  const isOperationalError = err.isOperational || false;

  // Log the error with stack trace in the logs
  loggerConfig.error(
    `Error: ${err.statusCode || 500} - ${err.message} - ${err.stack}`
  );

  if (isOperationalError) {
    // Operational errors (client-related) - send detailed message
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
    stack: err.stack,
  });
};

export default errorMiddleware;
