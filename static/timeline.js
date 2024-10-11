/*====================== 
这里是把线放在中间
==================  */

// window.onload = function() {
//     var colors = {
//         'popupMPing': '#F6AE2D',
//         'popupDiag': '#DE8552',
//         'popupTreatment': '#CB4364',
//         'popupQ': '#A9BA6C',
//         'popupNorma': '#5BC5AB',
//         'popupPA': '#5CE1E6',
//         'popupEmprende': '#00BF63'
//     };
//     var divs = document.getElementsByTagName('div');
//     for (var i = 0; i < divs.length; i++) {
//         var id = divs[i].id;
//         for (var prefix in colors) {
//             if (id.startsWith(prefix)) {
//                 divs[i].style.backgroundColor = colors[prefix];
//                 break;
//             }
//         }
//     }
//     // 优化了时间线内容的浮动设置
//     const elements = document.querySelectorAll(".cd-timeline-content");
//     elements.forEach((element, i) => {
//         element.style.float = i % 2 !== 0 ? "right" : "left";
//     });
// };









/*====================== 
这里是第一个readmore可以跳出的界面
==================  */
// 优化了事件监听器的代码
document.addEventListener('DOMContentLoaded', function() {
    var popupLinks = document.querySelectorAll('.cd-read-more1');
    popupLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var popupId = this.getAttribute('data-popup-id');
            document.querySelector('#' + popupId).style.display = 'flex';
            document.body.classList.add('bloquear-desbordamiento');
        });
    });
    var closeButtons = document.querySelectorAll('.boton-ocultar');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var popupId = this.getAttribute('data-popup-id');
            document.querySelector('#' + popupId).style.display = 'none';
            document.body.classList.remove('bloquear-desbordamiento');
        });
    });
})

/*====================== 
这里是第二个readmore
==================  */

document.addEventListener('DOMContentLoaded', function() {
    var popupLinks = document.querySelectorAll('.cd-read-more2');
    popupLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var popupId = this.getAttribute('data-popup-id');
            document.querySelector('#' + popupId).style.display = 'flex';
            document.body.classList.add('bloquear-desbordamiento');
        });
    });
    var closeButtons = document.querySelectorAll('.boton-ocultar');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var popupId = this.getAttribute('data-popup-id');
            document.querySelector('#' + popupId).style.display = 'none';
            document.body.classList.remove('bloquear-desbordamiento');
        });
    });
})



;