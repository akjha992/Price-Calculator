var a1=6;
var a2=7;
var a3=8;
var a4=9;
var a5=10;
var a6=11;
var a7=12;
var a8=13;
var a9=14;
var a10=15;
var a11=15.5;

function correct(event){
	var caller_id=event.target.id;
	var res;
	var val=Number(document.getElementById("steam_price").value);
	if(String(val)=="0")
		document.getElementById("offer_price").value="₹ 0";
	else if(String(val)=="NaN")
		document.getElementById("offer_price").value="Enter a valid Number";
	else{
		if(val>0&&val<=100)
			res=val-(val*a1*.01);
		else if(val>100&&val<=200)
			res=val-(val*a2*.01);
		else if(val>200&&val<=300)
			res=val-(val*a3*.01);
		else if(val>300&&val<=400)
			res=val-(val*a4*.01);
		else if(val>400&&val<=500)
			res=val-(val*a5*.01);
		else if(val>500&&val<=600)
			res=val-(val*a6*.01);
		else if(val>600&&val<=700)
			res=val-(val*a7*.01);
		else if(val>700&&val<=800)
			res=val-(val*a8*.01);
		else if(val>800&&val<=900)
			res=val-(val*a9*.01);
		else if(val>900&&val<=1000)
			res=val-(val*a10*.01);
		else
			res=val-(val*a11*.01);
		document.getElementById("offer_price").value="₹ "+res;
	}
}