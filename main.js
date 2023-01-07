const FaqBtn = document.querySelectorAll('.faqs-btn');
const FaqAns = document.querySelectorAll('.inner-faqs');
// const svgBtn = document.querySelectorAll('.svg-closed');

function selectItem(e){
    e.preventDefault();
   
    if(this.nextElementSibling.classList.contains('showData')){
        this.nextElementSibling.classList.remove('showData')
        this.children[0].classList.add('clicked')
        FaqAns.forEach(ele =>{
        if(ele.classList.contains('showData')){
            ele.classList.remove('showData');
            this.children[0].classList.add('clicked')
            
        }
    });
    FaqBtn.forEach(ele => {
        ele.children[0].classList.add('clicked')
    });
    }
    else{
        FaqAns.forEach(ele =>{
            if(ele.classList.contains('showData')){
                ele.classList.remove('showData');
                

            }
        });
        FaqBtn.forEach(ele => {
            ele.children[0].classList.add('clicked')
        });
        
        this.nextElementSibling.classList.add('showData')
        this.children[0].classList.remove('clicked')
    }
     

}
FaqBtn.forEach(element => {
    element.addEventListener('click', selectItem)
});