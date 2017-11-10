webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_routes_home_home_component__ = __webpack_require__("../../../../../src/app/components/routes/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_routes_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/routes/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_components_routes_communication_communication_component__ = __webpack_require__("../../../../../src/app/components/routes/communication/communication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_components_routes_client_client_component__ = __webpack_require__("../../../../../src/app/components/routes/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_components_routes_program_program_component__ = __webpack_require__("../../../../../src/app/components/routes/program/program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3_app_components_routes_home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4_app_components_routes_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'communication', component: __WEBPACK_IMPORTED_MODULE_5_app_components_routes_communication_communication_component__["a" /* CommunicationComponent */] },
    { path: 'program', component: __WEBPACK_IMPORTED_MODULE_7_app_components_routes_program_program_component__["a" /* ProgramComponent */] },
    { path: 'client', component: __WEBPACK_IMPORTED_MODULE_6_app_components_routes_client_client_component__["a" /* ClientComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_8_app_components_test_test_component__["a" /* TestComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2_app_components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sarting with basic \"Bootstrap starter\" template\r\n     https://getbootstrap.com/docs/4.0/examples/starter-template/-->\r\n<app-navbar [customLogoTitle]=[title]></app-navbar>   \r\n  \r\n<div class=\"container-fluid\">\r\n  <div class=\"starter-template\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n<app-footer [customFooterText]=[title]></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Alert Subscribe UI Prototype/POC (' + __WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].envName + ')';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");


// https://github.com/angular/angular-cli/issues/2034
var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('app.config');
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
var AppConfig = {
    apiEndpoint: __WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].apiEndpoint
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_components_routes_home_home_component__ = __webpack_require__("../../../../../src/app/components/routes/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_components_routes_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/routes/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_components_routes_communication_communication_component__ = __webpack_require__("../../../../../src/app/components/routes/communication/communication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_components_routes_program_program_component__ = __webpack_require__("../../../../../src/app/components/routes/program/program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_components_routes_client_client_component__ = __webpack_require__("../../../../../src/app/components/routes/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_components_modal_client_config_by_comm_client_config_by_comm_component__ = __webpack_require__("../../../../../src/app/components/modal/client-config-by-comm/client-config-by-comm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_components_modal_addprogram_addprogram_component__ = __webpack_require__("../../../../../src/app/components/modal/addprogram/addprogram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_components_modal_editprogram_editprogram_component__ = __webpack_require__("../../../../../src/app/components/modal/editprogram/editprogram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_components_modal_deleteprogram_deleteprogram_component__ = __webpack_require__("../../../../../src/app/components/modal/deleteprogram/deleteprogram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_components_modal_program_config_by_comm_program_config_by_comm_component__ = __webpack_require__("../../../../../src/app/components/modal/program-config-by-comm/program-config-by-comm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_components_forms_date_eff_exp_date_eff_exp_component__ = __webpack_require__("../../../../../src/app/components/forms/date-eff-exp/date-eff-exp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_components_forms_datepicker_popup_datepicker_popup_component__ = __webpack_require__("../../../../../src/app/components/forms/datepicker-popup/datepicker-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_components_forms_select_channel_mandatory_select_channel_mandatory_component__ = __webpack_require__("../../../../../src/app/components/forms/select-channel-mandatory/select-channel-mandatory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_components_forms_select_channel_priority_select_channel_priority_component__ = __webpack_require__("../../../../../src/app/components/forms/select-channel-priority/select-channel-priority.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_components_utility_sortable_column_sortable_column_component__ = __webpack_require__("../../../../../src/app/components/utility/sortable-column/sortable-column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_services_data_api_data_api_service__ = __webpack_require__("../../../../../src/app/services/data-api/data-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_services_data_api_client_client_service__ = __webpack_require__("../../../../../src/app/services/data-api/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_services_data_api_client_configuration_client_configuration_service__ = __webpack_require__("../../../../../src/app/services/data-api/client-configuration/client-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_app_services_data_api_communication_communication_service__ = __webpack_require__("../../../../../src/app/services/data-api/communication/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_app_services_data_api_program_program_service__ = __webpack_require__("../../../../../src/app/services/data-api/program/program.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_app_services_data_api_program_configuration_program_configuration_service__ = __webpack_require__("../../../../../src/app/services/data-api/program-configuration/program-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_app_services_sortable_column_service__ = __webpack_require__("../../../../../src/app/services/sortable-column.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_app_services_data_api_in_memory_data_service__ = __webpack_require__("../../../../../src/app/services/data-api/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_app_directives_click_outside_directive__ = __webpack_require__("../../../../../src/app/directives/click-outside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_app_directives_sortable_table_directive__ = __webpack_require__("../../../../../src/app/directives/sortable-table.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_app_components_routes_communication_actions_popover_actions_popover_component__ = __webpack_require__("../../../../../src/app/components/routes/communication/actions-popover/actions-popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_app_components_routes_program_actions_popover_actions_popover_component__ = __webpack_require__("../../../../../src/app/components/routes/program/actions-popover/actions-popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_app_components_routes_communication_action_table_action_table_component__ = __webpack_require__("../../../../../src/app/components/routes/communication/action-table/action-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_app_components_routes_client_action_table_action_table_component__ = __webpack_require__("../../../../../src/app/components/routes/client/action-table/action-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_test_drag_drop_drag_drop_component__ = __webpack_require__("../../../../../src/app/components/test/drag-drop/drag-drop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_app_services_drag_drop_service__ = __webpack_require__("../../../../../src/app/services/drag-drop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__directives_drag_drop_draggable_directive__ = __webpack_require__("../../../../../src/app/directives/drag-drop/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__directives_drag_drop_droppable_directive__ = __webpack_require__("../../../../../src/app/directives/drag-drop/droppable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_test_bootstrap_gradients_bootstrap_gradients_component__ = __webpack_require__("../../../../../src/app/components/test/bootstrap-gradients/bootstrap-gradients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_test_click_outside_click_outside_component__ = __webpack_require__("../../../../../src/app/components/test/click-outside/click-outside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_modal_client_config_client_config_component__ = __webpack_require__("../../../../../src/app/components/modal/client-config/client-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_routes_client_actions_popover_actions_popover_component__ = __webpack_require__("../../../../../src/app/components/routes/client/actions-popover/actions-popover.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// AppConfig
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063



// Basic Page Layout Stuff



// Application Routing Components





// Modal stuff





// Forms




// Utilities
// http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/

// Services







// Imports for loading & configuring the in-memory web api
// TODO want some way to turn it on and off without commenting out code
// https://stackoverflow.com/questions/40214211/disable-angular2-in-memory-web-api-for-production



// Directives


//













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_components_routes_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12_app_components_routes_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13_app_components_routes_communication_communication_component__["a" /* CommunicationComponent */],
            __WEBPACK_IMPORTED_MODULE_14_app_components_routes_program_program_component__["a" /* ProgramComponent */],
            __WEBPACK_IMPORTED_MODULE_15_app_components_routes_client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_16_app_components_modal_client_config_by_comm_client_config_by_comm_component__["a" /* ClientConfigByCommComponent */],
            __WEBPACK_IMPORTED_MODULE_17_app_components_modal_addprogram_addprogram_component__["a" /* AddProgramComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_components_modal_editprogram_editprogram_component__["a" /* EditProgramComponent */],
            __WEBPACK_IMPORTED_MODULE_19_app_components_modal_deleteprogram_deleteprogram_component__["a" /* DeleteProgramComponent */],
            __WEBPACK_IMPORTED_MODULE_20_app_components_modal_program_config_by_comm_program_config_by_comm_component__["a" /* ProgramConfigByCommComponent */],
            __WEBPACK_IMPORTED_MODULE_25_app_components_utility_sortable_column_sortable_column_component__["a" /* SortableColumnComponent */],
            __WEBPACK_IMPORTED_MODULE_21_app_components_forms_date_eff_exp_date_eff_exp_component__["a" /* DateEffExpComponent */],
            __WEBPACK_IMPORTED_MODULE_22_app_components_forms_datepicker_popup_datepicker_popup_component__["a" /* DatepickerPopupComponent */],
            __WEBPACK_IMPORTED_MODULE_23_app_components_forms_select_channel_mandatory_select_channel_mandatory_component__["a" /* SelectChannelMandatoryComponent */],
            __WEBPACK_IMPORTED_MODULE_24_app_components_forms_select_channel_priority_select_channel_priority_component__["a" /* SelectChannelPriorityComponent */],
            __WEBPACK_IMPORTED_MODULE_36_app_directives_click_outside_directive__["a" /* ClickOutsideDirective */],
            __WEBPACK_IMPORTED_MODULE_37_app_directives_sortable_table_directive__["a" /* SortableTableDirective */],
            __WEBPACK_IMPORTED_MODULE_38_app_components_routes_communication_actions_popover_actions_popover_component__["a" /* CommActionsPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_39_app_components_routes_program_actions_popover_actions_popover_component__["a" /* ProgActionsPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_40_app_components_routes_communication_action_table_action_table_component__["a" /* CommActionTableComponent */],
            __WEBPACK_IMPORTED_MODULE_41_app_components_routes_client_action_table_action_table_component__["a" /* ClientActionTableComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_test_drag_drop_drag_drop_component__["a" /* DragDropComponent */],
            __WEBPACK_IMPORTED_MODULE_44__directives_drag_drop_draggable_directive__["a" /* DraggableDirective */],
            __WEBPACK_IMPORTED_MODULE_45__directives_drag_drop_droppable_directive__["a" /* DroppableDirective */],
            __WEBPACK_IMPORTED_MODULE_46__components_test_bootstrap_gradients_bootstrap_gradients_component__["a" /* BootstrapGradientsComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_test_click_outside_click_outside_component__["a" /* ClickOutsideComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_modal_client_config_client_config_component__["a" /* ClientConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_50__components_routes_client_actions_popover_actions_popover_component__["a" /* ActionsPopoverComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7_app_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
            (__WEBPACK_IMPORTED_MODULE_35_environments_environment__["a" /* environment */].inMemAPI) ? __WEBPACK_IMPORTED_MODULE_33_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_34_app_services_data_api_in_memory_data_service__["a" /* InMemoryDataService */]) : [],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16_app_components_modal_client_config_by_comm_client_config_by_comm_component__["a" /* ClientConfigByCommComponent */],
            __WEBPACK_IMPORTED_MODULE_17_app_components_modal_addprogram_addprogram_component__["a" /* AddProgramComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_components_modal_editprogram_editprogram_component__["a" /* EditProgramComponent */],
            __WEBPACK_IMPORTED_MODULE_19_app_components_modal_deleteprogram_deleteprogram_component__["a" /* DeleteProgramComponent */],
            __WEBPACK_IMPORTED_MODULE_20_app_components_modal_program_config_by_comm_program_config_by_comm_component__["a" /* ProgramConfigByCommComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_modal_client_config_client_config_component__["a" /* ClientConfigComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26_app_services_data_api_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_27_app_services_data_api_client_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_28_app_services_data_api_client_configuration_client_configuration_service__["a" /* ClientConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_29_app_services_data_api_communication_communication_service__["a" /* CommunicationService */],
            __WEBPACK_IMPORTED_MODULE_30_app_services_data_api_program_program_service__["a" /* ProgramService */],
            __WEBPACK_IMPORTED_MODULE_31_app_services_data_api_program_configuration_program_configuration_service__["a" /* ProgramConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_32_app_services_sortable_column_service__["a" /* SortableColumnService */],
            __WEBPACK_IMPORTED_MODULE_43_app_services_drag_drop_service__["a" /* DragDropService */],
            { provide: __WEBPACK_IMPORTED_MODULE_5_app_app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_5_app_app_config__["b" /* AppConfig */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/dom-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var DomHelper = (function () {
    function DomHelper() {
    }
    /**
     * Polyfill for element.matches()
     * See: https://developer.mozilla.org/en/docs/Web/API/Element/matches#Polyfill
     * @param element
     * @param selectorName
     */
    DomHelper.matches = function (element, selectorName) {
        var proto = Element.prototype;
        var func = proto['matches'] ||
            proto.matchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector ||
            proto.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {
                }
                return i > -1;
            };
        return func.call(element, selectorName);
    };
    /**
     * Applies the specified css class on nativeElement
     * @param elementRef
     * @param className
     */
    DomHelper.addClass = function (elementRef, className) {
        var e = this.getElementWithValidClassList(elementRef);
        if (e) {
            e.classList.add(className);
        }
    };
    /**
     * Removes the specified class from nativeElement
     * @param elementRef
     * @param className
     */
    DomHelper.removeClass = function (elementRef, className) {
        var e = this.getElementWithValidClassList(elementRef);
        if (e) {
            e.classList.remove(className);
        }
    };
    /**
     * Gets element with valid classList
     *
     * @param elementRef
     * @returns ElementRef | null
     */
    DomHelper.getElementWithValidClassList = function (elementRef) {
        var e = elementRef instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] ? elementRef.nativeElement : elementRef;
        if (e.classList !== undefined && e.classList !== null) {
            return e;
        }
        return null;
    };
    return DomHelper;
}());

//# sourceMappingURL=dom-helper.js.map

/***/ }),

/***/ "../../../../../src/app/classes/drop-event.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropEvent; });
var DropEvent = (function () {
    function DropEvent(event, data) {
        this.nativeEvent = event;
        this.dragData = data;
    }
    return DropEvent;
}());

//# sourceMappingURL=drop-event.model.js.map

/***/ }),

/***/ "../../../../../src/app/classes/model/client-configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfiguration; });
var ClientConfiguration = (function () {
    function ClientConfiguration(clientConfig) {
        if (clientConfig) {
            this.name = clientConfig.name;
            this.chanEmailPriority = clientConfig.chanEmailPriority;
            this.chanIvrPriority = clientConfig.chanIvrPriority;
            this.chanSmsPriority = clientConfig.chanSmsPriority;
            this.chanMailPriority = clientConfig.chanMailPriority;
            this.chanMobilePriority = clientConfig.chanMobilePriority;
            this.chanMandatory = clientConfig.chanMandatory;
        }
        else {
            this.chanEmailPriority = 0;
            this.chanIvrPriority = 0;
            this.chanSmsPriority = 0;
            this.chanMailPriority = 0;
            this.chanMobilePriority = 0;
            this.chanMandatory = 'No';
        }
    }
    return ClientConfiguration;
}());

// https://stackoverflow.com/questions/4511705/how-to-parse-json-to-receive-a-date-object-in-javascript
// sample here to validate the model
var clientConfigSample = {
    'id': 1,
    'name': 'Prescription Alerts Order Status',
    'description': 'Order Status Client-level Configuration',
    'chanEmailPriority': 2,
    'chanIvrPriority': 3,
    'chanSmsPriority': 1,
    'chanMailPriority': 0,
    'chanMobilePriority': 0,
    'chanMandatory': 'Email',
    'effective': '2017-1-1',
    'expiration': '9999-12-31',
    'client': { 'id': 259,
        'code': 'BCC',
        'name': 'BLUE CROSS OF CONNECTICUT',
        'clientConfiguration': []
    },
    'communication': { 'id': 261,
        'name': 'Order Received',
        'description': 'Notifies a member when their order is received',
        'programConfiguration': [1],
        'clientConfiguration': []
    }
};
//# sourceMappingURL=client-configuration.js.map

/***/ }),

/***/ "../../../../../src/app/classes/model/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
/* unused harmony export ClientSortCriteria */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClientConfigAction; });
var Client = (function () {
    function Client() {
    }
    return Client;
}());

var ClientSortCriteria = (function () {
    function ClientSortCriteria() {
    }
    return ClientSortCriteria;
}());

var ClientConfigAction = (function () {
    function ClientConfigAction(id, type) {
        this.clientId = id;
        this.configType = type;
    }
    return ClientConfigAction;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ "../../../../../src/app/classes/model/communication.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Communication; });
/* unused harmony export CommunicationSortCriteria */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CommunicationConfigAction; });
var Communication = (function () {
    function Communication() {
    }
    return Communication;
}());

var CommunicationSortCriteria = (function () {
    function CommunicationSortCriteria() {
    }
    return CommunicationSortCriteria;
}());

var CommunicationConfigAction = (function () {
    function CommunicationConfigAction(id, type) {
        this.commId = id;
        this.configType = type;
    }
    return CommunicationConfigAction;
}());

//# sourceMappingURL=communication.js.map

/***/ }),

/***/ "../../../../../src/app/classes/model/program-configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfiguration; });
var ProgramConfiguration = (function () {
    function ProgramConfiguration(programConfig) {
        if (programConfig) {
            this.chanEmailPriority = programConfig.chanEmailPriority;
            this.name = programConfig.name;
            this.chanIvrPriority = programConfig.chanIvrPriority;
            this.chanSmsPriority = programConfig.chanSmsPriority;
            this.chanMailPriority = programConfig.chanMailPriority;
            this.chanMobilePriority = programConfig.chanMobilePriority;
            this.chanMandatory = programConfig.chanMandatory;
        }
        else {
            this.chanEmailPriority = 0;
            this.chanIvrPriority = 0;
            this.chanSmsPriority = 0;
            this.chanMailPriority = 0;
            this.chanMobilePriority = 0;
            this.chanMandatory = 'No';
        }
    }
    return ProgramConfiguration;
}());

// https://stackoverflow.com/questions/4511705/how-to-parse-json-to-receive-a-date-object-in-javascript
// sample here to validate the model
var programConfigSample = {
    'id': 1,
    'name': 'Prescription Alerts Order Status',
    'description': 'Order Status Program-level Configuration',
    'chanEmailPriority': 2,
    'chanIvrPriority': 3,
    'chanSmsPriority': 1,
    'chanMailPriority': 0,
    'chanMobilePriority': 0,
    'chanMandatory': 'Email',
    'effective': '2017-1-1',
    'expiration': '9999-12-31',
    'program': { 'id': 1,
        'name': 'Prescription Alerts',
        'description': 'PBM Communications including Order Status and Refill Reminder alerts',
        'programConfiguration': [1]
    },
    'communication': { 'id': 261,
        'name': 'Order Received',
        'description': 'Notifies a member when their order is received',
        'programConfiguration': [1],
        'clientConfiguration': []
    }
};
//# sourceMappingURL=program-configuration.js.map

/***/ }),

/***/ "../../../../../src/app/classes/model/program.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProgramConfigAction; });
var Program = (function () {
    function Program() {
    }
    return Program;
}());

var ProgramConfigAction = (function () {
    function ProgramConfigAction(id, type) {
        this.progId = id;
        this.configType = type;
    }
    return ProgramConfigAction;
}());

