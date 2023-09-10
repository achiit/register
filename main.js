"use strict";
(self["webpackChunkangular_registration_form"] = self["webpackChunkangular_registration_form"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration/registration.component */ 4736);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ 5229);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






const routes = [{
  path: 'register',
  component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_0__.RegistrationComponent
}, {
  path: 'profile',
  component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
}, {
  path: 'angular-registration-form',
  redirectTo: '/register',
  pathMatch: 'full'
}, {
  path: '',
  redirectTo: '/register',
  pathMatch: 'full'
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class AppComponent {
  constructor() {
    this.title = 'angular-registration-form';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/registration.component */ 4736);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ 5229);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;









class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;




function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrong credentials entered.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(router) {
    this.router = router;
    this.user = {
      username: '',
      password: ''
    };
    this.loginError = false;
  }
  loginUser() {
    // Send a POST request to your login API with the user data
    const apiUrl = 'https://auth-api-production-0927.up.railway.app/login';
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.user)
    }).then(response => {
      if (response.ok) {
        // Login successful, parse the token and store it in localStorage
        response.json().then(data => {
          localStorage.setItem('token', data.token);
          // Redirect to the profile page
          this.router.navigate(['/profile']);
        });
      } else {
        // Login failed, display an error message
        this.loginError = true;
      }
    }).catch(error => {
      console.error('An error occurred:', error);
    });
  }
}
_class = LoginComponent;
_class.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-login"]],
  decls: 15,
  vars: 3,
  consts: [[1, "container"], [3, "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "alert", "alert-danger", "mt-3"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
        return ctx.loginUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.user.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.user.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginError);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n\n.container[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 0 auto;\n    padding: 20px;\n    background-color: #f0f0f0;\n    border-radius: 10px;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  }\n  \n  \n\n  h2[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 24px;\n    color: #333;\n  }\n  \n  \n\n  label[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #333;\n  }\n  \n  \n\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    margin-right: 20px; \n  }\n  \n  input[type=\"text\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 16px;\n  }\n  \n  \n\n  .btn-primary[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 10px;\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    font-size: 18px;\n    cursor: pointer;\n  }\n  \n  \n\n  .alert-danger[_ngcontent-%COMP%] {\n    background-color: #f8d7da; \n\n    color: #721c24; \n\n    border-color: #f5c6cb; \n\n    font-size: 16px;\n    padding: 10px;\n    border-radius: 5px;\n    margin-top: 20px;\n  }\n  \n  \n\n  p[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 20px;\n    color: #007bff;\n    margin-bottom: 20px;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEM7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDJDQUEyQztFQUM3Qzs7RUFFQSxzQkFBc0I7RUFDdEI7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQSxzQkFBc0I7RUFDdEI7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBLHNCQUFzQjtFQUN0QjtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUEsMkJBQTJCO0VBQzNCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBLDRCQUE0QjtFQUM1QjtJQUNFLHlCQUF5QixFQUFFLHlCQUF5QjtJQUNwRCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDLHFCQUFxQixFQUFFLGlCQUFpQjtJQUN4QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUEsNEJBQTRCO0VBQzVCO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHN0eWxlcyB0byB0aGUgY29udGFpbmVyICovXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGhlYWRpbmcgKi9cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgZm9ybSBsYWJlbHMgKi9cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgZm9ybSBpbnB1dHMgKi9cclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyBcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBsb2dpbiBidXR0b24gKi9cclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBlcnJvciBtZXNzYWdlICovXHJcbiAgLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhOyAvKiBMaWdodCByZWQgYmFja2dyb3VuZCAqL1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7IC8qIERhcmsgcmVkIHRleHQgKi9cclxuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjsgLyogQm9yZGVyIGNvbG9yICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGxvZ2luIG1lc3NhZ2UgKi9cclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5229:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;




function ProfileComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx_r0.profileData.username));
  }
}
function ProfileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
class ProfileComponent {
  constructor(http) {
    this.http = http;
    this.errorMessage = '';
  }
  ngOnInit() {
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    console.log('token', token);
    if (typeof token === 'string') {
      console.log('token is a string');
    } else {
      console.log('token is not a string');
    }
    // Prepare the HTTP headers with the Authorization token
    const headers = {
      'Authorization': `${token}`
    };
    const requestOptions = {
      headers: headers
    };
    // Make a GET request to the profile API
    const apiUrl = 'https://auth-api-production-0927.up.railway.app/profile';
    this.http.get(apiUrl, {
      headers
    }).subscribe(data => {
      // Successful response, set the profile data
      this.profileData = data;
    }, error => {
      // Handle errors, e.g., token expired or unauthorized
      this.errorMessage = 'Error fetching profile data. Please login again.';
      console.error('Error fetching profile data:', error);
    });
  }
}
_class = ProfileComponent;
_class.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-profile"]],
  decls: 5,
  vars: 2,
  consts: [[1, "container", 2, "font-family", "'Poppins', sans-serif"], ["class", "profile-container", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "profile-container"], [1, "profile-card"], [1, "profile-header"], [2, "font-family", "'Poppins', sans-serif"], [1, "alert", "alert-danger", "mt-3"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 8, 4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_div_4_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe],
  styles: ["\n\nbody[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n    background-size: 400% 400%;\n    animation: _ngcontent-%COMP%_gradient 15s ease infinite;\n  }\n  \n  @keyframes _ngcontent-%COMP%_gradient {\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n  \n  \n\n  .container[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n    background-size: 400% 400%;\n    animation: _ngcontent-%COMP%_gradient 15s ease infinite;\n    background-color: #b92525; \n\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative; \n\n  }\n  \n  \n\n  .profile-card[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 150px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n    padding: 20px;\n    background-image: linear-gradient(45deg, #ff6b6b, #007bff); \n\n    background-size: 200% 200%; \n\n    color: #fff;\n    animation: _ngcontent-%COMP%_gradientFloat 4s infinite alternate linear; \n\n  }\n  \n  \n\n  .cloud[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0.7;\n  }\n  \n  .cloud1[_ngcontent-%COMP%] {\n    top: 20px;\n    left: 20px;\n    animation: _ngcontent-%COMP%_moveCloud 10s linear infinite alternate; \n\n  }\n  \n  .light[_ngcontent-%COMP%] {\n    background: radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, transparent 100%);\n    position: absolute;\n    top: 10px;\n    right: 20px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n  }\n  \n  .plane[_ngcontent-%COMP%] {\n    width: 150px;\n    position: absolute;\n    top: 60px;\n    right: 10px;\n    animation: _ngcontent-%COMP%_movePlane 15s linear infinite; \n\n  }\n  \n  @keyframes _ngcontent-%COMP%_gradientFloat {\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: 100% 100%;\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_moveCloud {\n    0% {\n      left: 20px;\n    }\n    100% {\n      left: calc(100% - 100px);\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_movePlane {\n    0% {\n      right: 10px;\n    }\n    100% {\n      right: calc(100% - 200px);\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsMEJBQTBCO0lBQzFCLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFO01BQ0UsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSw2QkFBNkI7SUFDL0I7SUFDQTtNQUNFLDJCQUEyQjtJQUM3QjtFQUNGOztFQUVBLHFCQUFxQjtFQUNyQjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVFQUF1RTtJQUN2RSwwQkFBMEI7SUFDMUIscUNBQXFDO0lBQ3JDLHlCQUF5QixFQUFFLHlDQUF5QztJQUNwRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFFLHlEQUF5RDtFQUMvRTs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLDBEQUEwRCxFQUFFLHdCQUF3QjtJQUNwRiwwQkFBMEIsRUFBRSwwQkFBMEI7SUFDdEQsV0FBVztJQUNYLHFEQUFxRCxFQUFFLGdDQUFnQztFQUN6Rjs7RUFFQSwyQkFBMkI7RUFDM0I7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixrREFBa0QsRUFBRSxvQkFBb0I7RUFDMUU7O0VBRUE7SUFDRSxrRkFBa0Y7SUFDbEYsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsd0NBQXdDLEVBQUUsb0JBQW9CO0VBQ2hFOztFQUVBO0lBQ0U7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLDhCQUE4QjtJQUNoQztFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwbHkgZ3JhZGllbnQgYmFja2dyb3VuZCB0byB0aGUgYm9keSAqL1xyXG5ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwgIzIzZDVhYik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICAgIGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZ3JhZGllbnQge1xyXG4gICAgMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENvbnRhaW5lciBzdHlsZXMgKi9cclxuICAuY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwgIzIzZDVhYik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICAgIGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkyNTI1OyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgd2hpdGUgc3BhY2UgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFJlcXVpcmVkIGZvciBhYnNvbHV0ZSBwb3NpdGlvbmluZyBvZiBjbG91ZCBhbmQgcGxhbmUgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogUHJvZmlsZSBjYXJkIHN0eWxlcyAqL1xyXG4gIC5wcm9maWxlLWNhcmQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmNmI2YiwgIzAwN2JmZik7IC8qIEdyYWRpZW50IGJhY2tncm91bmQgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlOyAvKiBJbml0aWFsIGdyYWRpZW50IHNpemUgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYW5pbWF0aW9uOiBncmFkaWVudEZsb2F0IDRzIGluZmluaXRlIGFsdGVybmF0ZSBsaW5lYXI7IC8qIEdyYWRpZW50IGZsb2F0aW5nIGFuaW1hdGlvbiAqL1xyXG4gIH1cclxuICBcclxuICAvKiBDbG91ZCBhbmQgcGxhbmUgc3R5bGVzICovXHJcbiAgLmNsb3VkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbiAgXHJcbiAgLmNsb3VkMSB7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBtb3ZlQ2xvdWQgMTBzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7IC8qIENsb3VkIGFuaW1hdGlvbiAqL1xyXG4gIH1cclxuICBcclxuICAubGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGFuZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGFuaW1hdGlvbjogbW92ZVBsYW5lIDE1cyBsaW5lYXIgaW5maW5pdGU7IC8qIFBsYW5lIGFuaW1hdGlvbiAqL1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGdyYWRpZW50RmxvYXQge1xyXG4gICAgMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbW92ZUNsb3VkIHtcclxuICAgIDAlIHtcclxuICAgICAgbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbW92ZVBsYW5lIHtcclxuICAgIDAlIHtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgcmlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1
    }))])])]
  }
});

