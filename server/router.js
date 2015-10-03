var express = require('express');
var groupController = require('./controllers/group');
var memberController = require('./controllers/member');
var router = express.Router();

router.route('/group')
  .post(groupController.postGroup);

router.route('/group/:group')
  .get(groupController.getGroup)
  .put(groupController.putGroup);

module.exports = router;