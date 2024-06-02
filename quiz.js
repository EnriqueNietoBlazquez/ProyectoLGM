function calcularResultado() {
    /*Zona de establecer contadores*/
	let ContadorTzeentch = 0;
	let ContadorKhorne = 0;
	let ContadorNurgle = 0;
	let ContadorSlaanesh = 0;
	/*-----------------------------*/
 
 
 
    /*Zona de manejo de primera pregunta*/
    let gustoSeleccionado = document.getElementById("Gustos").value;
    
	switch (gustoSeleccionado) {
		case "Slaanesh":
			ContadorSlaanesh++;
			break;
		case "Tzeentch":
			ContadorTzeentch++;
			break;
		case "Khorne":
			ContadorKhorne++;
			break;
		case "Nurgle":
			ContadorNurgle++;
			break;
	}
    /*--------------------------------------------------------------*/
    
	
	
	/*Zona de manejo de segunda pregunta*/
    if (document.getElementById("Voluntad").checked) {
        ContadorSlaanesh++;
        ContadorNurgle++;
    }
	/*--------------------------------------------------------------*/
    
	
	
    /*Zona de manejo de tercera pregunta*/
	/*
		El getElementById suele ser lo más facil pero en el caso del input radio, el queySelector es más facil, 
		de no usarlo requeriria varios if y un id distinto en cada opcion para localizar cual ha sido la opción marcada. 
		
		En este caso está claro el significado de la consulta hecha con querySelector pero hay que decir que
		las comillas no pueden ser del mismo tipo las del principio de la consulta que las que definen el name.
	
		Se obtiene primero el elemento marcado y luego su value, igual que con el getElementById,
		porque si obtenemos el elemento completo, vale que solo habrá uno pero necesitamos el valor de ese elemento concreto, no ese elemento en si mismo
	*/
    let vidaSeleccionada = document.querySelector("input[name='VidaDeseada']:checked").value;
    
	switch (vidaSeleccionada) {
		case "Slaanesh":
			ContadorSlaanesh++;
			break;
		case "Tzeentch":
			ContadorTzeentch++;
			break;
		case "Khorne":
			ContadorKhorne++;
			break;
		case "Nurgle":
			ContadorNurgle++;
			break;
	}
    /*-----------------------------------------------------------------------------------------*/
	
	
	
	/*Zona de manejo de empates*/
	/*Averiguar la puntuación ganadora*/ 
	let maximo = Math.max(ContadorTzeentch, ContadorKhorne, ContadorNurgle, ContadorSlaanesh);

	/*Prepararse para ver que dioses han ganado*/
	let variablesEmpatadas = [];

	/*Ver que dioses han ganado*/
	if (ContadorTzeentch == maximo) {
		variablesEmpatadas.push("Tzeentch");
	}
	
	if (ContadorKhorne == maximo) { 
		variablesEmpatadas.push("Khorne");
	}
	
	if (ContadorNurgle == maximo) { 
		variablesEmpatadas.push("Nurgle");
	}
	
	if (ContadorSlaanesh == maximo) { 
		variablesEmpatadas.push("Slaanesh");
	}
	/*-----------------------------------------------------------------------------------------*/
	
	
	
	/*Zona de salida*/
	if (variablesEmpatadas.length == 1) {
		alert("El dios del que deberias tener cuidado de caer en sus garras es " + variablesEmpatadas[0]);
	} else {
		alert("Hay empate, los dioses de los que deberias tener cuidado de caer en sus garras son los siguientes: \n" + variablesEmpatadas.join("\n"));
	}
}





document.getElementById("BotonAveriguarDios").onclick = calcularResultado;