/***/ }),

/***/ 4736:
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistrationComponent: () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;




function RegistrationComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RegistrationComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class RegistrationComponent {
  constructor(router) {
    this.router = router;
    this.user = {
      username: '',
      password: ''
    };
  }
  registerUser() {
    // Check if the form is valid
    if (!this.isFormValid()) {
      console.error('Form is not valid. Please fill in all required fields.');
      return;
    }
    // Send a POST request to your API with the user data
    const apiUrl = 'https://auth-api-production-0927.up.railway.app/register';
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.user)
    }).then(response => {
      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
        // Navigate to the profile page
        this.router.navigate(['/login']);
      } else {
        // Registration failed
        console.error('Registration failed');
      }
    }).catch(error => {
      console.error('An error occurred:', error);
    });
  }
  // Function to check if the form is valid
  isFormValid() {
    return this.user.username.trim() !== '' && this.user.password.trim() !== '';
  }
}
_class = RegistrationComponent;
_class.ɵfac = function RegistrationComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-registration"]],
  decls: 17,
  vars: 4,
  consts: [[1, "container"], [3, "ngSubmit"], ["registrationForm", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "alert", "alert-danger", "mt-3"]],
  template: function RegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_3_listener() {
        return ctx.registerUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.user.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.user.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegistrationComponent_div_15_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegistrationComponent_div_16_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.submitted && _r0.controls["username"].errors && _r0.controls["username"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.submitted && _r0.controls["password"].errors && _r0.controls["password"].errors["required"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n\n.container[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 0 auto;\n    padding: 20px;\n    background-color: #f0f0f0;\n    border-radius: 10px;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  }\n  \n  \n\n  h2[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 24px;\n    color: #333;\n  }\n  \n  \n\n  label[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #333;\n  }\n  \n  \n\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    margin-right: 20px; \n  }\n  \n  input[type=\"text\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 16px;\n  }\n  \n  \n\n  .btn-primary[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 10px;\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    font-size: 18px;\n    cursor: pointer;\n  }\n  \n  \n\n  .alert-danger[_ngcontent-%COMP%] {\n    background-color: #f8d7da; \n\n    color: #721c24; \n\n    border-color: #f5c6cb; \n\n    font-size: 16px;\n    padding: 10px;\n    border-radius: 5px;\n    margin-top: 20px;\n  }\n  \n  \n\n  p[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 20px;\n    color: #007bff;\n    margin-bottom: 20px;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQztJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsMkNBQTJDO0VBQzdDOztFQUVBLHNCQUFzQjtFQUN0QjtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBLHNCQUFzQjtFQUN0QjtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUEsc0JBQXNCO0VBQ3RCO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQSwyQkFBMkI7RUFDM0I7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUEsNEJBQTRCO0VBQzVCO0lBQ0UseUJBQXlCLEVBQUUseUJBQXlCO0lBQ3BELGNBQWMsRUFBRSxrQkFBa0I7SUFDbEMscUJBQXFCLEVBQUUsaUJBQWlCO0lBQ3hDLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQSw0QkFBNEI7RUFDNUI7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7RUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgc3R5bGVzIHRvIHRoZSBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgaGVhZGluZyAqL1xyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSBmb3JtIGxhYmVscyAqL1xyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSBmb3JtIGlucHV0cyAqL1xyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IFxyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGxvZ2luIGJ1dHRvbiAqL1xyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGVycm9yIG1lc3NhZ2UgKi9cclxuICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7IC8qIExpZ2h0IHJlZCBiYWNrZ3JvdW5kICovXHJcbiAgICBjb2xvcjogIzcyMWMyNDsgLyogRGFyayByZWQgdGV4dCAqL1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiOyAvKiBCb3JkZXIgY29sb3IgKi9cclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgbG9naW4gbWVzc2FnZSAqL1xyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map