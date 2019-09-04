 	var divs = ["facVan", "facKir", "facDva", "facAma", "facSyn", "facAss","weaBio","weaLas","weaFir","weaArc" ,"weaExp" ,"weaPsi" ];
    var visibleDivId = null;
	
	function showhide() {
	  var i, divId, div;
	  for(i = 0; i < divs.length; i++) {
		divId = divs[i];
		div = document.getElementById(divId);
		if(visibleDivId === divId) {
		  div.style.display = "block";
		} else {
		  div.style.display = "none";
		}
	  }

		for (var i = 0; i < arguments.length; i++) {
			var e = document.getElementById(arguments[i]);
			e.style.display = (e.style.display == 'block') ? 'none' : 'block';
		}
		

	}
	
	
	var divs2 = ["secSyn","secCel","secPsy" ,"secXen" ,"secPro","secVoi" ];
    var visibleDivId = null;
	
	function showhide2() {
	  var i, divId, div;
	  for(i = 0; i < divs2.length; i++) {
		divId = divs2[i];
		div = document.getElementById(divId);
		if(visibleDivId === divId) {
		  div.style.display = "block";
		} else {
		  div.style.display = "none";
		}
	  }

		for (var i = 0; i < arguments.length; i++) {
			var e = document.getElementById(arguments[i]);
			e.style.display = (e.style.display == 'block') ? 'none' : 'block';
		}
		

	}

	
	
	
	

	function changeFaction(linkid)
		{
				document.getElementById('faction1').style.fontWeight = 'normal';
				document.getElementById('faction2').style.fontWeight = 'normal';
				document.getElementById('faction3').style.fontWeight = 'normal';
				document.getElementById('faction4').style.fontWeight = 'normal';
				document.getElementById('faction5').style.fontWeight = 'normal';
				document.getElementById('faction6').style.fontWeight = 'normal';
				
				document.getElementById('faction1').style.color='#A5C3D3';
				document.getElementById('faction2').style.color='#A5C3D3';
				document.getElementById('faction3').style.color='#A5C3D3';
				document.getElementById('faction4').style.color='#A5C3D3';
				document.getElementById('faction5').style.color='#A5C3D3';
				document.getElementById('faction6').style.color='#A5C3D3';
				
				
				
				document.getElementById(linkid).style.fontWeight = 'bold';
				document.getElementById(linkid).style.color='#FFFFFF';
		}

	function changeSecret(linkid)
		{
				document.getElementById('secret1').style.fontWeight = 'normal';
				document.getElementById('secret2').style.fontWeight = 'normal';
				document.getElementById('secret3').style.fontWeight = 'normal';
				document.getElementById('secret4').style.fontWeight = 'normal';
				document.getElementById('secret5').style.fontWeight = 'normal';
				document.getElementById('secret6').style.fontWeight = 'normal';

				
				document.getElementById('secret1').style.color='#A5C3D3';
				document.getElementById('secret2').style.color='#A5C3D3';
				document.getElementById('secret3').style.color='#A5C3D3';
				document.getElementById('secret4').style.color='#A5C3D3';
				document.getElementById('secret5').style.color='#A5C3D3';
				document.getElementById('secret6').style.color='#A5C3D3';

				
				document.getElementById(linkid).style.fontWeight = 'bold';
				document.getElementById(linkid).style.color= '#FFFFFF';
		}


function changeSize()
{
document.getElementById('dragdiv').style.width = window.innerWidth - 105 ;

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	
	 document.getElementById('rightdiv').style.right='-50px' ;
	 
	}


}
