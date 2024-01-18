
const the_animation = document.getElementsByClassName('have-scroll-animation');

function start(){
    for(i=0;i<the_animation.length;i++){
        el = the_animation[i];
        observer.observe(el)
    }

    const sideMenuScreens = document.getElementsByClassName('bookmarkSideManu-Ditector');
    for(i=0;i<sideMenuScreens.length;i++){
        el = sideMenuScreens[i];
        sideMenuObserver.observe(el)
    }
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-enter-animation');
        }
            else if(chackAnimationCondition(entry.target, false)) {
                entry.target.classList.remove('active-enter-animation');
            }
    })
});

function chackAnimationCondition(object, isAddingAnimation){
    canChangeAnimation = true;
    if(isAddingAnimation){
      
    }
    else{
        canChangeAnimation = !object.classList.contains("loop-Once-animation");
    }
    return canChangeAnimation;
    
}

const sideMenuObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.getElementById("bookmarkSideManuH3").innerText=entry.target.parentElement.getAttribute("title");
        }
        else {
            //entry.target.classList.remove('active-enter-animation');
        }
    })
});


