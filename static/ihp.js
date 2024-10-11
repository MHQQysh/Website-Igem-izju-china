/*====================== 
这里是把线放在中间
==================  */

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
});