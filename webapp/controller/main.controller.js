sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("bosch.co.walkthrough.controller.main", {
            onInit: function () {
             var oData = {
                    recipient:{
                        name: "world"
                    }
             };
             var oModel = new JSONModel(oData);
             this.getView().setModel(oModel);
             
            },
            onShowHello: function () {
              var sRecipient = this.getView().getModel().getProperty("/recipient/name");
              var oBundle = this.getView().getModel("i18n").getResourceBundle();
              var sMsg = oBundle.getText("helloMsg", [sRecipient]);
             sap.ui.require(["sap/m/MessageToast"],function(MessageToast){
                MessageToast.show(sMsg);
             });
            },
            onOpenDialog: function () {
                // create dialog lazily
                if (!this.pDialog){
                    this.pDialog = this.loadFragment({
                        name: "bosch.co.walkthrough.view.HelloDialog"
                    });
                }
                this.pDialog.then(function (oDialog){
                    oDialog.open();
                });
            },
            onCloseDialog: function () {
                this.byId("helloDialog").close();
            }
        });
    });
