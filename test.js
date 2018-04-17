var main = function() {
    if(!document.body) {
        main();
    }
    alert('YAY');
    document.body.style.border = "5px solid red";
};
main();

