const funValidation = {
  /**
   * Convert CreateBy, ModifyBy sang date time
   * @param {*} val
   */
  convertDateTime(val) {
    var dateObject = new Date(val);

    var formattedDate = dateObject.toLocaleDateString("en-US"); // Adjust the locale as needed

    var formattedTime = dateObject.toLocaleTimeString("en-US"); // Adjust the locale as needed

    return {
      formattedDate,
      formattedTime,
    };
  },
};

export default funValidation;
