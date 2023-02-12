"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router/router");
const express = require("express");
const app = express();
app.use(express.json());
mongoose_1.default.connect('mongodb://127.0.0.1:27017/test_technical').then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
});
app.use((0, cors_1.default)());
app.use('', router_1.router);
app.listen(3000, () => {
    console.log('server running localhost 3000');
});
//# sourceMappingURL=index.js.map