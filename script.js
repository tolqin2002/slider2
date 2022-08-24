class SLIDER {
    
    constructor({id, pagination}) { 
       this.slider = document.getElementById(id);
       this.prev = this.slider.querySelector('.slider__prev'); 
       this.next = this.slider.querySelector('.slider__next');
       this.sliderInner = this.slider.querySelector('.slider__inner');
       this.slides = [...this.sliderInner.children] //spreat
       
       this.activeSlide = 0
       
       this.next.addEventListener('click', ()=> this.setActive(this.next))
       this.prev.addEventListener('click', ()=> this.setActive(this.prev))
       
       if (pagination) {
        this.ind = this.slider.querySelector('.slider__points');
        
       for (let i = 0; i < this.slides.length; i++) {
        let source = this.slides[i].getAttribute('src'),
            el = document.createElement('img');
            
            
        el.classList.add('slider__points-ind')
        el.src = source
        
        i == 0 ? el.classList.add('active') : null
        
        this.ind.append(el)
    }
    
    this.indecotors = [...this.ind.children]
    
    for (let i = 0; i < this.slides.length; i++) {
        this.indecotors[i].addEventListener('click', ()=>{
          for (let l = 0; l < this.slides.length; l++) {
            this.slides[l].classList.remove('active');
            this.indecotors[l].classList.remove('active')
          }
          this.slides[i].classList.add('active');
          this.indecotors[i].classList.add('active')    
          this.activeSlide = i      
        })        
      }
       
       
       }       
    }
    
    setActive(btn) {
        if (btn === this.next) {
            if (this.activeSlide < this.slides.length -1) {
                this.activeSlide++
            }else{
                this.activeSlide = 0;
            }
        }else if (btn === this.prev) {
            if (this.activeSlide > 0) {
                this.activeSlide--
            }else{
                this.activeSlide = this.slides.length -1
            }
        }
        
        for (let i = 0; i < this.slides.length; i++) {
           this.slides[i].classList.remove('active')
           this.indecotors[i].classList.remove('active')
        }
        
        this.slides[this.activeSlide].classList.add('active')
        this.indecotors[this.activeSlide].classList.add('active')
              
    }
}

new SLIDER ({
    id: 'slider1',
    pagination: true
})