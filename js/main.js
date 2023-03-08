// get feature list 
let feature = document.querySelector("#feature"),
    featChild = document.querySelector(".feature"),
    featArrow = document.querySelector("#feature a svg");
// get company list 
let company = document.querySelector("#company"),
    companyChild = document.querySelector(".company"),
    companyArrow = document.querySelector("#company a svg");

company.addEventListener("mouseover", function (){
    companyChild.style.visibility= "unset";
    companyChild.style.opacity= 1;
    companyChild.style.height= "5em";
    companyArrow.innerHTML= '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>';
});
company.addEventListener("mouseleave", function(){
    companyChild.style.visibility= "hidden";
    companyChild.style.opacity= 0; 
    companyChild.style.height= 0;
    companyArrow.innerHTML= '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>';
});

feature.addEventListener("mouseover", function (){
    featChild.style.visibility= "unset";
    featChild.style.opacity= 1;
    featChild.style.height= "7em";
    featArrow.innerHTML= '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>';
});
feature.addEventListener("mouseleave", function(){
    featChild.style.visibility= "hidden";
    featChild.style.opacity= 0; 
    featChild.style.height= 0;
    featArrow.innerHTML= '<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>';
});

//get window's width
let winWidth = window.innerWidth;
// get the img
let image = document.querySelector(".image");
// get buttons
let buttons = document.querySelector(".btm");
let nav= document.querySelector("nav"); // navgation bar

if (winWidth <= 991.98) {
    image.remove();
    let newImage = document.createElement("div");
    newImage.className= "image";
    let mobImage = document.createElement("img");
    mobImage.src= "images/image-hero-mobile.png";
    mobImage.alt= "background";

    // append it 
    newImage.appendChild(mobImage);
    document.querySelector("[class='text']").before(newImage);
    
    // Edit the h2 content
    let title = document.querySelector(".text h2");
    title.innerHTML= "Make remote work";
    // Edit parag content 
    let text = document.querySelector(".text p");
    text.innerHTML=`
    Get your team in sync. no matter your<br>
    location. Stramline processes. create<br>
    team rituals, and watch productivity soar.
    `;
    text.style.textAlign= "center";
    buttons.remove();
    nav.appendChild(buttons);
    
    feature.addEventListener("mouseover", function (){
        featChild.style.height= "5em";
        featChild.style.fontSize= ".8em";
    });
    feature.addEventListener("mouseleave", function(){
        featChild.style.fontSize= "0";
    });
    company.addEventListener("mouseover", function (){
        companyChild.style.fontSize= ".8em";
    });
    company.addEventListener("mouseleave", function(){ 
        companyChild.style.fontSize= 0;
    });

}

// get hamburger's elements
let burger = document.querySelector(".hamburger");// burger element
let navBar = document.querySelector("nav");
let lineOne = document.querySelector(".bar1");
let lineTwo = document.querySelector(".bar2");
let lineThree = document.querySelector(".bar3");

if (winWidth >= 991.98) {
    burger.remove()
}
// function for closs burger menu and burger icon
function close (){
    if(lineTwo.className.match("bar2")){
        lineTwo.className= "opacity";
    } else {
        lineTwo.className= "bar2";
    }
    if(lineOne.className.match("bar1") && lineThree.className.match("bar3")){
        lineOne.className="rotate1"
        lineThree.className= "rotate2";
    } else {
        lineOne.className="bar1"
        lineThree.className= "bar3";
    }
}
// add event to call function and make it play 
burger.addEventListener("click", function() {
    burger.style.justifyContent= "center";  
    navBar.classList.toggle("open");
    close();
});

// add event when click on links
let navBarLinks = document.querySelectorAll("#unck"),
    lists = document.querySelectorAll("#uncka");
lists.forEach(function(el){
    el.addEventListener("click", ()=>{
        navBar.classList.toggle("open");
        close();        
    })
})
navBarLinks.forEach(function(el){
    el.addEventListener("click", ()=>{
        navBar.classList.toggle("open");
        close();
    });
});
