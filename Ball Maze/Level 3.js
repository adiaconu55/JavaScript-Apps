

var barX=385;
var barSpeedX=-5;

function drawAll3()
	{
		barX+=barSpeedX;
		//bg
		rect(0,0,canvas.width,canvas.height,'#6E6E6E');
		//player
		circle (ballX,ballY,10,'#00FCFF');
		//walls
		rect(0,315,canvas.width,canvas.height-10,'red'); //jos
		rect(0,0,canvas.width/4,canvas.height/2-35,'red'); //sus stanga
		rect(canvas.width/4,0,canvas.width/4+200,canvas.height/2-80,'red'); //sus mijloc
		rect(2*(canvas.width/4+100),0,canvas.width/4+70,canvas.height/2-35,'red'); //sus dreapta
		rect(barX,canvas.height/2-35,15,50,'red'); //bar
		winCond3();
	}
function collisions3()
	{
			if(barX<=canvas.width/4 || barX>=2*(canvas.width/4+100))
				barSpeedX=-barSpeedX;

			if(ballY+ballR>=315)
				ballReset3();
			if(ballX-ballR<=canvas.width/4 && ballY-ballR<=canvas.height/2-35 || ballX-ballR<=canvas.width/4 && ballY-ballR<=canvas.height/2-35)
				ballReset3();
			if(ballY-ballR<=canvas.height/2-80)
				ballReset3();
			if(ballX+ballR>=2*(canvas.width/4+100) && ballY-ballR<=canvas.height/2-35 || ballX+ballR>=2*(canvas.width/4+100)&&ballY-ballR<=canvas.height/2-35)
				ballReset3();
			if (ballY+ballR>=canvas.height/2-35 && (ballX+ballR>=barX && ballX-ballR<=barX+15))
				ballReset3();
	}
function winCond3()
	{
		if (ballX>=canvas.width-30)
		{
			canvasContext.fillStyle='white';
			canvasContext.fillText("AI CASTIGAT! Apasa Click pentru a restarta",300,100);
			ballSpeedX=0;
			ballSpeedY=0;
			canvas.addEventListener('click',Restart);
		}
	}
function ballReset3()
	{
		ballX=50;
		ballY=290;
		ballSpeedX=0;
		ballSpeedY=0;
	}