//# sourceMappingURL=program.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Yes, I totally stole this from Bram Borggreve\r\n  https://medium.com/@beeman/tutorial-add-bootstrap-to-angular-cli-apps-b0a652f2eb2\r\n-->\r\n<footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <span class=\"text-muted\">\r\n        {{customFooterText}} made with \r\n        <img src=\"assets/images/angular.svg\" style=\"width: 25px;\" title=\"Angular\"/>\r\n        <img src=\"assets/images/bootstrap-components.svg\" style=\"width: 25px;\" title=\"Bootstrap\"/>\r\n        <img src=\"assets/images/spring-leaf.png\" style=\"width: 20px;\" title=\"Spring Boot\"/>\r\n        and \r\n        <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color: red;\"></i> \r\n        by \r\n        <a href=\"https://github.com/fishstick22\" target=\"_blank\">\r\n          <img class=\"rounded\" src=\"assets/images/fishstick22.jpg\" \r\n            style=\"width: 20px;\" title=\"fishstick22\"/>\r\n      </a>\r\n      </span>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #f5f5f5;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FooterComponent.prototype, "customFooterText", void 0);
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/forms/date-eff-exp/date-eff-exp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateEffExpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_classes_model_program_configuration__ = __webpack_require__("../../../../../src/app/classes/model/program-configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateEffExpComponent = (function () {
    function DateEffExpComponent() {
        this.newDateValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DateEffExpComponent.prototype.ngOnInit = function () {
    };
    DateEffExpComponent.prototype.updateDateValue = function (newDate) {
        console.log('DateEffExpComponent updateDateValue: ', newDate.newDateValue);
        this.newDateValue.emit(newDate.newDateValue);
    };
    return DateEffExpComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DateEffExpComponent.prototype, "dateType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_classes_model_program_configuration__["a" /* ProgramConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_classes_model_program_configuration__["a" /* ProgramConfiguration */]) === "function" && _a || Object)
], DateEffExpComponent.prototype, "progConfig", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], DateEffExpComponent.prototype, "lastConfigRow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], DateEffExpComponent.prototype, "newDateValue", void 0);
DateEffExpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-date-eff-exp',
        template: "\n    <div *ngIf=\"!lastConfigRow\">\n      <!-- not the last (new) row, this could be the current effective row -->\n\n      <div *ngIf=\"dateType === 'effective'\" class=\"flex-justify-center\">\n        <!-- the effective date of the current effective row -->\n        <input class=\"form-control form-control-sm\" value=\"{{progConfig.effective}}\" readonly>\n      </div>\n\n      <div *ngIf=\"dateType === 'expiration'\" class=\"flex-justify-center\">\n        <!-- the expiration date of the current/previous row -->\n        <input class=\"form-control form-control-sm\" value=\"{{progConfig.expiration}}\" readonly>\n      </div>\n    </div>\n\n    <div *ngIf=\"lastConfigRow\" >\n      <!-- this _is_ the last (new) row that will be inserted -->\n\n      <div *ngIf=\"dateType === 'effective'\" class=\"flex-justify-center\">\n        <!-- set the effective date for the new row -->\n        <app-datepicker-popup [dateValue]=\"progConfig.effective\"\n          (newDateValue)=\"updateDateValue($event)\"></app-datepicker-popup></div>\n\n      <div *ngIf=\"dateType === 'expiration'\" class=\"flex-justify-center\">\n        <!-- the expiration date of the new row -->\n        <input class=\"form-control form-control-sm\" value=\"{{progConfig.expiration}}\" readonly>\n      </div>\n    </div>\n  ",
        // https://tutorialzine.com/2015/09/quick-tip-the-simplest-way-to-center-elements-vertically-and-horizontally
        styles: [
            '.flex-justify-center {display: flex; justify-content: center; align-items: center;}',
            'input { width: 80px; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], DateEffExpComponent);

var _a;
//# sourceMappingURL=date-eff-exp.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/forms/datepicker-popup/datepicker-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Datepicker should close when user clicks outside, tried
// https://github.com/ng-bootstrap/ng-bootstrap/issues/933
// https://github.com/arkon/ng-click-outside
var DatepickerPopupComponent = (function () {
    function DatepickerPopupComponent() {
        this.countInside = 0;
        this.countOutside = 0;
        this.attachOutsideOnClick = true;
        this.delayClickOutsideInit = false;
        this.clickOutsideEvents = 'click';
        this.exclude = 'ngb-datepicker, .btn-light';
        this.excludeBeforeClick = false;
        this.newDateValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DatepickerPopupComponent.prototype.ngOnInit = function () {
        console.log('DatePickerPopup datevalue: ', this.dateValue);
        var inputDate = new Date(this.dateValue);
        this.dateModel = { day: inputDate.getUTCDate(), month: inputDate.getUTCMonth() + 1, year: inputDate.getUTCFullYear() };
    };
    DatepickerPopupComponent.prototype.saveDate = function (newDateValue) {
        var newDate = (newDateValue) ?
            newDateValue.year + '-' + newDateValue.month + '-' + newDateValue.day :
            '';
        console.log('DatepickerPopupComponent saveDate: ', newDate);
        this.newDateValue.emit({
            newDateValue: newDate
        });
    };
    DatepickerPopupComponent.prototype.onClick = function (e) {
        console.log('Clicked inside:', e);
        // this.countInside++;
    };
    DatepickerPopupComponent.prototype.onClickedOutside = function (e, d) {
        console.log('Clicked outside:', e);
        d.close();
        // this.countOutside++;
    };
    return DatepickerPopupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DatepickerPopupComponent.prototype, "dateValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], DatepickerPopupComponent.prototype, "required", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], DatepickerPopupComponent.prototype, "newDateValue", void 0);
DatepickerPopupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-datepicker-popup',
        template: "\n  <div class=\"col-xs-2\"\n    (click)=\"onClick($event)\"\n    (appClickOutside)=\"onClickedOutside($event, d)\"\n    [attachOutsideOnClick]=\"attachOutsideOnClick\"\n    [delayClickOutsideInit]=\"delayClickOutsideInit\"\n    [clickOutsideEvents]=\"clickOutsideEvents\"\n    [exclude]=\"exclude\"\n    [excludeBeforeClick]=\"excludeBeforeClick\">\n\n    <input name=\"dp\" [(ngModel)]=\"dateModel\" class=\"form-control form-control-sm\" placeholder=\"yyyy-mm-dd\"\n           (click)=\"d.toggle()\" (ngModelChange)=\"saveDate($event)\" ngbDatepicker #d=\"ngbDatepicker\"\n           [required]=\"required\">\n<!--\n    <button class=\"input-group-addon\" (click)=\"d.toggle()\"  type=\"button\">\n      <img src=\"assets/images/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n    </button>\n-->\n<!-- for debugging\n    <p>inside: {{countInside}}</p>\n    <p>outside: {{countOutside}}</p> -->\n   </div>\n\n  ",
        styles: [
            'input { width: 80px; }',
            'input:focus { width: 82px; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], DatepickerPopupComponent);

//# sourceMappingURL=datepicker-popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/forms/select-channel-mandatory/select-channel-mandatory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectChannelMandatoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () {
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return SelectChannelMandatoryComponent; }),
    multi: true
};
var SelectChannelMandatoryComponent = (function () {
    function SelectChannelMandatoryComponent() {
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.chanMandatoryOpts = ['No', 'Email', 'IVR', 'SMS'];
        this.innerValue = '';
    }
    SelectChannelMandatoryComponent.prototype.ngOnInit = function () {
        console.log('SelectChannelMandatoryComponent:', this.id, this.name);
    };
    Object.defineProperty(SelectChannelMandatoryComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Set touched on blur
    SelectChannelMandatoryComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    // From ControlValueAccessor interface
    SelectChannelMandatoryComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // From ControlValueAccessor interface
    SelectChannelMandatoryComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    SelectChannelMandatoryComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return SelectChannelMandatoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SelectChannelMandatoryComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SelectChannelMandatoryComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SelectChannelMandatoryComponent.prototype, "actualStaticValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], SelectChannelMandatoryComponent.prototype, "lastConfigRow", void 0);
SelectChannelMandatoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-select-channel-mandatory',
        template: "\n  <div *ngIf=\"!lastConfigRow\" class=\"flex-justify-right\">\n    <select id=\"{{id}}_{{name}}\" name=\"{{name}}\" value=\"actualStaticValue\" required\n      class=\"form-control form-control-sm\" readonly>\n      <option value=\"actualStaticValue\">{{actualStaticValue}}</option>\n    </select>\n  </div>\n  <div *ngIf=\"lastConfigRow\" class=\"flex-justify-right\">\n    <select id=\"{{id}}_{{name}}\" name=\"{{name}}\" [(ngModel)]=\"value\" required\n      class=\"form-control form-control-sm\" (blur)=\"onBlur()\">\n      <option *ngFor=\"let cmo of chanMandatoryOpts\" [ngValue]=\"cmo\">{{cmo}}</option>\n    </select>\n  </div>\n  ",
        styles: [
            '.flex-justify-center {display: flex; justify-content: center; align-items: center;}',
            '.flex-justify-right {display: flex; justify-content: flex-end; align-items: right;}'
        ],
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], SelectChannelMandatoryComponent);

//# sourceMappingURL=select-channel-mandatory.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/forms/select-channel-priority/select-channel-priority.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectChannelPriorityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () {
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return SelectChannelPriorityComponent; }),
    multi: true
};
var SelectChannelPriorityComponent = (function () {
    function SelectChannelPriorityComponent() {
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.channelPriortyOpts = [0, 1, 2, 3];
        // http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
        // The internal data model
        this.innerValue = '';
    }
    SelectChannelPriorityComponent.prototype.ngOnInit = function () {
        // console.log("SelectChannelPriorityComponent ");
        // console.log("name: ", this.name);
        // console.log("priority: ", this.priority);
        // console.log("i: ", this.i);
        // console.log("lastPgmConfigRow: ", this.lastPgmConfigRow);
    };
    Object.defineProperty(SelectChannelPriorityComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Set touched on blur
    SelectChannelPriorityComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    // From ControlValueAccessor interface
    SelectChannelPriorityComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // From ControlValueAccessor interface
    SelectChannelPriorityComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    SelectChannelPriorityComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return SelectChannelPriorityComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SelectChannelPriorityComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SelectChannelPriorityComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SelectChannelPriorityComponent.prototype, "actualStaticValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], SelectChannelPriorityComponent.prototype, "lastConfigRow", void 0);
SelectChannelPriorityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-select-channel-priority',
        template: "\n  <div *ngIf=\"lastConfigRow\" class=\"flex-justify-right\">\n    <select id=\"{{id}}\" name=\"{{name}}\" [(ngModel)]=\"value\" required\n      class=\"form-control form-control-sm\" (blur)=\"onBlur()\">\n      <option *ngFor=\"let cpo of channelPriortyOpts\" [ngValue]=\"cpo\">{{cpo}}</option>\n    </select>\n  </div>\n  <div *ngIf=\"!lastConfigRow\" class=\"flex-justify-right\">\n    <select id=\"{{id}}\" name=\"{{name}}\" value=\"actualStaticValue\" required\n      class=\"form-control form-control-sm\" disabled>\n      <option value=\"actualStaticValue\">{{actualStaticValue}}</option>\n    </select>\n  </div>\n  ",
        // https://tutorialzine.com/2015/09/quick-tip-the-simplest-way-to-center-elements-vertically-and-horizontally
        styles: [
            '.flex-justify-center {display: flex; justify-content: center; align-items: center;}',
            '.flex-justify-right {display: flex; justify-content: flex-end; align-items: right;}'
        ],
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], SelectChannelPriorityComponent);

//# sourceMappingURL=select-channel-priority.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/addprogram/addprogram.component.html":
/***/ (function(module, exports) {

module.exports = "<form #programForm=\"ngForm\" (ngSubmit)=\"saveProgram()\" >\r\n  <!--input type=\"hidden\" name=\"id\" [(ngModel)]=\"program.id\" id=\"newProgramId\"-->\r\n  <div class=\"modal-header bg-gradient-dark text-white\">\r\n    <h4 class=\"modal-title text-white\">Add New Program</h4>\r\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"addProgramModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n      <label for=\"programName\">Program Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"program.name\" required\r\n          id=\"programName\" aria-describedby=\"programNamelHelp\" placeholder=\"Enter Program Name\">\r\n        <small id=\"programNamelHelp\" class=\"form-text text-muted\">Short Name of the Program.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"programDescription\">Program Description</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"program.description\" required\r\n          id=\"programDescription\" aria-describedby=\"programDescriptionlHelp\" placeholder=\"Enter Program Description\">\r\n        <small id=\"programDescriptionlHelp\" class=\"form-text text-muted\">Brief Description of the Program.</small>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programForm.valid\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"addProgramModal.close('Close click')\">Close</button>\r\n  </div>\r\n</form>  "

/***/ }),

/***/ "../../../../../src/app/components/modal/addprogram/addprogram.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal/addprogram/addprogram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddProgramComponent = (function () {
    function AddProgramComponent(addProgramModal) {
        this.addProgramModal = addProgramModal;
        this.SAVESUCCESS = 'Close on succesful save';
    }
    AddProgramComponent.prototype.ngOnInit = function () {
        this.program = { id: this.programId, name: undefined, description: undefined, programConfiguration: [] };
        console.log('AddProgramComponent init: ' + this.program);
    };
    AddProgramComponent.prototype.saveProgram = function () {
        console.log('AddProgramComponent save');
        this.addProgramModal.close({ resultTxt: this.SAVESUCCESS, resultObj: this.program });
    };
    return AddProgramComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AddProgramComponent.prototype, "programId", void 0);
AddProgramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-addprogram',
        template: __webpack_require__("../../../../../src/app/components/modal/addprogram/addprogram.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modal/addprogram/addprogram.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object])
], AddProgramComponent);

var _a;
//# sourceMappingURL=addprogram.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/client-config-by-comm/client-config-by-comm.component.html":
/***/ (function(module, exports) {

module.exports = "<form #clientConfigurationViaCommunicationForm=\"ngForm\" \n(ngSubmit)=\"saveClientConfiguration()\" >\n\n  <div class=\"modal-header bg-gradient-dark\">\n    <h4 class=\"modal-title text-white\">\n      Configure Client(s)\n      <small>for CommId {{communication.id}}: {{communication.name}}</small>\n    </h4>\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"configureClientModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n    \n  <div class=\"modal-body\">\n    <div id=\"configuredClients\">\n\n\n            <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\n              <caption></caption>\n              <thead class=\"bg-gradient-dark text-white\">\n                <tr>\n                  <th>ID</th>\n                  <th>C<small>ode</small></th>\n                  <th>N<small>ame</small></th>\n                  <th>E<small>mail</small></th>\n                  <th>IVR</th>\n                  <th>SMS</th>\n                  <th>M<small>ail</small></th>\n                  <th>M<small>obile</small></th>\n                  <th>M<small>andatory</small></th>\n                  <th>E<small>ffective</small></th>\n                  <th>E<small>xpiration</small></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr appDroppable *ngFor=\"let cc of clientConfigurations; let i = index\"\n                    [dragOverClass]=\"'drag-target-border'\" [dragHintClass]=\"'drag-hint'\"\n                    [dropEnabled]=\"i === lastClientConfigRow && !cc.client.id\"\n                    \n                    (onDrop)=\"clientDrop($event)\"\n                    [class.table-info]=\"i == lastClientConfigRow\"> \n                  \n                  <td>\n                    <span *ngIf=\"i !== lastClientConfigRow\" class=\"badge badge-secondary\">{{cc.client.id}}</span>\n                    <span *ngIf=\"i === lastClientConfigRow && !cc.client.id\">\n                      <i class=\"fa fa-file-o clickable\" aria-hidden=\"true\" \n                         title=\"New Client configuration for {{communication.name}}\"></i></span>\n                    <span *ngIf=\"i === lastClientConfigRow && cc.client.id\" class=\"badge badge-primary\">{{cc.client.id}}</span>\n                  </td>\n                  <td><span >{{cc.client.code}}</span></td>\n                  <td width=\"18%\"><span >{{cc.client.name}}</span></td>\n                  <td><app-select-channel-priority \n                        id=\"chanEmailPriority\" name=\"chanEmailPriority\" \n                        [(ngModel)]=\"cc.chanEmailPriority\"\n                        [actualStaticValue]=\"cc.chanEmailPriority\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>\n                  <td><app-select-channel-priority \n                        id=\"chanIvrPriority\" name=\"chanIvrPriority\" \n                        [(ngModel)]=\"cc.chanIvrPriority\"\n                        [actualStaticValue]=\"cc.chanIvrPriority\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>\n                  <td><app-select-channel-priority \n                        id=\"chanSmsPriority\" name=\"chanSmsPriority\" \n                        [(ngModel)]=\"cc.chanSmsPriority\"\n                        [actualStaticValue]=\"cc.chanSmsPriority\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>  \n                  <td><app-select-channel-priority \n                        id=\"chanMailPriority\" name=\"chanMailPriority\" \n                        [(ngModel)]=\"cc.chanMailPriority\"\n                        [actualStaticValue]=\"cc.chanMailPriority\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td> \n                  <td><app-select-channel-priority \n                        id=\"chanMobilePriority\" name=\"chanMobilePriority\" \n                        [(ngModel)]=\"cc.chanMobilePriority\"\n                        [actualStaticValue]=\"cc.chanMobilePriority\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td> \n                  <td><app-select-channel-mandatory\n                        id=\"chanMandatory\" name=\"chanMandatory\" \n                        [(ngModel)]=\"cc.chanMandatory\"\n                        [actualStaticValue]=\"cc.chanMandatory\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-mandatory></td>\n                  <td><app-date-eff-exp\n                        dateType=\"effective\" [progConfig]=\"cc\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\"\n                        (newDateValue)=\"updateDateValue($event, cc, 'effective')\"></app-date-eff-exp></td>\n                  <td><app-date-eff-exp\n                        dateType=\"expiration\" [progConfig]=\"cc\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\"\n                        (newDateValue)=\"updateDateValue($event, cc, 'expiration')\"></app-date-eff-exp></td>\n                </tr>\n                <tr *ngIf=\"configureState === 'start'\">\n                  <td>\n                    <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \n                      (click)=\"addClientConfig()\" title=\"Add New Client Configuration to {{communication.name}}\"></i>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n    </div>\n\n    <div id=ActionTable>\n\n      <app-client-action-table  *ngIf=\"configureState === 'pick'\" \n        [clients]=\"clients\"\n        [displayClient]=\"displayClient\"\n        [displayCommunication]=\"communication.name\"\n        [showClientId]=\"true\"\n        [showClientCode]=\"true\"\n        [showClientName]=\"true\"\n        [showStatus]=\"false\"\n        [showAction]=\"false\"\n        (selRowOut)=\"setClickedRow($event)\"\n        (clientConfigAction)=\"configureClient($event)\"\n        (selectedClient)=\"addClientConfig($event)\">\n      </app-client-action-table>\n\n    </div>\n\n  </div>\n\n  <div class=\"modal-footer\">\n    <div class=\"w-100\">\n      <span class=\"float-left\">Some instructional content or condition message goes here: </span>\n      <div class=\"float-right\">\n          <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!clientConfigurationViaCommunicationForm.valid\">Save</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"configureClientModal.close('Close click')\">Cancel</button>\n      </div>\n    </div>\n    \n  </div>\n  \n</form>"

/***/ }),

/***/ "../../../../../src/app/components/modal/client-config-by-comm/client-config-by-comm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scroll-list {\n  overflow: auto;\n  max-height: 70vh; }\n\n.drag-over {\n  border: #ff525b dashed 2px; }\n\n.drag-hint {\n  border: #ffc100 dashed 2px; }\n\n.drag-target-border {\n  border: #00bfff dashed 2px; }\n\n.drag-target-border-green {\n  border: #3c763d dashed 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal/client-config-by-comm/client-config-by-comm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfigByCommComponent; });
/* unused harmony export ClientConfigModalResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_classes_model_client__ = __webpack_require__("../../../../../src/app/classes/model/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes_model_client_configuration__ = __webpack_require__("../../../../../src/app/classes/model/client-configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_classes_model_communication__ = __webpack_require__("../../../../../src/app/classes/model/communication.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientConfigByCommComponent = (function () {
    function ClientConfigByCommComponent(configureClientModal) {
        this.configureClientModal = configureClientModal;
        this.SAVESUCCESS = 'Close on succesful save';
        this.clientDropEnabled = false;
    }
    ClientConfigByCommComponent.prototype.ngOnInit = function () {
        console.log('ClientConfigByCommComponent init: ');
        console.log(this.communication);
        console.log(this.clients);
        console.log(this.clientConfigurations);
        this.displayClient = [];
        this.configureState = 'start';
    };
    ClientConfigByCommComponent.prototype.addClientConfig = function (client) {
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        if (this.newClientConfig && this.configureState === 'pick') {
            this.newClientConfig.client = client;
            this.configureState = 'configure';
        }
        if (this.configureState === 'start') {
            this.newClientConfig = new __WEBPACK_IMPORTED_MODULE_3_app_classes_model_client_configuration__["a" /* ClientConfiguration */]();
            this.newClientConfig.effective = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
            this.newClientConfig.expiration = '9999-12-31';
            this.newClientConfig.client = new __WEBPACK_IMPORTED_MODULE_2_app_classes_model_client__["a" /* Client */]();
            this.newClientConfig.communication = this.communication;
            this.lastClientConfigRow = this.clientConfigurations.length;
            this.clientConfigurations[this.clientConfigurations.length] = this.newClientConfig;
            this.configureState = 'pick';
            this.clientDropEnabled = true;
        }
    };
    ClientConfigByCommComponent.prototype.clientDrop = function (dragEvent) {
        console.log('ClientConfigByCommComponent clientDrop: ', dragEvent);
        if (dragEvent.dragData && typeof (dragEvent.dragData.id) === 'number') {
            this.addClientConfig(this.findClient(dragEvent.dragData.id));
        }
    };
    ClientConfigByCommComponent.prototype.updateDateValue = function (newDateValue, cc, dateType) {
        console.log('ClientConfigByCommComponent updateDateValue: ', newDateValue, cc, dateType);
        if (dateType === 'effective') {
            cc.effective = newDateValue;
        }
        if (dateType === 'expiration') {
            cc.expiration = newDateValue;
        }
    };
    ClientConfigByCommComponent.prototype.saveClientConfiguration = function () {
        console.log('ClientConfigByCommComponent save');
        console.log(this.newClientConfig, ' client id: ', this.selectedClient);
        var modalResult = {
            newClientConfig: this.newClientConfig
        };
        this.configureClientModal.close({ resultTxt: this.SAVESUCCESS, modalResult: modalResult });
    };
    ClientConfigByCommComponent.prototype.findClient = function (id) {
        return this.clients.find(function (c) { return c.id === id; });
    };
    return ClientConfigByCommComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_classes_model_communication__["a" /* Communication */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_classes_model_communication__["a" /* Communication */]) === "function" && _a || Object)
], ClientConfigByCommComponent.prototype, "communication", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ClientConfigByCommComponent.prototype, "clients", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ClientConfigByCommComponent.prototype, "clientConfigurations", void 0);
ClientConfigByCommComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // selector: 'app-client-config-by-comm', Entry Component needs no selector!
        template: __webpack_require__("../../../../../src/app/components/modal/client-config-by-comm/client-config-by-comm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modal/client-config-by-comm/client-config-by-comm.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _b || Object])
], ClientConfigByCommComponent);

