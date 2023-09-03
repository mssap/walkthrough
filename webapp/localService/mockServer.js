sap.ui.define(["sap/ui/core/util/MockServer",
          "sap/base/util/UriParameters"
],
          function (MockServer, UriParameters) {
                    "use strict";
                    return {
                              init: function () {
                                debugger;
                                        //create
                                        var oMockServer = new MockServer({
                                                  rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
                                        });
                                        var oUriParameters = new UriParameters(window.location.href);
                                        //Config mockserver with delay
                                        MockServer.config({
                                                  autoRespond: true,
                                                  autoRespondAfter: oUriParameters.get("serverDelay") || 500
                                        });
                                        //simulate
                                        var sPath = sap.ui.require.toUrl("bosch/co/walkthrough/localService");
                                       // var sMockdataBaseUrl = sPath + "/mockdata";
                                       // oMockServer.simulate(sPath + "/metadata.xml", {
                                       //           MockdataBase:  sMockdataBaseUrl });
                                       oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
                                  
                              //Mock server start
                              oMockServer.start();
          }
        }
          });