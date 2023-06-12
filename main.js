const boxes = document.querySelectorAll('#grid > div');
const heading = document.querySelector('h1')
const resetButton = document.getElementById('resetButton');
let gameStopped = false;




let currentPlayer = 1;

heading.innerText = 'TURN FOR PLAYER 1'
heading.style.color = 'rgb(239, 83, 109)';

boxes.forEach(function(box) {
    box.addEventListener('click', function(evt) {
      if (!gameStopped && !box.classList.contains('disabled')) {
        handleClick(evt.target);
        box.classList.add('disabled');
      }
    });
  });
  
function handleClick(box) {
  if (!gameStopped && currentPlayer === 1) {
    box.style.backgroundColor = 'rgb(239, 83, 109)';
    box.innerHTML = '<span class ="letter">X</span>';
    currentPlayer = 2;
    heading.innerText = 'TURN FOR PLAYER 2'
    heading.style.color = 'rgb(71, 51, 188)';

  } else {
    box.style.backgroundColor = 'rgb(71, 51, 188)';
    box.innerHTML = '<span class ="oletter">O</span>';
    currentPlayer = 1;
    heading.innerText = 'TURN FOR PLAYER 1'
    heading.style.color = 'rgb(239, 83, 109)';
  }
  checkWinConditions()
}

function reset2(){
   gameStopped = true;
}

resetButton.addEventListener('click', resetGame);

function resetGame(){
    boxes.forEach(function(box){
        box.style.backgroundColor = 'white';
        box.classList.remove('disabled');
        currentPlayer = 1;
        heading.innerText = 'TURN FOR PLAYER 1';
        heading.style.color = 'rgb(239, 83, 109)';
        box.innerHTML = '';
        box.classList.remove('letter');
        box.classList.remove('oletter');
       
    });
    gameStopped = false;
    marked0=0
    marked1=0
    marked2=0
    marked3=0
    marked4=0
    marked5=0
    marked6=0
    marked7=0
    marked8=0

    mmarked0=0
    mmarked1=0
    mmarked2=0
    mmarked3=0
    mmarked4=0
    mmarked5=0
    mmarked6=0
    mmarked7=0
    mmarked8=0

    tie0=0
    tie1=0
    tie2=0
    tie3=0
    tie4=0
    tie5=0
    tie6=0
    tie7=0
    tie8=0
}

// winLogic =[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
// ]
const box0 = document.getElementById('box0');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');

let marked0 = 0;
let marked1 = 0;
let marked2 = 0;
let marked3 = 0;
let marked4 = 0;
let marked5 = 0;
let marked6 = 0;
let marked7 = 0;
let marked8 = 0;

let mmarked0 = 0;
let mmarked1 = 0;
let mmarked2 = 0;
let mmarked3 = 0;
let mmarked4 = 0;
let mmarked5 = 0;
let mmarked6 = 0;
let mmarked7 = 0;
let mmarked8 = 0;

let tie0 = 0;
let tie1 = 0;
let tie2 = 0;
let tie3 = 0;
let tie4 = 0;
let tie5 = 0;
let tie6 = 0;
let tie7 = 0;
let tie8 = 0;

box0.addEventListener('click', function(evt) {
    if (tie0 === 0 ) {
      tie0++;
      checkWinConditions();
    }
  });
  
  box1.addEventListener('click', function(evt) {
    if (tie1 === 0 ) {
      tie1++;
      checkWinConditions();
    }
  });
  
  box2.addEventListener('click', function(evt) {
    if (tie2 === 0) {
      tie2++;
      checkWinConditions();
    }
  });
  
  box3.addEventListener('click', function(evt) {
    if (tie3 === 0 ) {
      tie3++;
      checkWinConditions();
    }
  });
  
  box4.addEventListener('click', function(evt) {
    if (tie4 === 0 ) {
      tie4++;
      checkWinConditions();
    }
  });
  
  box5.addEventListener('click', function(evt) {
    if (tie5 === 0 ) {
      tie5++;
      checkWinConditions();
    }
  });
  
  box6.addEventListener('click', function(evt) {
    if (tie6 === 0 ) {
      tie6++;
      checkWinConditions();
    }
  });
  
  box7.addEventListener('click', function(evt) {
    if (tie7 === 0 ) {
      tie7++;
      checkWinConditions();
    }
  });
  
  box8.addEventListener('click', function(evt) {
    if (tie8 === 0 ) {
      tie8++;
      checkWinConditions();
    }
  });
  
  
  
  
  
  
  
  

