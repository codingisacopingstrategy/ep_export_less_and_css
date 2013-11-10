var eejs = require("ep_etherpad-lite/node/eejs/");
var exportTxt = require('ep_etherpad-lite/node/utils/ExportTxt');
var less = require('less');

exports.expressCreateServer = function(hook_name, args, cb) {

    args.app.get('/p/:pad/:rev?/export/css', function(req, res, next) {
        var padID = req.params.pad;
        var revision = req.params.rev ? req.params.rev : null;

        exportTxt.getPadTXTDocument(padID, revision, false, function(err, result) {
            res.contentType('text/css');
            res.send(result);
        });
    });

    args.app.get('/p/:pad/:rev?/export/less', function(req, res, next) {
        var padID = req.params.pad;
        var revision = req.params.rev ? req.params.rev : null;

        exportTxt.getPadTXTDocument(padID, revision, false, function(err, result) {
            res.contentType('text/css');
            less.render(result, function(e, css) {
                res.send(css);
            });
        });
    });

};

exports.eejsBlock_exportColumn = function(hook_name, args, cb) {
    args.content = args.content + eejs.require("ep_export_less_and_css/templates/exportcolumn.html", {}, module);
    return cb();
};

exports.eejsBlock_scripts = function(hook_name, args, cb) {
    args.content = args.content + eejs.require("ep_export_less_and_css/templates/scripts.html", {}, module);
    return cb();
};

exports.eejsBlock_styles = function(hook_name, args, cb) {
    args.content = args.content + eejs.require("ep_export_less_and_css/templates/styles.html", {}, module);
    return cb();
}; 
