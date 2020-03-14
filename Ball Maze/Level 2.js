	var wall22Y=330;
	
function drawAll2()
	{
		rect(0,0,canvas.width,canvas.height,'#6E6E6E'); //bg
		circle (ballX,ballY,10,'#00FCFF'); //player
		//walls
		rect(0,0,wall_1_W,canvas.height,'red');
		rect (0,wall22Y,canvas.width-185,canvas.height-wall22Y,'red');
		rect (canvas.width-150,0,260,canvas.height,'red');
		rect(wall_2_X,0,wall_2_W,canvas.height/2-20,'red');
		winCond2();
	}
function collisions2()
	{
		if (ballX-ballR<=wall_1_W)
			ballReset();
		if ((ballX+ballR>=wall_2_X && ballY-ballR<=canvas.height/2-20))
			ballReset();
		if (ballY+ballR>=wall22Y && ballX-ballR<=canvas.width-185)
			ballReset();
		if (ballX+ballR>=canvas.width-150)
			ballReset();
	}
function winCond2()
	{
		if (ballY>=canvas.height-20 && ballX>=canvas.width-185)
		{
			canvasContext.fillStyle='white';
			canvasContext.fillText("AI CASTIGAT! Apasa Click pentru a avansa la nivelul urmator",250,100);
			ballSpeedX=0;
			ballSpeedY=0;
			canvas.addEventListener('click',levelChange3);
		}
	}
function levelChange3()
	{
		win2=true;
		ballX=50;
		ballY=290;
		ballSpeedX=0;
		ballSpeedY=0;
	}
function Restart()
	{
		win1=false;
		win2=false;
	}
