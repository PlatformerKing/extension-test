var main = function() {
    if(!document.body) {
        main();
    }
    document.body.style.border = "5px solid red";
};
main();
