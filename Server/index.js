import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import loggerConfig from "./src/config/loggerConfig.js";
import connectDB from "./src/config/dbConfig.js";
import { PORT } from "./src/config/serverConfig.js";

const app = express();
const morganFormat = ":method :url :status :response-time ms";

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        loggerConfig.info(JSON.stringify(logObject));
      },
    },
  })
);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port: ${PORT}`);
  } catch (error) {
    console.log(`Error in connecting with the server: ${error}`);
  }
});
