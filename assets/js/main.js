let loading = document.querySelector('.loader');
const scrolltotop= document.querySelector('.scroll-to-top')
const navbar = document.querySelector('.navbar');
const movingSection = document.querySelector('.moving')

window.addEventListener('scroll' , function(){
        if(window.scrollY > 5 && window.scrollY < 400){
            navbar.classList.add('opacity-0','invisible')
        }else{
            navbar.classList.remove('opacity-0','invisible')
        }

        if(window.scrollY > 150 ){
            navbar.style.backgroundColor = "#171d22"
        }else{
            navbar.style.backgroundColor = "transparent"
        }

        if(window.scrollY > movingSection.offsetTop){
            scrolltotop.classList.remove('opacity-0' ,'invisible')
        }else{
            scrolltotop.classList.add('opacity-0' ,'invisible')
        }
})  


scrolltotop.addEventListener('click' , function(){
        window.scroll({
            top:0,
            behavior:"smooth"
        })
})

window.addEventListener('load', function(){
    setTimeout(function(){
        loading.classList.add('opacity-0','invisible')
        document.body.style.overflow= 'auto'
    },2000)
})