const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authentification.middleware');

// import controller for index
const userController = require('../controllers/user.controller');

router.get('/', authMiddleware.validToken,userController.home );
router.get('/me', authMiddleware.validToken,userController.me );
router.post('/addCard',userController.createCard);
module.exports = router;
