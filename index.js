/*Zona de transiciones (aunque parezca complicada es prácticamente copiar y pegar)*/
/*Necesito que sea global por lo que un let no sirve pero va a almacenar un valor que no va a cambiar, por tanto const es lo mejor*/
const elementoTzeentch = document.getElementById("Tzeentch");
const elementoKhorne = document.getElementById("Khorne");
const elementoNurgle = document.getElementById("Nurgle");
const elementoSlaanesh = document.getElementById("Slaanesh");



function ElegirTzeentch() {
	elementoKhorne.style.transition = "transform 3s ease-in";
	elementoKhorne.style.transform = "rotate(180deg) scale(0.5)";
	
	elementoNurgle.style.transition = "transform 3s ease-in";
	elementoNurgle.style.transform = "rotate(180deg) scale(0.5)";
	
	elementoSlaanesh.style.transition = "transform 3s ease-in";
	elementoSlaanesh.style.transform = "rotate(180deg) scale(0.5)";
};

function ElegirKhorne() {
	elementoTzeentch.style.transition = "transform 3s ease-in";
	elementoTzeentch.style.transform = "rotate(180deg) scale(0.5)";
	
	elementoNurgle.style.transition = "transform 3s ease-in";
	elementoNurgle.style.transform = "rotate(180deg) scale(0.5)";
	
	elementoSlaanesh.style.transition = "transform 3s ease-in";
	elementoSlaanesh.style.transform = "rotate(180deg) scale(0.5)";	
};

function ElegirNurgle() {
	elementoKhorne.style.transition = "transform 3s ease-in";
	elementoKhorne.style.transform = "rotate(180deg) scale(0.5)";
	
	elementoTzeentch.style.transition = "transform 3s ease-in";
	elementoTzeentch.style.transform = "rotate(180deg) scale(0.5)";
	
	elementoSlaanesh.style.transition = "transform 3s ease-in";
	elementoSlaanesh.style.transform = "rotate(180deg) scale(0.5)";
};

function ElegirSlaanesh() {
	elementoKhorne.style.transition = "transform 3s ease-in";
	elementoKhorne.style.transform = "rotate(180deg) scale(0.5)";
	
	elementoTzeentch.style.transition = "transform 3s ease-in";
	elementoTzeentch.style.transform = "rotate(180deg) scale(0.5)";
	
	elementoNurgle.style.transition = "transform 3s ease-in";
	elementoNurgle.style.transform = "rotate(180deg) scale(0.5)";
};


/*Sin estas funciones los cambios son permanentes hasta que se recargue la página, algo inadecuado porque el raton se te puede escapar mucho y posar el raton por accidente*/
function DejarTzeentch() {
	/*Si quito tambien la transicion, la fase en la que vuelven a su estado normal es muy seca y no me cuesta nada dejarla*/
	elementoKhorne.style.transition = "transform 3s ease-in";
	elementoKhorne.style.transform = "";
	
	elementoNurgle.style.transition = "transform 3s ease-in";
	elementoNurgle.style.transform = "";
	
	elementoSlaanesh.style.transition = "transform 3s ease-in";
	elementoSlaanesh.style.transform = "";
};

function DejarKhorne() {
	elementoTzeentch.style.transition = "transform 3s ease-in";
	elementoTzeentch.style.transform = "";
	
	elementoNurgle.style.transition = "transform 3s ease-in";
	elementoNurgle.style.transform = "";
	
	elementoSlaanesh.style.transition = "transform 3s ease-in";
	elementoSlaanesh.style.transform = "";	
};

function DejarNurgle() {
	elementoKhorne.style.transition = "transform 3s ease-in";
	elementoKhorne.style.transform = "";
	
	elementoTzeentch.style.transition = "transform 3s ease-in";
	elementoTzeentch.style.transform = "";
	
	elementoSlaanesh.style.transition = "transform 3s ease-in";
	elementoSlaanesh.style.transform = "";
};

function DejarSlaanesh() {
	elementoKhorne.style.transition = "transform 3s ease-in";
	elementoKhorne.style.transform = "";
	
	elementoTzeentch.style.transition = "transform 3s ease-in";
	elementoTzeentch.style.transform = "";
	
	elementoNurgle.style.transition = "transform 3s ease-in";
	elementoNurgle.style.transform = "";
};



/*
	El clásico .(evento) al final de la constante que contiene el ID no funcione con el mouseover
	pero el addEventListener en este caso sigue la misma sintaxis; el evento y la función sin parentesis.

	mouseover equivale al hover del CSS y mouseout a cuando el hover se acaba.
	
	Habia que hacerlo con JavaScript porque era la única manera de dar consecuencias a un elemento por un evento de otro elemento
*/
elementoTzeentch.addEventListener("mouseover", ElegirTzeentch);
elementoKhorne.addEventListener("mouseover", ElegirKhorne);
elementoNurgle.addEventListener("mouseover", ElegirNurgle);
elementoSlaanesh.addEventListener("mouseover", ElegirSlaanesh);

elementoTzeentch.addEventListener("mouseout", DejarTzeentch);
elementoKhorne.addEventListener("mouseout", DejarKhorne);
elementoNurgle.addEventListener("mouseout", DejarNurgle);
elementoSlaanesh.addEventListener("mouseout", DejarSlaanesh);
/*-------------------------------------------------------------------------------------------------*/
