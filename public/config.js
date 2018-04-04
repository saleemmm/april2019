myApp.config(config);
config.$inject = ["$routeProvider"];

function config($routeProvider) {
    $routeProvider.when("/template_one", {
        templateUrl: "templates/template_one.html",
        controller: "registerCtrl"
    })

        .when("/template_two", {
            templateUrl: "templates/template_two.html",
            controller: "dash_board"
        })

        .otherwise("/template_two");
}