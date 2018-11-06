class Slider {

    constructor(data) {
        this.element = data.element || document.querySelector(data.selector);
        this.delay = data.delay || 5000;
        this.paused = typeof data.paused !== 'undefined' ? data.paused : false;
        this.ready = false;
        this.counting = false;
        this.sliding = false;
        this.index = 0;

        if(document.readyState === "complete"
            || document.readyState === "loaded"
            || document.readyState === "interactive") {
            this.contentReady();
        } else {
            document.addEventListener("DOMContentLoaded", function() {
                this.contentReady();
            }.bind(this), false);
        }

        this.setup();
    }

    setup() {
        var children = this.element.children;

        let numOfSlides = children.length;
        let sliderDots = document.querySelector('.controlls-dots');

        for(var i=0; i < numOfSlides; i++){
            let dot = document.createElement('li');
            dot.innerHTML = '<a href="#" class="nav_dot" data-index="'+i+'"><i class="fa fa-circle"></i></a>';
            sliderDots.appendChild(dot);
        }

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

        this.ready = true;

        if(!this.paused) {
            //this.startCounting();
        }
    }

    contentReady() {
        //this.initSliderFromQueue();
        console.log('page is loaded');
        this.pageLoaded = true;
    }

    initSlider(data) {
        return new Promise(function(resolve, reject) {
            requestAnimationFrame(function() {
                var _slider = new Slider(data);
                this.sliders.push(_slider);

                data.__readyCallback(_slider);

                resolve(_slider);
            }.bind(this));
        }.bind(this));
    }

    initDots(){

    }


}
