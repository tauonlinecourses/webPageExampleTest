
const the_animation = document.getElementsByClassName('have-scroll-animation');

document.addEventListener("DOMContentLoaded", function() {
    loudAllImages();
    ScollAnimation();

});

window.addEventListener("resize",ScollAnimation);
    // Function to create and update keyframes dynamically
    function ScollAnimation() {
        const animationStyle = document.getElementById("animationStyle");
        const keyframes = `
          @keyframes navSize {
            0% {
                height: 0vh;
                bottom: 0px;
                top: auto;
            }
            ${getPresentInPage("slidAnimationTag-1",0)} {
                height: 100vh;
                bottom: 0px;
                top: auto;
            }
            ${getPresentInPage("slidAnimationTag-1",0.001)} {
                height: 100vh;
                bottom: auto;
                top: 0px;
            }
            ${getPresentInPageInBetweenFrmes("slidAnimationTag-1","slidAnimationTag-2",0.95)} {
                height: 3.5em;
              }
              ${getPresentInPage("slidAnimationTag-3",0)} {
                height: 3.5em;
            }
              ${getPresentInPage("slidAnimationTag-4",0)} {
                height: 100vh;
                bottom: auto;
                top: 0px;
            }
            ${getPresentInPage("slidAnimationTag-5",0)} {
                height: 100vh;
              }
              ${getPresentInPage("slidAnimationTag-5",2)} {
                height: 3.5em;
              }

              ${getPresentInPage("slidAnimationTag-6",0)} {
                height: 3.5em;
            }
              ${getPresentInPage("slidAnimationTag-7",0)} {
                height: 100vh;
                bottom: auto;
                top: 0px;
            }
            ${getPresentInPage("slidAnimationTag-8",0)} {
                height: 100vh;
              }
              ${getPresentInPage("slidAnimationTag-8",2)} {
                height: 3.5em;
              }

              100% {
                height: 3.5em;
              }
          }


          @keyframes navCircle {
            0% {
                left: calc(100% - 8em);
                top: -3em;
                height:8em;
                width:8em;
            }
            ${getPresentInPage("slidAnimationTag-1.5",0)} {
                left: calc(${document.getElementById("navNum1").getBoundingClientRect().right}px - 0.4em);
                top: calc(50% - 1.1em);
                height:1.5em;
                width:1.5em;
              }
              ${getPresentInPage("slidAnimationTag-3",0)} {
                left: calc(${document.getElementById("navNum1").getBoundingClientRect().right}px - 0.4em);
                top: calc(50% - 1.1em);
                height:1.5em;
                width:1.5em;
              }
            ${getPresentInPage("slidAnimationTag-4",0)} {
                left: calc(${document.getElementById("navNum1").getBoundingClientRect().right}px - 2.5em);
                top: calc(50% - 2.5em);
                height:5em;
                width:5em;
                transform: scaleX(1);
            }
            ${getPresentInPageInBetweenFrmes("slidAnimationTag-4","slidAnimationTag-5",0.5)} {
                top: calc(50% + 2.5em);
            }
            ${getPresentInPage("slidAnimationTag-5",0)} {
                left: calc(${document.getElementById("navNum2").getBoundingClientRect().right}px - 0.4em);
                top: calc(50% - 1.1em);
                height:1.5em;
                width:1.5em;
                transform: scaleX(1);
            }
            ${getPresentInPage("slidAnimationTag-6",0)} {
                left: calc(${document.getElementById("navNum2").getBoundingClientRect().right}px - 0.4em);
                top: calc(50% - 1.1em);
                height:1.5em;
                width:1.5em;
            }
            ${getPresentInPage("slidAnimationTag-7",0)} {
                left: calc(${document.getElementById("navNum2").getBoundingClientRect().right}px - 2.5em);
                top: calc(50% - 2.5em);
                height:5em;
                width:5em;

            }
            ${getPresentInPageInBetweenFrmes("slidAnimationTag-7","slidAnimationTag-8",0.5)} {
                top: calc(50% - 4em);
            }
            ${getPresentInPage("slidAnimationTag-8",0)} {
                left: calc(${document.getElementById("navNum3").getBoundingClientRect().right}px - 0.4em);
                top: calc(50% - 1.1em);
                height:1.5em;
                width:1.5em;
              }

            100% {
                left: calc(${document.getElementById("navNum3").getBoundingClientRect().right}px - 0.4em);
                top: calc(50% - 1.1em);
                height:1.5em;
                width:1.5em;
            }
          }

          @keyframes NavText1 {
            0%{
                color: transparent;
            }
            ${getPresentInPage("slidAnimationTag-1.5",0)} {
                color:white;
            }
            ${getPresentInPage("slidAnimationTag-4",0)} {
                color:white;
            }
            ${getPresentInPage("slidAnimationTag-5",0)} {
                color:#ffffff4f;
            }
            100%{
                color: #ffffff4f;
            }
          }

          @keyframes NavText2 {
            0%{
                color: transparent;
            }
            ${getPresentInPage("slidAnimationTag-1.5",0)} {
                color: #ffffff4f;
            }
            ${getPresentInPage("slidAnimationTag-4",0)} {
                color: #ffffff4f;
            }
            ${getPresentInPage("slidAnimationTag-5",0)} {
                color:white;
            }
            ${getPresentInPage("slidAnimationTag-7",0)} {
                color:white;
            }
            ${getPresentInPage("slidAnimationTag-8",0)} {
                color:#ffffff4f;
            }
            100%{
                color: #ffffff4f;
            }
          }

          @keyframes NavText3 {
            0%{
                color: transparent;
            }
            ${getPresentInPage("slidAnimationTag-1.5",0)} {
                color: #ffffff4f;
            }
            ${getPresentInPage("slidAnimationTag-7",0)} {
                color: #ffffff4f;
            }
            ${getPresentInPage("slidAnimationTag-8",0)} {
                color:white;
            }
            100%{
                color:white;
            }
          }
        `;
        animationStyle.innerHTML = keyframes;
      }

