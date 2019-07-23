var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function filledStar(){
  var x=40;
  var y=50;
  var a=75;
  if (x===40){
    context.fillStyle = 'rgba(260, 140, 0,.5)';
    context.strokeStyle='black';
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+a,y);
    context.lineTo(x+x/2/2/2/2,a*0.66+y);
    context.lineTo(x+a*0.5,y-a*0.33);
    context.lineTo(x+(a-x/2/2/2/2),a*0.66+y);
    context.lineTo(x,y);
    context.stroke();
    context.fill();  
  }
  x=130;
  y=120;
  a=100;
  if (x===130){
    context.fillStyle = 'rgba(260, 140, 0,.5)';
    context.strokeStyle='black';
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+a,y);
    context.lineTo(x+x/2/2/2/2,a*0.66+y);
    context.lineTo(x+0.5*a,y-a*0.33);
    context.lineTo(x+(a-x/2/2/2/2),a*0.66+y);
    context.lineTo(x,y);
    context.stroke();
    context.fill();
  }
  x=250;
  y=220;
  a=150;
  if (x===250){
    context.fillStyle = 'rgba(260, 140, 0,.5)';
    context.strokeStyle='black';
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+a,y);
    context.lineTo(x+x/2/2/2/2,a*0.66+y);
    context.lineTo(x+a*0.5,y-a*0.33);
    context.lineTo(x+(a-x/2/2/2/2),a*0.66+y);
    context.lineTo(x,y);
    context.stroke();
    context.fill();
  }
} filledStar();
