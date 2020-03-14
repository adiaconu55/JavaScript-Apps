var aiX=20;
var aiY=50;
var aiSpeed=2;
var hit=false;

function AI()
	{
		if (aiX<=0 || aiX+playerW>=canvas.width)
			aiSpeed=-aiSpeed;
		else
		{
			if (aiX==playerX-50 && aiX<playerX)
				aiSpeed=-aiSpeed;
			if (aiX==playerX+50&& aiX<playerX)
				aiSpeed=-aiSpeed;
		}
			
		
	}
function AICharacter()
	{
		rect(aiX,aiY,playerW,15,'white');
		rect(aiX,aiY-7,10,29,'white');
		rect(aiX+playerW-10,aiY-7,10,29,'white');
	}
function collision()
	{
		if (shootX >=aiX && shootX<=aiX+playerW && shootY<=aiY)
		{hit=true; fire=false}
	}
function win()
	{
		canvasContext.fillText('AI CASTIGAT! Apasa click pentru a restarta.',350,100);
		canvas.addEventListener('click',Restart);
	}
function Restart(evt)
	{
		hit=false;
		playerX=360;
        playerY=560;
	}