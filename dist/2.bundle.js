webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zaitun__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zaitun___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zaitun__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Counter__ = __webpack_require__(44);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @jsx html */





var Counter = new __WEBPACK_IMPORTED_MODULE_1__Counter__["a" /* default */]();

var ADD = Symbol('add');
var REMOVE = Symbol('remove');
var RESET = Symbol('reset');
var UPDATE = Symbol('counterAction');

var CounterList = function () {
    function CounterList() {
        _classCallCheck(this, CounterList);
    }

    _createClass(CounterList, [{
        key: 'init',
        value: function init() {
            return { nextId: 0, counters: [] };
        }
    }, {
        key: 'view',
        value: function view(_ref) {
            var _this = this;

            var model = _ref.model,
                dispatch = _ref.dispatch;

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                'div',
                { classNames: 'card card-outline-secondary mb-3 text-center' },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                    'div',
                    { classNames: 'card-block' },
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                        'button',
                        { classNames: 'btn btn-primary btn-sm', 'on-click': [dispatch, { type: ADD }] },
                        'Add'
                    ),
                    '\xA0',
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                        'button',
                        { classNames: 'btn btn-primary btn-sm', 'on-click': [dispatch, { type: RESET }] },
                        'Reset'
                    ),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])('hr', null),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                        'div',
                        null,
                        model.counters.map(function (item) {
                            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(_this.CounterItem, { item: item, dispatch: dispatch });
                        })
                    )
                )
            );
        }
    }, {
        key: 'CounterItem',
        value: function CounterItem(_ref2) {
            var item = _ref2.item,
                _dispatch = _ref2.dispatch;

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                'div',
                { key: item.id, style: { paddingBottom: '10px' } },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                    'button',
                    { classNames: 'btn btn-primary btn-sm', 'on-click': [_dispatch, { type: REMOVE, id: item.id }] },
                    'Remove'
                ),
                '\xA0',
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(Counter, { model: item.counter, dispatch: function dispatch(action) {
                        return _dispatch({ type: UPDATE, id: item.id, action: action });
                    } })
            );
        }
    }, {
        key: 'update',
        value: function update(model, action) {
            switch (action.type) {
                case ADD:
                    var newCounter = { id: model.nextId, counter: Counter.init() };
                    return {
                        counters: [].concat(_toConsumableArray(model.counters), [newCounter]),
                        nextId: model.nextId + 1
                    };
                case UPDATE:
                    return {
                        nextId: model.nextId,
                        counters: model.counters.map(function (item) {
                            return item.id !== action.id ? item : _extends({}, item, { counter: Counter.update(item.counter, action.action) });
                        })
                    };
                case RESET:
                    return _extends({}, model, {
                        counters: model.counters.map(function (item) {
                            item.counter = Counter.init();return item;
                        })
                    });
                case REMOVE:
                    return _extends({}, model, { counters: [].concat(_toConsumableArray(model.counters.filter(function (it) {
                            return it.id !== action.id;
                        }))) });
                default:
                    return model;
            }
        }
    }]);

    return CounterList;
}();

/* harmony default export */ __webpack_exports__["default"] = CounterList;

/***/ })

});
//# sourceMappingURL=2.bundle.js.map