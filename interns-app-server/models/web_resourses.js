const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_resourses', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'personal_info',
        key: 'id'
      }
    },
    webtype_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_resourses_type',
        key: 'id'
      }
    },
    created_date_post: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    modify_date_post: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_resourses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "web_resourses_owner_id_foreign",
        using: "BTREE",
        fields: [
          { name: "owner_id" },
        ]
      },
      {
        name: "web_resourses_webtype_id_foreign",
        using: "BTREE",
        fields: [
          { name: "webtype_id" },
        ]
      },
    ]
  });
};
