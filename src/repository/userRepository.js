const { User } = require('../../models');

exports.findAllUsers = async () => {
  return User.findAll();
};

exports.findOneUser = async (userId) => {
  return User.findOne({
    where: { id: userId }
  });
};

exports.createUser = async (payload) => {
  return User.create({
    name: payload.name,
    email: payload.email
  });
};

exports.updateUser = async (payload, userId) => {
  return User.update(
    payload,
    {
      where: { id: userId }
    }
  );
};

exports.deleteUser = async (userId) => {
  return User.delete({
    where: { id: userId }
  });
};