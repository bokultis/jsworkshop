class jsGallery {

    constructor(data) {
        this.element = data.element || document.querySelector(data.selector);
        this.delay = data.delay || 5000;
        this.paused = typeof data.paused !== 'undefined' ? data.paused : false;
        this.ready = false;
        this.counting = false;
        this.sliding = false;
        this.index = 0;

        this.galleryContainer;

        if(document.readyState === "complete"
            || document.readyState === "loaded"
            || document.readyState === "interactive") {
            this.contentReady(data);
        } else {
            document.addEventListener("DOMContentLoaded", function() {
                this.contentReady(data);
            }.bind(this), false);
        }

        this.setup();
        this.initSlider(data);
    }

    setup() {
        this.galleryContainer = document.querySelector('.gallery');
        
        var children = this.element.children;
        let numOfGalleries = children.length;

        let galleryControlls = document.querySelector('.gallery-controlls');

        for(var i=0; i < numOfGalleries; i++){
            children[i].dataset.index = i;
            let li = document.createElement('li');
            li.innerHTML = '<a href="#" class="control_links" data-index="'+i+'">' + children[i].dataset.title + '</a>';
            galleryControlls.appendChild(li);
        }

        const controlLinks = document.getElementsByClassName('control_links');
        for(var i=0; i < controlLinks.length; i++){
            controlLinks[i].addEventListener('click', function(e){
                e.preventDefault();
                //this.classList.remove('section-active');
                let galleries = document.querySelectorAll('.image-section');
                for(var j=0; j<galleries.length; j++){
                    if (!galleries[j].classList.contains('section-active') && j==this.dataset.index) {
                        galleries[j].classList.add('section-active');
                        galleries[j].classList.remove('section-hidden');
                    }else if(j!=this.dataset.index){
                        galleries[j].classList.add('section-hidden');
                        galleries[j].classList.remove('section-active');
                    }
                }
            });
        }
    }

    contentReady(data) {
        this.pageLoaded = true;
    }

    initSlider(data) {
        let sliderContainer = document.querySelector('.slider');
        let imgs = this.galleryContainer.getElementsByTagName('img');


        console.log(sliderContainer);
        for(var s=0; s < imgs.length; s++){
            let li = document.createElement('li');
            li.innerHTML = '<img data-index="'+s+'" src="'  + imgs[s].getAttribute('src') + '" class="slider-image-hidden">';
            sliderContainer.appendChild(li);

            imgs[s].addEventListener('click', function(e){
                e.preventDefault();
                console.log(this);
            });



        }

        // return new Promise(function(resolve, reject) {
        //     requestAnimationFrame(function() {
        //         var _slider = new Slider(data);
        //         this.sliders.push(_slider);

        //         data.__readyCallback(_slider);

        //         resolve(_slider);
        //     }.bind(this));
        // }.bind(this));
    }

    initDots(){

    }


}
