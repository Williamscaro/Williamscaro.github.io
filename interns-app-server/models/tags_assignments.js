const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tags_assignments', {
    assignment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tags',
        key: 'id_Tag'
      }
    }
  }, {
    sequelize,
    tableName: 'tags_assignments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "assignment_id" },
        ]
      },
      {
        name: "tags_assignments_tag_id_foreign",
        using: "BTREE",
        fields: [
          { name: "Tag_id" },
        ]
      },
    ]
  });
};
