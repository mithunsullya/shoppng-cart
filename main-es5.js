(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "./src/app/homepage/homepage.component.ts");
      /* harmony import */


      var _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-cart/product-cart.component */
      "./src/app/product-cart/product-cart.component.ts");

      var routes = [{
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
      }, {
        path: 'cart',
        component: _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_3__["ProductCartComponent"]
      }, {
        path: 'products/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | product-detail-product-detail-module */
          "product-detail-product-detail-module").then(__webpack_require__.bind(null,
          /*! ./product-detail/product-detail.module */
          "./src/app/product-detail/product-detail.module.ts")).then(function (m) {
            return m.ProductDetailModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'deloitte-shopping';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "./src/app/homepage/homepage.component.ts");
      /* harmony import */


      var _homepage_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./homepage/sidebar/sidebar.component */
      "./src/app/homepage/sidebar/sidebar.component.ts");
      /* harmony import */


      var _homepage_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./homepage/products/products.component */
      "./src/app/homepage/products/products.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng5_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng5-slider */
      "./node_modules/ng5-slider/__ivy_ngcc__/esm2015/ng5-slider.js");
      /* harmony import */


      var _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./product-cart/product-cart.component */
      "./src/app/product-cart/product-cart.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_10__["Ng5SliderModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _homepage_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _homepage_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_11__["ProductCartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_10__["Ng5SliderModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _homepage_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _homepage_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_11__["ProductCartComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_10__["Ng5SliderModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/header/header.component.ts":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../service/cart.service */
      "./src/app/service/cart.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(cart) {
          _classCallCheck(this, HeaderComponent);

          this.cart = cart;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.products = this.cart.getItems();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 19,
        vars: 1,
        consts: [[1, "container", "navbar"], [1, "navigation"], ["routerLink", "", 1, "logo"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["routerLink", ""], [1, "nav-right"], ["type", "search", "name", "search", "placeholder", "Search"], ["routerLink", "cart", 1, "cart"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Shop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Magazine");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.products.length, "");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".navbar[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.navbar[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.navbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  border: 0;\n  border-bottom: 1px solid;\n}\n.navbar[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  position: relative;\n  color: red;\n}\n.navbar[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  font-size: 13px;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n  list-style: none;\n  margin-right: 20px;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.fa[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: black;\n}\n.fa-bars[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n  padding: 10px 14px;\n  background: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7QUFDRTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQURKO0FBR0k7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRE47QUFNQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFNQTtFQUNFLGtCQUFBO0FBSEY7QUFNQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBSEY7QUFNQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIC5uYXZpZ2F0aW9uLFxuICAubmF2LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgfVxuXG4gIC5jYXJ0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHJlZDtcblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG4uZmEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZhLWJhcnMge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/homepage/homepage.component.ts":
    /*!************************************************!*\
      !*** ./src/app/homepage/homepage.component.ts ***!
      \************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function srcAppHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "./src/app/homepage/sidebar/sidebar.component.ts");
      /* harmony import */


      var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./products/products.component */
      "./src/app/homepage/products/products.component.ts");

      var HomepageComponent = function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);
      };

      HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)();
      };

      HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomepageComponent,
        selectors: [["app-homepage"]],
        decls: 6,
        vars: 0,
        consts: [[1, "container"], [1, "row"], [1, "col-3"], [1, "col-9"]],
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/homepage/products/products.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/homepage/products/products.component.ts ***!
      \*********************************************************/

    /*! exports provided: ProductsComponent */

    /***/
    function srcAppHomepageProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../service/data.service */
      "./src/app/service/data.service.ts");
      /* harmony import */


      var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/cart.service */
      "./src/app/service/cart.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      function ProductsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngb-rating", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_1_Template_div_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var product_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.addToCart(product_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", product_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("rate", product_r1.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("max", 5);
        }
      }

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent(productService, cart) {
          _classCallCheck(this, ProductsComponent);

          this.productService = productService;
          this.cart = cart;
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.products = this.productService.getProducts();
          }
        }, {
          key: "addToCart",
          value: function addToCart(product) {
            this.cart.addToCart(product);
            window.alert('Your product has been added to the cart!');
          }
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]));
      };

      ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsComponent,
        selectors: [["app-products"]],
        decls: 2,
        vars: 1,
        consts: [[1, "products"], ["class", "product-item", 4, "ngFor", "ngForOf"], [1, "product-item"], [3, "routerLink"], [3, "src"], [1, "name"], [1, "product-info"], [1, "category"], [1, "price"], [1, "product-specification"], [3, "rate", "readonly", "max"], [1, "cart", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"]],
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_div_1_Template, 14, 8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbRating"]],
        styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.product-specification[_ngcontent-%COMP%], .product-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.cart[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 24px;\n}\n\n.products[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.products[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: inline;\n  background: white;\n  padding-top: 18px;\n  padding-right: 50px;\n  position: relative;\n  top: -10px;\n  color: black;\n}\n\n.products[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: grey;\n  text-transform: uppercase;\n  font-size: 13px;\n}\n\n.product-item[_ngcontent-%COMP%] {\n  flex: 0 0 33%;\n  max-width: calc(33% - 20px);\n  margin-bottom: 32px;\n  margin-right: 30px;\n}\n\n.product-item[_ngcontent-%COMP%]:nth-child(3n) {\n  margin-right: 0;\n}\n\n.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxXQUFBO0FBQ0E7O0FBRUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNBOztBQUVBO0VBQ0MsZUFBQTtFQUNBLGVBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0FBQ0Q7O0FBQ0M7RUFDTyxpQkFBQTtFQUNILGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0w7O0FBRUM7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQUQ7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0U7RUFDRSxlQUFBO0FBREo7O0FBSUU7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xud2lkdGg6IDEwMCU7XG59XG5cbi5wcm9kdWN0LXNwZWNpZmljYXRpb24sIC5wcm9kdWN0LWluZm8ge1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJ0IHtcblx0Y3Vyc29yOnBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnByb2R1Y3RzIHtcblx0ZGlzcGxheTpmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cblx0Lm5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblx0ICAgIGRpc3BsYXk6IGlubGluZTtcblx0ICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXHQgICAgcGFkZGluZy10b3A6IDE4cHg7XG5cdCAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuXHQgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHQgICAgdG9wOiAtMTBweDtcblx0ICAgIGNvbG9yOiBibGFjaztcblx0fVxuXG5cdC5jYXRlZ29yeSB7XG5cdGNvbG9yOiBncmV5O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXNpemU6IDEzcHg7XG5cdH1cbn1cblxuLnByb2R1Y3QtaXRlbSB7XG4gIGZsZXg6MCAwIDMzJTtcbiAgbWF4LXdpZHRoOiBjYWxjKDMzJSAtIDIwcHgpO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG5cbiAgJjpudGgtY2hpbGQoM24pIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
          }]
        }], function () {
          return [{
            type: _service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }, {
            type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/homepage/sidebar/sidebar.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/homepage/sidebar/sidebar.component.ts ***!
      \*******************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcAppHomepageSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../service/data.service */
      "./src/app/service/data.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng5_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng5-slider */
      "./node_modules/ng5-slider/__ivy_ngcc__/esm2015/ng5-slider.js");

      function SidebarComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Collection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidebarComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia ");
        }
      }

      function SidebarComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Color ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidebarComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_ng_template_8_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.color = $event;
          })("change", function SidebarComponent_ng_template_8_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.colorFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Red ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_ng_template_8_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.color = $event;
          })("change", function SidebarComponent_ng_template_8_Template_input_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.colorFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Black ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_ng_template_8_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.color = $event;
          })("change", function SidebarComponent_ng_template_8_Template_input_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.colorFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Brown ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_ng_template_8_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.color = $event;
          })("change", function SidebarComponent_ng_template_8_Template_input_change_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.colorFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Blue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.color);
        }
      }

      function SidebarComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidebarComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_ng_template_11_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.category = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Lounge ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_ng_template_11_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.category = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Chair ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_ng_template_11_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.category = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Shelves ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SidebarComponent_ng_template_11_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.category = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Tables ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.category);
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(color) {
          _classCallCheck(this, SidebarComponent);

          this.color = color;
          this.value = 1300;
          this.highValue = 6000;
          this.options = {
            floor: 0,
            ceil: 10000
          };
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "colorFilter",
          value: function colorFilter(event) {
            this.color.addFilters(event.target.value);
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 16,
        vars: 4,
        consts: [[1, "sidebar"], [3, "closeOthers"], ["id", "accord-1"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["id", "accord-2"], ["id", "accord-3"], [1, "price-range"], [3, "value", "highValue", "options", "valueChange", "highValueChange"], ["aria-hidden", "true", 1, "fa", "fa-angle-down"], [1, "color__item"], ["type", "radio", "name", "color", "id", "red", "value", "red", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "color", "id", "black", "value", "black", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "color", "id", "brown", "value", "brown", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "color", "id", "blue", "value", "blue", 3, "ngModel", "ngModelChange", "change"], ["type", "checkbox", "name", "category", "id", "lounge", "value", "lounge", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "category", "id", "chair", "value", "chair", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "category", "id", "shelves", "value", "shelves", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "category", "id", "tables", "value", "tables", 3, "ngModel", "ngModelChange"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Filter By ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-accordion", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngb-panel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_ng_template_4_Template, 3, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_ng_template_5_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-panel", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_ng_template_7_Template, 3, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarComponent_ng_template_8_Template, 13, 4, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-panel", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SidebarComponent_ng_template_10_Template, 3, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidebarComponent_ng_template_11_Template, 13, 4, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ng5-slider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SidebarComponent_Template_ng5_slider_valueChange_15_listener($event) {
              return ctx.value = $event;
            })("highValueChange", function SidebarComponent_Template_ng5_slider_highValueChange_15_listener($event) {
              return ctx.highValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("highValue", ctx.highValue)("options", ctx.options);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"], ng5_slider__WEBPACK_IMPORTED_MODULE_3__["ɵa"]],
        styles: [".ng5-slider[_ngcontent-%COMP%]  .ng5-slider-bar {\n  background: grey;\n  height: 2px;\n  opacity: 0.5;\n}\n\n.ng5-slider[_ngcontent-%COMP%]  .ng5-slider-pointer {\n  width: 10px;\n  height: 10px;\n  top: auto;\n  border-radius: 16px;\n  \n  bottom: 0;\n  border: 1px solid #333;\n  background-color: white;\n}\n\n.ng5-slider[_ngcontent-%COMP%]  .ng5-slider-pointer:after {\n  display: none;\n}\n\n.ng5-slider[_ngcontent-%COMP%]  .ng5-slider-bubble {\n  bottom: 14px;\n  display: none !important;\n}\n\n.ng5-slider[_ngcontent-%COMP%]  .ng5-slider-limit {\n  font-weight: bold;\n  display: block !important;\n}\n\n.ng5-slider[_ngcontent-%COMP%]  .ng5-slider-tick {\n  width: 1px;\n  height: 10px;\n  margin-left: 4px;\n  border-radius: 0;\n  background: #ffe4d1;\n  top: -1px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\n\n  .card {\n  border: 0;\n  border-bottom: 1px solid #999 !important;\n  border-radius: 0;\n  margin-bottom: 12px;\n}\n\n  .card .card-header {\n  padding: 0;\n  background-color: transparent;\n}\n\n  .card .card-header button {\n  color: black !important;\n  width: 100%;\n  text-align: left;\n  font-weight: bold;\n  font-size: 14px;\n  position: relative;\n}\n\n  .card .card-header .fa {\n  position: absolute;\n  right: 0;\n  top: 8px;\n  font-size: 18px;\n}\n\n.price-range[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  font-weight: bold;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2Uvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBRUEseUJBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQURBO0VBQ0UsU0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlGOztBQURBO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBRkU7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2Uvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nNS1zbGlkZXI6Om5nLWRlZXAgLm5nNS1zbGlkZXItYmFyIHtcbiAgYmFja2dyb3VuZDogZ3JleTtcbiAgaGVpZ2h0OiAycHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm5nNS1zbGlkZXI6Om5nLWRlZXAgLm5nNS1zbGlkZXItcG9pbnRlciB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHRvcDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgLyogdG8gcmVtb3ZlIHRoZSBkZWZhdWx0IHBvc2l0aW9uaW5nICovXG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubmc1LXNsaWRlcjo6bmctZGVlcCAubmc1LXNsaWRlci1wb2ludGVyOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5uZzUtc2xpZGVyOjpuZy1kZWVwIC5uZzUtc2xpZGVyLWJ1YmJsZSB7XG4gIGJvdHRvbTogMTRweDtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLm5nNS1zbGlkZXI6Om5nLWRlZXAgLm5nNS1zbGlkZXItbGltaXQge1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLm5nNS1zbGlkZXI6Om5nLWRlZXAgLm5nNS1zbGlkZXItdGljayB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogI2ZmZTRkMTtcbiAgdG9wOiAtMXB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgLmNhcmQge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbjo6bmctZGVlcCAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAmIGJ1dHRvbiB7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmZhIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA4cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9IFxufVxuXG4ucHJpY2UtcmFuZ2Uge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
          }]
        }], function () {
          return [{
            type: _service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/product-cart/product-cart.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/product-cart/product-cart.component.ts ***!
      \********************************************************/

    /*! exports provided: ProductCartComponent */

    /***/
    function srcAppProductCartProductCartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductCartComponent", function () {
        return ProductCartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../service/cart.service */
      "./src/app/service/cart.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ProductCartComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r1.name, " ");
        }
      }

      var ProductCartComponent = /*#__PURE__*/function () {
        function ProductCartComponent(cart) {
          _classCallCheck(this, ProductCartComponent);

          this.cart = cart;
        }

        _createClass(ProductCartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.productCart = this.cart.getItems();
          }
        }]);

        return ProductCartComponent;
      }();

      ProductCartComponent.ɵfac = function ProductCartComponent_Factory(t) {
        return new (t || ProductCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
      };

      ProductCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductCartComponent,
        selectors: [["app-product-cart"]],
        decls: 2,
        vars: 1,
        consts: [[1, "cart-produts"], [4, "ngFor", "ngForOf"]],
        template: function ProductCartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductCartComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productCart);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtY2FydC9wcm9kdWN0LWNhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-cart',
            templateUrl: './product-cart.component.html',
            styleUrls: ['./product-cart.component.scss']
          }]
        }], function () {
          return [{
            type: _service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/service/cart.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/service/cart.service.ts ***!
      \*****************************************/

    /*! exports provided: CartService */

    /***/
    function srcAppServiceCartServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CartService = /*#__PURE__*/function () {
        function CartService() {
          _classCallCheck(this, CartService);

          this.items = [];
        }

        _createClass(CartService, [{
          key: "addToCart",
          value: function addToCart(product) {
            this.items.push(product);
          }
        }, {
          key: "getItems",
          value: function getItems() {
            return this.items;
          }
        }, {
          key: "clearCart",
          value: function clearCart() {
            this.items = [];
            return this.items;
          }
        }]);

        return CartService;
      }();

      CartService.ɵfac = function CartService_Factory(t) {
        return new (t || CartService)();
      };

      CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CartService,
        factory: CartService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/service/data.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/service/data.service.ts ***!
      \*****************************************/

    /*! exports provided: DataService */

    /***/
    function srcAppServiceDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _utils_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../utils/products */
      "./src/app/utils/products.ts");

      var DataService = /*#__PURE__*/function () {
        function DataService() {
          _classCallCheck(this, DataService);
        }

        _createClass(DataService, [{
          key: "getProducts",
          value: function getProducts() {
            this.productItem = _utils_products__WEBPACK_IMPORTED_MODULE_1__["products"];
            return this.productItem;
          }
        }, {
          key: "getProductItem",
          value: function getProductItem(id) {
            var products = this.getProducts();
            return products.find(function (product) {
              return product.id == id;
            });
          } // Flters the products based on the color.

        }, {
          key: "addFilters",
          value: function addFilters(color) {
            this.productItem = _utils_products__WEBPACK_IMPORTED_MODULE_1__["products"];
            var filteredProducts = [];
            this.productItem.filter(function (item) {
              if (item.color.includes(color) == true) {
                filteredProducts.push(item);
              }
            });
            return filteredProducts;
          }
        }]);

        return DataService;
      }();

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)();
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/utils/products.ts":
    /*!***********************************!*\
      !*** ./src/app/utils/products.ts ***!
      \***********************************/

    /*! exports provided: products */

    /***/
    function srcAppUtilsProductsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "products", function () {
        return products;
      });

      var products = [{
        name: 'Product1',
        id: 1,
        image: 'https://images.pexels.com/photos/1222557/pexels-photo-1222557.jpeg?cs=srgb&dl=pexels-eneida-nieves-1222557.jpg&fm=jpg',
        category: 'Lounge',
        rating: '4',
        price: '$1460',
        description: 'Objectively provide access to enabled benefits before impactful niches. Completely strategize interactive bandwidth for superior paradigms. Efficiently productivate error-free content through just in time e-services. Rapidiously brand customized partnerships for standardized human capital. Energistically.',
        color: ['brown', 'black', 'blue']
      }, {
        name: 'Product2',
        id: 2,
        image: 'https://images.pexels.com/photos/1222557/pexels-photo-1222557.jpeg?cs=srgb&dl=pexels-eneida-nieves-1222557.jpg&fm=jpg',
        category: 'Chair',
        rating: '3',
        price: '$8800',
        description: 'Objectively provide access to enabled benefits before impactful niches. Completely strategize interactive bandwidth for superior paradigms. Efficiently productivate error-free content through just in time e-services. Rapidiously brand customized partnerships for standardized human capital. Energistically.',
        color: ['brown']
      }, {
        name: 'Product3',
        id: 3,
        image: 'https://images.pexels.com/photos/1222557/pexels-photo-1222557.jpeg?cs=srgb&dl=pexels-eneida-nieves-1222557.jpg&fm=jpg',
        category: 'Shelf',
        rating: '2',
        price: '$1000',
        description: 'Objectively provide access to enabled benefits before impactful niches. Completely strategize interactive bandwidth for superior paradigms. Efficiently productivate error-free content through just in time e-services. Rapidiously brand customized partnerships for standardized human capital. Energistically.',
        color: ['red', 'blue']
      }, {
        name: 'Product4',
        id: 4,
        image: 'https://images.pexels.com/photos/1222557/pexels-photo-1222557.jpeg?cs=srgb&dl=pexels-eneida-nieves-1222557.jpg&fm=jpg',
        category: 'Chair',
        rating: '4',
        price: '$2600',
        description: 'Objectively provide access to enabled benefits before impactful niches. Completely strategize interactive bandwidth for superior paradigms. Efficiently productivate error-free content through just in time e-services. Rapidiously brand customized partnerships for standardized human capital. Energistically.',
        color: ['black', 'blue']
      }, {
        name: 'Product5',
        id: 5,
        image: 'https://images.pexels.com/photos/1222557/pexels-photo-1222557.jpeg?cs=srgb&dl=pexels-eneida-nieves-1222557.jpg&fm=jpg',
        category: 'Lounge',
        rating: '3',
        price: '$1600',
        description: 'Objectively provide access to enabled benefits before impactful niches. Completely strategize interactive bandwidth for superior paradigms. Efficiently productivate error-free content through just in time e-services. Rapidiously brand customized partnerships for standardized human capital. Energistically.',
        color: ['red', 'blue']
      }, {
        name: 'Product6',
        id: 6,
        image: 'https://images.pexels.com/photos/1222557/pexels-photo-1222557.jpeg?cs=srgb&dl=pexels-eneida-nieves-1222557.jpg&fm=jpg',
        category: 'Chair',
        rating: '5',
        price: '$5600',
        description: 'Objectively provide access to enabled benefits before impactful niches. Completely strategize interactive bandwidth for superior paradigms. Efficiently productivate error-free content through just in time e-services. Rapidiously brand customized partnerships for standardized human capital. Energistically.',
        color: ['brown', 'blue']
      }, {
        name: 'Product7',
        id: 7,
        image: 'https://images.pexels.com/photos/1222557/pexels-photo-1222557.jpeg?cs=srgb&dl=pexels-eneida-nieves-1222557.jpg&fm=jpg',
        category: 'Lounge',
        rating: '5',
        price: '$600',
        description: 'Objectively provide access to enabled benefits before impactful niches. Completely strategize interactive bandwidth for superior paradigms. Efficiently productivate error-free content through just in time e-services. Rapidiously brand customized partnerships for standardized human capital. Energistically.',
        color: ['blue']
      }, {
        name: 'Product8',
        id: 8,
        image: 'https://images.pexels.com/photos/1222557/pexels-photo-1222557.jpeg?cs=srgb&dl=pexels-eneida-nieves-1222557.jpg&fm=jpg',
        category: 'Lounge',
        rating: '2',
        price: '$2000',
        description: 'Objectively provide access to enabled benefits before impactful niches. Completely strategize interactive bandwidth for superior paradigms. Efficiently productivate error-free content through just in time e-services. Rapidiously brand customized partnerships for standardized human capital. Energistically.',
        color: ['red', 'brown']
      }];
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/mithun/Documents/Sites/shoppng-cart/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map