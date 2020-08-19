(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-detail-product-detail-module"], {
    /***/
    "./src/app/product-detail/product-detail-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/product-detail/product-detail-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ProductDetailRoutingModule */

    /***/
    function srcAppProductDetailProductDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailRoutingModule", function () {
        return ProductDetailRoutingModule;
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


      var _product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-detail.component */
      "./src/app/product-detail/product-detail.component.ts");

      var routes = [{
        path: '',
        component: _product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]
      }];

      var ProductDetailRoutingModule = function ProductDetailRoutingModule() {
        _classCallCheck(this, ProductDetailRoutingModule);
      };

      ProductDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProductDetailRoutingModule
      });
      ProductDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProductDetailRoutingModule_Factory(t) {
          return new (t || ProductDetailRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDetailRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/product-detail/product-detail.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/product-detail/product-detail.component.ts ***!
      \************************************************************/

    /*! exports provided: ProductDetailComponent */

    /***/
    function srcAppProductDetailProductDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
        return ProductDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../service/data.service */
      "./src/app/service/data.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../service/cart.service */
      "./src/app/service/cart.service.ts");

      var ProductDetailComponent = /*#__PURE__*/function () {
        function ProductDetailComponent(productService, route, cart) {
          _classCallCheck(this, ProductDetailComponent);

          this.productService = productService;
          this.route = route;
          this.cart = cart;
        }

        _createClass(ProductDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var id = this.route.snapshot.paramMap.get('id');
            this.productItem = this.productService.getProductItem(id);
          }
        }, {
          key: "addToCart",
          value: function addToCart(product) {
            this.cart.addToCart(product);
            window.alert('Your product has been added to the cart!');
          }
        }]);

        return ProductDetailComponent;
      }();

      ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) {
        return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]));
      };

      ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductDetailComponent,
        selectors: [["app-product-detail"]],
        decls: 20,
        vars: 5,
        consts: [[1, "container", "product-details"], [1, "image"], [3, "src"], [1, "details"], [1, "category"], [1, "title"], [1, "description"], [1, "color"], [1, "shopping-details"], [1, "price-per-unit"], [1, "price"], [1, "buy-button"], [1, "cart", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"]],
        template: function ProductDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Price per unit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Buy Now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_Template_div_click_18_listener() {
              return ctx.addToCart(ctx.productItem);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.productItem.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productItem.category, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productItem.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productItem.description, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productItem.price);
          }
        },
        styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.product-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.product-details[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  margin-right: 40px;\n}\n\n.product-details[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 400px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.fa[_ngcontent-%COMP%] {\n  font-size: 32px;\n  cursor: pointer;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: bold;\n}\n\n.shopping-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  max-width: 250px;\n}\n\n.shopping-details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #333;\n  color: white;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFDSjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFEQTs7QUFJQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHRTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAuaW1hZ2Uge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuXG4gICAgaW1nIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxufVxuXG4uZmEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGxlIHtcbmZvbnQtc2l6ZTogMzZweDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2hvcHBpbmctZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuXG4gIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgfVxuICAuYnV5LWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.scss']
          }]
        }], function () {
          return [{
            type: _service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/product-detail/product-detail.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/product-detail/product-detail.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProductDetailModule */

    /***/
    function srcAppProductDetailProductDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function () {
        return ProductDetailModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-detail-routing.module */
      "./src/app/product-detail/product-detail-routing.module.ts");
      /* harmony import */


      var _product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-detail.component */
      "./src/app/product-detail/product-detail.component.ts");

      var ProductDetailModule = function ProductDetailModule() {
        _classCallCheck(this, ProductDetailModule);
      };

      ProductDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProductDetailModule
      });
      ProductDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProductDetailModule_Factory(t) {
          return new (t || ProductDetailModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductDetailRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDetailModule, {
          declarations: [_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductDetailRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductDetailRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=product-detail-product-detail-module-es5.js.map