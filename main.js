
let totalSlides
let currentSlide = 0

imagesJson.map((item,index)=>{
    totalSlides = document.querySelectorAll('.slider-item').length
    let imageItem = document.querySelector('.models .slider-item').cloneNode(true)
    document.querySelector('.slider-width').append(imageItem)

    imageItem.style.backgroundImage = `url('${item.img}')`;

})


setInterval(()=>{
    document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`
},200)



document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlides})`

function next(){
    currentSlide++
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0
    }

    console.log(currentSlide)
    updateMargin()
}
function prev() {
    currentSlide--

    if(currentSlide < 0) {
        currentSlide = (totalSlides - 1)
    }

    updateMargin()
}

setInterval(()=>{
    currentSlide++
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0
    }
    updateMargin()
}, 10000)


function updateMargin () {
   let sliderItemWidth = document.querySelector('.slider-width .slider-item').clientWidth
   console.log(sliderItemWidth)
   let margin = (sliderItemWidth * currentSlide)
   document.querySelector('.slider-width').style.marginLeft = `-${margin}px`

}




