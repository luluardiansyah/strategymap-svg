var App = angular.module('StrategyMapApp', []);

App.controller('MainCtrl', function ($scope, $http) {
    $scope.SO1Color = "yellow";
    $scope.SO2Color = "red";
    $scope.SO3Color = "green";
    $scope.SO4Color = "lightgray";
    $scope.SO5Color = "lightgray";
    $scope.SO6Color = "lightgray";
    $scope.SO7Color = "lightgray";
    $scope.SO8Color = "lightgray";
    $scope.SO9Color = "lightgray";
    $scope.SO10Color = "lightgray";
    $scope.SO11Color = "lightgray";
    $scope.SO12Color = "lightgray";
    $scope.SO13Color = "lightgray";
    $scope.SO14Color = "lightgray";
    $scope.SO15Color = "lightgray";
    $scope.SO16Color = "lightgray";

    var url = "./json/MOCK_DATA-2.json";

    $http.get(url).then(function (response) {
        $scope.SOLists = response.data;
    }).
    catch(function onError(response) {
        console.log(response);
    });


});
