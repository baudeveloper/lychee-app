module.exports = function() {
    var config = {
        // Root locations
        dist: './dist',
        app: './app',
        js: './dist/js/**/*.js',
        jade: [
          './app/jade/*.jade'
        ],
        jadeAll: [
          './app/jade/**/*.jade'
        ],
        // Locations
        scripts: [
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/jquery-ui/jquery-ui.min.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
            './bower_components/bootstrap-select/js/bootstrap-select.js',
            './bower_components/typeahead.js/dist/bloodhound.min.js',
            './bower_components/typeahead.js/dist/typeahead.bundle.min.js',
            './bower_components/highcharts/highcharts.js',
            './bower_components/highcharts/highcharts-more.js',
            './bower_components/highcharts/modules/solid-gauge.js',
						'./bower_components/isotope/dist/isotope.pkgd.min.js',
						'./bower_components/filament-tablesaw/dist/tablesaw.js',
						'./bower_components/filament-tablesaw/dist/tablesaw-init.js',
            './bower_components/jquery.fancytree/dist/jquery.fancytree-all.min.js',
            './app/js/custom.js'
        ],
        vendorJS: [
            './bower_components/html5shiv/dist/html5shiv.min.js',
            './app/js/respond.min.js',
            './app/js/modernizr.min.js'
        ],
        vendorCSS: [
            './bower_components/animate.css/animate.min.css',
            './bower_components/bootstrap-select/dist/css/bootstrap-select.min.css',
						'./bower_components/filament-tablesaw/dist/tablesaw.css',
            './bower_components/jquery.fancytree/dist/skin-bootstrap/ui.fancytree.min.css',
        ],
        // ./app Locations
        css: './dist/css',
        images: [
            './app/images/**/*.+(png|jpg|jpeg|gif|svg)',
            '!' + './app/images/master_picture.png'
        ],
        sass: './app/sass/**/*.scss',
        // Fonts Locations
        fonts: [
            './bower_components/font-awesome/fonts/**/*.*',
            './bower_components/bootstrap-sass/assets/fonts/bootstrap/**/*.*'
        ]
    };
    return config;
};
