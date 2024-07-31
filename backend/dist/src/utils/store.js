"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewCommit = exports.addNewProject = exports.getProjectsFromStore = exports.connectDb = void 0;
var node_localstorage_1 = require("node-localstorage");
var localStorage = new node_localstorage_1.LocalStorage("./store");
var connectDb = function () {
    var db = JSON.parse(localStorage.getItem("projects"));
    if (!db || db === "") {
        localStorage.setItem("projects", JSON.stringify([]));
    }
};
exports.connectDb = connectDb;
var getProjectsFromStore = function () {
    var db = JSON.parse(localStorage.getItem("projects"));
    return db;
};
exports.getProjectsFromStore = getProjectsFromStore;
var addNewProject = function (project) {
    var db = (0, exports.getProjectsFromStore)();
    db.push(project);
    localStorage.setItem("projects", JSON.stringify(db));
};
exports.addNewProject = addNewProject;
var addNewCommit = function (commit, projectId) {
    var db = (0, exports.getProjectsFromStore)();
    var project = db.find(function (p) { return p.id === projectId; });
    project === null || project === void 0 ? void 0 : project.commit.push(commit);
    localStorage.setItem("projects", JSON.stringify(db));
};
exports.addNewCommit = addNewCommit;
