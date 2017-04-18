webpackJsonp([2],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zaitun__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zaitun___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zaitun__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_juGrid__ = __webpack_require__(145);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @jsx html */




var GridExample = function () {
    function GridExample() {
        _classCallCheck(this, GridExample);

        console.log('gridExample constructor');
        this.Grid = new __WEBPACK_IMPORTED_MODULE_1__ui_juGrid__["a" /* juGrid */]();
    }

    _createClass(GridExample, [{
        key: 'init',
        value: function init() {
            return { gridOptions: this.getGridOptions() };
        }
    }, {
        key: 'onViewInit',
        value: function onViewInit(model, dispatch) {
            var countries = [{ text: 'Bangladesh', value: 1 }, { text: 'Pakistan', value: 2 }, { text: 'Uzbekistan', value: 3 }];
            this.Grid.setSelectData(4, countries);
        }
    }, {
        key: 'view',
        value: function view(_ref) {
            var model = _ref.model,
                dispatch = _ref.dispatch;

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('div', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('b', 'Grid Example'), this.Grid.view({ model: model.gridOptions, dispatch: dispatch })]);
        }
    }, {
        key: 'update',
        value: function update(model, action) {
            switch (action.type) {
                default:
                    return model;
            }
        }
    }, {
        key: 'formClass',
        value: function formClass() {
            return { 'form-control': 1, 'form-control-sm': 1 };
        }
    }, {
        key: 'add',
        value: function add() {
            this.Grid.addRow({ name: '', age: 16, address: '', single: false, country: '' }).refresh();
        }
    }, {
        key: 'getGridOptions',
        value: function getGridOptions() {
            var _this = this;

            return {
                tableClass: '.table-sm.table-bordered.xtable-responsive',
                headerClass: '.thead-default',
                footerClass: '.thead-default',
                pager: { pageSize: 5, linkPages: 10, enablePowerPage: 0, nav: 1, search: 1, pagerInfo: 1, elmSize: 'sm' },
                hideHeader: !true,
                hideFooter: !true,
                hidePager: !true,
                //aes:true, //disallowed empty selection --default false
                pagerPos: 'top', //top|bottom|both --default both
                //pageChange:data=>Grid.selectRow(0),
                singleSelect: true,
                //multiSelect:true,
                selectedRows: function selectedRows(rows, ri, ev) {
                    //this.selectedRow.editable=false;
                    //rows.editable=true;
                    _this.selectedRow = rows;
                },
                aews: true, //apply Editable When Selected - default true 
                recordChange: function recordChange(row, col, ri, ev) {
                    _this.Grid.refresh();
                },
                //on:{click:(row, i, ev)=>{console.log(row, i, ev)}},
                //style:(row, i)=>({color:'gray'}),
                //class:(row, i)=>({hide:1}),          
                columns: [{ header: 'Name', hClass: '.max', sort: true, iopts: { class: function _class(r) {
                            return _this.formClass();
                        } }, focus: true, field: 'name', type: 'text' }, { header: 'Age', sort: true, iopts: { class: function _class(r) {
                            return _this.formClass();
                        } }, editPer: function editPer(row) {
                        return false;
                    }, field: 'age', type: 'number', tnsValue: function tnsValue(val) {
                        return val + ' - formated';
                    } }, { header: 'Birth Date', sort: true, iopts: { class: function _class(r) {
                            return _this.formClass();
                        } }, field: 'address', type: 'date' }, { id: 4, header: 'Country', iopts: { class: function _class(r) {
                            return _this.formClass();
                        } }, field: 'country', type: 'select' }, { header: 'Single?', field: 'single', type: 'checkbox', tnsValue: function tnsValue(val) {
                        return val ? 'Yes' : 'No';
                    } }],
                xheaders: [[{ text: 'Name', props: { colSpan: 3 } }, { text: 'Country', props: { colSpan: 2 } }]],
                footers: [
                //[{text:'footer1',style:col=>({color:'red'})},{text:'footer1',props:{colSpan:4}}],
                [{ cellRenderer: function cellRenderer(data) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                            'b',
                            null,
                            'Total Rows: ',
                            data.length
                        );
                    } }, { cellRenderer: function cellRenderer(data) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                            'div',
                            null,
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                                'button',
                                { 'on-click': function onClick() {
                                        return _this.add();
                                    } },
                                'Add ',
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])('i', { classNames: 'fa fa-plus' })
                            ),
                            '\xA0',
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                                'button',
                                { disabled: _this.Grid.data.length === 0, 'on-click': function onClick() {
                                        return confirm('Remove sure?') && _this.Grid.removeRow(_this.selectedRow).pager.clickPage(_this.Grid.pager.activePage);
                                    } },
                                'Remove ',
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])('i', { classNames: 'fa fa-trash' })
                            )
                        );
                    }
                }, { props: { colSpan: 2 }, cellRenderer: function cellRenderer(d) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                            'b',
                            null,
                            'Total Selected Rows: ',
                            d.filter(function (_) {
                                return _.selected;
                            }).length
                        );
                    } }, { cellRenderer: function cellRenderer(data) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["html"])(
                            'b',
                            null,
                            data.reduce(function (a, b) {
                                return a + (b.single ? 1 : 0);
                            }, 0)
                        );
                    } }]]
            };
        }
    }]);

    return GridExample;
}();

