let buttonOne = document.getElementById("buttonOne");
let buttonTwo = document.getElementById("buttonTwo");
let buttonThree = document.getElementById("buttonThree");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

const oneInfo = () => {
    if(one.style.display == 'none'){
        one.style.display = 'block';
    } else {
        one.style.display = 'none';
    }
}

const twoInfo = () => {
    if(two.style.display == 'none'){
        two.style.display = 'block';
    } else {
        two.style.display = 'none';
    }
}

const threeInfo = () => {
    if(three.style.display == 'none'){
        three.style.display = 'block';
    } else {
        three.style.display = 'none';
    }
}

buttonOne.addEventListener('click',oneInfo);
buttonTwo.addEventListener('click',twoInfo);
buttonThree.addEventListener('click',threeInfo);