function getPresentInPageInBetweenFrmes(elementFrameId,elementFrame2Id,inbetweenPresent){
    const present1 = (document.getElementById(elementFrameId).getBoundingClientRect().top + document.documentElement.scrollTop) / (document.body.offsetHeight - window.innerHeight);
    const present2 = (document.getElementById(elementFrame2Id).getBoundingClientRect().top + document.documentElement.scrollTop) / (document.body.offsetHeight - window.innerHeight);
    const present = ((present2 - present1)*inbetweenPresent)*100;

    return getPresentInPage(elementFrameId,present);
}
function getPresentInPage(elementId,offset){
    const present = (document.getElementById(elementId).getBoundingClientRect().top + document.documentElement.scrollTop) / (document.body.offsetHeight - window.innerHeight);
    console.log(present);
    return (((present)*100)+offset)+"%";
}

function start() {
    for (i = 0; i < the_animation.length; i++) {
        el = the_animation[i];
        observer.observe(el)
    }
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-enter-animation');
        }
        else if (chackAnimationCondition(entry.target, false)) {
            entry.target.classList.remove('active-enter-animation');
        }
    })
});

function chackAnimationCondition(object, isAddingAnimation) {
    canChangeAnimation = true;
    if (isAddingAnimation) {

    }
    else {
        canChangeAnimation = !object.classList.contains("loop-Once-animation");
    }
    return canChangeAnimation;

}
function test() {

}

// window.addEventListener('scroll', () => {
//     const verticalScrollPosition = window.scrollY;
//     const Nav = document.getElementById("myNav");

//     document.getElementById("LogInfo-ScrollY").innerText = "ScrollY: " + verticalScrollPosition;
//     document.getElementById("LogInfo-NavYPosition").innerText = "NavYPosition: " + document.getElementById("Marker1").offsetTop;

//     // let navHight = Nav.offsetHeight;
//     // const targetSrink = document.getElementById("shrink");

//     // console.log(navHight +"_"+ verticalScrollPx);
//     // console.log(targetSrink.getBoundingClientRect().top + "__"+ Nav.getBoundingClientRect().top)
//     // Nav.style.height = targetSrink.getBoundingClientRect().top - Nav.getBoundingClientRect().top + "px";
// });

window.addEventListener(
    "scroll",() => {
        document.body.style.setProperty("--scroll", window.scrollY / (document.body.offsetHeight - window.innerHeight));
    },false);


function loudAllImages(){
    const imagePromises = Array.from(document.images).map(img => {
        if (!img.complete) {
            return new Promise(resolve => {
                img.addEventListener('load', resolve);
                img.addEventListener('error', resolve);
            });
        } else {
            return Promise.resolve();
        }
    });
    
    // Wait for all image Promises to resolve
    Promise.all(imagePromises).then(() => {
        console.log("stopLoading");
        document.getElementById("loadingScreen").remove();
        // Your additional code here
    });
}