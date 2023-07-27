const slider = document.querySelector('.slider'); 

const leftArrow = document.querySelector('.arrowLeft'); 
const rightArrow = document.querySelector('.arrowRight'); 
const indicatorParents = document.querySelector('.displayIndex');

var sectionIndex = 0; 
var sectionIndexMax = 1;
var sectionIndexMin = 0; 
var sectionTranslateMultiplier = 50; 

document.querySelectorAll('.controls li').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
        sectionIndex = ind;  
        document.querySelector('.controls .selected').classList.remove('selected'); 
        indicator.classList.add('selected'); 
        slider.style.transform = `translate(${-ind * sectionTranslateMultiplier}%)`; 
    });
}); 

rightArrow.addEventListener('click', function(){
    if (sectionIndex < sectionIndexMax)
    {
        sectionIndex = sectionIndex + 1; 
        slider.style.transform = `translate(${-sectionIndex * sectionTranslateMultiplier}%)`; 
    } 
    else 
    {
        sectionIndex = sectionIndexMin; 
        slider.style.transform = `translate(${sectionIndex * sectionTranslateMultiplier}%)`; 
    }
    document.querySelector('.controls .selected').classList.remove('selected'); 
    indicatorParents.children[sectionIndex].classList.add('selected');
    console.log("section Index: " + sectionIndex); 
})

leftArrow.addEventListener('click', function(){
    if (sectionIndex > sectionIndexMin)
    {
        sectionIndex = sectionIndex - 1; 
        slider.style.transform = `translate(${sectionIndex * sectionTranslateMultiplier}%)`; 
    } 
    else 
    {
        sectionIndex = sectionIndexMax; 
        slider.style.transform = `translate(${-sectionIndexMax * sectionTranslateMultiplier}%)`; 
    }

    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    console.log("section Index: " + sectionIndex); 
})