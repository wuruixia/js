let user=document.getElementById('user');
let pass=document.getElementById('pass');
let button=document.getElementById('button');
button.onclick=function(){
	if(user.value=='zhangsan'&&pass.value=='123456'){
		user.value.trim();
		pass.value.trim();
		alert('succes');
	}else{
		location.replace('error.html');
	}
}

