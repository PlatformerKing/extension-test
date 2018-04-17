var main = function() {
    if(!document.body) {
        main();
    }
    //alert('YAY');
    //document.body.style.border = "5px solid red";
    var m = confirm('Unleash Tornado?');
    if (m) {
        //function(){
            var d=document, s = d.createElement("style");
            s.setAttribute("type","text/css"),d.head.appendChild(s),s.innerHTML="*{-webkit-transform:rotate(99999deg);-ms-transform:rotate(99999deg);transform:rotate(9999deg);transition-duration:30s;}";
        //})
    }
};
main();