/* harmony default export */ __webpack_exports__["default"] = GridExample;

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zaitun__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zaitun___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zaitun__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__juPager__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return juGrid; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var DATA_CHANGE = Symbol('SET_DATA');
var PAGER_ACTION = Symbol('pager_action');
var REFRESH = Symbol('REFRESH');

var juGrid = function () {
    function juGrid() {
        _classCallCheck(this, juGrid);

        this.selectedRows = [];
        this.selectedRow = {};

        this.data = [];
        this.pager = new __WEBPACK_IMPORTED_MODULE_1__juPager__["a" /* juPage */]();
        this.__loaded = false;
        this.__id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* s4 */])();
    }

    _createClass(juGrid, [{
        key: 'init',
        value: function init() {
            return {};
        }
    }, {
        key: 'view',
        value: function view(_ref) {
            var _this = this;

            var model = _ref.model,
                dispatch = _ref.dispatch;

            this.dispatch = dispatch;
            this.model = model;
            if (this._isUndef(model.columns)) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('div', 'columns undefined');
            }
            model.columns.forEach(function (col) {
                if (col.type === 'select') {
                    if (_this._isUndef(col.valueProp)) {
                        col.valueProp = 'value';
                    }
                    if (_this._isUndef(col.textProp)) {
                        col.textProp = 'text';
                    }
                }
            });
            if (this._isUndef(model.aews)) {
                model.aews = true;
            }
            this._initPaager(model);
            var table = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('table.table' + (this.model.tableClass || ''), [this._header(model), this._body(model), this._footer(model)]);
            if (!this.__loaded) {
                if (typeof this.model.onLoad === 'function') {
                    var tid = setTimeout(function () {
                        _this.model.onLoad();clearTimeout(tid);
                    });
                }
                this.__loaded = true;
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('div.juGrid', [this._getPager(model.pager, dispatch, 'top'), table, this._getPager(model.pager, dispatch, 'bottom')]);
        }
    }, {
        key: 'update',
        value: function update(model, action) {
            switch (action.type) {
                case PAGER_ACTION:
                    model.pager = this.pager.update(model.pager, action.payload);
                    return model;

                default:
                    return model;
            }
        }
    }, {
        key: '_initPaager',
        value: function _initPaager(model) {
            var _this2 = this;

            if (this._isUndef(model.pager)) {
                model.pager = this.pager.init();
            }
            this.pager.pageChange = this._pageChange.bind(this);
            if (this._isUndef(model.pagerPos)) {
                model.pagerPos = 'both';
            }
            if (this._isUndef(model.pager.nav)) {
                model.pager.nav = true;
            }
            if (typeof model.pager.sspFn === 'function') {
                this.pager.sspFn = model.pager.sspFn;
            }
            if (this._isUndef(model.pager.searchFn)) {
                model.pager.searchFn = function (data, val) {
                    var res = [],
                        columns = _this2.model.columns,
                        len = columns.length;
                    data.forEach(function (item) {
                        for (var index = 0; index < len; index++) {
                            var col = columns[index];
                            if (col.field && item[col.field] && item[col.field].toString().toLowerCase().indexOf(val) !== -1) {
                                res.push(item);break;
                            }
                        }
                    });
                    return res;
                };
            }
        }
    }, {
        key: '_pageChange',
        value: function _pageChange(data) {
            this.data = data;
            if (this.pager.diffPageAction) {
                this.selectedRows = [];
            }
            if (typeof this.model.pageChange === 'function') {
                this.model.pageChange(data);
            }
        }
    }, {
        key: '_getPager',
        value: function _getPager(pagerModel, _dispatch, pos) {
            if (this.model.hidePager) {
                return '';
            }
            if (pos === 'top' && (this.model.pagerPos === 'both' || this.model.pagerPos === 'top') || pos === 'bottom' && (this.model.pagerPos === 'both' || this.model.pagerPos === 'bottom')) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('div.juPager', [this.pager.view({ model: pagerModel, dispatch: function dispatch(action) {
                        return _dispatch({ type: PAGER_ACTION, payload: action });
                    } })]);
            }
            return '';
        }
    }, {
        key: '_sort',
        value: function _sort(col) {
            if (!col.sort) return;
            col.reverse = !(col.reverse === undefined ? true : col.reverse);
            this.model.columns.forEach(function (_) {
                if (_ !== col) {
                    _.reverse = undefined;
                }
            });
            var reverse = !col.reverse ? 1 : -1,
                sortFn = typeof col.comparator === 'function' ? function (a, b) {
                return reverse * col.comparator(a, b);
            } : function (a, b) {
                return a = a[col.field], b = b[col.field], reverse * ((a > b) - (b > a));
            };
            if (!this.pager.sspFn) {
                this.pager.data.sort(sortFn);
            }
            this._sort_action = true;
            this.pager.sort(col.field, col.reverse);
        }
    }, {
        key: '_sortIcon',
        value: function _sortIcon(colDef) {
            var hidden = colDef.reverse === undefined;
            return { 'fa-sort': hidden, 'not-active': hidden, 'fa-caret-up': colDef.reverse === false, 'fa-caret-down': colDef.reverse === true };
        }
    }, {
        key: '_header',
        value: function _header(model) {
            var _this3 = this;

            if (model.hideHeader) {
                return '';
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('thead' + (this.model.headerClass || ''), [].concat(_toConsumableArray(this._Extraheaders(model)), [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('tr', model.columns.filter(function (col) {
                return !col.hide;
            }).map(function (col, index) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('th' + (col.hClass || ''), { key: _this3.__id + index, on: { click: function click() {
                            return _this3._sort(col);
                        } } }, [col.sort ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('i.fa', { class: _this3._sortIcon(col) }) : '', col.header]);
            }))]));
        }
    }, {
        key: '_body',
        value: function _body(model) {
            if (!this.data.length) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('tbody', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('tr', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('td.table-info', { props: { colSpan: model.columns.length } }, 'Data not found')])]);
            }
            this._refreshSelectedRows(model);
            return this._defaultView(model);
        }
    }, {
        key: '_refreshSelectedRows',
        value: function _refreshSelectedRows(model) {
            if (model.multiSelect) {
                this.selectedRow = {};
                var sdata = this.data.filter(function (_) {
                    return _.selected;
                });
                for (var i = 0; i < sdata.length; i++) {
                    if (sdata[0] !== this.selectedRows[0]) {
                        break;
                    }
                }
                if (i !== sdata.length) {
                    this.selectedRows = sdata;
                    this._selectedRowsCallback(this.selectedRows);
                }
            }
        }
    }, {
        key: '_defaultView',
        value: function _defaultView(model) {
            var _this4 = this;

            var columns = model.columns.filter(function (col) {
                return !col.hide;
            });
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('tbody', this.data.map(function (row, ri) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('tr', {
                    key: ri,
                    on: _this4._rowBindEvents(row, ri, model),
                    style: _this4._bindStyle(row, ri, model),
                    class: _this4._bindClass(row, ri, model) }, columns.map(function (col, ci) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('td', {
                        key: ci,
                        on: _this4._bindEvents(row, ri, col),
                        style: _this4._bindStyle(row, ri, col),
                        class: _this4._bindClass(row, ri, col),
                        props: _this4._bindProps(row, ri, col)
                    }, _this4._cellValue(row, col, ri));
                }));
            }));
        }
    }, {
        key: '_isUndef',
        value: function _isUndef(p) {
            return p === undefined;
        }
    }, {
        key: '_check_apply_editable_when_selected',
        value: function _check_apply_editable_when_selected(row) {
            return this.model.aews ? row.selected : row.editable;
        }
    }, {
        key: '_cellValue',
        value: function _cellValue(row, col, ri) {
            var _this5 = this;

            if (typeof col.cellRenderer === 'function') {
                return [col.cellRenderer(row, ri)];
            }
            if (col.type) {
                if (typeof col.editPer === 'function' && !col.editPer(row, ri)) {
                    return this._transformValue(row[col.field], row, col, ri);
                }
                if (this._isUndef(col.iopts)) {
                    col.iopts = {};
                }
                if (this._isUndef(col.props)) {
                    col.props = {};
                }
                switch (col.type) {
                    case 'select':
                        var data = col[col.field + '_data'] || [];
                        return this._check_apply_editable_when_selected(row) ? [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('select', {
                            hook: { insert: function insert(vnode) {
                                    return _this5._focus(col, vnode.elm);
                                } },
                            on: this._bindInputEvents(row, ri, col, col.iopts, 'change'),
                            style: this._bindStyle(row, ri, col.iopts),
                            class: this._bindClass(row, ri, col.iopts),
                            props: _extends({}, this._bindProps(row, ri, col.iopts), { value: row[col.field] })
                        }, data.map(function (d) {
                            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('option', { props: { value: d[col.valueProp] } }, d[col.textProp]);
                        }))] : this._transformValue(row[col.field], row, col);
                    case 'checkbox':
                        return this._check_apply_editable_when_selected(row) ? [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('input', {
                            hook: { insert: function insert(vnode) {
                                    return _this5._focus(col, vnode.elm);
                                } },
                            on: this._bindInputEvents(row, ri, col, col.iopts, 'change'),
                            style: this._bindStyle(row, ri, col.iopts),
                            class: this._bindClass(row, ri, col.iopts),
                            props: _extends({}, this._bindProps(row, ri, col.iopts), { type: col.type, checked: row[col.field] })
                        })] : this._transformValue(row[col.field], row, col);
                    default:
                        return this._check_apply_editable_when_selected(row) ? [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('input', {
                            hook: { insert: function insert(vnode) {
                                    return _this5._focus(col, vnode.elm);
                                } },
                            on: this._bindInputEvents(row, ri, col, col.iopts, 'input'),
                            style: this._bindStyle(row, ri, col.iopts),
                            class: this._bindClass(row, ri, col.iopts),
                            props: _extends({}, this._bindProps(row, ri, col.iopts), { type: col.type, value: row[col.field] })
                        })] : this._transformValue(row[col.field], row, col);
                }
            }
            return this._transformValue(row[col.field], row, col, ri);
        }
    }, {
        key: '_getSelectText',
        value: function _getSelectText(col, val) {
            var data = col[col.field + '_data'];
            if (this._isUndef(val)) {
                val = '';
            }
            val = val.toString();
            if (Array.isArray(data)) {
                var item = data.find(function (_) {
                    return _[col.valueProp].toString() === val;
                });
                if (item) {
                    return item[col.textProp];
                }
            }
            return val;
        }
    }, {
        key: '_transformValue',
        value: function _transformValue(val, row, col, ri) {
            if (col.type === 'select') {
                return typeof col.tnsValue === 'function' ? col.tnsValue(val, row, ri) : this._getSelectText(col, val);
            }
            return typeof col.tnsValue === 'function' ? col.tnsValue(val, row, ri) : val;
        }
    }, {
        key: '_recordUpdate',
        value: function _recordUpdate(row, col, ri, ev) {
            if (col.type === 'checkbox') {
                row[col.field] = ev.target.checked;
            } else {
                row[col.field] = ev.target.value;
            }
            if (typeof this.model.recordChange === 'function') {
                this.model.recordChange(row, col, ri, ev);
            }
        }
    }, {
        key: '_focus',
        value: function _focus(col, elm) {
            if (col.focus) {
                elm.focus();
            }
        }
    }, {
        key: '_rowBindEvents',
        value: function _rowBindEvents(row, ri, reciver) {
            var _this6 = this;

            var events = {},
                has_click_evt = false;
            if (_typeof(reciver.on) === 'object') {
                if (reciver.on['click'] && (reciver.singleSelect || reciver.multiSelect)) {
                    has_click_evt = true;
                }

                var _loop = function _loop(ename) {
                    if (reciver.on.hasOwnProperty(ename)) {
                        events[ename] = function (ev) {
                            if (ename === 'click' && has_click_evt) {
                                _this6._select_row(row, ri, ev);
                            }
                            reciver.on[ename](row, ri, ev);
                        };
                    }
                };

                for (var ename in reciver.on) {
                    _loop(ename);
                }
            }
            if (!has_click_evt && (reciver.singleSelect || reciver.multiSelect)) {
                events['click'] = function (ev) {
                    _this6._select_row(row, ri, ev);
                };
                return events;
            }
            return events;
        }
    }, {
        key: '_bindEvents',
        value: function _bindEvents(row, ri, reciver) {
            if (_typeof(reciver.on) === 'object') {
                var events = {};

                var _loop2 = function _loop2(ename) {
                    if (reciver.on.hasOwnProperty(ename)) {
                        events[ename] = function (ev) {
                            reciver.on[ename](row, ri, ev);
                        };
                    }
                };

                for (var ename in reciver.on) {
                    _loop2(ename);
                }
                return events;
            }
            return undefined;
        }
    }, {
        key: '_bindInputEvents',
        value: function _bindInputEvents(row, ri, col, reciver, recChngeEvName) {
            var _this7 = this;

            var events = {},
                has_input_evt = false;
            if (_typeof(reciver.on) === 'object') {
                if (reciver.on[recChngeEvName]) {
                    has_input_evt = true;
                }

                var _loop3 = function _loop3(ename) {
                    if (reciver.on.hasOwnProperty(ename)) {
                        events[ename] = function (ev) {
                            if (ename === recChngeEvName && has_input_evt) {
                                _this7._recordUpdate(row, col, ri, ev);
                            }
                            reciver.on[ename](row, ri, ev);
                        };
                    }
                };

                for (var ename in reciver.on) {
                    _loop3(ename);
                }
            }
            if (!has_input_evt) {
                events[recChngeEvName] = function (ev) {
                    _this7._recordUpdate(row, col, ri, ev);
                };
            }
            return events;
        }
    }, {
        key: '_select_row',
        value: function _select_row(row, ri, ev) {
            if (this.model.singleSelect && !this.model.aes && row === this.selectedRow) {
                return;
            }
            var is_not_refresh = false,
                xlen = -1;
            if (this.model.singleSelect) {
                if (row !== this.selectedRow) {
                    this.selectedRow.selected = false;
                }
                row.selected = this.model.aes ? !row.selected : true;
                this.selectedRow = row;
                if (row.selected) {
                    this._selectedRowsCallback(this.selectedRow, ri, ev);
                }
            } else {
                var frow = this.selectedRows.find(function (r) {
                    return r === row;
                });

                if (frow) {
                    if (this.model.aes) {
                        if (ev.ctrlKey) {
                            frow.selected = false;
                            this.selectedRows = this.selectedRows.filter(function (r) {
                                return r !== row;
                            });
                        } else {
                            this.selectedRows.forEach(function (r) {
                                r.selected = false;
                            });
                            this.selectedRows = [];
                        }
                    } else if (ev.ctrlKey && this.selectedRows.length > 1) {
                        frow.selected = false;
                        this.selectedRows = this.selectedRows.filter(function (r) {
                            return r !== row;
                        });
                    } else {
                        this.selectedRows.forEach(function (r) {
                            r.selected = false;
                        });
                        row.selected = true;
                        xlen = this.selectedRows.length;
                        this.selectedRows = [row];
                        is_not_refresh = true;
                    }
                } else {
                    row.selected = true;
                    if (ev.ctrlKey) {
                        this.selectedRows.push(row);
                    } else {
                        this.selectedRows.forEach(function (r) {
                            r.selected = false;
                        });
                        this.selectedRows = [row];
                    }
                }
                if (xlen !== 1) {
                    this._selectedRowsCallback(this.selectedRows, ri, ev);
                }
            }
            if (xlen !== 1) {
                this.refresh();
            }
        }
    }, {
        key: '_selectedRowsCallback',
        value: function _selectedRowsCallback(rows, ri, ev) {
            if (typeof this.model.selectedRows === 'function') {
                this.model.selectedRows(rows, ri, ev);
            }
        }
    }, {
        key: '_bindClass',
        value: function _bindClass(row, ri, reciver) {
            if (typeof reciver.class === 'function') {
                var classObj = reciver.class(row, ri);
                if (reciver.singleSelect || reciver.multiSelect) {
                    classObj.selected = row.selected;
                }
                return classObj;
            } else {
                var _classObj = reciver.class ? _extends({}, reciver.class) : {};
                if (reciver.singleSelect || reciver.multiSelect) {
                    _classObj.selected = row.selected;
                }
                return _classObj;
            }
        }
    }, {
        key: '_bindStyle',
        value: function _bindStyle(row, ri, reciver) {
            return typeof reciver.style === 'function' ? reciver.style(row, ri) : reciver.style;
        }
    }, {
        key: '_bindProps',
        value: function _bindProps(row, ri, reciver) {
            return typeof reciver.props === 'function' ? reciver.props(row, ri) : reciver.props || {};
        }
    }, {
        key: '_Extraheaders',
        value: function _Extraheaders(model) {
            var _this8 = this;

            if (!model.headers) {
                return [];
            }
            return model.headers.map(function (row, ri) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('tr', { key: ri }, row.filter(function (col) {
                    return !col.hide;
                }).map(function (col, ci) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('th', {
                        key: ci,
                        props: col.props,
                        on: _this8._bindEvents(col, ri, col),
                        style: _this8._bindStyle(col, ri, col),
                        class: _this8._bindClass(col, ri, col)
                    }, _this8._footerCellValue(col, ri));
                }));
            });
        }
    }, {
        key: '_footer',
        value: function _footer(model) {
            var _this9 = this;

            if (!model.footers || model.hideFooter) {
                return '';
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('tfoot' + (this.model.footerClass || ''), model.footers.map(function (row, ri) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('tr', { key: ri }, row.filter(function (col) {
                    return !col.hide;
                }).map(function (col, ci) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('th', {
                        key: ci,
                        props: col.props,
                        on: _this9._bindEvents(col, ri, col),
                        style: _this9._bindStyle(col, ri, col),
                        class: _this9._bindClass(col, ri, col)
                    }, _this9._footerCellValue(col, ri));
                }));
            }));
        }
    }, {
        key: '_footerCellValue',
        value: function _footerCellValue(col, ri) {
            if (typeof col.cellRenderer === 'function') {
                if (!this.model.hidePager && !this.pager.sspFn) {
                    return [col.cellRenderer(this.pager.data || [], this.data || [], ri)];
                }
                return [col.cellRenderer(this.data || [], this.pager, ri)];
            }
            return col.text;
        }
        //public methods

    }, {
        key: 'selectRow',
        value: function selectRow(rowIndex) {
            if (Array.isArray(this.data)) {
                if (this.data.length > rowIndex && (this.model.singleSelect || this.model.multiSelect)) {
                    this.selectedRow.selected = false;
                    this.selectedRows.forEach(function (row) {
                        row.selected = false;
                    });
                    if (rowIndex < this.data.length) {
                        this.data[rowIndex].selected = true;
                        if (this.model.singleSelect) {
                            this.selectedRow = this.data[rowIndex];
                        } else {
                            this.selectedRows = [this.data[rowIndex]];
                        }
                        this._selectedRowsCallback(this.data[rowIndex]);
                    }
                }
            }
            return this;
        }
    }, {
        key: 'focus',
        value: function focus(rowIndex, colId) {
            if (colId) {
                this.model.columns.forEach(function (col) {
                    col.focus = col.id === colId;
                });
            }
            return this.select(rowIndex);
        }
    }, {
        key: 'setData',
        value: function setData(data) {
            if (this.model.hidePager) {
                this.data = data;
            } else {
                this.pager.setData(data);
            }
            return this;
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            this.dispatch({ type: REFRESH });
            return this;
        }
    }, {
        key: 'hideColumns',
        value: function hideColumns(colids, isHide) {
            var _this10 = this;

            colids.forEach(function (cid) {
                var hcol = _this10.model.columns.find(function (c) {
                    return c.id === cid;
                });
                if (hcol) {
                    hcol.hide = isHide;
                }
            });
            return this;
        }
    }, {
        key: 'hideFooterColumns',
        value: function hideFooterColumns(colids, isHide) {
            var _this11 = this;

            if (!this.model.footers) return this;
            colids.forEach(function (cid) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _this11.model.footers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var row = _step.value;

                        var col = row.find(function (c) {
                            return c.id === cid;
                        });
                        if (col) {
                            col.hide = isHide;
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });
            return this;
        }
    }, {
        key: 'setSelectData',
        value: function setSelectData(colID, data) {
            var col = this.model.columns.find(function (_) {
                return _.id === colID;
            });
            if (col) {
                col[col.field + '_data'] = data;
            }
            return this;
        }
    }, {
        key: 'removeRow',
        value: function removeRow(row) {
            var index = this.data.indexOf(this.selectedRow);
            this.data.splice(index, 1);
            if (typeof this.model.pager.sspFn !== 'function') {
                var inx = this.pager.data.indexOf(this.selectedRow);
                this.pager.data.splice(inx, 1);
                if (this.model.pager.search && this.pager.data.length !== this.pager._cachedData.length) {
                    this.pager._cachedData.splice(inx, 1);
                }
            }
            if (index >= this.data.length) {
                index--;
            }
            if (index >= 0) {
                this.selectRow(index);
            }
            return this;
        }
    }, {
        key: 'addRow',
        value: function addRow(row) {
            var index = this.data.indexOf(this.selectedRow);
            this.data.splice(index + 1, -1, row);
            if (typeof this.model.pager.sspFn !== 'function') {
                var inx = this.pager.data.indexOf(this.selectedRow) + 1;
                this.pager.data.splice(inx, -1, row);
                if (this.model.pager.search && this.pager.data.length !== this.pager._cachedData.length) {
                    this.pager._cachedData.splice(inx, -1, row);
                }
            }
            this.selectRow(index + 1);
            return this;
        }
    }]);

    return juGrid;
}();