box0.addEventListener('click', function(evt) {
  if (marked0 === 0 && currentPlayer === 2) {
    marked0++;
    checkWinConditions();
  }
});

box1.addEventListener('click', function(evt) {
  if (marked1 === 0 && currentPlayer === 2) {
    marked1++;
    checkWinConditions();
  }
});

box2.addEventListener('click', function(evt) {
  if (marked2 === 0 && currentPlayer === 2) {
    marked2++;
    checkWinConditions();
  }
});

box3.addEventListener('click', function(evt) {
  if (marked3 === 0 && currentPlayer === 2) {
    marked3++;
    checkWinConditions();
  }
});

box4.addEventListener('click', function(evt) {
  if (marked4 === 0 && currentPlayer === 2) {
    marked4++;
    checkWinConditions();
  }
});

box5.addEventListener('click', function(evt) {
  if (marked5 === 0 && currentPlayer === 2) {
    marked5++;
    checkWinConditions();
  }
});

box6.addEventListener('click', function(evt) {
  if (marked6 === 0 && currentPlayer === 2) {
    marked6++;
    checkWinConditions();
  }
});

box7.addEventListener('click', function(evt) {
  if (marked7 === 0 && currentPlayer === 2) {
    marked7++;
    checkWinConditions();
  }
});

box8.addEventListener('click', function(evt) {
  if (marked8 === 0 && currentPlayer === 2) {
    marked8++;
    checkWinConditions();
  }
});










box0.addEventListener('click', function(evt) {
    if (mmarked0 === 0 && currentPlayer === 1) {
      mmarked0++;
      checkWinConditions();
    }
  });
  
  box1.addEventListener('click', function(evt) {
    if (mmarked1 === 0 && currentPlayer === 1) {
      mmarked1++;
      checkWinConditions();
    }
  });
  
  box2.addEventListener('click', function(evt) {
    if (mmarked2 === 0 && currentPlayer === 1) {
      mmarked2++;
      checkWinConditions();
    }
  });
  
  box3.addEventListener('click', function(evt) {
    if (mmarked3 === 0 && currentPlayer === 1) {
      mmarked3++;
      checkWinConditions();
    }
  });
  
  box4.addEventListener('click', function(evt) {
    if (mmarked4 === 0 && currentPlayer === 1) {
      mmarked4++;
      checkWinConditions();
    }
  });
  
  box5.addEventListener('click', function(evt) {
    if (mmarked5 === 0 && currentPlayer === 1) {
      mmarked5++;
      checkWinConditions();
    }
  });
  
  box6.addEventListener('click', function(evt) {
    if (mmarked6 === 0 && currentPlayer === 1) {
      mmarked6++;
      checkWinConditions();
    }
  });
  
  box7.addEventListener('click', function(evt) {
    if (mmarked7 === 0 && currentPlayer === 1) {
      mmarked7++;
      checkWinConditions();
    }
  });
  
  box8.addEventListener('click', function(evt) {
    if (mmarked8 === 0 && currentPlayer === 1) {
      mmarked8++;
      checkWinConditions();
    }
  });
