class ApiError extends Error {
    constructor(
        statusCode,
        message = "There was an error",
        errors = [],
        stack = ""
    ){
        super(message); //this is the parent class for getting 
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if(stack) {
            this.tack = stack;
        } else 
        {
            Error.captureStackTrace(this, this.constructor);
            //this is a method that captures the stack trace of the error
        }
    }
}