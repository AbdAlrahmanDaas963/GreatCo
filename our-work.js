let item_image=document.querySelectorAll(".work-main-item");
let item_view=document.querySelector(".work-view");
item_image.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        item_view.style.visibility="visible";
        item_view.style.opacity="1";
    });
});

let close_item=document.querySelector(".close");
close_item.addEventListener('click',()=>{
    item_view.style.visibility="hidden";
    item_view.style.opacity="0";
});