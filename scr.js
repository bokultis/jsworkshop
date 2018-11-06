;(function(){
    'use strict';
    let $slider = document.querySelector('.slider-list');
    let $sliderArrowLeft = document.querySelector('.js-slider-left');
    let $sliderArrowRight = document.querySelector('.js-slider-right');
    
    //function addNavDots(){
        let numOfSlides = document.querySelectorAll('.slider-slide').length;
        let $sliderDots = document.querySelector('.controlls-dots');

        for(i=0; i<numOfSlides; i++){
            let $dot = document.createElement('li');
            $dot.innerHTML = '<a href="#" class="nav_dot" data-index="'+i+'"><i class="fa fa-circle"></i></a>';
            $sliderDots.appendChild($dot);
        }
    //}

    //addNavDots();
    const $navDots = document.getElementsByClassName('nav_dot');

    for(var i=0; i < $navDots.length; i++){
        $navDots[i].addEventListener('click', function(e){
            e.preventDefault();
            let $sliders = document.querySelectorAll('.slider-slide');
            for(var j=0; j<$sliders.length; j++){
                this.classList.remove('active');
                if(j==this.dataset.index){
                    this.classList.add('active');
                }
                if (!$sliders[j].classList.contains('slider-slide-active') && j==this.dataset.index) {
                    $sliders[j].classList.add('slider-slide-active');
                    $sliders[j].classList.remove('slider-slide-hidden');
                }else if(j!=this.dataset.index){
                    $sliders[j].classList.add('slider-slide-hidden');
                    $sliders[j].classList.remove('slider-slide-active');
                }
            }
        });
    }

        
})();

