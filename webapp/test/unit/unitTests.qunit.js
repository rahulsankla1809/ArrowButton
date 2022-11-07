/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/vestas/test/ArrowButton/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});