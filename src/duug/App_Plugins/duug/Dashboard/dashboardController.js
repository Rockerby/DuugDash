﻿/**
 * @ngdoc
 * 
 * @name: dashboardController
 * @description: code for a dashboard in the umbraco back office
 * 
 */
(function () {
    'use strict';

    function dashboardController($scope,
        notificationsService,
        duugDashboardService) {

        var vm = this;
        vm.loading = true;
        vm.info = {};

        function init() {
            getServerInfo();
        }

        // ask the server what version it is and what time it things it is.
        function getServerInfo() {
            duugDashboardService.getServerInfo()
                .then(function (result) {
                    vm.info = result.data;
                    vm.loading = false; 
                }, function (error) {
                    console.warn(error);
                    notificationsService.error('Error', 'Unable to get the server info');
                });
        }

        // call init, when controller is loaded 
        init(); 
    }

    angular.module('umbraco')
        .controller('duugDashboardController', dashboardController);
})();
