"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_AllVideo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AllVideo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AllVideo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      videos: []
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    isLoggedIn: 'isLoggedIn',
    user: 'user'
  })),
  created: function created() {
    var _this = this;

    this.axios.get('http://sosmed-vue.herokuapp.com/api/videos/').then(function (response) {
      _this.videos = response.data.data;
    })["catch"](function (err) {
      return _this.$swal('Terjadi Kesalahan');
    });
  },
  methods: {
    deleteVideo: function deleteVideo(id) {
      var _this2 = this;

      this.axios["delete"]("http://sosmed-vue.herokuapp.com/api/videos/".concat(id)).then(function (response) {
        _this2.$swal('Berhasil Menghapus Video');

        var i = _this2.videos.map(function (data) {
          return data.id;
        }).indexOf(id);

        _this2.videos.splice(i, 1);
      })["catch"](function (err) {
        return _this2.$swal('Terjadi Kesalahan');
      });
    },
    viewsVideo: function viewsVideo(id) {
      var _this3 = this;

      this.axios.post("http://sosmed-vue.herokuapp.com/api/videos/views/".concat(id)).then(function (response) {
        return _this3.axios.get('http://sosmed-vue.herokuapp.com/api/videos/');
      }).then(function (response) {
        _this3.videos = response.data.data;
      })["catch"](function (err) {
        return _this3.$swal('Terjadi Kesalahan');
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/AllVideo.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/AllVideo.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllVideo_vue_vue_type_template_id_aa494076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllVideo.vue?vue&type=template&id=aa494076& */ "./resources/js/components/AllVideo.vue?vue&type=template&id=aa494076&");
/* harmony import */ var _AllVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllVideo.vue?vue&type=script&lang=js& */ "./resources/js/components/AllVideo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllVideo_vue_vue_type_template_id_aa494076___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllVideo_vue_vue_type_template_id_aa494076___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AllVideo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AllVideo.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/AllVideo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllVideo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AllVideo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AllVideo.vue?vue&type=template&id=aa494076&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/AllVideo.vue?vue&type=template&id=aa494076& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllVideo_vue_vue_type_template_id_aa494076___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllVideo_vue_vue_type_template_id_aa494076___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllVideo_vue_vue_type_template_id_aa494076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllVideo.vue?vue&type=template&id=aa494076& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AllVideo.vue?vue&type=template&id=aa494076&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AllVideo.vue?vue&type=template&id=aa494076&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AllVideo.vue?vue&type=template&id=aa494076& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h2", { staticClass: "text-center" }, [_vm._v("Short Videos")]),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "btn float-right mb-5 btn-success",
          attrs: { to: { name: "createVideo" } },
        },
        [_vm._v("Upload Video")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.videos, function (video) {
          return _c("div", { key: video.id, staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card mb-4" }, [
              _c(
                "video",
                {
                  staticClass: "mx-auto d-block",
                  staticStyle: {
                    height: "15rem",
                    width: "-webkit-fill-available",
                  },
                  attrs: { controls: "" },
                  on: {
                    playing: function ($event) {
                      return _vm.viewsVideo(video.id)
                    },
                  },
                },
                [
                  _c("source", {
                    attrs: { src: video.video, type: "video/mp4" },
                  }),
                  _vm._v(
                    "\n                    Your browser does not support the video tag.\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("h5", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(video.user.name)),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _vm._v(_vm._s(video.description)),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _c("small", { staticClass: "text-muted" }, [
                      _vm._v(_vm._s(video.views) + " views this video"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _c("small", { staticClass: "text-muted" }, [
                      _vm._v(
                        "Posted at " +
                          _vm._s(
                            new Date(video.created_at).getDate() +
                              "-" +
                              (new Date(video.created_at).getMonth() + 1) +
                              "-" +
                              new Date(video.created_at).getFullYear()
                          )
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm.isLoggedIn
                    ? [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function ($event) {
                                return _vm.deleteVideo(video.id)
                              },
                            },
                          },
                          [_vm._v("Delete")]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success",
                            attrs: {
                              to: {
                                name: "editVideo",
                                params: { id: video.id },
                              },
                            },
                          },
                          [_vm._v("Edit")]
                        ),
                      ]
                    : _vm._e(),
                ],
                2
              ),
            ]),
          ])
        }),
        0
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);