var jogada = ['tesoura','papel','pedra'];
  
var randomElement;

function mudaNum() {
     randomElement = jogada[Math.floor(Math.random() * jogada.length)];
     return randomElement;
}



function userChoice(elemento){
     switch(randomElement + elemento){
          case 'tesourate':
          resultado.innerHTML = "empatamo"
              escBot.innerHTML = `bot escolheu ${randomElement}!`;
              console.log("empate");
              break;
          case 'pedrape':
          resultado.innerHTML = "empatamo"
              escBot.innerHTML = `bot escolheu ${randomElement}!`;
              console.log("empate");
              break;
          case 'papelpa':
              resultado.innerHTML = "empatamo"
              escBot.innerHTML = `bot escolheu ${randomElement}!`;
              console.log("empate");
              break;
          case "tesourapa":
          resultado.innerHTML = "perdemo"
              escBot.innerHTML =  `bot escolheu ${randomElement}!`;
              console.log("perda");
              break;
          case "pedrate":
          resultado.innerHTML = "perdemo"
              escBot.innerHTML =  `bot escolheu ${randomElement}!`;
              console.log("perda");
              break;
          case "papelpe":
          resultado.innerHTML = "perdemo"
              escBot.innerHTML =  `bot escolheu ${randomElement}!`;
              console.log("perda");
              break;
              
          case 'tesourape':
          resultado.innerHTML = "ganhamo"
               escBot.innerHTML = `bot escolheu ${randomElement}!`;
               console.log("ganha")
               break;
          case 'pedrapa':
          resultado.innerHTML = "ganhamo"
               escBot.innerHTML = `bot escolheu ${randomElement}!`;
               console.log("ganha")
               break;
          case 'papelte':
               resultado.innerHTML = "ganhamo"
               escBot.innerHTML = `bot escolheu ${randomElement}!`;
               console.log("ganha")
               break;
               default: 

}
}