var ClientConfigModalResult = (function () {
    function ClientConfigModalResult() {
    }
    return ClientConfigModalResult;
}());

var _a, _b;
//# sourceMappingURL=client-config-by-comm.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/client-config/client-config.component.html":
/***/ (function(module, exports) {

module.exports = "<form #clientConfigurationForm=\"ngForm\" \n(ngSubmit)=\"saveClientConfiguration()\" >\n\n  <div class=\"modal-header bg-gradient-dark\">\n    <h4 class=\"modal-title text-white\">\n      Configure Communication(s)\n      <small>for ClientId {{client.id}}: {{client.name}}</small>\n    </h4>\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"configureClientModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n    \n  <div class=\"modal-body\">\n    <div id=\"configuredClients\">\n\n            <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\n              <caption></caption>\n              <thead class=\"bg-gradient-dark text-white\">\n                <tr>\n                  <th>ID</th>\n                  <th>N<small>ame</small></th>\n                  <th>E<small>mail</small></th>\n                  <th>IVR</th>\n                  <th>SMS</th>\n                  <th>M<small>ail</small></th>\n                  <th>M<small>obile</small></th>\n                  <th>M<small>andatory</small></th>\n                  <th>E<small>ffective</small></th>\n                  <th>E<small>xpiration</small></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr appDroppable *ngFor=\"let cc of clientConfigurations; let i = index\"\n                    [dragOverClass]=\"'drag-target-border'\" [dragHintClass]=\"'drag-hint'\"\n                    [dropEnabled]=\"i === lastClientConfigRow && !cc.communication.id\"\n                    \n                    (onDrop)=\"communicationDrop($event)\"\n                    [class.table-info]=\"i == lastClientConfigRow\"> \n                  \n                  <td>\n                    <span *ngIf=\"i !== lastClientConfigRow\" class=\"badge badge-secondary\">{{cc.communication.id}}</span>\n                    <span *ngIf=\"i === lastClientConfigRow && !cc.communication.id\">\n                      <i class=\"fa fa-file-o clickable\" aria-hidden=\"true\" \n                         title=\"New Client configuration for {{cc.communication.name}}\"></i></span>\n                    <span *ngIf=\"i === lastClientConfigRow && cc.communication.id\" class=\"badge badge-primary\">{{cc.communication.id}}</span>\n                  </td>\n                  <td width=\"18%\"><span >{{cc.communication.name}}</span></td>\n                  <td><app-select-channel-priority \n                        id=\"chanEmailPriority\" name=\"chanEmailPriority\" \n                        [(ngModel)]=\"cc.chanEmailPriority\"\n                        [actualStaticValue]=\"cc.chanEmailPriority\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>\n                  <td><app-select-channel-priority \n                        id=\"chanIvrPriority\" name=\"chanIvrPriority\" \n                        [(ngModel)]=\"cc.chanIvrPriority\"\n                        [actualStaticValue]=\"cc.chanIvrPriority\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>\n                  <td><app-select-channel-priority \n                        id=\"chanSmsPriority\" name=\"chanSmsPriority\" \n                        [(ngModel)]=\"cc.chanSmsPriority\"\n                        [actualStaticValue]=\"cc.chanSmsPriority\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>  \n                  <td><app-select-channel-priority \n                        id=\"chanMailPriority\" name=\"chanMailPriority\" \n                        [(ngModel)]=\"cc.chanMailPriority\"\n                        [actualStaticValue]=\"cc.chanMailPriority\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td> \n                  <td><app-select-channel-priority \n                        id=\"chanMobilePriority\" name=\"chanMobilePriority\" \n                        [(ngModel)]=\"cc.chanMobilePriority\"\n                        [actualStaticValue]=\"cc.chanMobilePriority\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td> \n                  <td><app-select-channel-mandatory\n                        id=\"chanMandatory\" name=\"chanMandatory\" \n                        [(ngModel)]=\"cc.chanMandatory\"\n                        [actualStaticValue]=\"cc.chanMandatory\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-mandatory></td>\n                  <td><app-date-eff-exp\n                        dateType=\"effective\" [progConfig]=\"cc\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\"\n                        (newDateValue)=\"updateDateValue($event, cc, 'effective')\"></app-date-eff-exp></td>\n                  <td><app-date-eff-exp\n                        dateType=\"expiration\" [progConfig]=\"cc\"\n                        [lastConfigRow]=\"i === lastClientConfigRow\"\n                        (newDateValue)=\"updateDateValue($event, cc, 'expiration')\"></app-date-eff-exp></td>\n                </tr>\n                <tr *ngIf=\"configureState === 'start'\">\n                  <td>\n                    <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \n                      (click)=\"addClientConfig()\" title=\"Add New Client Configuration to {{client.name}}\"></i>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n    </div>\n\n    <div id=ActionTable>\n\n      <app-comm-action-table *ngIf=\"configureState === 'pick'\" \n        [communications]=\"communications\"\n        [displayComm]=\"displayComm\"\n        [displayCommStartEmpty]=\"true\"\n        [displayClient]=\"client.name\"\n        [showCommId]=\"true\"\n        [showCommName]=\"true\"\n        [showCommDesc]=\"true\"\n        [showStatus]=\"false\"\n        [showAction]=\"false\"\n        (selRowOut)=\"setClickedRow($event)\"\n        (selectedCommunication)=\"addClientConfig($event)\"\n        (commConfigAction)=\"configureCommunication($event)\">\n      </app-comm-action-table>\n\n    </div>\n\n  </div>\n\n  <div class=\"modal-footer\">\n    <div class=\"w-100\">\n      <span class=\"float-left\">Some instructional content or condition message goes here: </span>\n      <div class=\"float-right\">\n          <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!clientConfigurationForm.valid\">Save</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"configureClientModal.close('Close click')\">Cancel</button>\n      </div>\n    </div>\n    \n  </div>\n  \n</form>"

/***/ }),

/***/ "../../../../../src/app/components/modal/client-config/client-config.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scroll-list {\n  overflow: auto;\n  max-height: 70vh; }\n\n.drag-over {\n  border: #ff525b dashed 2px; }\n\n.drag-hint {\n  border: #ffc100 dashed 2px; }\n\n.drag-target-border {\n  border: #00bfff dashed 2px; }\n\n.drag-target-border-green {\n  border: #3c763d dashed 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal/client-config/client-config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfigComponent; });
/* unused harmony export ClientConfigModalResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_classes_model_client__ = __webpack_require__("../../../../../src/app/classes/model/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes_model_client_configuration__ = __webpack_require__("../../../../../src/app/classes/model/client-configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_classes_model_communication__ = __webpack_require__("../../../../../src/app/classes/model/communication.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientConfigComponent = (function () {
    function ClientConfigComponent(configureClientModal) {
        this.configureClientModal = configureClientModal;
        this.SAVESUCCESS = 'Close on succesful save';
        this.clientDropEnabled = false;
    }
    ClientConfigComponent.prototype.ngOnInit = function () {
        console.log('ClientConfigComponent onInit...');
        console.log(this.client);
        console.log(this.communications);
        console.log(this.clientConfigurations);
        this.displayCommStartEmpty = true;
        this.displayComm = [];
        this.configureState = 'start';
    };
    ClientConfigComponent.prototype.addClientConfig = function (communication) {
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        if (this.newClientConfig && this.configureState === 'pick') {
            this.newClientConfig.communication = communication;
            this.configureState = 'configure';
        }
        if (this.configureState === 'start') {
            this.newClientConfig = new __WEBPACK_IMPORTED_MODULE_3_app_classes_model_client_configuration__["a" /* ClientConfiguration */]();
            this.newClientConfig.effective = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
            this.newClientConfig.expiration = '9999-12-31';
            this.newClientConfig.client = this.client;
            this.newClientConfig.communication = new __WEBPACK_IMPORTED_MODULE_4_app_classes_model_communication__["a" /* Communication */]();
            this.lastClientConfigRow = this.clientConfigurations.length;
            this.clientConfigurations[this.clientConfigurations.length] = this.newClientConfig;
            this.configureState = 'pick';
            this.clientDropEnabled = true;
        }
    };
    ClientConfigComponent.prototype.communicationDrop = function (dragEvent) {
        console.log('ClientConfigComponent clientDrop: ', dragEvent);
        if (dragEvent.dragData && typeof (dragEvent.dragData.id) === 'number') {
            this.addClientConfig(this.findCommunication(dragEvent.dragData.id));
        }
    };
    ClientConfigComponent.prototype.updateDateValue = function (newDateValue, cc, dateType) {
        console.log('ClientConfigComponent updateDateValue: ', newDateValue, cc, dateType);
        if (dateType === 'effective') {
            cc.effective = newDateValue;
        }
        if (dateType === 'expiration') {
            cc.expiration = newDateValue;
        }
    };
    ClientConfigComponent.prototype.saveClientConfiguration = function () {
        console.log('ClientConfigComponent save');
        console.log(this.newClientConfig, ' client id: ', this.client);
        var modalResult = {
            newClientConfig: this.newClientConfig
        };
        this.configureClientModal.close({ resultTxt: this.SAVESUCCESS, modalResult: modalResult });
    };
    ClientConfigComponent.prototype.findCommunication = function (id) {
        return this.communications.find(function (c) { return c.id === id; });
    };
    ClientConfigComponent.prototype.setClickedRow = function (index) {
        this.selectedRow = index;
    };
    return ClientConfigComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_classes_model_client__["a" /* Client */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_classes_model_client__["a" /* Client */]) === "function" && _a || Object)
], ClientConfigComponent.prototype, "client", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ClientConfigComponent.prototype, "communications", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ClientConfigComponent.prototype, "clientConfigurations", void 0);
ClientConfigComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // selector: 'app-client-config',
        template: __webpack_require__("../../../../../src/app/components/modal/client-config/client-config.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modal/client-config/client-config.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _b || Object])
], ClientConfigComponent);

var ClientConfigModalResult = (function () {
    function ClientConfigModalResult() {
    }
    return ClientConfigModalResult;
}());

var _a, _b;
//# sourceMappingURL=client-config.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/deleteprogram/deleteprogram.component.html":
/***/ (function(module, exports) {

module.exports = "<form #programForm=\"ngForm\" (ngSubmit)=\"deleteProgram()\" >\r\n  <!--input type=\"hidden\" name=\"id\" [(ngModel)]=\"program.id\" id=\"programId\"-->\r\n  <div class=\"modal-header bg-gradient-dark text-white\">\r\n    <h4 class=\"modal-title text-white\">Delete Program</h4>\r\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"deleteProgramModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n      <label for=\"programName\">Program Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"program.name\" required [disabled]=\"true\"\r\n          id=\"programName\" aria-describedby=\"programNamelHelp\" placeholder=\"Enter Program Name\">\r\n        <small id=\"programNamelHelp\" class=\"form-text text-muted\">Short Name of the Program.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"programDescription\">Program Description</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"program.description\" required [disabled]=\"true\"\r\n          id=\"programDescription\" aria-describedby=\"programDescriptionlHelp\" placeholder=\"Enter Program Description\">\r\n        <small id=\"programDescriptionlHelp\" class=\"form-text text-muted\">Brief Description of the Program.</small>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programForm.valid\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"deleteProgramModal.close('Close click')\">Close</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/modal/deleteprogram/deleteprogram.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal/deleteprogram/deleteprogram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_classes_model_program__ = __webpack_require__("../../../../../src/app/classes/model/program.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteProgramComponent = (function () {
    function DeleteProgramComponent(deleteProgramModal) {
        this.deleteProgramModal = deleteProgramModal;
        this.SAVESUCCESS = 'Close on succesful save';
    }
    DeleteProgramComponent.prototype.ngOnInit = function () {
        console.log('DeleteProgramComponent init: ' + this.program);
    };
    DeleteProgramComponent.prototype.deleteProgram = function () {
        console.log('DeleteProgramComponent save');
        this.deleteProgramModal.close({ resultTxt: this.SAVESUCCESS, resultObj: this.program });
    };
    return DeleteProgramComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_classes_model_program__["a" /* Program */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_classes_model_program__["a" /* Program */]) === "function" && _a || Object)
], DeleteProgramComponent.prototype, "program", void 0);
DeleteProgramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-deleteprogram',
        template: __webpack_require__("../../../../../src/app/components/modal/deleteprogram/deleteprogram.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modal/deleteprogram/deleteprogram.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _b || Object])
], DeleteProgramComponent);

var _a, _b;
//# sourceMappingURL=deleteprogram.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/editprogram/editprogram.component.html":
/***/ (function(module, exports) {

module.exports = "<form #programForm=\"ngForm\" (ngSubmit)=\"saveProgram()\" >\r\n  <!--input type=\"hidden\" name=\"id\" [(ngModel)]=\"program.id\" id=\"programId\"-->\r\n  <div class=\"modal-header bg-gradient-dark text-white\">\r\n    <h4 class=\"modal-title text-white\">Edit Program</h4>\r\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"editProgramModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n      <label for=\"programName\">Program Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"program.name\" required\r\n          id=\"programName\" aria-describedby=\"programNamelHelp\" placeholder=\"Enter Program Name\">\r\n        <small id=\"programNamelHelp\" class=\"form-text text-muted\">Short Name of the Program.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"programDescription\">Program Description</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"program.description\" required\r\n          id=\"programDescription\" aria-describedby=\"programDescriptionlHelp\" placeholder=\"Enter Program Description\">\r\n        <small id=\"programDescriptionlHelp\" class=\"form-text text-muted\">Brief Description of the Program.</small>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programForm.valid\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"editProgramModal.close('Close click')\">Close</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/modal/editprogram/editprogram.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal/editprogram/editprogram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_classes_model_program__ = __webpack_require__("../../../../../src/app/classes/model/program.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProgramComponent = (function () {
    function EditProgramComponent(editProgramModal) {
        this.editProgramModal = editProgramModal;
        this.SAVESUCCESS = 'Close on succesful save';
    }
    EditProgramComponent.prototype.ngOnInit = function () {
        console.log('EditProgramComponent init: ' + this.program);
    };
    EditProgramComponent.prototype.saveProgram = function () {
        console.log('EditProgramComponent save');
        this.editProgramModal.close({ resultTxt: this.SAVESUCCESS, resultObj: this.program });
    };
    return EditProgramComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_classes_model_program__["a" /* Program */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_classes_model_program__["a" /* Program */]) === "function" && _a || Object)
], EditProgramComponent.prototype, "program", void 0);
EditProgramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editprogram',
        template: __webpack_require__("../../../../../src/app/components/modal/editprogram/editprogram.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modal/editprogram/editprogram.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _b || Object])
], EditProgramComponent);

var _a, _b;
//# sourceMappingURL=editprogram.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/program-config-by-comm/program-config-by-comm.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <form #programConfigurationViaCommunicationForm=\"ngForm\" \r\n    (ngSubmit)=\"saveProgramConfiguration()\" >\r\n\r\n    <div class=\"modal-header bg-gradient-dark\">\r\n      <h4 class=\"modal-title text-white\">\r\n        Configure Program\r\n        <small>for CommId {{communication.id}}: {{communication.name}}</small>\r\n      </h4>\r\n      <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"configureProgramModal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    \r\n    <div class=\"modal-body\">\r\n\r\n      <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n        <caption></caption>\r\n        <thead class=\"bg-gradient-dark text-white\">\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>N<small>ame</small></th>\r\n            <th>E<small>mail</small></th>\r\n            <th>IVR</th>\r\n            <th>SMS</th>\r\n            <th>M<small>ail</small></th>\r\n            <th>M<small>obile</small></th>\r\n            <th>M<small>andatory</small></th>\r\n            <th>E<small>ffective</small></th>\r\n            <th>E<small>xpiration</small></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let pc of programConfigurations; let i = index\" \r\n              [class.table-info]=\"i == lastPgmConfigRow\">\r\n            <td>\r\n              <span *ngIf=\"i !== lastPgmConfigRow\" class=\"badge badge-secondary\">{{pc.id}}</span>\r\n              <span *ngIf=\"i === lastPgmConfigRow\">\r\n                  <i class=\"fa fa-file-o clickable\" aria-hidden=\"true\" \r\n                     title=\"New Program configuration for {{communication.name}}\"></i></span></td>\r\n            <td>\r\n              <span *ngIf=\"i !== lastPgmConfigRow\">\r\n                <input type=\"text\" class=\"form-control form-control-sm\" name=\"name\" [(ngModel)]=\"pc.name\" readonly\r\n                       id=\"pgmConfigName\" aria-describedby=\"pgmConfigNameHelp\" placeholder=\"Enter Program Configuration Name\"></span>\r\n              <span *ngIf=\"i === lastPgmConfigRow\">\r\n                <input type=\"text\" class=\"form-control form-control-sm\" name=\"name\" [(ngModel)]=\"pc.name\" required\r\n                       id=\"pgmConfigName\" aria-describedby=\"pgmConfigNameHelp\" placeholder=\"Enter Program Configuration Name\"></span></td>\r\n            <td><app-select-channel-priority id=\"chanEmailPriority\" name=\"chanEmailPriority\" \r\n                  [(ngModel)]=\"pc.chanEmailPriority\"\r\n                  [actualStaticValue]=\"pc.chanEmailPriority\"\r\n                  [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-priority></td>\r\n            <td><app-select-channel-priority id=\"chanIvrPriority\" name=\"chanIvrPriority\" \r\n                  [(ngModel)]=\"pc.chanIvrPriority\"\r\n                  [actualStaticValue]=\"pc.chanIvrPriority\"\r\n                  [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-priority></td>\r\n            <td><app-select-channel-priority id=\"chanSmsPriority\" name=\"chanSmsPriority\" \r\n                  [(ngModel)]=\"pc.chanSmsPriority\"\r\n                  [actualStaticValue]=\"pc.chanSmsPriority\"\r\n                  [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-priority></td>  \r\n            <td><app-select-channel-priority id=\"chanMailPriority\" name=\"chanMailPriority\" \r\n                  [(ngModel)]=\"pc.chanMailPriority\"\r\n                  [actualStaticValue]=\"pc.chanMailPriority\"\r\n                  [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-priority></td> \r\n            <td><app-select-channel-priority id=\"chanMobilePriority\" name=\"chanMobilePriority\" \r\n                  [(ngModel)]=\"pc.chanMobilePriority\"\r\n                  [actualStaticValue]=\"pc.chanMobilePriority\"\r\n                  [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-priority></td> \r\n            <td><app-select-channel-mandatory id=\"chanMandatory\" name=\"chanMandatory\" \r\n                  [(ngModel)]=\"pc.chanMandatory\"\r\n                  [actualStaticValue]=\"pc.chanMandatory\"\r\n                  [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-mandatory></td>\r\n            <td><app-date-eff-exp\r\n                  dateType=\"effective\" [progConfig]=\"pc\"\r\n                  [lastConfigRow]=\"i === lastPgmConfigRow\"\r\n                  (newDateValue)=\"updateDateValue($event, pc, 'effective')\"></app-date-eff-exp></td>\r\n            <td><app-date-eff-exp\r\n                  dateType=\"expiration\" [progConfig]=\"pc\"\r\n                  [lastConfigRow]=\"i === lastPgmConfigRow\"\r\n                  (newDateValue)=\"updateDateValue($event, pc, 'expiration')\"></app-date-eff-exp></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"form-group\">\r\n          <label for=\"programName\">Choose Program</label>\r\n          <select id=\"program\" name=\"program\" [(ngModel)]=\"selectedProgram\" required>\r\n            <option *ngFor=\"let p of programs\" [ngValue]=\"p.id\">{{p.name}}</option>\r\n          </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <!-- https://github.com/twbs/bootstrap/issues/24413 -->\r\n      <!--span class=\"mr-auto\">Some instructional content or condition message goes here: {{newPgmConfig.effective}}</span-->\r\n      <div class=\"w-100\">\r\n        <span class=\"float-left\">Some instructional content or condition message goes here: {{newPgmConfig.effective}}</span>\r\n        <div class=\"float-right\">\r\n            <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programConfigurationViaCommunicationForm.valid\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"configureProgramModal.close('Close click')\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    \r\n  </form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/modal/program-config-by-comm/program-config-by-comm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal/program-config-by-comm/program-config-by-comm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfigByCommComponent; });
/* unused harmony export ProgramConfigModalResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_classes_model_program_configuration__ = __webpack_require__("../../../../../src/app/classes/model/program-configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes_model_communication__ = __webpack_require__("../../../../../src/app/classes/model/communication.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramConfigByCommComponent = (function () {
    function ProgramConfigByCommComponent(configureProgramModal) {
        this.configureProgramModal = configureProgramModal;
        this.SAVESUCCESS = 'Close on succesful save';
    }
    ProgramConfigByCommComponent.prototype.ngOnInit = function () {
        console.log('ProgramConfigByCommComponent init: ');
        console.log(this.communication);
        console.log(this.programConfigurations);
        // get the list of programs to populate the dropdown (covered in @Input() programs: Program[];)
        // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
        if (this.programConfigurations.length === 0) {
            this.addProgramConfig();
        }
        else {
            var indxOfLast = this.programConfigurations.length - 1;
            if (this.programConfigurations[indxOfLast] && this.programConfigurations[indxOfLast].program) {
                // why? this shows up as Object when it is ProgramConfiguration
                this.prevPgmConfig = this.programConfigurations[indxOfLast];
                this.selectedProgram = this.prevPgmConfig.program.id;
                this.addProgramConfig(this.programConfigurations[indxOfLast]);
            }
        }
    };
    ProgramConfigByCommComponent.prototype.addProgramConfig = function (lastPgmConfig) {
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        if (lastPgmConfig) {
            // adding a new row, expiring the previous, copying the previous values
            lastPgmConfig.expiration = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            this.newPgmConfig = new __WEBPACK_IMPORTED_MODULE_2_app_classes_model_program_configuration__["a" /* ProgramConfiguration */](lastPgmConfig);
        }
        else {
            // this is a first-time row for this communication, set some defaults
            this.newPgmConfig = new __WEBPACK_IMPORTED_MODULE_2_app_classes_model_program_configuration__["a" /* ProgramConfiguration */]();
        }
        this.newPgmConfig.effective = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
        this.newPgmConfig.expiration = '9999-12-31';
        this.lastPgmConfigRow = this.programConfigurations.length;
        this.programConfigurations[this.programConfigurations.length] = this.newPgmConfig;
    };
    ProgramConfigByCommComponent.prototype.updateDateValue = function (newDateValue, pc, dateType) {
        console.log('ProgramConfigByCommComponent updateDateValue: ', newDateValue, pc, dateType);
        if (dateType === 'effective') {
            pc.effective = newDateValue;
        }
        if (dateType === 'expiration') {
            pc.expiration = newDateValue;
        }
    };
    ProgramConfigByCommComponent.prototype.saveProgramConfiguration = function () {
        console.log('ProgramConfigByCommComponent save');
        console.log(this.newPgmConfig, ' program id: ', this.selectedProgram);
        this.newPgmConfig.program = this.findProgram(this.selectedProgram);
        this.newPgmConfig.communication = this.communication;
        var modalResult = {
            prevProgConfig: this.prevPgmConfig,
            newProgConfig: this.newPgmConfig
        };
        this.configureProgramModal.close({ resultTxt: this.SAVESUCCESS, modalResult: modalResult });
    };
    ProgramConfigByCommComponent.prototype.findProgram = function (id) {
        return this.programs.find(function (p) { return p.id === id; });
    };
    return ProgramConfigByCommComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_classes_model_communication__["a" /* Communication */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_classes_model_communication__["a" /* Communication */]) === "function" && _a || Object)
], ProgramConfigByCommComponent.prototype, "communication", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ProgramConfigByCommComponent.prototype, "programs", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ProgramConfigByCommComponent.prototype, "programConfigurations", void 0);
ProgramConfigByCommComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // selector: 'app-program-config-by-comm', Entry Component needs no selector?
        template: __webpack_require__("../../../../../src/app/components/modal/program-config-by-comm/program-config-by-comm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modal/program-config-by-comm/program-config-by-comm.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _b || Object])
], ProgramConfigByCommComponent);

