	//ondragover：被拖放元素在本元素范围内移动时触发的事件
	function allowDrop(ev) 
	{ 
    	ev.preventDefault(); 
	} 
	//ondrop：有其他元素被拖放到了本元素中触发的事件
	function drop(ev){
		ev.preventDefault(); 
		var div1=document.getElementById('div1');
		var f= ev.dataTransfer.files[0];
		var reader = new FileReader();
	    reader.readAsDataURL(f);
	    reader.onload=function(ev){
	    	div1.innerHTML='<img src="'+reader.result+'" width="180px" height="180px" />'
	    }
	}