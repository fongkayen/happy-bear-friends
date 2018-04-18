/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var imageToBeSwapped = document.getElementById("main-product-pic");
var imageToBeHovered = document.getElementsByClassName("more-product-pic")
var origImage = imageToBeSwapped.src;

imageToBeHovered.addEventListener('onmouseover', function(){
   imageToBeSwapped.src = imageToBeHovered.src;
});

function swapImage(){
    
}