var ProgramConfigModalResult = (function () {
    function ProgramConfigModalResult() {
    }
    return ProgramConfigModalResult;
}());

var _a, _b;
//# sourceMappingURL=program-config-by-comm.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-gradient-dark\">\r\n  <a class=\"navbar-brand\" href=\"/\" title='{{customLogoTitle}}'>\r\n    <img src='assets/images/cvs.png' alt='{{customLogoTitle}}' width=50>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" >Home</a></li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/dashboard\" >Dashboard</a></li>    \r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/communication\" >Communications</a></li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/program\" >Programs</a></li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/client\" >Clients</a></li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" href=\"#\">Contact</a></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">\r\n          <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\r\n          Login\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Remove the navbar's default margin-bottom and rounded borders\r\n    .navbar {\r\n        margin-bottom: 0;\r\n        border-radius: 0;\r\n      }\r\n    .navbar-brand {\r\n        float: left;\r\n        height: 50px;\r\n        padding: 15px 15px;\r\n        padding-top: 0px;\r\n        padding-right: 15px;\r\n        padding-bottom: 15px;\r\n        padding-left: 5px;\r\n      }\r\n    */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        console.log('customLogoTitle: ' + this.customLogoTitle);
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], NavbarComponent.prototype, "customLogoTitle", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\n  Page Not Found!\n</h2>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routes/client/action-table/action-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive table-sm table-striped table-bordered table-hover\"\n  appSortableTable (sorted)=\"onSorted($event)\">\n<caption></caption>\n<thead>\n  <tr class=\"bg-gradient-dark text-white\"><!-- column sorting header row -->\n    <th *ngIf=\"showClientId\"><app-sortable-column columnName=\"id\" sortDirection=\"asc\">ID</app-sortable-column></th>\n    <th *ngIf=\"showClientCode\"><app-sortable-column columnName=\"code\">Code</app-sortable-column></th>\n    <th *ngIf=\"showClientName\"><app-sortable-column columnName=\"name\">Name</app-sortable-column></th>\n    <th *ngIf=\"showStatus\">Status</th>\n    <th *ngIf=\"showAction\">Actions</th>\n  </tr>\n  <tr class=\"thead-light\"><!-- search/filter header row -->\n    <th width=\"10%\" *ngIf=\"showClientId\">\n      <input type=\"text\" id=\"seachClientId\" class=\"form-control form-control-sm\" placeholder=\"search\"\n             name=\"clientId\" [(ngModel)]=\"clientIdSearch\" (keyup)=\"searchClientId()\"/>\n    </th>\n    <th width=\"15%\" *ngIf=\"showClientCode\">\n      <input type=\"text\" id=\"seachDescription\" class=\"form-control form-control-sm\" placeholder=\"search Code\"\n             name=\"clientCode\" [(ngModel)]=\"clientCodeSearch\" (keyup)=\"searchClientCode()\"/>\n    </th>\n    <th *ngIf=\"showClientName\">\n      <input type=\"text\" id=\"seachName\" class=\"form-control form-control-sm\" placeholder=\"search Name\"\n             name=\"clientName\" [(ngModel)]=\"clientNameSearch\" (keyup)=\"searchClientName()\"/>\n    </th>\n    <th *ngIf=\"showStatus\"></th>\n    <th *ngIf=\"showAction\"></th>\n  </tr>\n</thead>\n<tbody>\n  <tr appDraggable\n      [draggable] *ngFor=\"let client of displayClient; let i = index\"\n      [dragData]=\"client\" [dragClass]=\"'drag-over'\"  \n      (click)=\"setClickedRow(i); \" [class.table-info]=\"i == selectedRow\"\n       title=\"Click or Drag to configure {{client.name}} for Communication {{displayCommunication}}\" >\n    <td *ngIf=\"showClientId\">\n      <span class=\"badge badge-secondary clickable\"\n        (click)=\"selectClient(client)\">{{client.id}}</span></td>\n    <td *ngIf=\"showClientCode\"><span>{{client.code}}</span></td>\n    <td *ngIf=\"showClientName\"><span>{{client.name}}</span></td>\n    <td *ngIf=\"showStatus\"><span *ngIf=\"client.id === 142\"><i class=\"fa fa-check\" aria-hidden=\"true\" title=\"{{client.name}} Configured (Date)\"></i></span></td>\n    <td *ngIf=\"showAction\">\n      <app-client-actions-popover\n        [clientId]=\"client.id\"\n        [clientName]=\"client.name\"\n        (configAction)=\"configureClient($event)\">\n        <i class=\"fa fa-pencil-square-o clickable\" aria-hidden=\"true\" title=\"Click to configure {{client.name}} Communication settings\"></i>\n    </app-client-actions-popover>\n    </td>\n  </tr>\n</tbody>\n<tfoot></tfoot>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/routes/client/action-table/action-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scroll-list {\n  overflow: auto;\n  max-height: 70vh; }\n\n.drag-over {\n  border: #ff525b dashed 2px; }\n\n.drag-hint {\n  border: #ffc100 dashed 2px; }\n\n.drag-target-border {\n  border: #00bfff dashed 2px; }\n\n.drag-target-border-green {\n  border: #3c763d dashed 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routes/client/action-table/action-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientActionTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientActionTableComponent = (function () {
    function ClientActionTableComponent() {
        this.displayCommunication = 'Communication';
        this.showClientId = true;
        this.showClientCode = true;
        this.showClientName = true;
        this.showStatus = false;
        this.showAction = true;
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.clientConfigAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // @Output() displayClientCurrent = new EventEmitter<Client>();
        this.clientIdSearch = '';
        this.clientIdSearchLast = '';
        this.clientNameSearch = '';
        this.clientNameSearchLast = '';
        this.clientCodeSearch = '';
        this.clientCodeSearchLast = '';
    }
    ClientActionTableComponent.prototype.ngOnInit = function () {
        console.log('ClientActionTableComponent onInit...', this.clients, this.displayClient);
    };
    ClientActionTableComponent.prototype.selectClient = function (client) {
        this.selectedClient.emit(client);
    };
    ClientActionTableComponent.prototype.configureClient = function (clientConfigAction) {
        this.clientConfigAction.emit(clientConfigAction);
        // this.displayClientCurrent.emit(this.displayClient);
    };
    ClientActionTableComponent.prototype.onSorted = function ($event) {
        console.log('ClientActionTableComponent onSorted...');
        this.displayClient = this.getClientsSorted($event, this.displayClient);
    };
    ClientActionTableComponent.prototype.getClientsSorted = function (criteria, clientArray) {
        return clientArray
            .sort(function (a, b) {
            if (criteria.sortDirection === 'asc') {
                if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
                    return -1;
                }
                if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
                    return 1;
                }
                return 0;
            }
            else if (criteria.sortDirection === 'desc') {
                if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
                    return -1;
                }
                if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
                    return 1;
                }
                return 0;
            }
            else {
                return 0;
            }
        });
    };
    ClientActionTableComponent.prototype.searchClientId = function () {
        console.log('ClientComponent searchClientId user entered: ', this.clientIdSearch, this.clientIdSearchLast);
        this.searchClientTable();
        this.clientIdSearchLast = this.clientIdSearch;
    };
    ClientActionTableComponent.prototype.searchClientCode = function () {
        console.log('ClientComponent searchClientCode user entered: ', this.clientCodeSearch, this.clientCodeSearchLast);
        // if user enters something then starts backing out, this stops working
        // so need to keep track somehow and add back rows that were previously removed
        this.searchClientTable();
        this.clientCodeSearchLast = this.clientCodeSearch;
    };
    ClientActionTableComponent.prototype.searchClientName = function () {
        console.log('ClientComponent searchClientName user entered: ', this.clientNameSearch, this.clientNameSearchLast);
        this.searchClientTable();
        this.clientNameSearchLast = this.clientNameSearch;
    };
    ClientActionTableComponent.prototype.searchClientTable = function () {
        var _this = this;
        // align/chain the filter pattern across all searchable rows
        var clientIdAdded = this.clientIdSearch.indexOf(this.clientIdSearchLast) === 0;
        var clientCodeAdded = this.clientCodeSearch.indexOf(this.clientCodeSearchLast) === 0;
        var clientNameAdded = this.clientNameSearch.indexOf(this.clientNameSearchLast) === 0;
        if (!clientIdAdded || !clientCodeAdded || !clientNameAdded) {
            console.log('user deleting something...');
            // refresh the list, reapply each filter, gonna guess mostly searching on names
            this.displayClient = this.clients.filter(function (client) {
                return _this.containsString(client.name, _this.clientNameSearch);
            });
        }
        else {
            console.log('just adding to what was there');
            if (this.clientNameSearch !== '') {
                // we may be starting empty, if so use the full array first
                if (this.displayClient.length === 0) {
                    this.displayClient = this.clients.filter(function (client) {
                        return _this.containsString(client.name, _this.clientNameSearch);
                    });
                }
                else {
                    this.displayClient = this.displayClient.filter(function (client) {
                        return _this.containsString(client.name, _this.clientNameSearch);
                    });
                }
            }
        }
        if (this.clientCodeSearch !== '') {
            if (this.displayClient.length === 0) {
                this.displayClient = this.clients.filter(function (client) {
                    return _this.containsString(client.code, _this.clientCodeSearch);
                });
            }
            else {
                this.displayClient = this.displayClient.filter(function (client) {
                    return _this.containsString(client.code, _this.clientCodeSearch);
                });
            }
        }
        // least likely to search on client id specifically
        if (this.clientIdSearch !== '') {
            if (this.displayClient.length === 0) {
                this.displayClient = this.clients.filter(function (client) {
                    return (String(client.id).indexOf(_this.clientIdSearch) !== -1);
                });
            }
            else {
                this.displayClient = this.displayClient.filter(function (client) {
                    return (String(client.id).indexOf(_this.clientIdSearch) !== -1);
                });
            }
        }
    };
    ClientActionTableComponent.prototype.containsString = function (columnValue, searchValue) {
        return (columnValue.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
    };
    ClientActionTableComponent.prototype.setClickedRow = function (index) {
        this.selectedRow = index;
    };
    return ClientActionTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ClientActionTableComponent.prototype, "clients", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ClientActionTableComponent.prototype, "displayClient", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ClientActionTableComponent.prototype, "displayCommunication", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ClientActionTableComponent.prototype, "showClientId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ClientActionTableComponent.prototype, "showClientCode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ClientActionTableComponent.prototype, "showClientName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ClientActionTableComponent.prototype, "showStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ClientActionTableComponent.prototype, "showAction", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ClientActionTableComponent.prototype, "selectedClient", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ClientActionTableComponent.prototype, "clientConfigAction", void 0);
ClientActionTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-client-action-table',
        template: __webpack_require__("../../../../../src/app/components/routes/client/action-table/action-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/routes/client/action-table/action-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ClientActionTableComponent);

//# sourceMappingURL=action-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routes/client/actions-popover/actions-popover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_classes_model_client__ = __webpack_require__("../../../../../src/app/classes/model/client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionsPopoverComponent = (function () {
    function ActionsPopoverComponent() {
        this.attachOutsideOnClick = false;
        this.delayClickOutsideInit = true;
        this.clickOutsideEvents = 'click';
        this.exclude = 'ngbPopover ngb-popover';
        this.excludeBeforeClick = false;
        this.configAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ActionsPopoverComponent.prototype.ngOnInit = function () {
    };
    ActionsPopoverComponent.prototype.configure = function (id, config) {
        console.log('ActionsPopoverComponent configure: ', id, config);
        var clientConfigAction = new __WEBPACK_IMPORTED_MODULE_1_app_classes_model_client__["b" /* ClientConfigAction */](id, config);
        this.configAction.emit(clientConfigAction);
    };
    ActionsPopoverComponent.prototype.onClick = function (e) {
        console.log('Clicked inside:', e);
    };
    ActionsPopoverComponent.prototype.onClickedOutside = function (e, p) {
        console.log('Clicked outside:', e);
        p.close();
    };
    return ActionsPopoverComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ActionsPopoverComponent.prototype, "clientId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ActionsPopoverComponent.prototype, "clientName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ActionsPopoverComponent.prototype, "configAction", void 0);
ActionsPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-client-actions-popover',
        template: "\n  <ng-template #popContent>\n    <div class=\"w-100 outer-popover\"\n      (click)=\"onClick($event)\"\n      (appClickOutside)=\"onClickedOutside($event, p)\"\n      [attachOutsideOnClick]=\"attachOutsideOnClick\"\n      [delayClickOutsideInit]=\"delayClickOutsideInit\"\n      [clickOutsideEvents]=\"clickOutsideEvents\"\n      [exclude]=\"exclude\"\n      [excludeBeforeClick]=\"excludeBeforeClick\">\n\n      <div class=\"float-left inner-popover\">\n          <span class=\"badge badge-success clickable\"\n               (click)=\"configure(clientId, 'communications'); p.close();\"\n                title=\"Configure Communications for  {{clientId}}: {{clientName}} \">\n            Communications</span></div>\n    </div>\n  </ng-template>\n  <div [ngbPopover]=\"popContent\"\n       #p=\"ngbPopover\"\n       popoverTitle=\"\"\n       placement=\"left\">\n    <ng-content></ng-content>\n  </div>\n",
        styles: [
            '.outer-popover, .inner-popover { display: block; }',
            '.outer-popover { width: 300px; padding: 0; }',
            '.inner-popover { padding: 5px; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], ActionsPopoverComponent);

//# sourceMappingURL=actions-popover.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routes/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Manage Clients</h4>\r\n<app-client-action-table \r\n  [clients]=\"clients\"\r\n  [displayClient]=\"displayClient\"\r\n  [showClientId]=\"true\"\r\n  [showClientCode]=\"true\"\r\n  [showClientName]=\"true\"\r\n  [showStatus]=\"true\"\r\n  [showAction]=\"true\"\r\n  (selRowOut)=\"setClickedRow($event)\"\r\n  (clientConfigAction)=\"configureClient($event)\">\r\n</app-client-action-table>\r\n<!-- TODO this can probably get moved into the component -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/routes/client/client.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routes/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_modal_client_config_client_config_component__ = __webpack_require__("../../../../../src/app/components/modal/client-config/client-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_data_api_data_api_service__ = __webpack_require__("../../../../../src/app/services/data-api/data-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//


var ClientComponent = (function () {
    function ClientComponent(dataApiService, modalService) {
        this.dataApiService = dataApiService;
        this.modalService = modalService;
    }
    ClientComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ClientComponent ngOnInit...');
                        return [4 /*yield*/, this.getCommunications()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getClients()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getClientConfigurations()];
                    case 3:
                        _a.sent();
                        this.displayClient = this.clients;
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientComponent.prototype.getCommunications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getCommunications()];
                    case 1:
                        _a.communications = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('getCommunications error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientComponent.prototype.getClients = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getClients()];
                    case 1:
                        _a.clients = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        console.log('getClients error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientComponent.prototype.getClientConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getClientConfigurations()];
                    case 1:
                        _a.clientConfigurations = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        console.log('getClientConfigurations error: ', error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientComponent.prototype.configureClient = function (clientConfigAction) {
        if (clientConfigAction.configType === 'communications') {
            this.configureClientModal(clientConfigAction.clientId);
        }
    };
    ClientComponent.prototype.setClickedRow = function (index) {
        this.selectedRow = index;
    };
    ClientComponent.prototype.configureClientModal = function (clientId) {
        var _this = this;
        var modalOpts = {
            size: 'lg'
        };
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2_app_components_modal_client_config_client_config_component__["a" /* ClientConfigComponent */], modalOpts);
        var modalComp = modalRef.componentInstance;
        var selectedClient = this.findClient(clientId);
        // modalComp.name = 'Configure Clients';
        modalComp.communications = this.communications;
        modalComp.client = selectedClient;
        modalComp.clientConfigurations = this.findClientConfigurations(selectedClient.id);
        modalRef.result.then(function (result) {
            if (result.resultTxt === modalComp.SAVESUCCESS) {
                console.log('configureClientModal result: ', result.modalResult);
                _this.closeResult = "Closed with: " + result.resultTxt;
                if (result.modalResult) {
                    var modalResult = result.modalResult;
                    // if (modalResult.prevProgConfig) {
                    //   this.updateClientConfiguration(modalResult.prevProgConfig);
                    // }
                    if (modalResult.newClientConfig) {
                        _this.addClientConfiguration(modalResult.newClientConfig);
                    }
                }
                else {
                    // this would be some kind of exception
                    console.log('ClientComponent configureClientModal bad result: ', result.modalResult);
                }
            }
            else {
                _this.closeResult = "Closed with: " + result;
            }
            _this.setClickedRow(null);
            console.log('configureClient result: ', _this.closeResult);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            _this.setClickedRow(null);
            console.log('addNewClientConfig result: ', _this.closeResult);
        });
    };
    ClientComponent.prototype.findClient = function (id) {
        return this.clients.find(function (c) { return c.id === id; });
    };
    ClientComponent.prototype.findClientConfigurations = function (id) {
        var _this = this;
        return this.clientConfigurations.filter(function (cc) {
            if (cc.client.id === id) {
                console.log(cc, 'Client: ', typeof (cc.client));
                if (typeof (cc.client) === 'number') {
                    var clientId = cc.client;
                    cc.client = _this.findClient(clientId);
                }
                return true;
            }
        });
    };
    ClientComponent.prototype.addClientConfiguration = function (clientConfiguration) {
        var _this = this;
        this.dataApiService.createClientConfiguration(clientConfiguration)
            .then(function (pc) { return console.log('addClientConfiguration:', clientConfiguration, _this.clientConfigurations); })
            .catch(function (error) { return console.log('addClientConfiguration error: ', error); });
    };
    ClientComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // selector: 'app-client', selector not needed on routed components
        template: __webpack_require__("../../../../../src/app/components/routes/client/client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/routes/client/client.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_data_api_data_api_service__["a" /* DataApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_data_api_data_api_service__["a" /* DataApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object])
], ClientComponent);

var _a, _b;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routes/communication/action-table/action-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive table-sm table-striped table-bordered table-hover\"\nappSortableTable (sorted)=\"onSorted($event)\">\n<caption></caption>\n<thead>\n  <tr class=\"bg-gradient-dark text-white\"><!-- column sorting header row -->\n    <th *ngIf=\"showCommId\"><app-sortable-column columnName=\"id\" sortDirection=\"asc\">ID</app-sortable-column></th>\n    <th *ngIf=\"showCommName\"><app-sortable-column columnName=\"name\">Name</app-sortable-column></th>\n    <th *ngIf=\"showCommDesc\"><app-sortable-column columnName=\"description\">Description</app-sortable-column></th>\n    <th *ngIf=\"showStatus\">Status</th>\n    <th *ngIf=\"showAction\">Actions</th>\n  </tr>\n  <tr class=\"thead-light\"><!-- search/filter header row -->\n    <th width=\"10%\" *ngIf=\"showCommId\">\n      <input type=\"text\" id=\"seachCommId\" class=\"form-control form-control-sm\" placeholder=\"search\"\n             name=\"commId\" [(ngModel)]=\"commIdSearch\" (keyup)=\"searchCommId()\"/>\n    </th>\n    <th width=\"23%\" *ngIf=\"showCommName\">\n      <input type=\"text\" id=\"seachName\" class=\"form-control form-control-sm\" placeholder=\"search Name\"\n             name=\"commName\" [(ngModel)]=\"commNameSearch\" (keyup)=\"searchCommName()\"/>\n    </th>\n    <th *ngIf=\"showCommDesc\">\n      <input type=\"text\" id=\"seachDescription\" class=\"form-control form-control-sm\" placeholder=\"search Description\"\n             name=\"commDesc\" [(ngModel)]=\"commDescSearch\" (keyup)=\"searchCommDesc()\"/>\n    </th>\n    <th *ngIf=\"showStatus\"></th>\n    <th *ngIf=\"showAction\"></th>\n  </tr>\n</thead>\n<tbody>\n  <tr appDraggable \n      [draggable] *ngFor=\"let communication of displayComm; let i = index\"\n      [dragData]=\"communication\" [dragClass]=\"'drag-over'\"  \n      (click)=\"setClickedRow(i)\" [class.table-info]=\"i == selectedRow\"\n      title=\"Click or Drag to configure {{communication.name}} for Client {{displayClient}}\">\n    <td *ngIf=\"showCommId\">\n      <span class=\"badge badge-secondary clickable\"\n        (click)=\"selectCommunication(communication)\">{{communication.id}}</span></td>\n    <td *ngIf=\"showCommName\"><span>{{communication.name}}</span></td>\n    <td *ngIf=\"showCommDesc\"><span>{{communication.description}}</span></td>\n    <td *ngIf=\"showStatus\">\n      <span *ngIf=\"communication.id === 261\"><i class=\"fa fa-check\" aria-hidden=\"true\" title=\"{{communication.name}} Configured (Date)\"></i></span></td>\n    <td *ngIf=\"showAction\">\n        <app-comm-actions-popover\n          [commId]=\"communication.id\"\n          [commName]=\"communication.name\"\n          (configAction)=\"configureCommunication($event)\">\n          <i class=\"fa fa-pencil-square-o clickable\" aria-hidden=\"true\" title=\"Click to configure {{communication.name}} Program or Client settings\"></i>\n        </app-comm-actions-popover>\n    </td>\n  </tr>\n</tbody>\n<tfoot></tfoot>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/routes/communication/action-table/action-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scroll-list {\n  overflow: auto;\n  max-height: 70vh; }\n\n.drag-over {\n  border: #ff525b dashed 2px; }\n\n.drag-hint {\n  border: #ffc100 dashed 2px; }\n\n.drag-target-border {\n  border: #00bfff dashed 2px; }\n\n.drag-target-border-green {\n  border: #3c763d dashed 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routes/communication/action-table/action-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommActionTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommActionTableComponent = (function () {
    function CommActionTableComponent() {
        this.displayCommStartEmpty = true;
        this.displayClient = 'Client';
        this.showCommId = true;
        this.showCommName = true;
        this.showCommDesc = false;
        this.showStatus = false;
        this.showAction = true;
        this.selRowOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectedCommunication = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.commConfigAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.displayCommCurrent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.commIdSearch = '';
        this.commIdSearchLast = '';
        this.commNameSearch = '';
        this.commNameSearchLast = '';
        this.commDescSearch = '';
        this.commDescSearchLast = '';
    }
    CommActionTableComponent.prototype.ngOnInit = function () {
        console.log('CommActionTableComponent:', this.communications);
        if (!this.displayComm) {
            this.displayComm = []; // instead of 'undefined'
        }
    };
    CommActionTableComponent.prototype.selectCommunication = function (communication) {
        this.selectedCommunication.emit(communication);
    };
    CommActionTableComponent.prototype.setClickedRow = function (index) {
        if (this.selectedRow === index) {
            this.selectedRow = null;
        }
        else {
            this.selectedRow = index;
        }
        this.selRowOut.emit(index);
    };
    CommActionTableComponent.prototype.configureCommunication = function (commConfigAction) {
        this.commConfigAction.emit(commConfigAction);
        this.displayCommCurrent.emit(this.displayComm);
    };
    CommActionTableComponent.prototype.onSorted = function ($event) {
        console.log('CommunicationComponent onSorted...');
        this.displayComm = this.getCommunicationsSorted($event, this.displayComm);
    };
    CommActionTableComponent.prototype.getCommunicationsSorted = function (criteria, commArray) {
        return commArray
            .sort(function (a, b) {
            if (criteria.sortDirection === 'asc') {
                if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
                    return -1;
                }
                if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
                    return 1;
                }
                return 0;
            }
            else if (criteria.sortDirection === 'desc') {
                if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
                    return -1;
                }
                if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
                    return 1;
                }
                return 0;
            }
            else {
                return 0;
            }
        });
    };
    CommActionTableComponent.prototype.searchCommId = function () {
        console.log('CommunicationComponent searchCommId user entered: ', this.commIdSearch, this.commIdSearchLast);
        this.searchCommunicatonTable();
        this.commIdSearchLast = this.commIdSearch;
    };
    CommActionTableComponent.prototype.searchCommName = function () {
        console.log('CommunicationComponent searchCommName user entered: ', this.commNameSearch, this.commNameSearchLast);
        this.searchCommunicatonTable();
        this.commNameSearchLast = this.commNameSearch;
    };
    CommActionTableComponent.prototype.searchCommDesc = function () {
        console.log('CommunicationComponent searchCommDesc user entered: ', this.commDescSearch, this.commDescSearchLast);
        this.searchCommunicatonTable();
        this.commDescSearchLast = this.commDescSearch;
    };
    CommActionTableComponent.prototype.searchCommunicatonTable = function () {
        var _this = this;
        // TODO yes this is a monster if-then-else method
        // once the logic is worked out move it into a service and refactor
        if (!this.displayCommStartEmpty && this.displayComm.length === 0) {
            this.displayComm = this.communications;
        }
        // align/chain the filter pattern across all searchable rows
        var commIdAdded = this.commIdSearch.indexOf(this.commIdSearchLast) === 0;
        var commNameAdded = this.commNameSearch.indexOf(this.commNameSearchLast) === 0;
        var commDescAdded = this.commDescSearch.indexOf(this.commDescSearchLast) === 0;
        if (!commIdAdded || !commNameAdded || !commDescAdded) {
            console.log('user deleting something...');
            if (this.displayCommStartEmpty &&
                this.commNameSearch === '' &&
                this.commDescSearch === '' &&
                this.commIdSearch === '') {
                this.displayComm = [];
            }
            else {
                // refresh the list, reapply each filter, gonna guess mostly searching on names
                this.displayComm = this.communications.filter(function (comm) {
                    return _this.containsString(comm.name, _this.commNameSearch);
                });
            }
        }
        else {
            console.log('just adding to what was there');
            if (this.commNameSearch !== '') {
                // we may be starting empty, if so use the full array first
                if (this.displayComm.length === 0) {
                    this.displayComm = this.communications.filter(function (client) {
                        return _this.containsString(client.name, _this.commNameSearch);
                    });
                }
                else {
                    this.displayComm = this.displayComm.filter(function (client) {
                        return _this.containsString(client.name, _this.commNameSearch);
                    });
                }
            }
        }
        if (this.commDescSearch !== '') {
            if (this.displayComm.length === 0) {
                this.displayComm = this.communications.filter(function (comm) {
                    return _this.containsString(comm.description, _this.commDescSearch);
                });
            }
            else {
                this.displayComm = this.displayComm.filter(function (comm) {
                    return _this.containsString(comm.description, _this.commDescSearch);
                });
            }
        }
        if (this.commIdSearch !== '') {
            if (this.displayComm.length === 0) {
                this.displayComm = this.communications.filter(function (comm) {
                    return (String(comm.id).indexOf(_this.commIdSearch) !== -1);
                });
            }
            else {
                this.displayComm = this.displayComm.filter(function (comm) {
                    return (String(comm.id).indexOf(_this.commIdSearch) !== -1);
                });
            }
        }
    };
    CommActionTableComponent.prototype.containsString = function (columnValue, searchValue) {
        return (columnValue.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
    };
    return CommActionTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], CommActionTableComponent.prototype, "communications", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], CommActionTableComponent.prototype, "displayComm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CommActionTableComponent.prototype, "displayCommStartEmpty", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CommActionTableComponent.prototype, "displayClient", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CommActionTableComponent.prototype, "showCommId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CommActionTableComponent.prototype, "showCommName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CommActionTableComponent.prototype, "showCommDesc", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CommActionTableComponent.prototype, "showStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CommActionTableComponent.prototype, "showAction", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CommActionTableComponent.prototype, "selRowOut", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CommActionTableComponent.prototype, "selectedCommunication", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CommActionTableComponent.prototype, "commConfigAction", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CommActionTableComponent.prototype, "displayCommCurrent", void 0);
CommActionTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comm-action-table',
        template: __webpack_require__("../../../../../src/app/components/routes/communication/action-table/action-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/routes/communication/action-table/action-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CommActionTableComponent);

//# sourceMappingURL=action-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routes/communication/actions-popover/actions-popover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommActionsPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_classes_model_communication__ = __webpack_require__("../../../../../src/app/classes/model/communication.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// https://ng-bootstrap.github.io/#/components/popover/examples
var CommActionsPopoverComponent = (function () {
    function CommActionsPopoverComponent() {
        this.attachOutsideOnClick = false;
        this.delayClickOutsideInit = true;
        this.clickOutsideEvents = 'click';
        this.exclude = 'ngbPopover ngb-popover';
        this.excludeBeforeClick = false;
        this.configAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CommActionsPopoverComponent.prototype.ngOnInit = function () {
    };
    CommActionsPopoverComponent.prototype.configure = function (id, config) {
        console.log('ActionsPopoverComponent configure: ', id, config);
        var commConfigAction = new __WEBPACK_IMPORTED_MODULE_1_app_classes_model_communication__["b" /* CommunicationConfigAction */](id, config);
        this.configAction.emit(commConfigAction);
    };
    CommActionsPopoverComponent.prototype.onClick = function (e) {
        console.log('Clicked inside:', e);
    };
    CommActionsPopoverComponent.prototype.onClickedOutside = function (e, p) {
        console.log('Clicked outside:', e);
        p.close();
    };
    return CommActionsPopoverComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CommActionsPopoverComponent.prototype, "commId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CommActionsPopoverComponent.prototype, "commName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CommActionsPopoverComponent.prototype, "configAction", void 0);
CommActionsPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comm-actions-popover',
        template: "\n    <ng-template #popContent>\n      <div class=\"w-100 outer-popover\"\n        (click)=\"onClick($event)\"\n        (appClickOutside)=\"onClickedOutside($event, p)\"\n        [attachOutsideOnClick]=\"attachOutsideOnClick\"\n        [delayClickOutsideInit]=\"delayClickOutsideInit\"\n        [clickOutsideEvents]=\"clickOutsideEvents\"\n        [exclude]=\"exclude\"\n        [excludeBeforeClick]=\"excludeBeforeClick\">\n\n        <div class=\"float-left inner-popover\">\n            <span class=\"badge badge-success clickable\"\n                 (click)=\"configure(commId, 'program'); p.close();\"\n                  title=\"Configure Program for CommId {{commId}}: {{commName}} \">\n              Program</span></div>\n        <div class=\"float-right inner-popover\">\n            <span class=\"badge badge-success clickable\"\n                 (click)=\"configure(commId, 'clients'); p.close();\"\n                  title=\"Configure Client(s) for CommId {{commId}}: {{commName}} \">\n              Clients</span>\n          </div>\n      </div>\n    </ng-template>\n    <div [ngbPopover]=\"popContent\"\n         #p=\"ngbPopover\"\n         popoverTitle=\"\"\n         placement=\"left\">\n      <ng-content></ng-content>\n    </div>\n  ",
        styles: [
            '.outer-popover, .inner-popover { display: block; }',
            '.outer-popover { width: 300px; padding: 0; }',
            '.inner-popover { padding: 5px; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], CommActionsPopoverComponent);

//# sourceMappingURL=actions-popover.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routes/communication/communication.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Manage Communications</h4>\r\n<app-comm-action-table \r\n  [communications]=\"communications\"\r\n  [displayComm]=\"displayComm\"\r\n  [displayCommStartEmpty]=\"false\"\r\n  [showCommId]=\"true\"\r\n  [showCommName]=\"true\"\r\n  [showCommDesc]=\"true\"\r\n  [showStatus]=\"true\"\r\n  [showAction]=\"true\"\r\n  (selRowOut)=\"setClickedRow($event)\"\r\n  (commConfigAction)=\"configureCommunication($event)\">\r\n</app-comm-action-table>\r\n<!-- TODO this can probably get moved into the component -->"

/***/ }),

/***/ "../../../../../src/app/components/routes/communication/communication.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routes/communication/communication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_modal_client_config_by_comm_client_config_by_comm_component__ = __webpack_require__("../../../../../src/app/components/modal/client-config-by-comm/client-config-by-comm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_modal_program_config_by_comm_program_config_by_comm_component__ = __webpack_require__("../../../../../src/app/components/modal/program-config-by-comm/program-config-by-comm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_data_api_data_api_service__ = __webpack_require__("../../../../../src/app/services/data-api/data-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CommunicationComponent = (function () {
    function CommunicationComponent(dataApiService, modalService) {
        this.dataApiService = dataApiService;
        this.modalService = modalService;
    }
    CommunicationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('CommunicationComponent ngOnInit...');
                        return [4 /*yield*/, this.getCommunications()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getPrograms()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getProgramConfigurations()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getClients()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getClientConfigurations()];
                    case 5:
                        _a.sent();
                        this.displayCommStartEmpty = false;
                        this.displayComm = this.communications;
                        console.log('CommunicationComponent ngOnInit', this.communications);
                        return [2 /*return*/];
                }
            });
        });
    };
    CommunicationComponent.prototype.getCommunications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getCommunications()];
                    case 1:
                        _a.communications = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('getCommunications error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommunicationComponent.prototype.getPrograms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getPrograms()];
                    case 1:
                        _a.programs = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        console.log('getPrograms error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommunicationComponent.prototype.getProgramConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getProgramConfigurations()];
                    case 1:
                        _a.programConfigurations = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        console.log('getProgramConfigurations error: ', error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommunicationComponent.prototype.getClients = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getClients()];
                    case 1:
                        _a.clients = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _b.sent();
                        console.log('getClients error: ', error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommunicationComponent.prototype.getClientConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getClientConfigurations()];
                    case 1:
                        _a.clientConfigurations = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _b.sent();
                        console.log('getClientConfigurations error: ', error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommunicationComponent.prototype.configureCommunication = function (commConfigAction) {
        if (commConfigAction.configType === 'program') {
            this.configureProgramModal(commConfigAction.commId);
        }
        if (commConfigAction.configType === 'clients') {
            this.configureClientModal(commConfigAction.commId);
        }
    };
    CommunicationComponent.prototype.configureClientModal = function (commId) {
        var _this = this;
        var modalOpts = {
            size: 'lg'
        };
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2_app_components_modal_client_config_by_comm_client_config_by_comm_component__["a" /* ClientConfigByCommComponent */], modalOpts);
        var modalComp = modalRef.componentInstance;
        var selectedComm = this.findCommunication(commId);
        // modalComp.name = 'Configure Clients';
        modalComp.communication = selectedComm;
        modalComp.clients = this.clients;
        modalComp.clientConfigurations = this.findClientConfigurations(selectedComm);
        modalRef.result.then(function (result) {
            if (result.resultTxt === modalComp.SAVESUCCESS) {
                console.log('configureClientModal result: ', result.modalResult);
                _this.closeResult = "Closed with: " + result.resultTxt;
                if (result.modalResult) {
                    var modalResult = result.modalResult;
                    // if (modalResult.prevClientConfig) {
                    //   this.updateClientConfiguration(modalResult.prevClientConfig);
                    // }
                    if (modalResult.newClientConfig) {
                        _this.addClientConfiguration(modalResult.newClientConfig);
                    }
                }
                else {
                    // this would be some kind of exception
                    console.log('CommunicationComponent configureProgramModal bad result: ', result.modalResult);
                }
            }
            else {
                _this.closeResult = "Closed with: " + result;
            }
            _this.setClickedRow(null);
            console.log('configureClient result: ', _this.closeResult);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            _this.setClickedRow(null);
            console.log('addNewClientConfig result: ', _this.closeResult);
        });
    };
    CommunicationComponent.prototype.setClickedRow = function (index) {
        this.selectedRow = index;
    };
    CommunicationComponent.prototype.configureProgramModal = function (commId) {
        var _this = this;
        var modalOpts = {
            size: 'lg'
        };
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3_app_components_modal_program_config_by_comm_program_config_by_comm_component__["a" /* ProgramConfigByCommComponent */], modalOpts);
        var modalComp = modalRef.componentInstance;
        // modalComp.name = 'Configure Program';
        modalComp.communication = this.findCommunication(commId);
        modalComp.programs = this.programs;
        modalComp.programConfigurations = this.findProgramConfigurations(commId);
        modalRef.result.then(function (result) {
            if (result.resultTxt === modalComp.SAVESUCCESS) {
                console.log('configureProgramModal result: ', result.modalResult);
                _this.closeResult = "Closed with: " + result.resultTxt;
                if (result.modalResult) {
                    var modalResult = result.modalResult;
                    if (modalResult.prevProgConfig) {
                        _this.updateProgramConfiguration(modalResult.prevProgConfig);
                    }
                    if (modalResult.newProgConfig) {
                        _this.addProgramConfiguration(modalResult.newProgConfig);
                    }
                }
                else {
                    // this would be some kind of exception
                    console.log('CommunicationComponent configureProgramModal bad result: ', result.modalResult);
                }
            }
            else {
                _this.closeResult = "Closed with: " + result;
            }
            _this.setClickedRow(null);
            console.log('configureProgram result: ', _this.closeResult);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            _this.setClickedRow(null);
            console.log('addNewProgramConfig result: ', _this.closeResult);
        });
    };
    CommunicationComponent.prototype.findClient = function (id) {
        return this.clients.find(function (c) { return c.id === id; });
    };
    CommunicationComponent.prototype.findProgram = function (id) {
        return this.programs.find(function (p) { return p.id === id; });
    };
    CommunicationComponent.prototype.findCommunication = function (id) {
        return this.communications.find(function (c) { return c.id === id; });
    };
    CommunicationComponent.prototype.findClientConfigurations = function (selectedComm) {
        var _this = this;
        return this.clientConfigurations.filter(function (cc) {
            if (typeof (cc.communication) === 'number') {
                if (cc.communication === selectedComm.id) {
                    cc.communication = selectedComm;
                    if (typeof (cc.client) === 'number') {
                        cc.client = _this.findClient(cc.client);
                    }
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (cc.communication.id === selectedComm.id) {
                if (typeof (cc.client) === 'number') {
                    cc.client = _this.findClient(cc.client);
                }
                return true;
            }
        });
    };
    CommunicationComponent.prototype.addClientConfiguration = function (clientConfiguration) {
        var _this = this;
        this.dataApiService.createClientConfiguration(clientConfiguration)
            .then(function (pc) { return console.log('addClientConfiguration:', clientConfiguration, _this.programConfigurations); })
            .catch(function (error) { return console.log('addClientConfiguration error: ', error); });
    };
    CommunicationComponent.prototype.findProgramConfigurations = function (id) {
        var _this = this;
        return this.programConfigurations.filter(function (pc) {
            if (pc.communication.id === id) {
                console.log(pc, 'Program: ', typeof (pc.program));
                if (typeof (pc.program) === 'number') {
                    var programId = pc.program;
                    pc.program = _this.findProgram(programId);
                }
                return true;
            }
        });
    };
    CommunicationComponent.prototype.addProgramConfiguration = function (programConfiguration) {
        var _this = this;
        this.dataApiService.createProgramConfiguration(programConfiguration)
            .then(function (pc) { return console.log('addProgramConfiguration:', programConfiguration, _this.programConfigurations); })
            .catch(function (error) { return console.log('addProgramConfiguration error: ', error); });
    };
    CommunicationComponent.prototype.updateProgramConfiguration = function (programConfiguration) {
        var _this = this;
        this.dataApiService.updateProgramConfiguration(programConfiguration)
            .then(function (pc) { return console.log('updateProgramConfiguration:', programConfiguration, _this.programConfigurations); })
            .catch(function (error) { return console.log('updateProgramConfiguration error: ', error); });
    };
    CommunicationComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return CommunicationComponent;
}());
CommunicationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // selector: 'app-communication', selector not needed on routed components
        template: __webpack_require__("../../../../../src/app/components/routes/communication/communication.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/routes/communication/communication.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_data_api_data_api_service__["a" /* DataApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_data_api_data_api_service__["a" /* DataApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object])
], CommunicationComponent);

