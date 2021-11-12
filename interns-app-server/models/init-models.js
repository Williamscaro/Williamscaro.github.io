var DataTypes = require("sequelize").DataTypes;
var _academic_status = require("./academic_status");
var _answer_documents = require("./answer_documents");
var _answers = require("./answers");
var _assignment = require("./assignment");
var _assignment_documents = require("./assignment_documents");
var _attendance = require("./attendance");
var _direccion = require("./direccion");
var _documents = require("./documents");
var _institucion_info = require("./institucion_info");
var _personal_info = require("./personal_info");
var _post = require("./post");
var _priority_assignment = require("./priority_assignment");
var _status_assignment = require("./status_assignment");
var _tags = require("./tags");
var _tags_assignments = require("./tags_assignments");
var _tags_post = require("./tags_post");
var _teams = require("./teams");
var _type_assignment = require("./type_assignment");
var _user = require("./user");
var _user_category = require("./user_category");
var _users_teams = require("./users_teams");
var _web_resourses = require("./web_resourses");
var _web_resourses_type = require("./web_resourses_type");

function initModels(sequelize) {
  var academic_status = _academic_status(sequelize, DataTypes);
  var answer_documents = _answer_documents(sequelize, DataTypes);
  var answers = _answers(sequelize, DataTypes);
  var assignment = _assignment(sequelize, DataTypes);
  var assignment_documents = _assignment_documents(sequelize, DataTypes);
  var attendance = _attendance(sequelize, DataTypes);
  var direccion = _direccion(sequelize, DataTypes);
  var documents = _documents(sequelize, DataTypes);
  var institucion_info = _institucion_info(sequelize, DataTypes);
  var personal_info = _personal_info(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var priority_assignment = _priority_assignment(sequelize, DataTypes);
  var status_assignment = _status_assignment(sequelize, DataTypes);
  var tags = _tags(sequelize, DataTypes);
  var tags_assignments = _tags_assignments(sequelize, DataTypes);
  var tags_post = _tags_post(sequelize, DataTypes);
  var teams = _teams(sequelize, DataTypes);
  var type_assignment = _type_assignment(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_category = _user_category(sequelize, DataTypes);
  var users_teams = _users_teams(sequelize, DataTypes);
  var web_resourses = _web_resourses(sequelize, DataTypes);
  var web_resourses_type = _web_resourses_type(sequelize, DataTypes);

  institucion_info.belongsTo(academic_status, { as: "status_academic_status", foreignKey: "status"});
  academic_status.hasMany(institucion_info, { as: "institucion_infos", foreignKey: "status"});
  answer_documents.belongsTo(answers, { as: "answer-", foreignKey: "answer-id"});
  answers.hasMany(answer_documents, { as: "answer_documents", foreignKey: "answer-id"});
  answers.belongsTo(assignment, { as: "assignment", foreignKey: "assignment_id"});
  assignment.hasMany(answers, { as: "answers", foreignKey: "assignment_id"});
  assignment_documents.belongsTo(documents, { as: "document", foreignKey: "document_id"});
  documents.hasMany(assignment_documents, { as: "assignment_documents", foreignKey: "document_id"});
  assignment.belongsTo(personal_info, { as: "agent", foreignKey: "agent_id"});
  personal_info.hasMany(assignment, { as: "assignments", foreignKey: "agent_id"});
  direccion.belongsTo(personal_info, { as: "person", foreignKey: "person_id"});
  personal_info.hasMany(direccion, { as: "direccions", foreignKey: "person_id"});
  institucion_info.belongsTo(personal_info, { as: "person", foreignKey: "person_id"});
  personal_info.hasMany(institucion_info, { as: "institucion_infos", foreignKey: "person_id"});
  user.belongsTo(personal_info, { as: "person", foreignKey: "person_id"});
  personal_info.hasMany(user, { as: "users", foreignKey: "person_id"});
  web_resourses.belongsTo(personal_info, { as: "owner", foreignKey: "owner_id"});
  personal_info.hasMany(web_resourses, { as: "web_resourses", foreignKey: "owner_id"});
  attendance.belongsTo(post, { as: "post", foreignKey: "post_id"});
  post.hasMany(attendance, { as: "attendances", foreignKey: "post_id"});
  tags_post.belongsTo(post, { as: "post", foreignKey: "post_id"});
  post.hasMany(tags_post, { as: "tags_posts", foreignKey: "post_id"});
  assignment.belongsTo(priority_assignment, { as: "priority", foreignKey: "priority_id"});
  priority_assignment.hasMany(assignment, { as: "assignments", foreignKey: "priority_id"});
  assignment.belongsTo(status_assignment, { as: "status", foreignKey: "status_id"});
  status_assignment.hasMany(assignment, { as: "assignments", foreignKey: "status_id"});
  tags_assignments.belongsTo(tags, { as: "Tag", foreignKey: "Tag_id"});
  tags.hasMany(tags_assignments, { as: "tags_assignments", foreignKey: "Tag_id"});
  assignment.belongsTo(teams, { as: "team", foreignKey: "team_id"});
  teams.hasMany(assignment, { as: "assignments", foreignKey: "team_id"});
  post.belongsTo(teams, { as: "team", foreignKey: "team_id"});
  teams.hasMany(post, { as: "posts", foreignKey: "team_id"});
  users_teams.belongsTo(teams, { as: "team", foreignKey: "team_id"});
  teams.hasMany(users_teams, { as: "users_teams", foreignKey: "team_id"});
  assignment.belongsTo(type_assignment, { as: "Type", foreignKey: "Type_id"});
  type_assignment.hasMany(assignment, { as: "assignments", foreignKey: "Type_id"});
  answers.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(answers, { as: "answers", foreignKey: "user_id"});
  attendance.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(attendance, { as: "attendances", foreignKey: "user_id"});
  documents.belongsTo(user, { as: "published_by_user", foreignKey: "published_by"});
  user.hasMany(documents, { as: "documents", foreignKey: "published_by"});
  post.belongsTo(user, { as: "owner", foreignKey: "owner_id"});
  user.hasMany(post, { as: "posts", foreignKey: "owner_id"});
  users_teams.belongsTo(user, { as: "User", foreignKey: "User_id"});
  user.hasMany(users_teams, { as: "users_teams", foreignKey: "User_id"});
  user.belongsTo(user_category, { as: "user_category", foreignKey: "user_category_id"});
  user_category.hasMany(user, { as: "users", foreignKey: "user_category_id"});
  web_resourses.belongsTo(web_resourses_type, { as: "webtype", foreignKey: "webtype_id"});
  web_resourses_type.hasMany(web_resourses, { as: "web_resourses", foreignKey: "webtype_id"});

  return {
    academic_status,
    answer_documents,
    answers,
    assignment,
    assignment_documents,
    attendance,
    direccion,
    documents,
    institucion_info,
    personal_info,
    post,
    priority_assignment,
    status_assignment,
    tags,
    tags_assignments,
    tags_post,
    teams,
    type_assignment,
    user,
    user_category,
    users_teams,
    web_resourses,
    web_resourses_type,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
