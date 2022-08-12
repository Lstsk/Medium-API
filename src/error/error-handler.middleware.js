const { CustomError } = require("./CustomError");

const handleError = (err, req, res, next) => {
    let customError = err;
    console.log(err)

    if (!(err instanceof CustomError)) {
        customError = new CustomError("Internal Server Error")
    }

    res.status((customError).status).send(customError)
};


module.exports = {
    handleError
}