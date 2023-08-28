function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base')
    const baseFieldText = baseField.value;
    const base= parseFloat(baseFieldText);
   

  const heightField = document.getElementById('triangle-height')
  const heightFieldText = heightField.value;
  const height = parseFloat(heightFieldText);
  

  const area = 0.5*base*height;
  
  const textArea = document.getElementById('triangle-area');
  textArea.innerText = area;

}

function calculateReArea(){
 const widthField = document.getElementById('reactangle-width')
 const reactangle = widthField.value;
 const width = parseFloat(reactangle)

 const lengthField = document.getElementById('reactangle-length')
 const lengthText = lengthField.value;
 const length = parseFloat(lengthText);
 
 const reatArea = width*length 

 const ractangleTextArea = document.getElementById('reactangale-area');
 ractangleTextArea.innerText = reatArea;


}

function calculateParalleloArea(){
 
  const base = getInputValue('Parallelogram-width');
  console.log(base);
 const width = getInputValue('Parallelogram-length')
 console.log(width)
  
 const ParallelogramArea = base*width

setElement('peralelogram-area', ParallelogramArea)
}



function calculateEllipseArea(){
  const ellipseWidth = getInputValue('ellipse-width') ;
  const ellipseLLength =getInputValue('ellipse-length')
   const ellipseArea = 3.14 * ellipseWidth * ellipseLLength;
   
   setElement('ellipse-area', ellipseArea)

}

function getInputValue(inputField){
  const getInputFiled = document.getElementById(inputField);
  const inputValueText = getInputFiled.value;
  const value = parseFloat(inputValueText);
  return value;
}



function setElement(inputElement, area){
  const elment = document.getElementById(inputElement);
  elment.innerText = area;
}