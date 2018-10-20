var canvas=document.getElementById('canvas');
var txt=canvas.getContext('2d');

function fn(){
	txt.save();
	txt.clearRect(0, 0, 450, 450);
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes(); 
	var s = now.getSeconds();
	h = h >= 12 ? h - 12 : h;
	//绿圈
	txt.beginPath();
	txt.lineWidth=10;
	txt.strokeStyle='greenyellow'
	txt.arc(250,250,200,0,2*Math.PI);
	txt.closePath();
	txt.stroke();

	//黑圈
	txt.translate(250,250);
	for(var i=0;i<60;i++){
		txt.beginPath();
		txt.rotate(6/180*Math.PI);
		txt.fillStyle='black';
		txt.fillRect(170,0,10,3);
	}

	//红圈
	for(var i=1;i<13;i++){
		txt.beginPath();
		txt.rotate(30/180*Math.PI);
		txt.fillStyle='red';
		txt.fillRect(160,0,25,6);
		txt.fillStyle='black';
		txt.fillText(i,0,-140);
	}

	//时针	
	txt.rotate(270*Math.PI / 180);
	txt.beginPath();
	txt.rotate((30 * Math.PI / 180) * (h + m / 60 + s / 3600));
	txt.lineWidth = 8;
	txt.moveTo(0, 0);
	txt.lineTo(110, 0);
	txt.strokeStyle = "purple";
	txt.stroke();
	txt.restore();
	txt.save();
	
	//画分针
	txt.translate(250,250);
	txt.rotate(270*Math.PI / 180);
	txt.beginPath();
	txt.rotate((6 * Math.PI / 180) * (m + s / 60));
	txt.lineWidth = 6;
	txt.moveTo(0, 0);
	txt.lineTo(120, 0);
	txt.strokeStyle = "deeppink";
	txt.stroke();
	txt.restore();
	txt.save();

	//画秒针
	txt.translate(250,250);
	txt.rotate(270*Math.PI / 180);
	txt.beginPath();
	txt.rotate((6 * Math.PI / 180) * s);
	txt.lineWidth = 4;
	txt.moveTo(0, 0);
	txt.lineTo(135, 0);
	txt.strokeStyle = "red";
	txt.stroke();
	txt.restore();
	txt.save();
	
	//中心红圈
	txt.translate(250,250);
	txt.beginPath();
	txt.lineWidth=10;
	txt.strokeStyle='red'
	txt.arc(0,0,5,0,2*Math.PI);
	txt.closePath();
	txt.stroke();
	
	//中心黑圈
	txt.beginPath();
	txt.lineWidth=6;
	txt.strokeStyle='black'
	txt.arc(0,0,3,0,2*Math.PI);
	txt.closePath();
	txt.stroke();

	txt.restore();
}

window.onload = function() {
	//每秒钟绘制一次时钟
	setInterval(fn, 1000);
};

