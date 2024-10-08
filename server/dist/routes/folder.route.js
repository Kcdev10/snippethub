"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const folder_controller_1 = require("../controllers/folder.controller");
const authenticate_1 = require("../middleware/authenticate");
const router = (0, express_1.Router)();
router.route('/').get(authenticate_1.isAuthenticateOrNot, folder_controller_1.getFolder);
router.route('/create').post(authenticate_1.isAuthenticateOrNot, folder_controller_1.createFolder);
router.route('/delete/:folderId').delete(authenticate_1.isAuthenticateOrNot, folder_controller_1.deleteFolder);
exports.default = router;
