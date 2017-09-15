
let miao=document.getElementById('miao');
window.onload=function(){
let t=setInterval(function(){
	if(miao.innerText<=0){
      clearInterval(t);
      location.replace('index.html');
	}
	miao.innerText-=1;
},1000)
}
	

	
	
