var express = require('express');
var router = express.Router();

const authMiddleware = require('../middlewares/authentification.middleware');
const accessController = require('../controllers/access.controller');
router.get('/', authMiddleware.validToken, accessController.loginForm );
module.exports = router;