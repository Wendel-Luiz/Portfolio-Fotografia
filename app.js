const icon = document.querySelector(".menu--icon");
const menu = document.querySelector(".menu--content");
const MediaQueryList = window.matchMedia('(min-width:768px)');

icon.addEventListener('click', function(event){
    menu.style.display = "unset";
    event.stopPropagation();
}, false);

document.addEventListener('click', () => {
        if(this.screen.width <= 768 )
            menu.style.display = "none";
}, false);

MediaQueryList.addListener((event) => {
    if(event.matches){
        menu.style.display = "unset";
    }else{
        menu.style.display = "none";
    }
})
