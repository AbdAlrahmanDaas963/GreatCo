let aboutMy=document.querySelector(".about-as .about-as-desc");
let aboutMyImage=document.querySelector(".about-as .about-us-img");
var servicesTitle=document.querySelector('.services-title');
var workTitle=document.querySelector('.our-work .work-title');
var testimonial=document.querySelector('.testimonial-title');

window.addEventListener("scroll", function(){
    let scrollTop_val=document.documentElement.scrollTop;
    let heightSection=document.documentElement.scrollTop;
    let windwWidth=window.innerWidth;
    console.log(scrollTop_val);
    if (scrollTop_val >= 300){
        aboutMy.style.left="0px";
        aboutMy.style.visibility='visible';
        aboutMy.style.opacity='1';
        aboutMyImage.style.right="50px";
        aboutMyImage.style.visibility='visible';
        aboutMyImage.style.opacity='1';
    }else{
        aboutMy.style.left="-850px";
        aboutMy.style.visibility='hidden';
        aboutMy.style.opacity='0';
        aboutMyImage.style.right="-450px";
        aboutMyImage.style.visibility='hidden';
        aboutMyImage.style.opacity='0';
    }

    if(scrollTop_val>=1000){
        if (windwWidth>760){
            servicesTitle.style.left="200px";
        }else{
            servicesTitle.style.left="25vw";
        }
    }else{
            servicesTitle.style.left="0px";
    }

    if(scrollTop_val>=1700){
        if (windwWidth>760)
            workTitle.style.left="200px";
        else
        workTitle.style.left="32vw";
    }else{
        workTitle.style.left="0px";
    }

    if(scrollTop_val>=2500){
        if (windwWidth>760)
            testimonial.style.left="200px";
        else
            testimonial.style.left="26vw";
    }else{
        testimonial.style.left="0px";
    }
});

window.addEventListener("load",function(){
    let windwWidth=window.innerWidth;
    var homeContant=document.querySelector('.home-content');
    var companyName=document.querySelector('.company-name');
    var companyBtn=document.querySelector('.what-we-do-btn');
    var companyDesc=document.querySelector('.company-desc');
    homeContant.style.left="50px";
    setTimeout(() => {
        if (windwWidth>800){
            homeContant.style.transition="left 1.8s";
            homeContant.style.left="20px";
        } 
        else    
            homeContant.style.left="0px"; 
    }, 2000);
    companyName.style.visibility="visible";
    companyName.style.opacity="1";
    companyBtn.style.visibility="visible";
    companyBtn.style.opacity="1";
    companyDesc.style.visibility="visible";
    companyDesc.style.opacity="1";
});


/*
let ourWorkItem=document.querySelectorAll(".services-item");
ourWorkItem.forEach((ele)=>{
    ele.addEventListener("mouseover",()=>{
        ourWorkItem.forEach((item)=>{
            item.style.zIndex="0";
            item.style.transform="scale(1)";
        });
        ele.style.zIndex="10";
        ele.style.transform="scale(1.1)";
    })
});
*/