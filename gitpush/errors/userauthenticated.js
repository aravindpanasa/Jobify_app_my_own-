import { StatusCodes } from "http-status-codes";
import customAPIError from "./custom-api.js";

class UnAuthenticated extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticated;
