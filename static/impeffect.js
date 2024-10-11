// header下面的隐藏进度条 宽度设置函数
const scrollone = document.getElementById('scrollbar');
var tot_h = document.body.clientHeight - window.innerHeight;
var tot_w = window.innerWidth;
function countScrollRatio(scrollTop) {
    var ratio = (scrollTop / tot_h).toFixed(2);
    var w = ratio * tot_w;
    scrollone.style.width = w + 'px';
}

// gotop代码设置
document.getElementById("gotop").addEventListener("click", ()=>{
    scrollTo(0, 0);
})

 //绑定函数 bind(选择对象 事件类型 事件激活处理函数)
function bind(tagStr, eventStr, func) {
    // 选取所有符合tagStr的元素，el是一个NodeList
    let el = document.querySelectorAll(tagStr);
    // 对el nodelist中的每一个item调用addEventListener(eventStr, func)
    el.forEach((item)=>item.addEventListener(eventStr, func))
}

function stickyMenu() {
    // 主要还是监听滚动
    const menu = document.getElementById("menu")

    // 创 data-scroll-watcher div 被插入至 menu 之前
    const scrollWatcher = document.createElement('div')
    scrollWatcher.setAttribute('data-scroll-watcher', '')
    menu.before(scrollWatcher)

    //  menu固定
    const navObserver = new IntersectionObserver((entries)=>{
        // toggle 的作用是：不存在就添加，存在就删除
        menu.classList.toggle('fixed', !entries[0].isIntersecting)
    }
    ,{
        // 距离顶部 0px 上调
        rootMargin: "0px 0px 0px 0px"
    })
    navObserver.observe(scrollWatcher)
    // 当 scrollWatcher 碰到视口顶部时，将触发构造函数中制定的 callback
}

// 滚动元素------------------------------------------------
// 简而言之就是滚动到的对象的id要和menu里元素的tid一致
let cb_t1 = function(e) {
    // 获得所有t1类元素
    let t1 = [...document.querySelectorAll("#menu .t1")];
    // 移除展开
    t1.forEach((item)=>{
        item.classList.remove("unfold");
    });
    // 目标元素e添加展开
    e.target.classList.add("unfold");

    // 获得tid属性值，根据id 滚动至对应位置
    document.getElementById(e.target.getAttribute("tid")).scrollIntoView({
        block: "start",
        behavior: "smooth"
    })
}

let cb_t2 = function(e) {

    // 获得tid属性值，根据id 滚动至对应位置
    document.getElementById(e.target.getAttribute("tid")).scrollIntoView({
        block: "start",
        behavior: "smooth"
    })
}

// menu内部动效处理，跳转  ------------------------------------------------
if (document.getElementById("menu")) {
    stickyMenu();
    bind("#menu .t1", "click", cb_t1);
    bind("#menu .t2", "click", cb_t2);
}

// 进度条设置  ------------------------------------------------
countScrollRatio(document.documentElement.scrollTop);

// 选择lr rl  ------------------------------------------------
ScrollReveal().reveal('.lr', {
        reset: true,
        origin: 'left',
        distance: '0',
        duration: 1000,
        easing: 'ease',
        opacity: 0
});

ScrollReveal().reveal('.rl', {
        reset: true,
        origin: 'right',
        distance: '0',
        duration: 1000,
        easing: 'ease',
        opacity: 0
});

// t1 id ------------------------------------------------
ScrollReveal().reveal('#content h1', {
        duration: 0,
        reset: true,
        beforeReveal: (el)=>{
            // 先清零
            document.querySelectorAll('.t1').forEach((item)=>item.classList.remove("show", "unfold"))
            // 选择特定id 添加show和展开
            document.querySelector(`.t1[tid='${el.id}']`).classList.add("show", "unfold")
        }
});

// t2 id  ------------------------------------------------
ScrollReveal().reveal('#content h2', {
        duration: 0,
        reset: true,
        beforeReveal: (el)=>{
            document.querySelectorAll('.t2').forEach((item)=>item.classList.remove("show"))
            document.querySelector(`.t2[tid='${el.id}']`).classList.add("show")
        }
});


// 监听滚动事件, 实时更新 ------------------------------------------------
document.onscroll = function() {
    countScrollRatio(document.documentElement.scrollTop);
}


// 酵母曲线动效修改 ------------------------------------------------
const bar = document.getElementById('bar');
const scrollCircle = document.getElementById('scroll-circle');
const scrollableContent = document.getElementById('content');

function handleScroll(scrollTop, scrollHeight, viewportHeight) {
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    // Adjust the clip-path to reveal the image from top to bottom
    bar.style.clipPath = `inset(0 0 ${100 - 5 - scrollPercentage}% 0)`;

    // 修改circle位置

    const minPosition = 0; 
    const maxPosition = 80 ; 
    const circlePosition = minPosition + (maxPosition - minPosition) * (scrollPercentage / 100);

    // Set the circle's position and make it visible
    scrollCircle.style.top = `${circlePosition}vh`;
    scrollCircle.style.opacity = 1;
}

scrollableContent.addEventListener('scroll', () => {
    const scrollTop = scrollableContent.scrollTop;
    const scrollHeight = scrollableContent.scrollHeight - scrollableContent.clientHeight;
    const viewportHeight = scrollableContent.clientHeight;

    handleScroll(scrollTop, scrollHeight, viewportHeight);
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const viewportHeight = window.innerHeight;

    handleScroll(scrollTop, documentHeight, viewportHeight);
});

window.onscroll = function() {
    const targetDiv = document.getElementById('scroll-circle');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
};
