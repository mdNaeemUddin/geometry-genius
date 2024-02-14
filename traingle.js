// triangle

function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('base-input');
   
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
   

    const triangleHeightInput = document.getElementById('height-input');
   
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
   
    const area = base * height;
    const setOutput = document.getElementById('area');

    setOutput.innerText = area;
    console.log(area);
    
}

function getInput(inputId) {
    const inputTextGet = document.getElementById(inputId);
    const inputValue = inputTextGet.value;
    const value = parseFloat(inputValue);
    return value;
}

function calculateArea() {
    const base = getInput('base-input');
    // console.log(base);
    const height = getInput('height-input');
    // console.log(height);
    const area = 0.5 * base * height;
    // console.log(area);
    return area;
}

function setOutput() {
    const getId = document.getElementById('area');
    getId.innerText = calculateArea();
}

