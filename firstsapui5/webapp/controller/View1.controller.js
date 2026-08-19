sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.firstsapui5.controller.View1", {
        onInit() {
        },
        onPress: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },
        onSubmit:function () {
            //get the current value by getter method
            var name = this.getView().byId("idInputName").getValue();
            var msg = "Welcome To " + name;

            // set the new value into text by setter method
            this.getView().byId("idTextWelcome").setText(msg);

            //set the colour of the button as green after click
            this.getView().byId("idSubmit").setType("Accept");
        },
        onBack:function () {
            this.getView().byId("idTextWelcome").setText("Welcome to SAPUI5");
            this.getView().byId("idInputName").setValue("");
        }
    });
});