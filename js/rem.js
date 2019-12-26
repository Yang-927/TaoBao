(function(){
	function changeRem(){
		var vw=document.documentElement.clientWidth
		if (vw>768) {vw=768}
		console.log(vw)
		document.documentElement.style.fontSize=vw/10+'px'
		return changeRem;
	}
	window.onresize=changeRem()
})();