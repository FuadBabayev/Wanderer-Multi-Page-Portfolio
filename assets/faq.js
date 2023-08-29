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


// Your Page Start
$(document).ready(function(){
    $(".a").click(function(){
    $(".aa").toggle(200);
    });
    });

    $(document).ready(function(){
        $(".b").click(function(){
        $(".bb").toggle(200);
        });
        });

        $(document).ready(function(){
            $(".c").click(function(){
            $(".cc").toggle(200);
            });
            });

            $(document).ready(function(){
                $(".d").click(function(){
                $(".dd").toggle(200);
                });
                });

                $(document).ready(function(){
                    $(".e").click(function(){
                    $(".ee").toggle(200);
                    });
                    });

                    $(document).ready(function(){
                        $(".f").click(function(){
                        $(".ff").toggle(200);
                        });
                        });

                        $(document).ready(function(){
                            $(".g").click(function(){
                            $(".gg").toggle(200);
                            });
                            });

                            $(document).ready(function(){
                                $(".h").click(function(){
                                $(".hh").toggle(200);
                                });
                                });

                                $(document).ready(function(){
                                    $(".i").click(function(){
                                    $(".ii").toggle(200);
                                    });
                                    });

                                    $(document).ready(function(){
                                        $(".j").click(function(){
                                        $(".jj").toggle(200);
                                        });
                                        });

                                        $(document).ready(function(){
                                            $(".k").click(function(){
                                            $(".kk").toggle(200);
                                            });
                                            });

                                            $(document).ready(function(){
                                                $(".l").click(function(){
                                                $(".ll").toggle(200);
                                                });
                                                });
// Your Page End


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