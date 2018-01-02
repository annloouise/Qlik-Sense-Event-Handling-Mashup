/*
 * Events in Capability APIs demo mashup
 * @owner Ann-Louise Andersson
 */

/* global angular */

var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	var appId = "Helpdesk Management.qvf";
	var qeventModule = angular.module( "qeventModule", ['ngRoute'] );

	qeventModule.controller( "myController", ['$scope', function ( $scope ) {
		$scope.appIsOpen = true;
		var app = qlik.openApp( appId, config );

		$scope.openObject = function () {
			app.on( "error", function ( error ) {
				showPopup( "Error", error.message, "first-pop-up" );
			} );

			app.getObject( 'wrong id' );

			setTimeout( function () {
				app.off( 'error' );
			}, 1000 );
		};

		$scope.triggerMultiplelisteners = function () {
			app.on( "error", function ( error ) {
				showPopup( "Error nr 1", error.message, "first-pop-up" );
			} );

			app.on( "error", function ( error ) {
				showPopup( "Error nr 2", error.message, "second-pop-up" );
			} );

			app.getObject( 'wrong id' );

			setTimeout( function () {
				app.off( 'error' );
			}, 1000 );
		};

		$scope.closeApp = function () {
			$scope.appIsOpen = false;
			app.on( "closed", function ( closed ) {
				showPopup( "Closed", closed.message, "first-pop-up" );
			} );

			app.close();
		};

		$scope.openApp = function () {
			$scope.appIsOpen = true;
			app = qlik.openApp( appId, config );
		};

		$scope.closePopup = function ( event ) {
			var popupWrapper = $( event.target ).parent().parent();
			popupWrapper.removeClass( "show-pop-up" );
		};

	}] );

	function showPopup ( title, msg, popupId ) {
		var popUp = $( "." + popupId );
		popUp.addClass( "show-pop-up" );
		popUp.find( ".title" ).text( title );
		popUp.find( ".message" ).text( msg );
	}

	angular.bootstrap( document, ["qeventModule", "qlik-angular"] );

} );


