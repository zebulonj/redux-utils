'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.contextualize = contextualize;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contextualize(contextProps, contextMap) {
  for (var _len = arguments.length, connectArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    connectArgs[_key - 2] = arguments[_key];
  }

  return function (Component) {
    var ConnectedComponent = _reactRedux.connect.apply(undefined, connectArgs)(Component);

    function ContextualizedComponent(props, context) {
      return _react2.default.createElement(ConnectedComponent, _extends({}, props, contextMap(context, props)));
    }

    ContextualizedComponent.contextTypes = contextProps;

    return ContextualizedComponent;
  };
}