var _a, _b;
//# sourceMappingURL=communication.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routes/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/images/Program-Comm-Client Relationships.png\" title=\"Coming soon!\"/>"

/***/ }),

/***/ "../../../../../src/app/components/routes/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routes/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // selector: 'app-dashboard', selector not needed on routed components
        template: __webpack_require__("../../../../../src/app/components/routes/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/routes/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routes/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Welcome</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n<hr>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/routes/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routes/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        // console.log('home: ' + this.router.isActive) ;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // selector: 'app-home', selector not needed on routed components
        template: __webpack_require__("../../../../../src/app/components/routes/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/routes/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routes/program/actions-popover/actions-popover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgActionsPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_classes_model_program__ = __webpack_require__("../../../../../src/app/classes/model/program.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgActionsPopoverComponent = (function () {
    function ProgActionsPopoverComponent() {
        this.attachOutsideOnClick = false;
        this.delayClickOutsideInit = true;
        this.clickOutsideEvents = 'click';
        this.exclude = 'ngbPopover ngb-popover';
        this.excludeBeforeClick = false;
        this.configAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ProgActionsPopoverComponent.prototype.ngOnInit = function () {
    };
    ProgActionsPopoverComponent.prototype.configure = function (id, config) {
        console.log('ActionsPopoverComponent configure: ', id, config);
        var progConfigAction = new __WEBPACK_IMPORTED_MODULE_1_app_classes_model_program__["b" /* ProgramConfigAction */](id, config);
        this.configAction.emit(progConfigAction);
    };
    ProgActionsPopoverComponent.prototype.onClick = function (e) {
        console.log('Clicked inside:', e);
    };
    ProgActionsPopoverComponent.prototype.onClickedOutside = function (e, p) {
        console.log('Clicked outside:', e);
        p.close();
    };
    return ProgActionsPopoverComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ProgActionsPopoverComponent.prototype, "progId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ProgActionsPopoverComponent.prototype, "progName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ProgActionsPopoverComponent.prototype, "configAction", void 0);
ProgActionsPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-prog-actions-popover',
        template: "\n    <ng-template #popContent>\n      <div class=\"w-100 outer-popover\"\n        (click)=\"onClick($event)\"\n        (appClickOutside)=\"onClickedOutside($event, p)\"\n        [attachOutsideOnClick]=\"attachOutsideOnClick\"\n        [delayClickOutsideInit]=\"delayClickOutsideInit\"\n        [clickOutsideEvents]=\"clickOutsideEvents\"\n        [exclude]=\"exclude\"\n        [excludeBeforeClick]=\"excludeBeforeClick\">\n\n      <div class=\"float-left inner-popover\">\n          <span class=\"badge badge-success clickable\"\n               (click)=\"configure(progId, 'edit'); p.close();\"\n                title=\"Configure/Edit Program {{progId}}: {{progName}} \">\n            Edit</span></div>\n      <div class=\"float-right inner-popover\">\n          <span class=\"badge badge-success clickable\"\n               (click)=\"configure(progId, 'delete'); p.close();\"\n                title=\"Delete Program {{progId}}: {{progName}} \">\n            Delete</span>\n        </div>\n      </div>\n    </ng-template>\n    <div [ngbPopover]=\"popContent\"\n         #p=\"ngbPopover\"\n         popoverTitle=\"\"\n         placement=\"left\">\n      <ng-content></ng-content>\n  </div>\n  ",
        styles: [
            '.outer-popover, .inner-popover { display: block; }',
            '.outer-popover { width: 300px; padding: 0; }',
            '.inner-popover { padding: 5px; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], ProgActionsPopoverComponent);

//# sourceMappingURL=actions-popover.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routes/program/program.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Manage Programs</h4>\r\n\r\n<table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n  <caption>\r\n    Programs define collections of Communications, each with a program-level configuration that \r\n    specify the (default) channel priority, if the comm is mandatory, with an effective and expiration date\r\n  </caption>\r\n  <thead class=\"bg-gradient-dark text-white\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Name</th>\r\n      <th>Description</th>\r\n      <th>Actions</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let program of programs; let i = index\"\r\n         title=\"\" \r\n        (click)=\"setClickedRow(i)\" \r\n        [class.table-success]=\"i == selectedRow\">\r\n      <th scope=\"row\"><span class=\"badge badge-secondary\">{{program.id}}</span></th>\r\n      <td><span>{{program.name}}</span></td>\r\n      <td><span>{{program.description}}</span></td>\r\n      <td>\r\n        <app-prog-actions-popover\r\n          [progId]=\"program.id\"\r\n          [progName]=\"program.name\"\r\n          (configAction)=\"configureProgram($event)\">\r\n          <i class=\"fa fa-pencil-square-o clickable\" aria-hidden=\"true\" title=\"Click to configure Program {{program.name}}\"></i>\r\n        </app-prog-actions-popover>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \r\n          (click)=\"addProgramModal()\"title=\"Add New Program\"></i>\r\n      </td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n  </tbody>\r\n  <tfoot></tfoot>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/routes/program/program.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routes/program/program.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_modal_addprogram_addprogram_component__ = __webpack_require__("../../../../../src/app/components/modal/addprogram/addprogram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_modal_editprogram_editprogram_component__ = __webpack_require__("../../../../../src/app/components/modal/editprogram/editprogram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_modal_deleteprogram_deleteprogram_component__ = __webpack_require__("../../../../../src/app/components/modal/deleteprogram/deleteprogram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_data_api_data_api_service__ = __webpack_require__("../../../../../src/app/services/data-api/data-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ProgramComponent = (function () {
    function ProgramComponent(dataApiService, modalService) {
        this.dataApiService = dataApiService;
        this.modalService = modalService;
    }
    ProgramComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ProgramComponent ngOnInit...');
                        return [4 /*yield*/, this.getPrograms()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramComponent.prototype.getPrograms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getPrograms()];
                    case 1:
                        _a.programs = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('getPrograms error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramComponent.prototype.addProgram = function (program) {
        var _this = this;
        if (program.id === undefined) {
            program.id = this.programs.length + 1;
        }
        this.dataApiService.createProgram(program)
            .then(function (p) { return console.log('addNewProgram: ', program, _this.programs); })
            .catch(function (error) { return console.log('addNewProgram error: ', error); });
    };
    ProgramComponent.prototype.editProgram = function (program) {
        this.dataApiService.updateProgram(program)
            .then(function (p) { return console.log('editProgram: ', program); })
            .catch(function (error) { return console.log('editProgram error: ', error); });
    };
    ProgramComponent.prototype.deleteProgram = function (program) {
        var _this = this;
        this.dataApiService.deleteProgram(program)
            .then(function (result) {
            console.log('deleteProgram: ', program, _this.programs);
        })
            .catch(function (error) {
            console.log('deleteProgram error: ', error);
        });
    };
    ProgramComponent.prototype.setClickedRow = function (index) {
        this.selectedRow = index;
    };
    ProgramComponent.prototype.configureProgram = function (progConfigAction) {
        if (progConfigAction.configType === 'edit') {
            this.editProgramModal(progConfigAction.progId);
        }
        if (progConfigAction.configType === 'delete') {
            this.deleteProgramModal(progConfigAction.progId);
        }
    };
    ProgramComponent.prototype.addProgramModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2_app_components_modal_addprogram_addprogram_component__["a" /* AddProgramComponent */]);
        var modalComp = modalRef.componentInstance;
        // modalComp.name = 'Add New Program';
        modalComp.programId = this.programs.length + 1; // Programs id are not auto-generated in the DB
        modalRef.result.then(function (result) {
            if (result.resultTxt === modalComp.SAVESUCCESS) {
                console.log('addNewProgram result: ', result.resultObj);
                _this.closeResult = "Closed with: " + result.resultTxt;
                _this.addProgram(result.resultObj);
            }
            else {
                _this.closeResult = "Closed with: " + result;
            }
            _this.setClickedRow(null);
            console.log('addNewProgram result: ', _this.closeResult);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            _this.setClickedRow(null);
            console.log('addNewProgram result: ', _this.closeResult);
        });
    };
    ProgramComponent.prototype.editProgramModal = function (programId) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3_app_components_modal_editprogram_editprogram_component__["a" /* EditProgramComponent */]);
        var modalComp = modalRef.componentInstance;
        // modalComp.name = 'Edit Program';
        modalComp.program = this.findProgram(programId);
        modalRef.result.then(function (result) {
            if (result.resultTxt === modalComp.SAVESUCCESS) {
                console.log('editProgram result: ', result.resultObj);
                _this.closeResult = "Closed with: " + result.resultTxt;
                _this.editProgram(result.resultObj);
            }
            else {
                _this.closeResult = "Closed with: " + result;
            }
            _this.setClickedRow(null);
            console.log('editProgram result: ', _this.closeResult);
        }, function (reason) {
            _this.setClickedRow(null);
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log('editProgram result: ', _this.closeResult);
        });
    };
    ProgramComponent.prototype.deleteProgramModal = function (programId) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4_app_components_modal_deleteprogram_deleteprogram_component__["a" /* DeleteProgramComponent */]);
        var modalComp = modalRef.componentInstance;
        // modalComp.name = 'Delete Program';
        modalComp.program = this.findProgram(programId);
        modalRef.result.then(function (result) {
            if (result.resultTxt === modalComp.SAVESUCCESS) {
                console.log('deleteProgram result: ', result.resultObj);
                _this.closeResult = "Closed with: " + result.resultTxt;
                _this.deleteProgram(result.resultObj);
            }
            else {
                _this.closeResult = "Closed with: " + result;
            }
            _this.setClickedRow(null);
            console.log('deleteProgram result: ', _this.closeResult);
        }, function (reason) {
            _this.setClickedRow(null);
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log('deleteProgram result: ', _this.closeResult);
        });
    };
    ProgramComponent.prototype.findProgram = function (id) {
        return this.programs.find(function (p) { return p.id === id; });
    };
    ProgramComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return ProgramComponent;
}());
ProgramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // selector: 'app-program', selector not needed on routed components
        template: __webpack_require__("../../../../../src/app/components/routes/program/program.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/routes/program/program.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_data_api_data_api_service__["a" /* DataApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_data_api_data_api_service__["a" /* DataApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object])
], ProgramComponent);

var _a, _b;
//# sourceMappingURL=program.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/bootstrap-gradients/bootstrap-gradients.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Gradients</h4>\n<div class=\"p-3 mb-2 bg-gradient-primary text-white\">.bg-gradient-primary</div>\n<div class=\"p-3 mb-2 bg-gradient-secondary text-white\">.bg-gradient-secondary</div>\n<div class=\"p-3 mb-2 bg-gradient-success text-white\">.bg-gradient-success</div>\n<div class=\"p-3 mb-2 bg-gradient-danger text-white\">.bg-gradient-danger</div>\n<div class=\"p-3 mb-2 bg-gradient-warning text-white\">.bg-gradient-warning</div>\n<div class=\"p-3 mb-2 bg-gradient-info text-white\">.bg-gradient-info</div>\n<div class=\"p-3 mb-2 bg-gradient-light text-dark\">.bg-gradient-light</div>\n<div class=\"p-3 mb-2 bg-gradient-dark text-white\">.bg-gradient-dark</div>"

/***/ }),

/***/ "../../../../../src/app/components/test/bootstrap-gradients/bootstrap-gradients.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/bootstrap-gradients/bootstrap-gradients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapGradientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BootstrapGradientsComponent = (function () {
    function BootstrapGradientsComponent() {
    }
    BootstrapGradientsComponent.prototype.ngOnInit = function () {
    };
    return BootstrapGradientsComponent;
}());
BootstrapGradientsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bootstrap-gradients-test',
        template: __webpack_require__("../../../../../src/app/components/test/bootstrap-gradients/bootstrap-gradients.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/bootstrap-gradients/bootstrap-gradients.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BootstrapGradientsComponent);

//# sourceMappingURL=bootstrap-gradients.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/click-outside/click-outside.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Click Outside Test</h4>\n<div\n  (click)=\"onClick($event)\"\n  (appClickOutside)=\"onClickedOutside($event)\"\n  [attachOutsideOnClick]=\"attachOutsideOnClick\">\n  <p>Clicked inside: {{countInside}}</p>\n  <p>Clicked outside: {{countOutside}}</p>\n\n  <label>\n    <input type=\"checkbox\" [checked]=\"attachOutsideOnClick\" (click)=\"_toggleAttachOutsideOnClick()\" />\n    <span>Attach on click</span>\n  </label>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/test/click-outside/click-outside.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%; }\n\nbody {\n  background: #f6f6f6;\n  color: #545555;\n  font: 400 1em/1.25 \"Source Sans Pro\", \"Helvetica\", \"Arial\", sans-serif; }\n\n::-moz-selection {\n  background-color: #06d68a;\n  color: #fff; }\n\n::selection {\n  background-color: #06d68a;\n  color: #fff; }\n\na {\n  color: #06d68a;\n  text-decoration: none; }\n  a:hover {\n    border-bottom: 1px dotted #06d68a; }\n\nbody {\n  text-align: center; }\n\nheader {\n  background: #fff;\n  box-shadow: 0 0.15em 2em rgba(153, 153, 153, 0.25);\n  margin-bottom: 2em;\n  padding: 1em; }\n\ndemo {\n  border: 3px solid #06d68a;\n  display: block;\n  margin: 2em auto;\n  max-width: 800px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n  demo > div {\n    padding: 2em; }\n\na {\n  padding: 0.5em 1em; }\n  a + a {\n    border-left: 1px solid #999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/click-outside/click-outside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideComponent = (function () {
    function ClickOutsideComponent() {
        this.countInside = 0;
        this.countOutside = 0;
        this.attachOutsideOnClick = false;
    }
    ClickOutsideComponent.prototype.ngOnInit = function () {
    };
    ClickOutsideComponent.prototype._toggleAttachOutsideOnClick = function () {
        this.attachOutsideOnClick = !this.attachOutsideOnClick;
    };
    ClickOutsideComponent.prototype.onClick = function (e) {
        console.log('Clicked inside:', e);
        this.countInside++;
    };
    ClickOutsideComponent.prototype.onClickedOutside = function (e) {
        console.log('Clicked outside:', e);
        this.countOutside++;
    };
    return ClickOutsideComponent;
}());
ClickOutsideComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-click-outside-test',
        template: __webpack_require__("../../../../../src/app/components/test/click-outside/click-outside.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/click-outside/click-outside.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ClickOutsideComponent);

//# sourceMappingURL=click-outside.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/drag-drop/drag-drop.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Drag Drop Demo</h4>\n<p>This is a complete demo that features drop scopes, custom styling, disable drag/drop & drag handles.</p>\n<hr>\n\n<div class=\"row\">\n\n    <div class=\"col-sm-3\">\n        <div class=\"card card-outline-success mb-3\">\n            <div class=\"card-header card-inverse card-success\">\n                Draggable Items\n            </div>\n            <div class=\"card-block scroll-list\">\n                <div class=\"list-group\">\n                    <li appDraggable class=\"list-group-item list-group-item-action list-group-item-success\" [draggable] *ngFor=\"let item of vegetables\" [dragClass]=\"'active'\"\n                        [dragTransitClass]=\"'active'\" [dragData]=\"item\" [dragScope]=\"item.type\" [dragEnabled]=\"dragEnabled\">\n                        {{item.name}}\n                    </li>\n                </div>\n            </div>\n\n            <div class=\"card-footer\">\n                <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" title=\"Drag Enabled\" [(ngModel)]=\"dragEnabled\"> Drag Enabled\n                    </label>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card card-outline-primary mb-3\">\n            <div class=\"card-header card-inverse card-primary\">Draggable Items with Handle</div>\n            <div class=\"card-block scroll-list\">\n                <ul class=\"list-group text-center\">\n                    <li appDraggable *ngFor=\"let item of fruits\" [dragClass]=\"'drag-over'\" [dragData]=\"item\" class=\"list-group-item justify-content-between list-group-item-action\"\n                        [dragScope]=\"item.type\" [dragHandle]=\"'.drag-bar'\">\n                        {{item.name}}\n                        <i #dragHandle class=\"drag-bar fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-3\">\n        <div class=\"card card-outline-primary mb-3\" appDroppable [dragOverClass]=\"'drag-target-border'\" [dropScope]=\"'fruit'\" [dragHintClass]=\"'drag-hint'\"\n            (onDrop)=\"onFruitDrop($event)\" [dropEnabled]=\"fruitDropEnabled\">\n            <div class=\"card-header card-inverse card-primary\">\n                Drop Fruits here\n            </div>\n            <div class=\"card-block scroll-list\">\n                <li *ngFor=\"let item of droppedFruits\" class=\"list-group-item\">{{item.name}}</li>\n            </div>\n\n            <div class=\"card-footer\">\n                <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" [(ngModel)]=\"fruitDropEnabled\"> Drop Enabled\n                    </label>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n\n    <div class=\"col-sm-3\">\n        <div class=\"card card-outline-primary mb-3\" appDroppable [dragOverClass]=\"'drag-target-border-green'\" [dropScope]=\"'vegetable'\"\n            [dragHintClass]=\"'drag-hint'\" (onDrop)=\"onVegetableDrop($event)\">\n            <div class=\"card-header card-inverse card-primary\">Drop Vegetables here</div>\n            <div class=\"card-block scroll-list\">\n                <li *ngFor=\"let item of droppedVegetables\" class=\"list-group-item\">{{item.name}}</li>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-3\">\n        <div class=\"card card-outline-primary mb-3\" appDroppable [dragOverClass]=\"'drag-target-border'\" [dropScope]=\"['fruit', 'vegetable']\"\n            [dragHintClass]=\"'drag-hint'\" (onDrop)=\"onAnyDrop($event)\">\n            <div class=\"card-header card-inverse card-primary\">Drop Anything here</div>\n            <div class=\"card-block scroll-list\">\n                <li *ngFor=\"let item of droppedItems\" class=\"list-group-item\">{{item.name}}</li>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/test/drag-drop/drag-drop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scroll-list {\n  overflow: auto;\n  max-height: 70vh; }\n\n.drag-over {\n  border: #ff525b dashed 2px; }\n\n.drag-hint {\n  border: #ffc100 dashed 2px; }\n\n.drag-target-border {\n  border: #00bfff dashed 2px; }\n\n.drag-target-border-green {\n  border: #3c763d dashed 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/drag-drop/drag-drop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragDropComponent = (function () {
    function DragDropComponent() {
        this.vegetables = [
            { name: 'Carrot', type: 'vegetable' },
            { name: 'Onion', type: 'vegetable' },
            { name: 'Potato', type: 'vegetable' },
            { name: 'Capsicum', type: 'vegetable' }
        ];
        this.fruits = [
            { name: 'Apple', type: 'fruit' },
            { name: 'Orange', type: 'fruit' },
            { name: 'Mango', type: 'fruit' },
            { name: 'Banana', type: 'fruit' }
        ];
        this.droppedFruits = [];
        this.droppedVegetables = [];
        this.droppedItems = [];
        this.fruitDropEnabled = true;
        this.dragEnabled = true;
    }
    DragDropComponent.prototype.ngOnInit = function () {
    };
    DragDropComponent.prototype.onFruitDrop = function (e) {
        this.droppedFruits.push(e.dragData);
        this.removeItem(e.dragData, this.fruits);
    };
    DragDropComponent.prototype.onVegetableDrop = function (e) {
        this.droppedVegetables.push(e.dragData);
        this.removeItem(e.dragData, this.vegetables);
    };
    DragDropComponent.prototype.onAnyDrop = function (e) {
        this.droppedItems.push(e.dragData);
        if (e.dragData.type === 'vegetable') {
            this.removeItem(e.dragData, this.vegetables);
        }
        else {
            this.removeItem(e.dragData, this.fruits);
        }
    };
    DragDropComponent.prototype.removeItem = function (item, list) {
        var index = list.map(function (e) {
            return e.name;
        }).indexOf(item.name);
        list.splice(index, 1);
    };
    return DragDropComponent;
}());
DragDropComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-drag-drop-test',
        template: __webpack_require__("../../../../../src/app/components/test/drag-drop/drag-drop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/drag-drop/drag-drop.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DragDropComponent);

//# sourceMappingURL=drag-drop.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: "\n    <h3>Test</h3>\n    <p>Lorem ipsum...</p>\n    <app-bootstrap-gradients-test></app-bootstrap-gradients-test>\n    <hr>\n    <app-drag-drop-test></app-drag-drop-test>\n    <hr>\n    <app-click-outside-test></app-click-outside-test>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], TestComponent);

//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/utility/sortable-column/sortable-column.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n<i id=\"chevron\" class=\"fa fa-chevron-up\" *ngIf=\"sortDirection === 'asc'\" title=\"Ascending\"></i>\r\n<i id=\"chevron\" class=\"fa fa-chevron-down\" *ngIf=\"sortDirection === 'desc'\" title=\"Descending\"></i>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/utility/sortable-column/sortable-column.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chevron {\n  color: #fff;\n  text-shadow: 1px 1px 1px #ccc;\n  font-size: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/utility/sortable-column/sortable-column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_sortable_column_service__ = __webpack_require__("../../../../../src/app/services/sortable-column.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/
var SortableColumnComponent = (function () {
    function SortableColumnComponent(sortService) {
        this.sortService = sortService;
        this.sortDirection = '';
    }
    SortableColumnComponent.prototype.sort = function () {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
    };
    SortableColumnComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to sort changes so we can react when other columns are sorted
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(function (event) {
            // reset this column's sort direction to hide the sort icons
            if (_this.columnName !== event.sortColumn) {
                _this.sortDirection = '';
            }
        });
    };
    SortableColumnComponent.prototype.ngOnDestroy = function () {
        this.columnSortedSubscription.unsubscribe();
    };
    return SortableColumnComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SortableColumnComponent.prototype, "columnName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SortableColumnComponent.prototype, "sortDirection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SortableColumnComponent.prototype, "sort", null);
SortableColumnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sortable-column',
        template: __webpack_require__("../../../../../src/app/components/utility/sortable-column/sortable-column.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/utility/sortable-column/sortable-column.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_sortable_column_service__["a" /* SortableColumnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_sortable_column_service__["a" /* SortableColumnService */]) === "function" && _a || Object])
], SortableColumnComponent);

