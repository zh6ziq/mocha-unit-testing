const { findOneUser } = require("../repository/userRepository");

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await findOneUser(userId);

    if (!user) {
      return res.status(422).json({
        status: 'err_user_not_found',
        message: 'User not exist.'
      });
    }

    res.status(200).json({
      status: 'success',
      data: user
    });
  } catch (error) {
    console.log(error, '--err-get-userid');
    res.status(503).json({
      status: 'err_service_unavailable',
      message: 'This service is currently unavailable.'
    });
  }
};
