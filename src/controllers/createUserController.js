const { createUser } = require("../repository/userRepository");

module.exports = async (req, res) => {
  try {
    const payload = req.body;

    const user = await createUser(payload);

    res.status(200).json({
      status: 'success',
      data: user
    });
  } catch (error) {
    console.log(error, '--err-create-user');
    res.status(503).json({
      status: 'err_service_unavailable',
      message: 'This service is currently unavailable.'
    });
  }
};
