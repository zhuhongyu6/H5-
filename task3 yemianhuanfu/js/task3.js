var color=document.getElementById('color');
var divs=color.getElementsByTagName('div');
var txt=document.getElementById('txt');

for(var i=0;i<divs.length;i++){
	divs[i].onclick=function(){
		var last=window.localStorage.getItem(window.txt.id);
		var lasts=document.getElementById(last);
		lasts.style.marginTop='8px';
		this.style.marginTop='-8px';
		txt.style.backgroundColor=this.style.backgroundColor;
		localStorage.setItem(window.txt.id,txt.style.backgroundColor);
	}
}

window.onload=function(){
		this.txt.style.backgroundColor=this.localStorage['txt'];
		document.getElementById(window.localStorage.getItem(window.txt.id)).style.marginTop='-8px';
		console.log(document.getElementById(window.localStorage.getItem(window.txt.id)).style.marginTop)
		
}

