/**
 * Created by jmccommas on 1/1/18 9:51 AM*/

let  output =document.getElementById('output');
let html='<table>';
for (let row=0;row<10; row++){
	
	html+='<tr>';
	for (let col=0;col<2;col++){
		html+='<td> cell='+col+'</td>'
		html+='<tr>';
		
	}
	html+='</tr>'
	
}
html+='</table'
output.innerHTML=html

