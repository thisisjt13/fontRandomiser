function newStyle() {
    let newColour = '#'+Math.floor(Math.random()*16777215).toString(16);
    let newBGColour = '#'+Math.floor(Math.random()*16777215).toString(16);
    let newFont = ''; 
    let x = Math.floor(Math.random()*7); 
    switch (x){
      case 0:
        newFont = 'Ariel'; 
        break;
      case 1: 
        newFont = 'Florence, cursive'; 
        break;
      case 2:
        newFont = 'Verdana';
        break; 
      case 3:
        newFont = 'Courier New';
        break
      case 4:
        newFont = 'Georgia'; 
        break;
      case 5:
          newFont = 'Helvetica';
          break;
      case 6: 
          newFont = 'Comic Sans MS';
          break;
    }
    var elem = document.getElementById("text");
    elem.style.color = newColour;
    elem.style.fontFamily = newFont;
    document.body.style.background = newBGColour;
   
  }
  