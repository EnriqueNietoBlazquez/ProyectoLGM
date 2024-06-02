const ID_Zona1 = document.getElementById("Zona1");
var Zona1_Estado = ID_Zona1.style.display;
const ID_Zona2 = document.getElementById("Zona2");
var Zona2_Estado = ID_Zona2.style.display;

function Aparece1() {
    if (Zona1_Estado == "none") {
        ID_Zona1.style.display = "flex";
		ID_Zona2.style.display = "none";
		Zona1_Estado = "flex";
    } else {
		ID_Zona1.style.display = "none";
		Zona1_Estado = "none";
	}
}

function Aparece2() {
    if (Zona2_Estado == "none") {
        ID_Zona2.style.display = "flex";
		ID_Zona1.style.display = "none";
		Zona2_Estado = "flex";
    } else {
		ID_Zona2.style.display = "none";
		Zona2_Estado = "none";
	}
}


document.getElementById("Boton1").onclick = Aparece1;
document.getElementById("Boton2").onclick = Aparece2;



function Formulario() {
	let ID_Formulario = document.getElementById("FormularioDeteccion");
	let Formulario_Estado = ID_Formulario.style.display;

	if (Formulario_Estado == "none") {
        ID_Formulario.style.display = "flex";
    } else {
		ID_Formulario.style.display = "none";
	}
}

document.getElementById("BotonFormulario").onclick = Formulario;