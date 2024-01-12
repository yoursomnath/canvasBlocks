let c = document.getElementById("canvas");


c.height = window.innerHeight;
c.width = window.innerWidth;



let ctx = c.getContext("2d");
ctx.fillStyle = '#39d353';
    // ctx.fillRect(10,10, 10, 10);
    // ctx.fillRect(25,10, 10, 10);
    // ctx.fillRect(40,10, 10, 10);

function blockMaker(){
  for(let i = 0; i<= window.innerHeight - 20; i+=10){
      let ranR = Math.floor(Math.random()*255);
      let ranG = Math.floor(Math.random()*255);
      let ranB = Math.floor(Math.random()*255);
      if(i=i+5){
          ctx.fillStyle = `rgb(${ranR},${ranG},${ranB})`;
      }
      for(let j = 10; j<= window.innerWidth - 20; j+=10){
        if(j=j+5){
          ctx.fillRect(j,i,10, 10);
        }
      }
    }
}
setInterval(blockMaker,1000)


