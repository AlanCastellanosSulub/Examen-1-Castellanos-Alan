var MPersonajes=["Gary","El Kevin"];
var Datos=["Alan de Jesus Castellanos Sulub","17390319"];
var MPeliculas=["Titanes del Pacifico","Primeval(2007)","Fate/stay night: Heaven's Feel","Jurassic World"];

function AddPerF(){
    var contenido = document.createTextNode("- "+document.getElementById("PerF").value);
    var parrafo = document.createElement("p");
    var padre = document.getElementById("p3");
    
    parrafo.appendChild(contenido);
    padre.appendChild(parrafo);
    document.getElementById("Form1").reset();
}