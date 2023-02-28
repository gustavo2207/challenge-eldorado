/*
const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Category",
        tableName: "categories",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Device, {
      foreignKey: "id_category",
      as: "devices",
    });
  }
}

module.exports = Category;
*/

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: DataTypes.STRING,
  });

  Category.associate = (models) => {
    Category.hasMany(models.Device, {
      foreignKey: "id_category",
      as: "device",
    });
  };

  return Category;
};
