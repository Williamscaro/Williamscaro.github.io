const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('answer_documents', {
    document_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'answer-id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'answers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'answer_documents',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "document_id" },
        ]
      },
      {
        name: "answer_documents_answer_id_foreign",
        using: "BTREE",
        fields: [
          { name: "answer-id" },
        ]
      },
    ]
  });
};
