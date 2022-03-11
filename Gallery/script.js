var gallery = document.querySelector('#gallery');

//Get file name list
//file
// var fs = require("fs");
// var files = fs.readdirSync("images/");

// files.forEach(file => {
//     console.log(file);
//     const img_item = document.createElement("div");
//     const img_content = document.createElement("div");
//     const img_src = document.createElement("img");

//     img_item.setAttribute("class", "gallery-item");
//     img_content.setAttribute("class", "content");
//     img_src.setAttribute("src", file);
//     img_src.setAttribute("alt", "");

//     img_content.appendChild(img_src)
//     img_item.appendChild(img_content);
//     gallery.appendChild(img_item);
// });

var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };

var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};

gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});

window.addEventListener('resize', resizeAll);

gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});
