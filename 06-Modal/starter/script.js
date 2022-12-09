'use strict';

// Selected all the elements i want to work with

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnClosedModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);
 

// 1. fisrt selecting the elements with the class show-modal looping theough it
// 2. when clicked the elements with the class btnsOpenModal, remove the hidden class , and show the window

// function to open the model
const openModel =function(){
    //removing hidden class in the model class, to show the window when clicked 
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
};
// passing the function that removes hidden

for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModel);




// function to close the model
const closeModel = function (){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
btnClosedModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel)

document.addEventListener('keydown', function(e){
    console.log('A key was pressed')
    console.log(e.key)

    
});








