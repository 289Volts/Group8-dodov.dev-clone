function changeColor(getColor){
    let bg = document.querySelector('.container');
    let selectColor = getColor.value;
    bg.style.background = selectColor;
  }