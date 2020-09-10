'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Matriculas.belongsTo(models.Pessoas)
    Matriculas.belongsTo(models.Turmas)
    }
  };
  Matriculas.init({
    estatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};