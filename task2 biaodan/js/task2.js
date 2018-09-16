function $$(id){
		return document.getElementById(id);
	}
	var lists;
	var len;
	window.onload=function(){
		var objtxt=document.getElementById("regemail");
		var objlist=document.getElementById("maillist");
        lists=objlist.getElementsByTagName("li");
        len=lists.length;
        for(var i=1;i<len;i++){
            lists[i].onmousedown=function(){
                objtxt.value=this.textContent;
                objlist.style.display="none";
            }
        }
        objtxt.onfocus=function(){
            objlist.style.display="block";
        }
        objtxt.onblur=function(){
            objlist.style.display="none";
        }
        objtxt.onkeyup=function(){
            var txt=this.value;
            var flag="";
            if(txt.indexOf("@")>0){
                flag=txt.substring(txt.indexOf("@")-1);
                txt=txt.substring(0,txt.indexOf("@"));
            }else{
                flag="";
            }
            var val="";
            for(var i=1; i<len; i++){
                val=lists[i].textContent;
                val=val.substring(val.indexOf("@"));
                lists[i].textContent=txt+val;
            }
            if(flag!=""){
                var reg=new RegExp(flag,"i");
                for(var i=1;i<len;i++){
                    if(reg.test(lists[i].textContent)){
                        lists[i].style.display="block";
                    }else{
                        lists[i].style.display="none";
                    }
                }
            }
        }
    }
	

console.log(2);