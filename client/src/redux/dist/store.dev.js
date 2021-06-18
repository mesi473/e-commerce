"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _Reducers = require("./Reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var middleware = [_reduxThunk["default"]];
var reducer = (0, _redux.combineReducers)({
  addItem: _Reducers.addItem,
  addCatagory: _Reducers.addCatagory,
  increaseCartNumber: _Reducers.increaseCartNumber
});
var store = (0, _redux.createStore)(reducer, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, middleware)));
var _default = store;
exports["default"] = _default;