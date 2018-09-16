'use strict';
module.exports = (sequelize, DataTypes) => {
  var entries = sequelize.define('entries', {
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    Date: DataTypes.DATE
  }, {});
  entries.associate = function(models) {
    // associations can be defined here
  };
  return entries;
};