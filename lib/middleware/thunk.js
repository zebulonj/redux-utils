'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Modification of original thunk middleware (https://github.com/gaearon/redux-thunk),
 * to allow chaining of additional injectors.
 */
var thunk = exports.thunk = function thunk(store) {
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        action = action(store.dispatch, store.getState);

        if (typeof action !== 'function') {
          return action;
        }
      }

      return next(action);
    };
  };
};