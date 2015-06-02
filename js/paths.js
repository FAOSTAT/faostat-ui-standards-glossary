define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_STANDARDS_GLOSSARY: 'faostat-ui-standards-glossary',
            faostat_ui_standards_glossary: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});