module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js') // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ var threw = true
    /******/ try {
      /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
      /******/ threw = false
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId]
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value })
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key]
          }.bind(null, key),
        )
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 3))
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './pages/index.js':
      /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ '@babel/runtime/regenerator')
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__)
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 'react')
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__)
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 'prop-types')
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__)
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ 'next/link')
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__)
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ 'styled-components')
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__)
        /* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ 'isomorphic-unfetch')
        /* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__)

        var _jsxFileName = '/Users/jungminhyuck/Github/githubjobs/packages/admin/pages/index.js'

        function _typeof(obj) {
          if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
            }
          }
          return _typeof(obj)
        }

        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg)
            var value = info.value
          } catch (error) {
            reject(error)
            return
          }
          if (info.done) {
            resolve(value)
          } else {
            Promise.resolve(value).then(_next, _throw)
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args)
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
              }
              _next(undefined)
            })
          }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
            return call
          }
          return _assertThisInitialized(self)
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }
          return self
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o)
              }
          return _getPrototypeOf(o)
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function')
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } })
          if (superClass) _setPrototypeOf(subClass, superClass)
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p
              return o
            }
          return _setPrototypeOf(o, p)
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true })
          } else {
            obj[key] = value
          }
          return obj
        }

        var Title = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h1.withConfig({
          displayName: 'pages__Title',
          componentId: 'lfnl0n-0',
        })(['color:red;font-size:50px;'])

        var App =
          /*#__PURE__*/
          (function(_React$Component) {
            _inherits(App, _React$Component)

            function App() {
              _classCallCheck(this, App)

              return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments))
            }

            _createClass(
              App,
              [
                {
                  key: 'render',
                  value: function render() {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        Title,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28,
                          },
                          __self: this,
                        },
                        'Next.js has ',
                        this.props.stars,
                        ' \u2B50\uFE0F',
                      ),
                      'Click',
                      ' ',
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                        {
                          prefetch: true,
                          href: '/about',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29,
                          },
                          __self: this,
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          'a',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 29,
                            },
                            __self: this,
                          },
                          'About',
                        ),
                      ),
                      ' ',
                      'To read more',
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30,
                          },
                          __self: this,
                        },
                        this.props.userAgent,
                      ),
                    )
                  },
                },
              ],
              [
                {
                  key: 'getInitialProps',
                  value: (function() {
                    var _getInitialProps = _asyncToGenerator(
                      /*#__PURE__*/
                      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
                        var req, headers, userAgent, res, _ref2, stargazers_count

                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  req = _ref.req
                                  headers = req.headers
                                  userAgent = headers['user-agent']
                                  _context.next = 5
                                  return fetch('https://api.github.com/repos/zeit/next.js')

                                case 5:
                                  res = _context.sent
                                  _context.next = 8
                                  return res.json()

                                case 8:
                                  _ref2 = _context.sent
                                  stargazers_count = _ref2.stargazers_count
                                  return _context.abrupt('return', {
                                    stars: stargazers_count,
                                    userAgent: userAgent,
                                  })

                                case 11:
                                case 'end':
                                  return _context.stop()
                              }
                            }
                          },
                          _callee,
                          this,
                        )
                      }),
                    )

                    return function getInitialProps(_x) {
                      return _getInitialProps.apply(this, arguments)
                    }
                  })(),
                },
              ],
            )

            return App
          })(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)

        _defineProperty(App, 'propTypes', {
          stars: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
          userAgent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
        })

        /* harmony default export */ __webpack_exports__['default'] = App

        /***/
      },

    /***/ 3:
      /*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(/*! ./pages/index.js */ './pages/index.js')

        /***/
      },

    /***/ '@babel/runtime/regenerator':
      /*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('@babel/runtime/regenerator')

        /***/
      },

    /***/ 'isomorphic-unfetch':
      /*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('isomorphic-unfetch')

        /***/
      },

    /***/ 'next/link':
      /*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('next/link')

        /***/
      },

    /***/ 'prop-types':
      /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('prop-types')

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react')

        /***/
      },

    /***/ 'styled-components':
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('styled-components')

        /***/
      },

    /******/
  },
)
//# sourceMappingURL=index.js.map
