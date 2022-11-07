sap.ui.define([],
	function () {
		"use strict";
		var arrowButtonRenderer = {};
		arrowButtonRenderer.render = function (oRm, oControl) {
			oRm.write("<div");
			oRm.writeControlData(oControl);
			if (oControl.aCustomStyleClasses) {
				oControl.aCustomStyleClasses.forEach(function (sClass) {
					oRm.addClass(sClass);
				});
			}
			oRm.addClass("btn-margin");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("<button type='button'");
			oRm.addClass("btn");
			oRm.addClass(this.getTypeClass(oControl.getType()));
			oRm.addClass(this.getDirectionClass(oControl.getDirection()));
			oRm.writeClasses();
			oRm.write(">" + oControl.getText() + "</button>");
			// Close the Div 		              
			oRm.write("</div>");
		};
		arrowButtonRenderer.getTypeClass = function (sType) {
			var sClass = "";
			switch (sType) {
			case "default":
				sClass = "btn-default";
				break;
			case "primary":
				sClass = "btn-primary";
				break;
			case "success":
				sClass = "btn-success";
				break;
			case "danger":
				sClass = "btn-danger";
				break;
			case "info":
				sClass = "btn-info";
				break;
			case "warning":
				sClass = "btn-warning";
				break;
			default:
				sClass = "btn-default";
			}
			return sClass;
		};
		arrowButtonRenderer.getDirectionClass = function (sDirection) {
			var sDirectionClass = "";
			switch (sDirection) {
			case "left":
				sDirectionClass = "btn-arrow-left";
				break;
			case "right":
				sDirectionClass = "btn-arrow-right";
				break;
			default:
				sDirectionClass = "btn-arrow-left";
			}
			return sDirectionClass;
		};
		return arrowButtonRenderer;
	}, true);