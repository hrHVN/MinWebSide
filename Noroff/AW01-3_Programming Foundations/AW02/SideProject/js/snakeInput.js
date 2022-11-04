var inputtDirection = {x: 0, y: 0};
var lastInputDirection = {x: 0, y: 0};

window.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowUp':
            if (lastInputDirection.y != 0) break
            inputtDirection = {x: 0, y: -1};
            break
        case 'ArrowDown':
            if (lastInputDirection.y != 0) break
            inputtDirection = {x: 0, y: 1};
            break
        case 'ArrowLeft':
            if (lastInputDirection.x != 0) break
            inputtDirection = {x: -1, y: 0};
            break
        case 'ArrowRight':
            if (lastInputDirection.x != 0) break
            inputtDirection = {x: 1, y: 0};
            break
    }
});

export function getInputDirection(){
    lastInputDirection = inputtDirection;
    return inputtDirection;
}