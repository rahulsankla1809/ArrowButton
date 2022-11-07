sap.ui.define([
		"jquery.sap.global",
		"sap/ui/core/Control",
		"sap/ui/dom/includeStylesheet"
	],
	function (jQuery, Control, includeStylesheet) {
		"use strict";
		var arrowButton = Control.extend("com.vestas.test.ArrowButton.control.arrowButton", {
			metadata: {
				properties: {
					id: {
						type: "string",
						defaultValue: ""
					},
					type: {
						type: "string",
						defaultValue: "default" // possible values are default, primary, success, info, warning, danger	

					},
					direction: {
						type: "string",
						defaultValue: "right" // possible values left and right
					},
					text: {
						type: "string",
						defaultValue: "Button"
					}
				},
				events: {
					press: {}
				}
			}
		});
		arrowButton.prototype.init = function () {
			var libraryPath = jQuery.sap.getModulePath("com.vestas.test.ArrowButton");
			// include the control's CSS
			includeStylesheet(libraryPath + "/control/css/arrowButtonStyles.css");
			// includeStylesheet("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css");
		};
		arrowButton.prototype.onAfterRendering = function () {
			this.attachBrowserEvent("click", function () {
				this.fireEvent("press");
			});
		};
		// arrowButton.prototype._onClick = function (sSource, oData) { };
		return arrowButton;
	});