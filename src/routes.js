"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var pointsController_1 = __importDefault(require("./controllers/pointsController"));
var itemsController_1 = __importDefault(require("./controllers/itemsController"));
var routes = express_1.default.Router();
var pointsController = new pointsController_1.default();
var itemsController = new itemsController_1.default();
routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
exports.default = routes;
