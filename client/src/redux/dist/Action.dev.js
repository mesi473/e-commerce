"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decreaseCartNumber = exports.increaseCartNumber = exports.addCatagory = exports.addItem = exports.Login = void 0;

var Constant = _interopRequireWildcard(require("./constants"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Login = function Login() {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              data = null; // await axios.get(`http://localhost:5000/login/${userData.userName}/${userData.password}/${userData.type}`).then((value) => {
              //     data = value;
              // })

              dispatch({
                type: Constant.LOGIN,
                payload: data.data
              });
            } catch (error) {
              console.log(error);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.Login = Login;

var addItem = function addItem(item) {
  return function _callee2(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].post("http://localhost:5000/additem", item));

          case 3:
            _ref = _context2.sent;
            data = _ref.data;
            dispatch({
              type: Constant.ADD_ITEM,
              playload: data
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.addItem = addItem;

var addCatagory = function addCatagory(item) {
  return function _callee3(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].post("http://localhost:5000/addcatagory", item));

          case 3:
            _ref2 = _context3.sent;
            data = _ref2.data;
            dispatch({
              type: Constant.ADD_CATAGORY,
              playload: data
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.addCatagory = addCatagory;

var increaseCartNumber = function increaseCartNumber(item_id) {
  return function _callee4(dispatch) {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {
              dispatch({
                type: Constant.INCREASE_CART_NUMBER,
                payload: item_id
              });
            } catch (error) {
              console.log(error);
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    });
  };
};

exports.increaseCartNumber = increaseCartNumber;

var decreaseCartNumber = function decreaseCartNumber(item_id) {
  return function _callee5(dispatch) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            try {
              dispatch({
                type: Constant.DECREASE_CART_NUMBER,
                payload: item_id
              });
            } catch (error) {
              console.log(error);
            }

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

exports.decreaseCartNumber = decreaseCartNumber;