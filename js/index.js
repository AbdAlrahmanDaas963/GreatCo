var imgArr=document.querySelectorAll(".home .home-background .background-item"); /* find all images for background home */
var indexItem=0; /* for looping on images */
var state=0; /* for interval state<4 -> left , state>4 && state<8 r->right */
var cyrcel=document.querySelectorAll('.cyrcel');
cyrcel[indexItem].style.backgroundColor="white";
function swap_back(dir,status=0){
    if (dir=='left' && indexItem<imgArr.length-1){
        imgArr[indexItem].style.left="-100%";
        imgArr[indexItem+1].style.left="0%";
        cyrcel[indexItem].style.backgroundColor="rgba(255, 255, 255, 0.418)";
        cyrcel[indexItem+1].style.backgroundColor="white";
        indexItem++;
        if (status==1 && state<imgArr.length){ /* left left [++] */
            state++;
        }else if(status==1 && state<(imgArr.length*2) && state>=imgArr.length){ /* left right [--] */
            state--;
        }
    }
    if (dir=='right' && indexItem>0){
        indexItem--;
        imgArr[indexItem].style.left="0%";
        imgArr[indexItem+1].style.left="100%";
        cyrcel[indexItem+1].style.backgroundColor="rgba(255, 255, 255, 0.418)";
        cyrcel[indexItem].style.backgroundColor="white";
        if (status==1 && state<imgArr.length){ /* left left [++] */
            state--;
        }else if(status==1 && state<(imgArr.length*2) && state>=imgArr.length){ /* left right [--] */
            state++;
        }
    }
}
setInterval(() => {
    if (state<imgArr.length){
        swap_back('left');
        //console.log('Left : '+state);
        state++;
    }
    if (state<(imgArr.length*2) && state>=imgArr.length){
        swap_back('right');
        //console.log('Right : '+state);
        state++;
        if (state==(imgArr.length*2)) state=0;
    }
}, 6000);



var navbar_item=document.querySelectorAll(".drop-list li span");
/*
navbar_item.forEach(function(item){
    item.addEventListener("click",function navbarClick(ele) {
        navbar_item.forEach(function initialColor(ele) {
            ele.style.color="white";
        });
        item.style.color="#F6FF00";
    });
});
*/
var win_height=window.innerHeight;
var scroll_val;
navbar_item[0].style.color="#F6FF00";
console.log(navbar_item[0].scrollTop);
window.onscroll=function () {
    scroll_val=window.scrollY+100;
    if (scroll_val<=win_height){
        navbar_item.forEach(function initialColor(ele) {
            ele.style.color="white";
        });
        navbar_item[0].style.color="#F6FF00";
    }else if(scroll_val<=(win_height*2) && scroll_val>win_height){
        navbar_item.forEach(function initialColor(ele) {
            ele.style.color="white";
        });
        navbar_item[1].style.color="#F6FF00";
    }else if(scroll_val<=(win_height*3) && scroll_val>(win_height*2)){
        navbar_item.forEach(function initialColor(ele) {
            ele.style.color="white";
        });
        navbar_item[2].style.color="#F6FF00";
    }
    else if(scroll_val<=(win_height*4) && scroll_val>(win_height*3)){
        navbar_item.forEach(function initialColor(ele) {
            ele.style.color="white";
        });
        navbar_item[3].style.color="#F6FF00";
    }
    else if(scroll_val<=(win_height*5) && scroll_val>(win_height*4)){
        navbar_item.forEach(function initialColor(ele) {
            ele.style.color="white";
        });
        navbar_item[4].style.color="#F6FF00";
    }else if(scroll_val<=(win_height*6) && scroll_val>(win_height*5)){
        navbar_item.forEach(function initialColor(ele) {
            ele.style.color="white";
        });
        navbar_item[5].style.color="#F6FF00";
    }else if(scroll_val<=(win_height*7) && scroll_val>(win_height*6)){
        navbar_item.forEach(function initialColor(ele) {
            ele.style.color="white";
        });
        navbar_item[6].style.color="#F6FF00";
    }
};