var _a;
//# sourceMappingURL=sortable-column.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/click-outside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// https://github.com/arkon/ng-click-outside
var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(_el, platformId) {
        this._el = _el;
        this.platformId = platformId;
        this.attachOutsideOnClick = false;
        this.delayClickOutsideInit = false;
        this.exclude = '';
        this.excludeBeforeClick = false;
        this.clickOutsideEvents = '';
        this.appClickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._nodesExcluded = [];
        this._events = ['click'];
        this._initOnClickBody = this._initOnClickBody.bind(this);
        this._onClickBody = this._onClickBody.bind(this);
    }
    ClickOutsideDirective.prototype.ngOnInit = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(this.platformId)) {
            return;
        }
        this._init();
    };
    ClickOutsideDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(this.platformId)) {
            return;
        }
        if (this.attachOutsideOnClick) {
            this._events.forEach(function (e) { return _this._el.nativeElement.removeEventListener(e, _this._initOnClickBody); });
        }
        this._events.forEach(function (e) { return document.body.removeEventListener(e, _this._onClickBody); });
    };
    ClickOutsideDirective.prototype.ngOnChanges = function (changes) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(this.platformId)) {
            return;
        }
        if (changes['attachOutsideOnClick'] || changes['exclude']) {
            this._init();
        }
    };
    ClickOutsideDirective.prototype._init = function () {
        var _this = this;
        if (this.clickOutsideEvents !== '') {
            this._events = this.clickOutsideEvents.split(',').map(function (e) { return e.trim(); });
        }
        this._excludeCheck();
        if (this.attachOutsideOnClick) {
            this._events.forEach(function (e) { return _this._el.nativeElement.addEventListener(e, _this._initOnClickBody); });
        }
        else {
            this._initOnClickBody();
        }
    };
    ClickOutsideDirective.prototype._initOnClickBody = function () {
        if (this.delayClickOutsideInit) {
            setTimeout(this._initClickListeners.bind(this));
        }
        else {
            this._initClickListeners();
        }
    };
    ClickOutsideDirective.prototype._initClickListeners = function () {
        var _this = this;
        this._events.forEach(function (e) { return document.body.addEventListener(e, _this._onClickBody); });
    };
    ClickOutsideDirective.prototype._excludeCheck = function () {
        if (this.exclude) {
            try {
                var nodes = Array.from(document.querySelectorAll(this.exclude));
                if (nodes) {
                    this._nodesExcluded = nodes;
                }
            }
            catch (err) {
                console.error('[ng-click-outside] Check your exclude selector syntax.', err);
            }
        }
    };
    ClickOutsideDirective.prototype._onClickBody = function (ev) {
        var _this = this;
        if (this.excludeBeforeClick) {
            this._excludeCheck();
        }
        if (!this._el.nativeElement.contains(ev.target) && !this._shouldExclude(ev.target)) {
            this.appClickOutside.emit(ev);
            if (this.attachOutsideOnClick) {
                this._events.forEach(function (e) { return document.body.removeEventListener(e, _this._onClickBody); });
            }
        }
    };
    ClickOutsideDirective.prototype._shouldExclude = function (target) {
        for (var _i = 0, _a = this._nodesExcluded; _i < _a.length; _i++) {
            var excludedNode = _a[_i];
            if (excludedNode.contains(target)) {
                return true;
            }
        }
        return false;
    };
    return ClickOutsideDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ClickOutsideDirective.prototype, "attachOutsideOnClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ClickOutsideDirective.prototype, "delayClickOutsideInit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ClickOutsideDirective.prototype, "exclude", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ClickOutsideDirective.prototype, "excludeBeforeClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ClickOutsideDirective.prototype, "clickOutsideEvents", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ClickOutsideDirective.prototype, "appClickOutside", void 0);
ClickOutsideDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appClickOutside]'
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, Object])
], ClickOutsideDirective);

var _a, _b;
//# sourceMappingURL=click-outside.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/drag-drop/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_drag_drop_service__ = __webpack_require__("../../../../../src/app/services/drag-drop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_classes_dom_helper__ = __webpack_require__("../../../../../src/app/classes/dom-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DraggableDirective = (function () {
    function DraggableDirective(el, renderer, ng2DragDropService, zone) {
        this.el = el;
        this.renderer = renderer;
        this.ng2DragDropService = ng2DragDropService;
        this.zone = zone;
        /**
         * Currently not used
         */
        this.dragEffect = 'move';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dragScope = 'default';
        /**
         * The CSS class applied to a draggable element. If a dragHandle is defined then its applied to that handle
         * element only. By default it is used to change the mouse over pointer.
         */
        this.dragHandleClass = 'drag-handle';
        /**
         * CSS class applied on the source draggable element while being dragged.
         */
        this.dragClass = 'drag-border';
        /**
         * CSS class applied on the drag ghost when being dragged.
         */
        this.dragTransitClass = 'drag-transit';
        /**
         * Event fired when Drag is started
         */
        this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * Event fired while the element is being dragged
         */
        this.onDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * Event fired when drag ends
         */
        this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * @private
         * Backing field for the dragEnabled property
         */
        this._dragEnabled = true;
    }
    Object.defineProperty(DraggableDirective.prototype, "dragImage", {
        get: function () {
            return this._dragImage;
        },
        /**
         * The url to image that will be used as custom drag image when the draggable is being dragged.
         */
        set: function (value) {
            this._dragImage = value;
            this.dragImageElement = new Image();
            this.dragImageElement.src = this.dragImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        /**
         * Defines if drag is enabled. `true` by default.
         */
        set: function (value) {
            this._dragEnabled = value;
            this.applyDragHandleClass();
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.ngOnInit = function () {
        this.applyDragHandleClass();
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this.unbindDragListeners();
    };
    DraggableDirective.prototype.dragStart = function (e) {
        var _this = this;
        if (this.allowDrag()) {
            // This is a kludgy approach to apply CSS to the drag helper element when an image is being dragged.
            __WEBPACK_IMPORTED_MODULE_2_app_classes_dom_helper__["a" /* DomHelper */].addClass(this.el, this.dragTransitClass);
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_2_app_classes_dom_helper__["a" /* DomHelper */].addClass(_this.el, _this.dragClass);
                __WEBPACK_IMPORTED_MODULE_2_app_classes_dom_helper__["a" /* DomHelper */].removeClass(_this.el, _this.dragTransitClass);
            }, 10);
            this.ng2DragDropService.dragData = this.dragData;
            this.ng2DragDropService.scope = this.dragScope;
            // Firefox requires setData() to be called otherwise the drag does not work.
            // We don't use setData() to transfer data anymore so this is just a dummy call.
            if (e.dataTransfer != null) {
                e.dataTransfer.setData('text', '');
            }
            // Set dragImage
            if (this.dragImage) {
                e.dataTransfer.setDragImage(this.dragImageElement, 0, 0);
            }
            e.stopPropagation();
            this.onDragStart.emit(e);
            this.ng2DragDropService.onDragStart.next();
            this.zone.runOutsideAngular(function () {
                _this.unbindDragListener = _this.renderer.listen(_this.el.nativeElement, 'drag', function (dragEvent) {
                    _this.drag(dragEvent);
                });
            });
        }
        else {
            e.preventDefault();
        }
    };
    DraggableDirective.prototype.drag = function (e) {
        this.onDrag.emit(e);
    };
    DraggableDirective.prototype.dragEnd = function (e) {
        this.unbindDragListeners();
        __WEBPACK_IMPORTED_MODULE_2_app_classes_dom_helper__["a" /* DomHelper */].removeClass(this.el, this.dragClass);
        this.ng2DragDropService.onDragEnd.next();
        this.onDragEnd.emit(e);
        e.stopPropagation();
        e.preventDefault();
    };
    DraggableDirective.prototype.mousedown = function (e) {
        this.mouseDownElement = e.target;
    };
    DraggableDirective.prototype.allowDrag = function () {
        if (this.dragHandle) {
            return __WEBPACK_IMPORTED_MODULE_2_app_classes_dom_helper__["a" /* DomHelper */].matches(this.mouseDownElement, this.dragHandle) && this.dragEnabled;
        }
        else {
            return this.dragEnabled;
        }
    };
    DraggableDirective.prototype.applyDragHandleClass = function () {
        var dragElement = this.getDragHandleElement();
        if (!dragElement) {
            return;
        }
        if (this.dragEnabled) {
            __WEBPACK_IMPORTED_MODULE_2_app_classes_dom_helper__["a" /* DomHelper */].addClass(dragElement, this.dragHandleClass);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2_app_classes_dom_helper__["a" /* DomHelper */].removeClass(this.el, this.dragHandleClass);
        }
    };
    DraggableDirective.prototype.getDragHandleElement = function () {
        var dragElement = this.el;
        if (this.dragHandle) {
            dragElement = this.el.nativeElement.querySelector(this.dragHandle);
        }
        return dragElement;
    };
    DraggableDirective.prototype.unbindDragListeners = function () {
        if (this.unbindDragListener) {
            this.unbindDragListener();
        }
    };
    return DraggableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DraggableDirective.prototype, "dragHandle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragEffect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragScope", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragHandleClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragTransitClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DraggableDirective.prototype, "dragImage", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('draggable'),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DraggableDirective.prototype, "dragEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], DraggableDirective.prototype, "onDragStart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], DraggableDirective.prototype, "onDrag", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], DraggableDirective.prototype, "onDragEnd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DraggableDirective.prototype, "dragStart", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DraggableDirective.prototype, "dragEnd", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DraggableDirective.prototype, "mousedown", null);
DraggableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appDraggable]'
    })
    /**
     * Makes an element draggable by adding the draggable html attribute
     */
    ,
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_drag_drop_service__["a" /* DragDropService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_drag_drop_service__["a" /* DragDropService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _g || Object])
], DraggableDirective);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=draggable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/drag-drop/droppable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DroppableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_classes_drop_event_model__ = __webpack_require__("../../../../../src/app/classes/drop-event.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_drag_drop_service__ = __webpack_require__("../../../../../src/app/services/drag-drop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes_dom_helper__ = __webpack_require__("../../../../../src/app/classes/dom-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DroppableDirective = (function () {
    function DroppableDirective(el, renderer, ng2DragDropService, zone) {
        this.el = el;
        this.renderer = renderer;
        this.ng2DragDropService = ng2DragDropService;
        this.zone = zone;
        /**
         *  Event fired when Drag dragged element enters a valid drop target.
         */
        this.onDragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * Event fired when an element is being dragged over a valid drop target
         */
        this.onDragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * Event fired when a dragged element leaves a valid drop target.
         */
        this.onDragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * Event fired when an element is dropped on a valid drop target.
         */
        this.onDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * CSS class that is applied when a compatible draggable is being dragged over this droppable.
         */
        this.dragOverClass = 'drag-over-border';
        /**
         * CSS class applied on this droppable when a compatible draggable item is being dragged.
         * This can be used to visually show allowed drop zones.
         */
        this.dragHintClass = 'drag-hint-border';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dropScope = 'default';
        /**
         * @private
         * Backing field for the dropEnabled property
         */
        this._dropEnabled = true;
        /**
         * @private
         * Field for tracking drag state. Helps when
         * drag stop event occurs before the allowDrop()
         * can be calculated (async).
         */
        this._isDragActive = false;
        /**
         * @private
         * Field for tracking if service is subscribed.
         * Avoids creating multiple subscriptions of service.
         */
        this._isServiceActive = false;
    }
    Object.defineProperty(DroppableDirective.prototype, "dropEnabled", {
        get: function () {
            return this._dropEnabled;
        },
        /**
         * Defines if drop is enabled. `true` by default.
         */
        set: function (value) {
            this._dropEnabled = value;
            if (this._dropEnabled === true) {
                this.subscribeService();
            }
            else {
                this.unsubscribeService();
            }
        },
        enumerable: true,
        configurable: true
    });
    DroppableDirective.prototype.ngOnInit = function () {
        if (this.dropEnabled === true) {
            this.subscribeService();
        }
    };
    DroppableDirective.prototype.ngOnDestroy = function () {
        this.unsubscribeService();
        this.unbindDragListeners();
    };
    DroppableDirective.prototype.dragEnter = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.onDragEnter.emit(e);
    };
    DroppableDirective.prototype.dragOver = function (e, result) {
        if (result) {
            __WEBPACK_IMPORTED_MODULE_3_app_classes_dom_helper__["a" /* DomHelper */].addClass(this.el, this.dragOverClass);
            e.preventDefault();
            this.onDragOver.emit(e);
        }
    };
    DroppableDirective.prototype.dragLeave = function (e) {
        __WEBPACK_IMPORTED_MODULE_3_app_classes_dom_helper__["a" /* DomHelper */].removeClass(this.el, this.dragOverClass);
        e.preventDefault();
        this.onDragLeave.emit(e);
    };
    DroppableDirective.prototype.drop = function (e) {
        __WEBPACK_IMPORTED_MODULE_3_app_classes_dom_helper__["a" /* DomHelper */].removeClass(this.el, this.dragOverClass);
        e.preventDefault();
        e.stopPropagation();
        this.ng2DragDropService.onDragEnd.next();
        this.onDrop.emit(new __WEBPACK_IMPORTED_MODULE_1_app_classes_drop_event_model__["a" /* DropEvent */](e, this.ng2DragDropService.dragData));
        this.ng2DragDropService.dragData = null;
        this.ng2DragDropService.scope = null;
    };
    DroppableDirective.prototype.allowDrop = function () {
        var _this = this;
        var allowed = false;
        /* tslint:disable:curly */
        /* tslint:disable:one-line */
        if (typeof this.dropScope === 'string') {
            if (typeof this.ng2DragDropService.scope === 'string')
                allowed = this.ng2DragDropService.scope === this.dropScope;
            else if (this.ng2DragDropService.scope instanceof Array)
                allowed = this.ng2DragDropService.scope.indexOf(this.dropScope) > -1;
        }
        else if (this.dropScope instanceof Array) {
            if (typeof this.ng2DragDropService.scope === 'string')
                allowed = this.dropScope.indexOf(this.ng2DragDropService.scope) > -1;
            else if (this.ng2DragDropService.scope instanceof Array)
                allowed = this.dropScope.filter(function (item) {
                    return _this.ng2DragDropService.scope.indexOf(item) !== -1;
                }).length > 0;
        }
        else if (typeof this.dropScope === 'function') {
            allowed = this.dropScope(this.ng2DragDropService.dragData);
            if (allowed instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */]) {
                return allowed.map(function (result) { return result && _this.dropEnabled; });
            }
        }
        /* tslint:enable:curly */
        /* tslint:disable:one-line */
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(allowed && this.dropEnabled);
    };
    DroppableDirective.prototype.subscribeService = function () {
        var _this = this;
        if (this._isServiceActive === true) {
            return;
        }
        this._isServiceActive = true;
        this.dragStartSubscription = this.ng2DragDropService.onDragStart.subscribe(function () {
            _this._isDragActive = true;
            _this.allowDrop().subscribe(function (result) {
                if (result && _this._isDragActive) {
                    __WEBPACK_IMPORTED_MODULE_3_app_classes_dom_helper__["a" /* DomHelper */].addClass(_this.el, _this.dragHintClass);
                    _this.zone.runOutsideAngular(function () {
                        _this.unbindDragEnterListener = _this.renderer.listen(_this.el.nativeElement, 'dragenter', function (dragEvent) {
                            _this.dragEnter(dragEvent);
                        });
                        _this.unbindDragOverListener = _this.renderer.listen(_this.el.nativeElement, 'dragover', function (dragEvent) {
                            _this.dragOver(dragEvent, result);
                        });
                        _this.unbindDragLeaveListener = _this.renderer.listen(_this.el.nativeElement, 'dragleave', function (dragEvent) {
                            _this.dragLeave(dragEvent);
                        });
                    });
                }
            });
        });
        this.dragEndSubscription = this.ng2DragDropService.onDragEnd.subscribe(function () {
            _this._isDragActive = false;
            __WEBPACK_IMPORTED_MODULE_3_app_classes_dom_helper__["a" /* DomHelper */].removeClass(_this.el, _this.dragHintClass);
            _this.unbindDragListeners();
        });
    };
    DroppableDirective.prototype.unsubscribeService = function () {
        this._isServiceActive = false;
        if (this.dragStartSubscription) {
            this.dragStartSubscription.unsubscribe();
        }
        if (this.dragEndSubscription) {
            this.dragEndSubscription.unsubscribe();
        }
    };
    DroppableDirective.prototype.unbindDragListeners = function () {
        if (this.unbindDragEnterListener) {
            this.unbindDragEnterListener();
        }
        if (this.unbindDragOverListener) {
            this.unbindDragOverListener();
        }
        if (this.unbindDragLeaveListener) {
            this.unbindDragLeaveListener();
        }
    };
    return DroppableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], DroppableDirective.prototype, "onDragEnter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], DroppableDirective.prototype, "onDragOver", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], DroppableDirective.prototype, "onDragLeave", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _d || Object)
], DroppableDirective.prototype, "onDrop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DroppableDirective.prototype, "dragOverClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DroppableDirective.prototype, "dragHintClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DroppableDirective.prototype, "dropScope", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DroppableDirective.prototype, "dropEnabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DroppableDirective.prototype, "drop", null);
DroppableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appDroppable]'
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_drag_drop_service__["a" /* DragDropService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_drag_drop_service__["a" /* DragDropService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _h || Object])
], DroppableDirective);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=droppable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sortable-table.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableTableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_sortable_column_service__ = __webpack_require__("../../../../../src/app/services/sortable-column.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/
var SortableTableDirective = (function () {
    function SortableTableDirective(sortService) {
        this.sortService = sortService;
        this.sorted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SortableTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(function (event) {
            _this.sorted.emit(event);
        });
    };
    SortableTableDirective.prototype.ngOnDestroy = function () {
        this.columnSortedSubscription.unsubscribe();
    };
    return SortableTableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableTableDirective.prototype, "sorted", void 0);
SortableTableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortableTable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_sortable_column_service__["a" /* SortableColumnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_sortable_column_service__["a" /* SortableColumnService */]) === "function" && _a || Object])
], SortableTableDirective);

