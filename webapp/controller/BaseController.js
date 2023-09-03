sap.ui.define(["sap/ui/core/mvc/Controller"

], 
function(Controller) {
          'use strict';
          return Controller.extend("bosch.co.walkthrough.controller.BaseController", {
            getResourceBundle: function (){ 
                    return this.getOwnerComponent().getModel("i18n").getResourceBundle();
            }
          })
          
});