const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assignment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Subject: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type_assignment',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status_assignment',
        key: 'id'
      }
    },
    priority_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'priority_assignment',
        key: 'id'
      }
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'personal_info',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'assignment',
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
        name: "assignment_team_id_foreign",
        using: "BTREE",
        fields: [
          { name: "team_id" },
        ]
      },
      {
        name: "assignment_agent_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agent_id" },
        ]
      },
      {
        name: "assignment_status_id_foreign",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "assignment_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "Type_id" },
        ]
      },
      {
        name: "assignment_priority_id_foreign",
        using: "BTREE",
        fields: [
          { name: "priority_id" },
        ]
      },
    ]
  });
};
