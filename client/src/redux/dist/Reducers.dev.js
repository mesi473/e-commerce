"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increaseCartNumber = exports.addCatagory = exports.addItem = exports.Login = void 0;

var Constant = _interopRequireWildcard(require("./constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  item: {
    status: false,
    items: [],
    error: []
  },
  catagory: {
    status: false,
    catagories: [],
    error: []
  },
  numberOfItemInTheCart: 0,
  cart_ids: []
};

var Login = function Login() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Constant.LOGIN:
      return _objectSpread({}, state);

    default:
      return _objectSpread({}, state);
  }
};

exports.Login = Login;

var addItem = function addItem() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Constant.ADD_ITEM:
      return _objectSpread({}, state, {
        item: action.payload
      });

    default:
      return _objectSpread({}, state);
  }
};

exports.addItem = addItem;

var addCatagory = function addCatagory() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Constant.ADD_CATAGORY:
      return _objectSpread({}, state, {
        catagory: action.payload
      });

    default:
      return _objectSpread({}, state);
  }
};

exports.addCatagory = addCatagory;

var increaseCartNumber = function increaseCartNumber() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Constant.INCREASE_CART_NUMBER:
      return _objectSpread({}, state, {
        numberOfItemInTheCart: state.numberOfItemInTheCart + 1,
        cart_ids: state.cart_ids.concat(action.payload)
      });

    case Constant.DECREASE_CART_NUMBER:
      return _objectSpread({}, state, {
        numberOfItemInTheCart: state.numberOfItemInTheCart - 1,
        cart_ids: state.cart_ids.filter(function (x) {
          return x !== action.payload;
        })
      });

    default:
      return _objectSpread({}, state);
  }
};

exports.increaseCartNumber = increaseCartNumber;