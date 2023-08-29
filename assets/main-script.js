/* Back To Top Button Start */
let button = document.querySelector(".back-to-top-btn");
              
window.addEventListener("scroll", scrolltotop)
    function scrolltotop () {
        if (window.pageYOffset> 300) {  
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


/* Main Page1 Start */
      let swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
/* Main Page1 End */


// Main Page3 Carousel Start 
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter ++;
    if(counter > 3){
        counter = 1;
    }
}, 5000)
// Main Page3 Carousel End 

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



// Jquery Sekillerin boyumeni Start
$(function(){
    $("#bg").css({
        "display" : "none",
        "width" : "100%",
        "height" : "100vh",
        "background-repeat" : "no-repeat",
        "background-position" : "center",
        "background-color" : "rgba(0,0,0,.8)",
        "z-index" : 100,
        "position" : "fixed",
        "top" : 0,
        "left" : 0,
    });

    $(".main-page2-fig img, .main-page3-picb img, .main-page2-pica img, .main-page4 img, .main-page6-pic img, .main-page8 img").on("click", function(){
        let src = $(this).attr("src");
        $("#bg").css({
            "display" : "block",
            "background-image" : `url('${src}')`,
        })
        
    })
    $("#bg").on("click",function(){
        $(this).css({
            "display":"none",
        })
    })

})
// Jquery Sekillerin boyumeni End