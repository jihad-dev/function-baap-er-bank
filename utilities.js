function getInputfieldValuebyid(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldvaluestring = inputField.value;
    const inputFieldvalue = parseFloat(inputFieldvaluestring);
    inputField.value = '';
    return inputFieldvalue;
}

function gettextelementvaluebyId(elementId){
    const textElement = document.getElementById(elementId);
    const textElementvalueString = textElement.innerText;
    const textElementvalue = parseFloat(textElementvalueString);
    return textElementvalue;
}
function setTextElementvalueById(elementId ,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
