/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var extraAssets = pickFiles('bower_components/bootstrap/dist/fonts',{
    srcDir: '/', 
    files: ['**/*'],
    destDir: '/fonts'
});

app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/moment/min/moment.min.js');
app.import('bower_components/moment-timezone/moment-timezone.js');

module.exports = mergeTrees([app.toTree(), extraAssets]);
