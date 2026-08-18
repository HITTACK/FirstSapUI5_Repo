sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.firstsapui5.controller.View2", {
        onInit() {
        },
        onBackToView1: function () {
            //this.getOwnerComponent().getRouter().navTo("RouteView1");
            // for back, we don't have to write above statement. Instead of this, use below code.
            history.go(-1);
        }
    });
});