/* Back To Top Button Start */
let button = document.querySelector(".back-to-top-btn");
              
window.addEventListener("scroll", scrolltotop)
    function scrolltotop () {
        if (window.pageYOffset > 300) {  
            if(!button.classList.contains("buttonEntrance")){
                button.classList.remove("buttonExit");
                button.classList.add("buttonEntrance");
                button.style.display = "block";    
                }                
            }
            else {
                if(button.classList.contains("buttonEntrance")){
                    button.classList.remove("buttonEntrance");
                    button.classList.add("buttonExit");
                    setTimeout(function(){
                        button.style.display = "none";  
                    }, 500)                       
                }              
            }
        }

button.addEventListener("click", backtotop)
    function backtotop() {
        window.scrollTo(0, 0);  
    }
/* Back To Top Button End */

// Main Menu Bar Start
$(document).ready(function(){
    $(".main-nav-bar-menu-bar-ham").click(function(){
    $(".main-menu-bar-list").toggle(1000);
    });
    });

    let navbar = document.querySelector(".main-nav-bar");

window.addEventListener("scroll", scrolltobottom)
function scrolltobottom () {
if (window.pageYOffset < 80) {     
            navbar.classList.remove("navEntrance");            
            navbar.style.backgroundColor = "transparent";       
    }               
    else { 
            navbar.classList.add("navEntrance");        
            navbar.style.display = "block";   
            navbar.style.position = "fixed";   
            navbar.style.backgroundColor = "black";     
         }
}
// Main Menu Bar End


// Time countdown Start
const timeduration = () => {
    const future = new Date("November 17, 2023 00:00:00").getTime();
    const present = new Date().getTime();
    const remain = future - present;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    const textMonth = Math.floor(remain / month);
    const textDay = Math.floor((remain % month) / day);
    const textHour = Math.floor((remain % day) / hour);
    const textMinute = Math.floor((remain % hour) / minute);
    const textSecond = Math.floor((remain % minute) / second);

    document.querySelector(".month").innerText = textMonth;
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

}

setInterval(timeduration, 1000);
// Time countdown End




// Component Part Start
$(window).on("load", function(){
    setTimeout( ()=> {
  $(".loading-page").fadeOut("fast");
  }, 1100)  
  })

$(document).ready(function() {  
var loadingcounter = 0;
var c = 0;
var i = setInterval(function(){
    $(".loading-page .counter h1").html(c + "%");
    $(".loading-page .counter hr").css("width", c + "%");
    loadingcounter++;
    c++;   
if(loadingcounter == 101) {
    clearInterval(i);
}
}, 10);
});
// Component Part End