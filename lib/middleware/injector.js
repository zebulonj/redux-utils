'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var injector = exports.injector = function injector(payload) {
  return function () {
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          action = action(payload);

          if (typeof action !== 'function') {
            return action;
          }
        }

        return next(action);
      };
    };
  };
};