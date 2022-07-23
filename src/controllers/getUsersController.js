const { findAllUsers } = require("../repository/userRepository");

module.exports = async (req, res) => {
  try {
    const users = await findAllUsers();

    res.status(200).json({
      status: 'success',
      data: users
    });
  } catch (error) {
    console.log(error, '--err-get-user');
    res.status(503).json({
      status: 'err_service_unavailable',
      message: 'This service is currently unavailable.'
    });
  }
};
