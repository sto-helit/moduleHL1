/*global util */

(function() {
    'use strict';
    
    var module = require('./../index.js');
    
    module.fileSystem.exists('./fixtures/text.properties', function (exists) {
        util.debug(exists ? "file exists" : "no texts");
    });
}());