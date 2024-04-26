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

  convertBirthday(val) {
    const timestamp = new Date(val);
    const currentDate = new Date();
    const difference = currentDate - timestamp;
    const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    return age;
  },
};

export default funValidation;
