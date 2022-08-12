class CustomError {
  constructor(message, status, additionalInfo) {
    (this.message = message),
      (this.status = status),
      (this.additionalInfo = additionalInfo);
  }
}

module.exports = {
  CustomError,
};
