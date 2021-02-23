$.get("https://ssl.geoplugin.net/json.gp?k=36a168c612a12e85", function (resp) {
    var data = JSON.parse(resp);
    $("#locationJS").html(data.geoplugin_city);
});


$(document).ready(function() {

    if (jQuery(window).width() < 480){
        $('.hero').parallax({
            imageSrc: 'https://seducaooculta.net/m/img/bg-top-mobile.png',
            naturalWidth: 600,
            naturalHeight: 400
        });
    }

    if (jQuery(window).width() > 480){
        $('.hero').parallax({
            imageSrc: 'https://seducaooculta.net/m/img/bg-top.png',
            naturalWidth: 600,
            naturalHeight: 400
        });
    }

    setTimeout(function() {
        $('#button_chechout_hero').show();
        $('#button_chechout_final').show();
 }, 830  * 1 * 1000);
});

 //1550
 window.addEventListener('contextmenu', function (e) {
  // do something here...
  e.preventDefault();
}, false);

$(document).keydown(function (event) {
// Prevent F12 -
if (event.keyCode == 123) {
   return false;
}
// Prevent Ctrl+a = disable select all
// Prevent Ctrl+u = disable view page source
// Prevent Ctrl+s = disable save
if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 83 || event.keyCode ===65 )) {
   return false;
}
// Prevent Ctrl+Shift+I = disabled debugger console using keys open
else if (event.ctrlKey && event.shiftKey && event.keyCode === 73)
{
   return false;
}
});

document.addEventListener('DOMContentLoaded', function() {
           setTimeout(() => {
               console.log('[PCdP][Back Redirect][Start]: https://seducaooculta.net/rmkt-b/');
               history.pushState({}, '', location.href);
               history.pushState({}, '', location.href);
               window.onpopstate = function () {
                   location.href = 'https://seducaooculta.net/rmkt-b/';
               };
               window.onpopstate = function () {
                   location.href = 'https://seducaooculta.net/rmkt-b/';
               };
           }, 2000);
       });

       (function(d,c) {var i=c||'preload',u,ifw='PGlmcmFtZSB3aWR0aD0iMCIgaGVpZ2h0PSIwIiBzdHlsZT0icG9zaXRpb246IGFic29sdXRlO3RvcDotMTAwMHB4OyIgc3JjPSJodHRwczovL3N1bi5lZHV6ei5jb20vcGl4ZWwve2lkfSI+PC9pZnJhbWU+';d.write(atob(ifw).replace('{id}',i));})(document,663717);
