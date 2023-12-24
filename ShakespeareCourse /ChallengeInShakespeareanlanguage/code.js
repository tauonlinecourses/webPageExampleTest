
const the_animation = document.getElementsByClassName('have-scroll-animation');

function start(){
    for(i=0;i<the_animation.length;i++){
        el = the_animation[i];
        observer.observe(el)
    }
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-enter-animation');
        }
            else {
                entry.target.classList.remove('active-enter-animation');
            }
    })
});



