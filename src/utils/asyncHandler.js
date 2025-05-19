//we're making a wrapper function here

//promises version
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((error) => {
                res.status(error.code || 500).json({
                    success: false,
                    message: error.message,
                });
            });
    }
}

export { asyncHandler };


//const asyncHandler = (fn) => { async() => {}} //higher order function
// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res. next)
//     }catch (error) {
//         res.status(error.code || 500).json( //this json is for the convenience of the fe dev
//             {
//                 success: false,
//                 message: error.message 
//             }
//         )
//     }
// }
//the above was the try catch version