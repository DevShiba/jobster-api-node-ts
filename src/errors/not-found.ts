import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api";

class notFoundError extends CustomAPIError{
    constructor(message: string){
        super(message, StatusCodes.NOT_FOUND)
    }
}

export default notFoundError;