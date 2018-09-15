module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  users.associate = (models) => {
    users.hasMany(models.entries, {
      foreignKey: 'userid',
      as: 'entries',
    });
  };
  return users;
};