function checkWinConditions() {
  if (marked0 === 1 && marked1 === 1 && marked2 === 1 && currentPlayer === 2) {
    heading.innerText = "PLAYER 1 HAS WON THE GAME, CONGRATS!!";
    heading.style.color = 'rgb(239, 83, 109)';
    reset2()
    
  } if (mmarked0 === 1 && mmarked1 === 1 && mmarked2 === 1 && currentPlayer === 1) {
    heading.innerText = "PLAYER 2 HAS WON THE GAME, CONGRATS!!";
    heading.style.color = 'rgb(71, 51, 188)';
    reset2()
    
  }

  if (marked3 === 1 && marked4 === 1 && marked5 === 1 && currentPlayer === 2) {
    heading.innerText = "PLAYER 1 HAS WON THE GAME, CONGRATS!!";
    heading.style.color = 'rgb(239, 83, 109)';
    reset2()
  } if (mmarked3 === 1 && mmarked4 === 1 && mmarked5 === 1 && currentPlayer === 1) {
    heading.innerText = "PLAYER 2 HAS WON THE GAME, CONGRATS!!";
    heading.style.color = 'rgb(71, 51, 188)';
    reset2()
  }

  if (marked6 === 1 && marked7 === 1 && marked8 === 1 && currentPlayer === 2) {
    heading.innerText = "PLAYER 1 HAS WON THE GAME, CONGRATS!!";
     heading.style.color = 'rgb(239, 83, 109)';
     reset2()
}  if (mmarked6 === 1 && mmarked7 === 1 && mmarked8 === 1 && currentPlayer === 1) {
  heading.innerText = "PLAYER 2 HAS WON THE GAME, CONGRATS!!";
  heading.style.color = 'rgb(71, 51, 188)';
  reset2()
}

if (marked0 === 1 && marked4 === 1 && marked8 === 1 && currentPlayer === 2) {
  heading.innerText = "PLAYER 1 HAS WON THE GAME, CONGRATS!!";
  heading.style.color = 'rgb(239, 83, 109)';
  reset2()
} if (mmarked0 === 1 && mmarked4 === 1 && mmarked8 === 1 && currentPlayer === 1) {
    heading.innerText = "PLAYER 2 HAS WON THE GAME, CONGRATS!!";
  heading.style.color = 'rgb(71, 51, 188)'
  reset2()
}

  if (marked2 === 1 && marked4 === 1 && marked6 === 1 && currentPlayer === 2) {
    heading.innerText = "PLAYER 1 HAS WON THE GAME, CONGRATS!!";
    heading.style.color = 'rgb(239, 83, 109)';
    reset2()
  }  if (mmarked2 === 1 && mmarked4 === 1 && mmarked6 === 1 && currentPlayer === 1) {
      heading.innerText = "PLAYER 2 HAS WON THE GAME, CONGRATS!!";
    heading.style.color = 'rgb(71, 51, 188)'
    reset2()
}
    if (marked0 === 1 && marked3 === 1 && marked6 === 1 && currentPlayer === 2) {
        heading.innerText = "PLAYER 1 HAS WON THE GAME, CONGRATS!!";
        heading.style.color = 'rgb(239, 83, 109)';
        reset2()
      }  if (mmarked0 === 1 && mmarked3 === 1 && mmarked6 === 1 && currentPlayer === 1) {
        heading.innerText = "PLAYER 2 HAS WON THE GAME, CONGRATS!!";
        heading.style.color = 'rgb(71, 51, 188)';
        reset2()
      }
    
      if (marked1 === 1 && marked4 === 1 && marked7 === 1 && currentPlayer === 2) {
        heading.innerText = "PLAYER 1 HAS WON THE GAME, CONGRATS!!";
        heading.style.color = 'rgb(239, 83, 109)';
        reset2()
      }  if (mmarked1 === 1 && mmarked4 === 1 && mmarked7 === 1 && currentPlayer === 1) {
        heading.innerText = "PLAYER 2 HAS WON THE GAME, CONGRATS!!";
        heading.style.color = 'rgb(71, 51, 188)';
        reset2()
      }
    
      if (marked2 === 1 && marked5 === 1 && marked8 === 1 && currentPlayer === 2) {
        heading.innerText = "PLAYER 1 HAS WON THE GAME, CONGRATS!!";
         heading.style.color = 'rgb(239, 83, 109)';
         reset2()
    }  if (mmarked2 === 1 && mmarked5 === 1 && mmarked8 === 1 && currentPlayer === 1) {
      heading.innerText = "PLAYER 2 HAS WON THE GAME, CONGRATS!!";
      heading.style.color = 'rgb(71, 51, 188)';
      reset2()
    }
  if(tie0===1 && tie1===1 && tie2===1 && tie3===1 && tie4===1 && tie5===1 && tie6===1 && tie7===1 && tie8===1 && !gameStopped){
    heading.innerText = "ITS A TIE, TRY AGAIN!";
    heading.style.color = 'black';
    reset2()
  }   
};

