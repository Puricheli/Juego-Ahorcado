
let btnIniciarJuego = document.querySelector('.boton-iniciarJuego')
let btnAgregarPalabraSec = document.querySelector('.boton-AgregarNueva');
let btnGuardarPalabra = document.querySelector('.boton-guardarEmpezar');
let btnCancelar = document.querySelector('.boton-cancelar');
let btnNuevoJuego = document.querySelector('.boton-nuevoJuego');
let btnDesistir = document.querySelector('.boton-desistir');
let btnNuevoJuegoUs = document.querySelector('.boton-nuevoJuegoUs');
let btnDesistirUs = document.querySelector('.boton-desistirUs');

let ingresaPalabraNueva = document.querySelector('.ingresar-nuevaPalabra');
let texto1 = document.querySelector('.maximo-letras');
let resultado = document.querySelector('.palabraAdivinar');
let resultadoUs = document.querySelector('.palabraAdivinarUsuario');
let imagen = document.querySelector('.imagen-ahorcado');
let msjVictoria = document.querySelector('.mostrarMensajeVictoria');
let msjDerrota = document.querySelector('.mostrarMensajeDerrota');
let imgVictoria = document.querySelector('.img-ganador');
let letrasErradas = document.querySelector('.letras-erradas');


let palabras = ['html','script','futbol','oracle','casa','variable','logica','frontend','linkedin','lapiz','aprendizaje','diseñar','zapato','ballena'];
let palabraOculta;
let palabraSecreta;
let aciertos = 0;
let errores = 0;
let letra;
let sorteo; 
let palabra;
let verErradas; 

btnAgregarPalabraSec.onclick = ocultarInicio;
btnIniciarJuego.onclick = iniciarJuego;
btnNuevoJuego.onclick = iniciarJuego;
btnDesistir.onclick = mostrarInicio;

function ocultarInicio(){

    btnIniciarJuego.style.display = 'none';
    btnAgregarPalabraSec.style.display = 'none'
    btnGuardarPalabra.style.display = 'inline-block';
    btnCancelar.style.display = 'inline-block';
    ingresaPalabraNueva.style.display = 'inline-block';
    texto1.style.display = 'inline-block';
    bloqueaTecla();
    
}

function mostrarInicio(){

    btnIniciarJuego.style.display = 'inline-block';
    btnAgregarPalabraSec.style.display = 'inline-block';
    msjVictoria.innerHTML = '';
    imgVictoria.style.display = 'none';
    letrasErradas.innerHTML = '';
    msjDerrota.innerHTML = '';
    imagen.style.display = 'none';
    resultado.innerHTML = '';
    btnNuevoJuego.style.display = 'none';
    btnDesistir.style.display = 'none';

}

function iniciarJuego(){

    btnIniciarJuego.style.display = 'none';
    btnAgregarPalabraSec.style.display = 'none';
    msjVictoria.innerHTML = '';
    imgVictoria.style.display = 'none';
    letrasErradas.innerHTML = '';
    msjDerrota.innerHTML = '';

    sorteo = Math.floor(Math.random()*palabras.length);
    palabra = palabras[sorteo];

    console.log(palabra);

    aciertos = 0;
    errores = 0;
    imagen.src = `imagenes/horca/0.png`;
        
    resultado.style.display = 'inline-block';
    btnNuevoJuego.style.display = 'inline-block';
    btnDesistir.style.display = 'inline-block';
    imagen.style.display = 'inline-block';
    resultado.innerHTML = '';
    
    console.log(palabra.toUpperCase());
    
    palabraRandom = palabra.toUpperCase().length;

        for(i=0; i < palabraRandom; i++){
    
        let span = document.createElement('span');
        resultado.appendChild(span);
    
        }
    
    document.addEventListener('keyup' , verificaLetra);
    spanMalas(); 
        
} 

function verificaLetra(event) {
    
    letra = event.key.toUpperCase();
    console.log(letra);

    palabraSecreta = palabra.toUpperCase();

    let espacios = document.querySelectorAll('.palabraAdivinar span');

    verErradas = document.querySelector('.letras-erradas span');

    let acerto = false;

    for(i=0; i < palabraSecreta.length; i++){

        if(letra == palabraSecreta[i]){

            espacios[i].innerHTML = letra;
            acerto = true;
            aciertos++;
            
        } 

    }
        if(acerto == false){

            verErradas.innerHTML = letra;
            console.log('No presiono la letra correcta');
            errores++;
            imagen.src = `imagenes/horca/${errores}.png`;
            
            
        }

    verMensajeDerrota();
    verMensajeVictoria();

}

function verMensajeDerrota(){

    palabraSecreta = palabra.toUpperCase();

    if (errores == 9){

        msjDerrota.innerHTML = 'Perdiste, la palabra oculta era: ' + palabraSecreta;
        imagen.src.disabled = true;
        bloqueaTecla();
        
    }

}

function verMensajeVictoria(){

    palabraSecreta = palabra.toUpperCase().length;

    if (aciertos == palabraSecreta){

        msjVictoria.innerHTML = 'Haz ganado!! Adivinaste la palabra';   
        imagen.src.disabled = true;
        imgVictoria.style.display = 'inline-block';
        bloqueaTecla();

    }

}

function spanMalas(){

    let spanError = document.createElement('span');     
            
    letrasErradas.appendChild(spanError);

}

function bloqueaTecla(){

    document.removeEventListener('keyup', verificaLetra);

}