/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zaitun__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zaitun___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zaitun__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return juPage; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var juPage = function () {
    function juPage() {
        _classCallCheck(this, juPage);

        this.groupNumber = 1;
        this.activePage = 1;
        this.linkList = [];
        this.totalRecords = 0;
        this.sspFn = null;
        this.data = [];
        this._cachedData = [];
        this.pageChange = null;
        this._prevActivePage = 0;
        this.diffPageAction = false;
        this.powerList = [];
        this.powerListBW = [];
        this._pbdiff = 20;
        this._pbtimes = 5;
        this.searchText = '';
    }

    _createClass(juPage, [{
        key: 'init',
        value: function init() {
            return {
                pageSize: 10,
                linkPages: 10,
                enablePowerPage: false,
                nav: true,
                search: true
            };
        }
    }, {
        key: 'view',
        value: function view(_ref) {
            var _this = this;

            var model = _ref.model,
                dispatch = _ref.dispatch;

            this.dispatch = dispatch;
            this.model = model;
            this._calculatePagelinkes();
            var nav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('nav', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('ul.pagination.pagination-' + model.elmSize, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('li.page-item', { key: 'start', class: { disabled: this._isDisabledPrev() } }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('a.page-link', { props: { href: 'javascript:;' }, on: { click: function click() {
                        return _this._clickStart();
                    } } }, 'Start')]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('li.page-item', { key: 'pre', class: { disabled: this._isDisabledPrev() } }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('a.page-link', { props: { href: 'javascript:;' }, on: { click: function click() {
                        return _this._clickPrev();
                    } } }, '«')])].concat(_toConsumableArray(this.powerListBW.map(function (li, index) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('li.page-item', { key: index + 'pbb' }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('a.page-link', { props: { href: 'javascript:;' }, on: { click: function click() {
                            return _this.powerAction(li);
                        } } }, li)]);
            })), _toConsumableArray(this.linkList.map(function (li, index) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('li.page-item', { key: index + 'n', class: { active: li === _this.activePage } }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('a.page-link', { props: { href: 'javascript:;' }, on: { click: function click() {
                            return _this.clickPage(li);
                        } } }, li)]);
            })), _toConsumableArray(this.powerList.map(function (li, index) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('li.page-item', { key: index + 'pbf' }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('a.page-link', { props: { href: 'javascript:;' }, on: { click: function click() {
                            return _this.powerAction(li);
                        } } }, li)]);
            })), [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('li.page-item', { key: 'next', class: { disabled: this._isDisabledNext() } }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('a.page-link', { props: { href: 'javascript:;' }, on: { click: function click() {
                        return _this._clickNext();
                    } } }, '»')]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('li.page-item', { key: 'end', class: { disabled: this._isDisabledNext() } }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('a.page-link', { props: { href: 'javascript:;' }, on: { click: function click() {
                        return _this._clickEnd();
                    } } }, 'End')])]))]);
            var info = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('div.page-size', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('span', 'Page Size'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('select.form-control.form-control-' + model.elmSize, { props: { value: this.model.pageSize }, on: { change: function change(e) {
                        return _this._changePageSize(e.target.value);
                    } } }, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('option', { props: { value: 5 } }, '5'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('option', { props: { value: 10 } }, '10'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('option', { props: { value: 15 } }, '15'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('option', { props: { value: 20 } }, '20'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('option', { props: { value: 25 } }, '25'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('option', { props: { value: 30 } }, '30'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('option', { props: { value: 50 } }, '50'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('option', { props: { value: 100 } }, '100')]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('span', 'Page ' + (this.totalPage ? this.activePage : 0) + ' of ' + this.totalPage)]);
            var elms = [];
            if (model.pagerInfo) {
                elms.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('div.col-12.col-md-auto', [info]));
            }
            if (model.nav) {
                elms.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('div.col', [nav]));
            }
            if (model.search) {
                elms.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('div.col-12.col-md-auto', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('input.search.form-control.form-control-' + model.elmSize, { on: { keyup: function keyup(ev) {
                            return _this.search(ev.target.value);
                        } }, props: { type: 'text', value: this.searchText, placeholder: 'Search...' } })]));
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_zaitun__["h"])('div.row', elms);
        }
    }, {
        key: 'update',
        value: function update(model, action) {
            return model;
        }
        //public methods

    }, {
        key: 'search',
        value: function search(val) {
            this.activePage = 1;
            this.searchText = val;
            if (this.sspFn) {
                this.firePageChange();
            } else if (typeof this.model.searchFn === 'function') {
                this.data = val ? this.model.searchFn(this._cachedData, val.toLowerCase()) : this._cachedData;
                this.firePageChange();
            }
        }
    }, {
        key: 'sort',
        value: function sort(sortProp, isAsc) {
            this._sort = sortProp + '|' + (isAsc ? 'desc' : 'asc');
            this.firePageChange();
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            this._calculatePager();
            this.dispatch({ type: 'pager' });
        }
    }, {
        key: 'setData',
        value: function setData(data) {
            this.data = data;
            if (this.model.search) {
                this._cachedData = data;
            }
            this.firePageChange();
        }
    }, {
        key: 'firePageChange',
        value: function firePageChange() {
            var _this2 = this;

            this.diffPageAction = this.activePage !== this._prevActivePage;
            this._prevActivePage = this.activePage;
            if (this.sspFn) {
                this.sspFn({ pageSize: this.model.pageSize, pageNo: this.activePage, searchText: this.searchText, sort: this._sort }).then(function (res) {
                    _this2.totalRecords = res.totalRecords;
                    _this2._setTotalPage();
                    _this2.pageChange(res.data);
                    _this2.refresh();
                });
            } else {
                if (!this.data) return;
                var startIndex = (this.activePage - 1) * this.model.pageSize;
                this.pageChange(this.data.slice(startIndex, startIndex + this.model.pageSize));
                this.refresh();
            }
        }
    }, {
        key: 'clickPage',
        value: function clickPage(index) {
            this.activePage = index;
            this.firePageChange();
        }
        //end public methods

    }, {
        key: '_isUndef',
        value: function _isUndef(p) {
            return p === undefined;
        }
    }, {
        key: '_changePageSize',
        value: function _changePageSize(size) {
            this.model.pageSize = +size;
            this.model.pageSize = this.model.pageSize;
            this.groupNumber = 1;
            this.activePage = 1;
            this.firePageChange();
        }
    }, {
        key: '_clickStart',
        value: function _clickStart() {
            if (this.groupNumber > 1) {
                this.groupNumber = 1;
                this.activePage = 1;
                this.firePageChange();
            }
        }
    }, {
        key: '_clickEnd',
        value: function _clickEnd() {
            if (this._hasNext()) {
                this.groupNumber = parseInt((this.totalPage / this.model.linkPages).toString()) + (this.totalPage % this.model.linkPages ? 1 : 0);
                this.activePage = this.totalPage;
                this.firePageChange();
            }
        }
    }, {
        key: '_clickPrev',
        value: function _clickPrev() {
            this.groupNumber--;
            if (this.groupNumber <= 0) {
                this.groupNumber++;
            } else {
                this.firePageChange();
            }
        }
    }, {
        key: '_clickNext',
        value: function _clickNext() {
            if (this._hasNext()) {
                this.groupNumber++;
                this.firePageChange();
            }
        }
    }, {
        key: '_isDisabledPrev',
        value: function _isDisabledPrev() {
            if (this.sspFn) {
                return !(this.groupNumber > 1);
            }
            if (!this.data) {
                return true;
            }
            return !(this.groupNumber > 1);
        }
    }, {
        key: '_isDisabledNext',
        value: function _isDisabledNext() {
            if (this.sspFn) {
                return !this._hasNext();
            }
            if (!this.data) {
                return true;
            }
            return !this._hasNext();
        }
    }, {
        key: '_hasNext',
        value: function _hasNext() {
            if (this.sspFn) {
                return this.totalPage > this.groupNumber * this.model.linkPages;
            }
            if (!this.data) false;
            var len = this.data.length;
            if (len == 0) return false;
            return this.totalPage > this.groupNumber * this.model.linkPages;
        }
    }, {
        key: '_calculatePager',
        value: function _calculatePager() {
            if (this.model.enablePowerPage) {
                this.calculateBackwordPowerList();
                this.calculateForwordPowerList();
            }
            this._calculatePagelinkes();
        }
    }, {
        key: '_calculatePagelinkes',
        value: function _calculatePagelinkes() {
            this._setTotalPage();
            var start = 1;
            if (this.groupNumber > 1) {
                start = (this.groupNumber - 1) * this.model.linkPages + 1;
            }
            var end = this.groupNumber * this.model.linkPages;
            if (end > this.totalPage) {
                end = this.totalPage;
            }
            this.linkList = [];
            for (var index = start; index <= end; index++) {
                this.linkList.push(index);
            }
        }
    }, {
        key: '_setTotalPage',
        value: function _setTotalPage() {
            this.totalPage = 0;
            if (this.sspFn) {
                this.totalPage = parseInt((this.totalRecords / this.model.pageSize).toString()) + (this.totalRecords % this.model.pageSize > 0 ? 1 : 0);
                return;
            }
            if (!this.data) return;
            var len = this.data.length;
            if (len == 0) return;

            this.totalPage = parseInt((len / this.model.pageSize).toString()) + (len % this.model.pageSize > 0 ? 1 : 0);
        }
        // power action   

    }, {
        key: 'powerAction',
        value: function powerAction(pageNo) {
            this.groupNumber = Math.ceil(pageNo / this.model.linkPages);
            this.activePage = pageNo;
            this.firePageChange();
        }
    }, {
        key: 'calculateBackwordPowerList',
        value: function calculateBackwordPowerList() {
            this.powerListBW = [];
            var curPos = this.groupNumber * this.model.linkPages + 1;
            if (curPos > this._pbdiff) {
                var index = curPos - this._pbdiff,
                    times = this._pbtimes;
                while (index > 0 && times > 0) {
                    this.powerListBW.push(index);
                    index -= this._pbdiff;
                    times--;
                }
                this.powerListBW.reverse();
            }
        }
    }, {
        key: 'calculateForwordPowerList',
        value: function calculateForwordPowerList() {
            this.powerList = [];
            this._setTotalPage();
            var curPos = this.groupNumber * this.model.linkPages + 1,
                restPages = this.totalPage - curPos;
            if (restPages > this._pbdiff) {
                var index = curPos + this._pbdiff,
                    times = this._pbtimes;
                while (index < this.totalPage && times > 0) {
                    this.powerList.push(index);
                    index += this._pbdiff;
                    times--;
                }
            }
        }
    }]);

    return juPage;
}();



/***/ })

});
//# sourceMappingURL=2.bundle.js.map