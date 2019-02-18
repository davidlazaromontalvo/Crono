var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var contA=0;
var contB=0;
var vueltasA = [];
var vueltasB = [];
function inicio () {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = false;
	document.getElementById("lapA").disabled = false;
	document.getElementById("lapB").disabled = false;
}
function parar () {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
	document.getElementById("lapA").disabled = true;
	document.getElementById("lapB").disabled = true;
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	cont=0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
	document.getElementById("lapA").disabled = true;
	document.getElementById("lapB").disabled = true;
	location.reload();
}
function exportar () {
	var fso = CreateObject("Scripting.FileSystemObject");  
    var s = fso.CreateTextFile("D:/test.txt", True);
    s.writeline("LAPS A");
    for(var i=0; 1 < vueltasA.length; i++)
    {
    	s.writeline(vueltasA[i] + "\n");
    }
    s.writeline("LAPS B");
    for(var i=0; 1 < vueltasA.length; i++)
    {
    	s.writeline(vueltasA[i] + "\n");
    }
    s.Close();
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}
function lapA(){
	var h = new Date();
	contA++;
	var currentdate = new Date(); 
	var datetime =  currentdate.getHours() + ":"  
                	+ currentdate.getMinutes() + ":" 
                	+ currentdate.getSeconds();
	var t = horas+":"+minutos+":"+segundos+":"+centesimas;
	vueltasA.push([t]);
	var insCont = document.getElementById('indexA');
	insCont.innerHTML += "<ul class='stcol'>"+contA+"</ul>"
	var insHora = document.getElementById('horaA');
	insHora.innerHTML += "<ul class='stcol'>"+datetime+"</ul>"
	var insLap = document.getElementById('vueltaA');
	//insLaps.innerHTML += "<li>"+vueltas[vueltas.length-1][0]+":"+vueltas[vueltas.length-1][1]+":"+vueltas[vueltas.length-1][2]+":"+vueltas[vueltas.length-1][3]+"</li>";
	//insLaps.innerHTML += "<div class='row'><div class='column'>"+cont+"</div><div class='column'>"+vueltas[vueltas.length-1][0]+":"+vueltas[vueltas.length-1][1]+":"+vueltas[vueltas.length-1][2]+":"+vueltas[vueltas.length-1][3]+"</div><div class='column'>"++"</div></div>"
	insLap.innerHTML += "<ul class='stcol'>"+vueltasA[vueltasA.length-1][0]+"</ul>"
}
function lapB(){
	var h = new Date();
	contB++;
	var currentdate = new Date(); 
	var datetime =  currentdate.getHours() + ":"  
                	+ currentdate.getMinutes() + ":" 
                	+ currentdate.getSeconds();
	var t = horas+":"+minutos+":"+segundos+":"+centesimas;
	vueltasB.push([t]);
	var insCont = document.getElementById('indexB');
	insCont.innerHTML += "<ul class='stcol'>"+contB+"</ul>"
	var insHora = document.getElementById('horaB');
	insHora.innerHTML += "<ul class='stcol'>"+datetime+"</ul>"
	var insLap = document.getElementById('vueltaB');
	//insLaps.innerHTML += "<li>"+vueltas[vueltas.length-1][0]+":"+vueltas[vueltas.length-1][1]+":"+vueltas[vueltas.length-1][2]+":"+vueltas[vueltas.length-1][3]+"</li>";
	//insLaps.innerHTML += "<div class='row'><div class='column'>"+cont+"</div><div class='column'>"+vueltas[vueltas.length-1][0]+":"+vueltas[vueltas.length-1][1]+":"+vueltas[vueltas.length-1][2]+":"+vueltas[vueltas.length-1][3]+"</div><div class='column'>"++"</div></div>"
	insLap.innerHTML += "<ul class='stcol'>"+vueltasB[vueltasB.length-1][0]+"</ul>"
}
