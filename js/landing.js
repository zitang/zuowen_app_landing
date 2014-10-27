$(function() {
    var channel = getParameterByName('source').toLowerCase();

    if (channel != 'weixin' && channel != 'qzone' && channel != 'qq' && channel != 'magic') {
        channel = 'magic';
    }

    $('#downloadLink').attr('href', BASE_LINK.replace('{channel}', channel));
    $('#mDownloadLink').attr('href', BASE_LINK.replace('{channel}', 'm_' + channel));
    $('#codeImg').attr('src', CODE_IMG.replace('{channel}', channel));
});

var BASE_LINK = 'http://atth.zuowen.com/app/zuowen_{channel}.apk';
var CODE_IMG = 'images/qrcode_{channel}.png';

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
