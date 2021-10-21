

let nav = document.querySelector('.navbar')
let navBrand = document.querySelector('#navbar-brand')

document.addEventListener('scroll', ()=>{

    let scrolled = window.scrollY

   if(scrolled >= 100){

    navbar.classList.remove('bg-light')
    navbar.classList.add('bg-custom')
    navBrand.classList.remove('fa-3x', 'fas', 'fa-stopwatch')


   } else {
    navbar.classList.add('bg-light')
    navbar.classList.remove('bg-custom')
    navBrand.classList.add('fa-3x', 'fas', 'fa-stopwatch')


   }
})



// typewriter 

const TypeWriter = function(txtElement, words, wait = 3000){

    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;

}

//Type Method
TypeWriter.prototype.type = function(){
//    current index of words 

   const current = this.wordIndex % this.words.length;
//    get full text of current word 
   const fullTxt = this.words[current];
//    check if deleting 
if(this.isDeleting){
    //remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    
} else {
    //add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
}

// insert txt into element 
   this.txtElement.innerHTML = `
   <p class="text-light">
   <span class="txt">${this.txt}</span> 
    </p>
   `

//   type speed 
   let typeSpeed = 300;
   
   if(this.isDeleting){
       typeSpeed /= 2;
   }

   // check if the word is completed

   if(!this.isDeleting && this.txt === fullTxt){
    //    make pause at end 
       typeSpeed = this.wait;
    //    set isDeleting true 
    this.isDeleting = true;
   } else if(this.isDeleting && this.txt === ''){
       this.isDeleting = false;
    //    move to next word 
      this.wordIndex++;
    //   pause before start typing again 
    typeSpeed = 500;
   }

  
    
   setTimeout(() => this.type(), typeSpeed)

}
//Init on DOM LOAD

document.addEventListener('DOMContentLoaded', init);

// Init app 

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words =JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // INIT TYPEWRITER 
    new TypeWriter(txtElement, words, wait);
}




let images = document.querySelectorAll('.img-who')

images.forEach((image, i) => {
  image.style.transform = ` rotate(${Math.abs(i * 360) / images.length}deg) translate(150px) rotate(-${Math.abs(i * 360) / images.length}deg)`
})





