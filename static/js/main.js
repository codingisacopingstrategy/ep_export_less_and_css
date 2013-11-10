$(document).ready(function() {
    var pad_root_path = new RegExp(/.*\/p\/[^\/]+/).exec(document.location.pathname);
    $("#exportcssa").attr("href", pad_root_path + "/export/css");
    $("#exportlessa").attr("href", pad_root_path + "/export/less");
});
