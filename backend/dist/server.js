"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var project_1 = __importDefault(require("./src/routes/project"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
dotenv_1.default.config();
app.use("/api", project_1.default);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Server listening on port ".concat(port));
});
