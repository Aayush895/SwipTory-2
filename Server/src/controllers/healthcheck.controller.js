import { StatusCodes } from "http-status-codes";
import ApiResponse from "../utils/ApiResponse.js";

function healthcheckController(req, res) {
  return res
    .status(StatusCodes.OK)
    .json(
      new ApiResponse(StatusCodes.OK, { message: "Server is working fine" })
    );
}

export { healthcheckController };
