"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var project_1 = require("../controllers/project");
var router = express_1.default.Router();
router.get("/projects", project_1.getProjects);
router.post("/add/project", project_1.addProject);
router.post("/commit", project_1.performCommit);
exports.default = router;
