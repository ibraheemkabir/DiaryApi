module.exports = (sequelize, DataTypes) => {
  const entries = sequelize.define('entries', {
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    Date: DataTypes.DATE,
  }, {});
  return entries;
};
