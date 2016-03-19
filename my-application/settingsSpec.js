describe("SettingsModule", function() {
    beforeEach(module("ngRoute"));
    beforeEach(module("SettingsModule"));
 
    describe("/settings route", function() {
        it('should load the template, controller and call the resolve',
        inject(function($location, $rootScope, $httpBackend, $route) {
            $httpBackend.whenGET('settings.html').respond('...');
            $httpBackend.expectGET('/api/current-user').respond({});

            $rootScope.$apply(function() {
                $location.path('/settings');
            });
            expect($route.current.controller).toBe("SettingsCtrl");
            expect($route.current.loadedTemplateUrl).toBe("settings.html");
            $rootScope.$digest();
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();

        }));
             
 
    });
});