var _a;
//# sourceMappingURL=sortable-table.directive.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-api/client-configuration/client-configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ClientConfigurationService = (function () {
    function ClientConfigurationService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.clientConfigApiEndpoint = this.config.apiEndpoint + 'api/clientconfiguration'; // URL to web api
    }
    ClientConfigurationService.prototype.getClientConfigurationsThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.clientConfigApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigurationService.prototype.createClientConfigurationThruApi = function (clientConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.clientConfigApiEndpoint, JSON.stringify(clientConfiguration), { headers: this.headers }).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 2:
                        error_2 = _a.sent();
                        this.handleError(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigurationService.prototype.updateClientConfigurationThruApi = function (clientConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.clientConfigApiEndpoint + "/" + clientConfiguration.id;
                        return [4 /*yield*/, this.http.put(url, JSON.stringify(clientConfiguration), { headers: this.headers }).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 2:
                        error_3 = _a.sent();
                        this.handleError(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigurationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ClientConfigurationService;
}());
ClientConfigurationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_config__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_config__["IAppConfig"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
], ClientConfigurationService);

var _a, _b;
//# sourceMappingURL=client-configuration.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-api/client/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ClientService = (function () {
    function ClientService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.clientApiEndpoint = this.config.apiEndpoint + 'api/client'; // URL to web api
    }
    ClientService.prototype.getClientsThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.clientApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ClientService;
}());
ClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_config__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_config__["IAppConfig"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
], ClientService);

var _a, _b;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-api/communication/communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CommunicationService = (function () {
    function CommunicationService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.commApiEndpoint = this.config.apiEndpoint + 'api/communication'; // URL to web api
    }
    CommunicationService.prototype.getCommunicationsThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.commApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommunicationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CommunicationService;
}());
CommunicationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_config__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_config__["IAppConfig"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
], CommunicationService);

var _a, _b;
//# sourceMappingURL=communication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-api/data-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_data_api_client_client_service__ = __webpack_require__("../../../../../src/app/services/data-api/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_data_api_client_configuration_client_configuration_service__ = __webpack_require__("../../../../../src/app/services/data-api/client-configuration/client-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_data_api_communication_communication_service__ = __webpack_require__("../../../../../src/app/services/data-api/communication/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_data_api_program_program_service__ = __webpack_require__("../../../../../src/app/services/data-api/program/program.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_data_api_program_configuration_program_configuration_service__ = __webpack_require__("../../../../../src/app/services/data-api/program-configuration/program-configuration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var DataApiService = (function () {
    function DataApiService(clientService, clientConfigurationService, communicationService, programService, programConfigurationService) {
        this.clientService = clientService;
        this.clientConfigurationService = clientConfigurationService;
        this.communicationService = communicationService;
        this.programService = programService;
        this.programConfigurationService = programConfigurationService;
    }
    DataApiService.prototype.getClients = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.clients) return [3 /*break*/, 1];
                        return [2 /*return*/, this.clients];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.clientService.getClientsThruApi()];
                    case 2:
                        _a.clients = _b.sent();
                        return [2 /*return*/, this.removeClientConfigurationCruft(this.clients)];
                }
            });
        });
    };
    DataApiService.prototype.getClientConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.clientConfigurations) return [3 /*break*/, 1];
                        return [2 /*return*/, this.clientConfigurations];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.clientConfigurationService.getClientConfigurationsThruApi()];
                    case 2:
                        _a.clientConfigurations = _b.sent();
                        return [2 /*return*/, this.clientConfigurations];
                }
            });
        });
    };
    DataApiService.prototype.createClientConfiguration = function (clientConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientConfigurationService.createClientConfigurationThruApi(clientConfiguration)];
                    case 1:
                        clientConfiguration = _a.sent();
                        this.insertClientConfiguration(clientConfiguration);
                        return [2 /*return*/, clientConfiguration];
                }
            });
        });
    };
    DataApiService.prototype.updateClientConfiguration = function (clientConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientConfigurationService.updateClientConfigurationThruApi(clientConfiguration)];
                    case 1:
                        clientConfiguration = _a.sent();
                        return [2 /*return*/, clientConfiguration];
                }
            });
        });
    };
    DataApiService.prototype.getCommunications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.communications) return [3 /*break*/, 1];
                        return [2 /*return*/, this.communications];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.communicationService.getCommunicationsThruApi()];
                    case 2:
                        _a.communications = _b.sent();
                        return [2 /*return*/, this.removeProgramConfigurationCruft(this.communications)];
                }
            });
        });
    };
    DataApiService.prototype.getPrograms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.programs) return [3 /*break*/, 1];
                        return [2 /*return*/, this.programs];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.programService.getProgramsThruApi()];
                    case 2:
                        _a.programs = _b.sent();
                        return [2 /*return*/, this.removeProgramConfigurationCruft(this.programs)];
                }
            });
        });
    };
    DataApiService.prototype.createProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.programService.createProgramThruApi(program)];
                    case 1:
                        program = _a.sent();
                        this.insertProgram(program);
                        return [2 /*return*/, program];
                }
            });
        });
    };
    DataApiService.prototype.updateProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.programService.updateProgramThruApi(program)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, program];
                }
            });
        });
    };
    DataApiService.prototype.deleteProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.programService.deleteProgramThruApi(program)];
                    case 1:
                        _a.sent();
                        this.removeProgram(program);
                        program = null;
                        return [2 /*return*/, program];
                }
            });
        });
    };
    DataApiService.prototype.getProgramConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.programConfigurations) return [3 /*break*/, 1];
                        return [2 /*return*/, this.programConfigurations];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.programConfigurationService.getProgramConfigurationsThruApi()];
                    case 2:
                        _a.programConfigurations = _b.sent();
                        return [2 /*return*/, this.programConfigurations];
                }
            });
        });
    };
    DataApiService.prototype.createProgramConfiguration = function (programConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.programConfigurationService.createProgramConfigurationThruApi(programConfiguration)];
                    case 1:
                        programConfiguration = _a.sent();
                        this.insertProgramConfiguration(programConfiguration);
                        return [2 /*return*/, programConfiguration];
                }
            });
        });
    };
    DataApiService.prototype.updateProgramConfiguration = function (programConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.programConfigurationService.updateProgramConfigurationThruApi(programConfiguration)];
                    case 1:
                        programConfiguration = _a.sent();
                        return [2 /*return*/, programConfiguration];
                }
            });
        });
    };
    /*
    */
    DataApiService.prototype.insertProgram = function (program) {
        this.programs.push(program);
    };
    DataApiService.prototype.removeProgram = function (program) {
        var index = this.programs.indexOf(program);
        if (index > -1) {
            this.programs.splice(index, 1);
        }
    };
    DataApiService.prototype.insertProgramConfiguration = function (programConfiguration) {
        this.programConfigurations.push(programConfiguration);
    };
    DataApiService.prototype.removeProgramConfigurationCruft = function (progConfigableObjs) {
        // some reason spring rest is giving empty array objects of programConfiguration property
        // get rid of them all
        for (var i = 0, len = progConfigableObjs.length; i < len; i++) {
            if (progConfigableObjs[i].programConfiguration && progConfigableObjs[i].programConfiguration.length) {
                progConfigableObjs[i].programConfiguration = [];
            }
        }
        return progConfigableObjs;
    };
    DataApiService.prototype.insertClientConfiguration = function (clientConfiguration) {
        this.clientConfigurations.push(clientConfiguration);
    };
    DataApiService.prototype.removeClientConfigurationCruft = function (clients) {
        // some reason spring rest is giving empty array objects of programConfiguration property
        // get rid of them all
        // for (let i = 0, len = clients.length; i < len; i++) {
        //   if (clients[i].programConfiguration && clients[i].programConfiguration.length) {
        //     clients[i].programConfiguration = [];
        //   }
        // }
        return clients;
    };
    return DataApiService;
}());
DataApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_data_api_client_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_data_api_client_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_data_api_client_configuration_client_configuration_service__["a" /* ClientConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_data_api_client_configuration_client_configuration_service__["a" /* ClientConfigurationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_data_api_communication_communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_data_api_communication_communication_service__["a" /* CommunicationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_data_api_program_program_service__["a" /* ProgramService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_data_api_program_program_service__["a" /* ProgramService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_data_api_program_configuration_program_configuration_service__["a" /* ProgramConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_data_api_program_configuration_program_configuration_service__["a" /* ProgramConfigurationService */]) === "function" && _e || Object])
], DataApiService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=data-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-api/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var communication = [
            { 'id': 260, 'name': 'Refill Available Notice',
                'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
                'programConfiguration': [] },
            { 'id': 261, 'name': 'Order Received ',
                'description': 'Notifies a member when their order is received',
                'programConfiguration': [1] },
            { 'id': 263, 'name': 'Refill Expiring Notice',
                'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
                'programConfiguration': [] },
            { 'id': 264, 'name': 'Order Shipped',
                'description': 'Notifies a member when their order is shipped',
                'programConfiguration': [] },
            { 'id': 1229, 'name': 'Zero Refills Notice',
                'description': 'Notifies a member when one or more of their Rx\s has no more refills available',
                'programConfiguration': [] },
            { 'id': 1230, 'name': 'RFM Auto Renewal ',
                'description': 'Notifies a member when we will be reaching out to their Dr. to get a new RX',
                'programConfiguration': [] },
            { 'id': 1231, 'name': 'RFM Auto Refill ',
                'description': 'Notifies a member when we will be automatically refilling their Rx',
                'programConfiguration': [] },
            { 'id': 1232, 'name': 'RFM MD Denied ',
                'description': 'Notifies a member when their Dr. Denied our request for a new Rx',
                'programConfiguration': [] },
            { 'id': 1233, 'name': 'RFM MD Unresponsive ',
                'description': 'Notifies a member when their Dr. was unresponsive to our request for a new Rx',
                'programConfiguration': [] },
            { 'id': 1341, 'name': 'RTP (Return to Participant) w/ MD Contact',
                'description': 'Notifies a member when their order cannot be filled and we tried to contact their Doctor',
                'programConfiguration': [] },
            { 'id': 1342, 'name': 'RTP (Return to Participant) w/o MD Contact',
                'description': 'Notifies a member when their order cannot be filled but we did not reach out to their doctor',
                'programConfiguration': [] },
            { 'id': 1343, 'name': 'Future Fill Held ',
                'description': 'Notifies a member when their order is held due to refill too soon',
                'programConfiguration': [] },
            { 'id': 1344, 'name': 'Future Fill Split ',
                'description': 'Notifies a member when part of their order is held due to refill too soon',
                'programConfiguration': [] },
            { 'id': 1859, 'name': 'Doctor Hold',
                'description': 'Notifies member when Order is Held by Doctor.',
                'programConfiguration': [] },
            { 'id': 1861, 'name': 'Cannot Fill',
                'description': 'Notifies member when Order cannot be filled (previously RTP)',
                'programConfiguration': [] },
            { 'id': 1904, 'name': 'Ship Consent Initial',
                'description': 'Initial consent from member',
                'programConfiguration': [] },
            { 'id': 1905, 'name': 'Ship Consent Followup',
                'description': 'Followup consent from member',
                'programConfiguration': [] },
            { 'id': 1906, 'name': 'Ship Consent Final',
                'description': 'Final followup consent from member',
                'programConfiguration': [] },
            { 'id': 1907, 'name': 'Future Fill Release Reminder',
                'description': 'Notifies a member when a prescription is released from future fill',
                'programConfiguration': [] },
            { 'id': 2514, 'name': 'Refill Available Reminder',
                'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
                'programConfiguration': [] },
            { 'id': 2515, 'name': 'Refill Available Warning',
                'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
                'programConfiguration': [] },
            { 'id': 2516, 'name': 'Refill Expiring Reminder',
                'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
                'programConfiguration': [] },
            { 'id': 2517, 'name': 'Refill Expiring Warning',
                'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
                'programConfiguration': [] },
            { 'id': 2518, 'name': 'Zero Refills Reminder',
                'description': 'Notifies a member when one or more of their Rx\'s has no more refills available',
                'programConfiguration': [] },
            { 'id': 2519, 'name': 'Zero Refills Warning',
                'description': 'Notifies a member when one or more of their Rx\'s has no more refills available',
                'programConfiguration': [] }
        ];
        var program = [
            { 'id': 1, 'name': 'Prescription Alerts', 'description': 'PBM Communications including Order Status and Refill Reminder alerts' },
            { 'id': 2, 'name': 'Non-Prescription Alerts', 'description': 'tired of adding a new program just to test deleting it' }
        ];
        var programconfiguration = [
            { 'id': 1,
                'name': 'Prescription Alerts Order Status',
                'description': 'Order Status Program-level Configuration',
                'chanEmailPriority': 2,
                'chanIvrPriority': 3,
                'chanSmsPriority': 1,
                'chanMailPriority': 0,
                'chanMobilePriority': 0,
                'chanMandatory': 'Email',
                'effective': '2017-1-1',
                'expiration': '9999-12-31',
                'program': { 'id': 1,
                    'name': 'Prescription Alerts',
                    'description': 'PBM Communications including Order Status and Refill Reminder alerts',
                    'programConfiguration': [1]
                },
                'communication': { 'id': 261,
                    'name': 'Order Received',
                    'description': 'Notifies a member when their order is received',
                    'programConfiguration': [1]
                }
            }
        ];
        var client = [
            { 'id': 142, 'code': 'AMD', 'name': 'AT&T INC.' },
            { 'id': 259, 'code': 'BCC', 'name': 'BLUE CROSS OF CONNECTICUT' },
            { 'id': 339, 'code': 'BCAL', 'name': 'BLUE CROSS OF ALABAMA' },
            { 'id': 428, 'code': 'BOH', 'name': 'BLUE CROSS OF OHIO' },
            { 'id': 10203, 'code': 'BCBSN', 'name': 'BLUE CROSS BLUE SHIELD OF NC' },
            { 'id': 11254, 'code': 'BCOGA', 'name': 'BLUE CROSS/BLUE SHIELD GEORGIA' },
            { 'id': 11614, 'code': 'BCCAL', 'name': 'BLUE CROSS/BS OF CALIFORNIA' },
            { 'id': 11643, 'code': 'BCOMI', 'name': 'BLUE CROSS OF MICHIGAN' },
            { 'id': 12130, 'code': 'BCBSA', 'name': 'BLUE CROSS BLUE SHIELD ASSOC.' },
            { 'id': 12675, 'code': 'BCORO', 'name': 'BLUE CROSS OF ROCHESTER' },
            { 'id': 14481, 'code': 'ZC342', 'name': 'BLUE CROSS IDAHO-HMO' },
            { 'id': 14482, 'code': 'ZC343', 'name': 'BLUE CROSS IDAHO-PPO' },
            { 'id': 14606, 'code': 'ZCC01', 'name': 'BLUE CROSS BLUE SHIELD OF TENN' },
            { 'id': 22912, 'code': 'X7700', 'name': 'AETNA-PPO' },
            { 'id': 22913, 'code': 'X7705', 'name': 'AETNA-SRC' },
            { 'id': 22914, 'code': 'X7710', 'name': 'AETNA-AGB' },
            { 'id': 22915, 'code': 'X7715', 'name': 'AETNA-DISCOUNT CARE' },
            { 'id': 22916, 'code': 'X7720', 'name': 'AETNA-ASH' },
            { 'id': 22917, 'code': 'X7730', 'name': 'AETNA-HMO' },
            { 'id': 22918, 'code': 'X7750', 'name': 'AETNA-MCPP - MEDICAL BNFT' },
            { 'id': 22919, 'code': 'X7760', 'name': 'AETNA-HNO' },
            { 'id': 22920, 'code': 'X7770', 'name': 'AETNA-MED-D PDP S5810' },
            { 'id': 22921, 'code': 'X7771', 'name': 'AETNA-MED-D MAPD H0318' },
            { 'id': 22922, 'code': 'X7772', 'name': 'AETNA-MED-D MAPD H0523' }
        ];
        var clientconfiguration = [
            { 'id': 1,
                'name': 'Prescription Alerts Order Status',
                'description': 'Order Status Client-level Configuration',
                'chanEmailPriority': 2,
                'chanIvrPriority': 3,
                'chanSmsPriority': 1,
                'chanMailPriority': 0,
                'chanMobilePriority': 0,
                'chanMandatory': 'Email',
                'effective': '2017-01-01',
                'expiration': '9999-12-31',
                'client': { 'id': 142,
                    'code': 'AMD',
                    'name': 'AT&T INC.'
                },
                'communication': { 'id': 261,
                    'name': 'Order Received ',
                    'description': 'Notifies a member when their order is received',
                    'programConfiguration': [1]
                }
            },
            { 'id': 2,
                'name': 'Prescription Alerts Order Status',
                'description': 'Order Status Client-level Configuration',
                'chanEmailPriority': 3,
                'chanIvrPriority': 1,
                'chanSmsPriority': 2,
                'chanMailPriority': 0,
                'chanMobilePriority': 0,
                'chanMandatory': 'No',
                'effective': '2017-01-01',
                'expiration': '9999-12-31',
                'client': { 'id': 259,
                    'code': 'BCC',
                    'name': 'BLUE CROSS OF CONNECTICUT'
                },
                'communication': 261
            }
        ];
        return {
            communication: communication,
            program: program,
            programconfiguration: programconfiguration,
            client: client,
            clientconfiguration: clientconfiguration
        };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-api/program-configuration/program-configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ProgramConfigurationService = (function () {
    function ProgramConfigurationService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.progConfigApiEndpoint = this.config.apiEndpoint + 'api/programconfiguration'; // URL to web api
    }
    ProgramConfigurationService.prototype.getProgramConfigurationsThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.progConfigApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationService.prototype.createProgramConfigurationThruApi = function (programConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.progConfigApiEndpoint, JSON.stringify(programConfiguration), { headers: this.headers }).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 2:
                        error_2 = _a.sent();
                        this.handleError(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationService.prototype.updateProgramConfigurationThruApi = function (programConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.progConfigApiEndpoint + "/" + programConfiguration.id;
                        return [4 /*yield*/, this.http.put(url, JSON.stringify(programConfiguration), { headers: this.headers }).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 2:
                        error_3 = _a.sent();
                        this.handleError(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ProgramConfigurationService;
}());
ProgramConfigurationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_config__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_config__["IAppConfig"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
], ProgramConfigurationService);

var _a, _b;
//# sourceMappingURL=program-configuration.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-api/program/program.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ProgramService = (function () {
    function ProgramService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.progApiEndpoint = this.config.apiEndpoint + 'api/program'; // URL to web api
    }
    ProgramService.prototype.getProgramsThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.progApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramService.prototype.createProgramThruApi = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.progApiEndpoint, JSON.stringify(program), { headers: this.headers }).toPromise()];
                    case 1:
                        response = _a.sent();
                        try {
                            return [2 /*return*/, response.json()];
                        }
                        catch (error) {
                            // some reason spring is returning only headers
                            // if (response.url) {
                            //  console.log('createProgramThruApi: ', response.url)
                            // }
                            return [2 /*return*/, program];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.handleError(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramService.prototype.updateProgramThruApi = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.progApiEndpoint + "/" + program.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.put(url, JSON.stringify(program), { headers: this.headers }).toPromise()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 3:
                        error_3 = _a.sent();
                        this.handleError(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProgramService.prototype.deleteProgramThruApi = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.progApiEndpoint + "/" + program.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.delete(url, { headers: this.headers }).toPromise()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                    case 3:
                        error_4 = _a.sent();
                        this.handleError(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProgramService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ProgramService;
}());
ProgramService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_config__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_app_config__["IAppConfig"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
], ProgramService);

var _a, _b;
//# sourceMappingURL=program.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/drag-drop.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// forked from https://github.com/ObaidUrRehman/ng-drag-drop
var DragDropService = (function () {
    function DragDropService() {
        this.onDragStart = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    return DragDropService;
}());
DragDropService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DragDropService);

//# sourceMappingURL=drag-drop.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/sortable-column.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableColumnService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableColumnService = (function () {
    function SortableColumnService() {
        this.columnSortedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.columnSorted$ = this.columnSortedSource.asObservable();
    }
    SortableColumnService.prototype.columnSorted = function (event) {
        this.columnSortedSource.next(event);
    };
    return SortableColumnService;
}());
SortableColumnService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SortableColumnService);

//# sourceMappingURL=sortable-column.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    envName: 'GitHub Pages',
    inMemAPI: true,
    apiEndpoint: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map