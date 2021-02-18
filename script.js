let container = document.querySelector('.container');
let buttons = document.querySelectorAll('.colorPick');
let choice = "black";
drawgrid(50);

function clrscreen() {
    container.innerHTML= '';
    let gridsize = prompt('Please enter a new grid size of not more than 100', 50);
    if(gridsize < 100){
        gridsize = 100;
    }
    drawgrid(gridsize);
}

for(let button of buttons) {
    button.addEventListener('click', function(e){
        choice = button.id;
        clrscreen();
    })
}

function drawgrid(size){
    for(let i =0; i< size ** 2; i++){
        const newDiv = document.createElement('div');
        newDiv.className = 'pixel';
        newDiv.style.display = 'flex';
        container.appendChild(newDiv);
    }
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
    pixels = document.querySelectorAll('.pixel');

    for(let pixel of pixels){
        pixel.addEventListener('mouseover', function(e){
            let currentClr = getComputedStyle(pixel,null).getPropertyValue('background-color');
            currentClr = currentClr.substr(4, currentClr.length - 2);
            currentClr = currentClr.replace('(', '');
            currentClr = currentClr.replace(')', '');
            currentClr = currentClr.split(',');
            currentClr[0] = parseInt(currentClr[0]);
            currentClr[1] = parseInt(currentClr[1]);
            switch(choice){
                case 'black':
                    e.target.style.backgroundColor = 'black';
                    break;
                case 'colors':
                    e.target.style.backgroundColor = `rgb(${parseInt((Math.random() * 255))}, ${parseInt((Math.random() * 255))}, ${parseInt((Math.random() * 255))} )`;
                    break;
                case 'shading':
                    if(currentClr[0] === 0){
                    e.target.style.backgroundColor = `rgb(${currentClr[0] + 101}, ${currentClr[1] + 101}, ${currentClr[2] + 101} )`;
                    }
                    else if (currentClr[0] >>> 1){
                        e.target.style.backgroundColor = `rgb(${currentClr[0] + 10}, ${currentClr[1] + 10}, ${currentClr[2] + 10} )`;
                    }
                    break;             
            }

        })
    }
}