'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineReducers = combineReducers;

var _redux = require('redux');

var _immutable = require('immutable');

function combineReducers(map) {
  var reducer = (0, _redux.combineReducers)(map);

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();
    var action = arguments[1];
    return (0, _immutable.Map)(reducer(state.toObject(), action));
  };
}