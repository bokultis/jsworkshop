
(function () { 
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
        let $slider = document.querySelector('.slider-list');
        let $sliderArrowLeft = document.querySelector('.js-slider-left');
        let $sliderArrowRight = document.querySelector('.js-slider-right');

        function slideLeft(e){
            if(typeof e != 'undefined'){
                e.preventDefault();
            }
            console.log('ajmo LEVO');
            let $currentSlide = document.querySelector('.slider-slide-active');
            let $nextSlide = $currentSlide.nextElementSibling;
    
            if($nextSlide != null){
                $currentSlide.classList.remove('slider-slide-active');
                $currentSlide.classList.add('slider-slide-hidden');
                
                $nextSlide.classList.remove('slider-slide-hidden');
                $nextSlide.classList.add('slider-slide-active');
            }else{
                $currentSlide.classList.add('slider-slide-hidden');
                $currentSlide.classList.remove('slider-slide-active');
                $slider.firstElementChild.classList.remove('slider-slide-hidden');
                $slider.firstElementChild.classList.add('slider-slide-active');
            }
        }
    
        function slideRight(e){
            if(typeof e != 'undefined'){
                e.preventDefault();
            }
            console.log('ajmo DESNO');
            let $currentSlide = document.querySelector('.slider-slide-active');
            let $previousSlide = $currentSlide.previousElementSibling;
            
            if($previousSlide != null){
                $currentSlide.classList.remove('slider-slide-active');
                $currentSlide.classList.add('slider-slide-hidden');
                
                $previousSlide.classList.remove('slider-slide-hidden');
                $previousSlide.classList.add('slider-slide-active');
            }else{
                $currentSlide.classList.add('slider-slide-hidden');
                $currentSlide.classList.remove('slider-slide-active');
                $slider.lastElementChild.classList.remove('slider-slide-hidden');
                $slider.lastElementChild.classList.add('slider-slide-active');
            }
    
        }    
    

        $sliderArrowLeft.addEventListener('click', slideLeft, false);
        $sliderArrowRight.addEventListener('click', slideRight, false);
    
        
    
    
        //setInterval(slideRight, 3000);


    });
})();
