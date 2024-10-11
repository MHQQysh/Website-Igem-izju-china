var title = document.getElementById('titleImage')

function WindowSize() {
title.height = window.outerHeight
title.width = window. outerWidth
}

window.onresize = WindowSize;
window.onload = WindowSize

        
function numScroll(id, maxNum, time) {
  var numDom = document.getElementById(id)
  var numInit = 0
  var addNum = maxNum / (time / 10)
  var minTime = time / maxNum
  var t = setInterval(function() {
      if (numInit >= maxNum) {
          
          clearInterval(t)
          numDom.innerText = maxNum
      } else {
          numInit += addNum
          numDom.innerText = Math.round(numInit)
      }
  }, 10)
}
numScroll('num', 60, 3000)
setInterval(function() {
  numScroll('num', 60, 3000)
},10000)        





var scrollTopLast = 0
var video = document.getElementById(video)
let vh = window.innerHeight *0.01

window.onscroll=function(e){
var scrollTop = e.target.scrollingElement.scrollTop;
if(scrollTop > scrollTopLast){
    $("#nav").css("transition", "0.5s")
    $("#nav").css("opacity", "0")
}else{
    $("#nav").css("transition", "0.5s")
    $("#nav").css("opacity", "1")
}

//   if(scrollTop > 1100 && scrollTop-scrollTopLast >0){
//   document.getElementById("video").muted =true;
// }


// if(scrollTop > 600 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast0").style.animationPlayState="running";
//   document.getElementById("yeast0").style.display = "block"
// }
// if(scrollTop < 600){
//   document.getElementById("yeast0").style.display = 'none';
// }


// if(scrollTop > 700 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast1").style.animationPlayState="running";
//   document.getElementById("yeast1").style.display = "block"
// }
// if(scrollTop < 700){
//   document.getElementById("yeast1").style.display = 'none';
// }

// if(scrollTop > 750 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast2").style.animationPlayState="running";
//   document.getElementById("yeast2").style.display = "block"
// }
// if(scrollTop < 750){
//   document.getElementById("yeast2").style.display = 'none';
// }

// if(scrollTop > 800 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast3").style.animationPlayState="running";
//   document.getElementById("yeast3").style.display = "block"
// }
// if(scrollTop < 800){
//   document.getElementById("yeast3").style.display = 'none';
// }

// if(scrollTop > 900 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast4").style.animationPlayState="running";
//   document.getElementById("yeast4").style.display = "block"
// }
// if(scrollTop < 900){
//   document.getElementById("yeast4").style.display = 'none';
// }
// if(scrollTop > 1100 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast5").style.animationPlayState="running";
//   document.getElementById("yeast5").style.display = "block"
// }
// if(scrollTop < 1100){
//   document.getElementById("yeast5").style.display = 'none';
// }
// if(scrollTop > 1300 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast6").style.animationPlayState="running";
//   document.getElementById("yeast6").style.display = "block"
// }
// if(scrollTop < 1300){
//   document.getElementById("yeast6").style.display = 'none';
// }
// if(scrollTop > 1400 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast7").style.animationPlayState="running";
//   document.getElementById("yeast7").style.display = "block"
// }
// if(scrollTop < 1400){
//   document.getElementById("yeast7").style.display = 'none';
// }
// if(scrollTop > 1500 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast8").style.animationPlayState="running";
//   document.getElementById("yeast8").style.display = "block"
// }
// if(scrollTop < 1500){
//   document.getElementById("yeast8").style.display = 'none';
// }
// if(scrollTop > 1600 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast9").style.animationPlayState="running";
//   document.getElementById("yeast9").style.display = "block"
// }
// if(scrollTop < 1600){
//   document.getElementById("yeast9").style.display = 'none';
// }
// if(scrollTop > 1700 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast10").style.animationPlayState="running";
//   document.getElementById("yeast10").style.display = "block"
// }
// if(scrollTop < 1700){
//   document.getElementById("yeast10").style.display = 'none';
// }
// if(scrollTop > 1900 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast11").style.animationPlayState="running";
//   document.getElementById("yeast11").style.display = "block"
// }
// if(scrollTop < 1900){
//   document.getElementById("yeast11").style.display = 'none';
// }
// if(scrollTop > 2000 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast12").style.animationPlayState="running";
//   document.getElementById("yeast12").style.display = "block"
// }
// if(scrollTop < 2000){
//   document.getElementById("yeast12").style.display = 'none';
// }
// if(scrollTop > 2100 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast13").style.animationPlayState="running";
//   document.getElementById("yeast13").style.display = "block"
// }
// if(scrollTop < 2100){
//   document.getElementById("yeast13").style.display = 'none';
// }
// if(scrollTop > 2200 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast14").style.animationPlayState="running";
//   document.getElementById("yeast14").style.display = "block"
// }
// if(scrollTop < 2200){
//   document.getElementById("yeast14").style.display = 'none';
// }
// if(scrollTop > 2300 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast15").style.animationPlayState="running";
//   document.getElementById("yeast15").style.display = "block"
// }
// if(scrollTop < 2300){
//   document.getElementById("yeast15").style.display = 'none';
// }
// if(scrollTop > 2500 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast16").style.animationPlayState="running";
//   document.getElementById("yeast16").style.display = "block"
// }
// if(scrollTop < 2500){
//   document.getElementById("yeast16").style.display = 'none';
// }
// if(scrollTop > 2600 && scrollTop-scrollTopLast >0){
//   document.getElementById("yeast17").style.animationPlayState="running";
//   document.getElementById("yeast17").style.display = "block"
// }
// if(scrollTop < 2600){
//   document.getElementById("yeast17").style.display = 'none';
// }



if(scrollTop > 55*vh){
document.getElementById("subtitle1").style.animationPlayState= 'running';
}
if(scrollTop > 85*vh){
document.getElementById("text1").style.animationPlayState= 'running';
}
if(scrollTop > 105*vh){
document.getElementById("fig1-1").style.animationPlayState= 'running';
document.getElementById("fig1-2").style.animationPlayState= 'running';
document.getElementById("fig1-3").style.animationPlayState= 'running';
document.getElementById("fig1-4").style.animationPlayState= 'running';
document.getElementById("fig1-5").style.animationPlayState= 'running';
document.getElementById("fig1-6").style.animationPlayState= 'running';
}

if(scrollTop > 185*vh){
document.getElementById("text2").style.animationPlayState= 'running';
}
if(scrollTop > 230*vh){
document.getElementById("fig2-1").style.animationPlayState= 'running';
document.getElementById("fig2-2").style.animationPlayState= 'running';
document.getElementById("fig2-3").style.animationPlayState= 'running';
document.getElementById("fig2-4").style.animationPlayState= 'running';
document.getElementById("fig2-5").style.animationPlayState= 'running';
}
if(scrollTop > 275*vh){
document.getElementById("subtitle2").style.animationPlayState= 'running';
}
if(scrollTop >295*vh){
document.getElementById("text3").style.animationPlayState= 'running';
}
if(scrollTop > 335*vh){
document.getElementById("fig3").style.animationPlayState= 'running';
}
if(scrollTop > 365*vh){
document.getElementById("subtitle3").style.animationPlayState= 'running';
}
if(scrollTop > 405*vh){
document.getElementById("text4").style.animationPlayState= 'running';
}
if(scrollTop > 460*vh){
document.getElementById("fig4-1").style.animationPlayState= 'running';
document.getElementById("fig4-2").style.animationPlayState= 'running';
document.getElementById("fig4-3").style.animationPlayState= 'running';
}
if(scrollTop > 500*vh){
document.getElementById("subtitle4").style.animationPlayState= 'running';
}
if(scrollTop > 540*vh){
document.getElementById("fig5-1").style.animationPlayState= 'running';
document.getElementById("fig5-2").style.animationPlayState= 'running';
document.getElementById("fig5-3").style.animationPlayState= 'running';
document.getElementById("fig5-4").style.animationPlayState= 'running';
}
if(scrollTop > 570*vh){
document.getElementById("text5").style.animationPlayState= 'running';
}
if(scrollTop > 600*vh){
document.getElementById("subtitle5").style.animationPlayState= 'running';
}


scrollTopLast = scrollTop;
}

// var bubble2 = document.getElementById("bubble2")
// bubble2.onclick=function(){
//     location.href={{ url_for('pages', page = 'results')}};
// }



// var seesaw = document.getElementById("seesaw");
//   var flag = true;
//   seesaw.onclick = function (){
//       if (flag){
//           seesaw.src = "https://static.igem.wiki/teams/5371/homepage/seesaw.gif";
//           flag = false;
//       }else{
//           seesaw.src = "https://static.igem.wiki/teams/5371/homepage/seesaw-stop.png";
//           flag = true;
//       }
//   }
