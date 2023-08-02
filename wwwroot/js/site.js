// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var string = "Dancing in the Moonlight";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 90);
})();