'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.actionplan = function actionplan (req, res, next) {
  Default.actionplan(req.swagger.params, res, next);
};

/*
module.exports./v1/balanceremaining/ = function /v1/balanceremaining/ (req, res, next) {
  Default./v1/balanceremaining/(req.swagger.params, res, next);
};

module.exports./v1/bulist = function /v1/bulist (req, res, next) {
  Default./v1/bulist(req.swagger.params, res, next);
};

module.exports./v1/shipoverview/ = function /v1/shipoverview/ (req, res, next) {
  Default./v1/shipoverview/(req.swagger.params, res, next);
};

module.exports./v1/shipsummary/ = function /v1/shipsummary/ (req, res, next) {
  Default./v1/shipsummary/(req.swagger.params, res, next);
};

module.exports./v1/shiptracking/ = function /v1/shiptracking/ (req, res, next) {
  Default./v1/shiptracking/(req.swagger.params, res, next);
};

module.exports./v1/wip/ = function /v1/wip/ (req, res, next) {
  Default./v1/wip/(req.swagger.params, res, next);
};

module.exports./v1/wipdetails/ = function /v1/wipdetails/ (req, res, next) {
  Default./v1/wipdetails/(req.swagger.params, res, next);
};

module.exports./v1/yield/ = function /v1/yield/ (req, res, next) {
  Default./v1/yield/(req.swagger.params, res, next);
};
*/