	var buttons=document.getElementsByTagName('button');
	var audios=document.getElementById('audio');
	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick=function(){
			audios.src=this.value;
			audios.play();

		}
	}

