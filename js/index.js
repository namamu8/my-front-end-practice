var pos = 0;
function moveRight(){
    var itemSlot = document.querySelectorAll("#item4-content1 .item-slot");
    var item = document.getElementsByClassName('item4-content');
    if (pos>((-162)*(itemSlot.length-4))) {
        pos-=162;
        item[0].style.left = pos + "px";
    }
    else{
        pos=0;
        item[0].style.left = pos + "px";
    }
 }
function moveLeft(){
    var item = document.getElementsByClassName('item4-content');
    if (pos<0) {
        pos+=162;
        item[0].style.left = pos + "px";
    }
}
var pos1 = 0;
function leftItem2(){
    var itemSlot = document.querySelectorAll(".move .item-slot");
    var item = document.getElementsByClassName('move');
    console.log(itemSlot.length-1);
    if (pos1>((-250)*(itemSlot.length-1))) {
        pos1-=250;
        item[0].style.left = pos1 + "px";
    }else{
        pos1=0;
        item[0].style.left = pos1 + "px";
    }
}
function rightItem2(){
    var item = document.getElementsByClassName('move');
    if (pos1<0) {
        pos1+=250;
        item[0].style.left = pos1 + "px";
    }
}
function op(){
    document.getElementById("tog").classList.toggle("open");
}
window.onclick = function(event){
    var open = document.getElementsByClassName('open');
    var modal = document.getElementById('modal');
    if (event.target != modal && event.target != open[0]) {
        document.getElementById("tog").classList.remove("open");
    }
}