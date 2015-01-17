(function() {
    var baseUrl;
    var scripts = document.getElementsByTagName('script');

    for (var i=0; i<scripts.length; i++) {
        var script = scripts[i];
        var dataBase = script.getAttribute('data-base');

        if (dataBase) {
            baseUrl = dataBase;
        }
    }

    requirejs.config({
        paths: {
            'root': baseUrl + '/app/root',
            'jquery': baseUrl + '/lib/jquery.min',
            'jqMobile': baseUrl + '/lib/jquery.mobile.min'
        }
    });
})();
