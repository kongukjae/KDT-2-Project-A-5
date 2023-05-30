"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const root = path_1.default.join(__dirname, '../../');
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(root, './bundle/index.html'));
});
app.use(express_1.default.static(path_1.default.join(root, './bundle')));
app.listen(8080, () => {
    console.log('server listenning on 8080');
});
