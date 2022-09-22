
btnGuardarPalabra.onclick = guardarPalabraUsuario;
btnNuevoJuegoUs.onclick = jugarNuevo;
btnCancelar.onclick = cancelar;
btnDesistirUs.onclick = desistirUsuario;

function guardarPalabraUsuario(){

    aciertos = 0;
    errores = 0;
    imagen.src = `imagenes/horca/0.png`;
    resultadoUs.innerHTML = '';
    resultadoUs.value = '';
    msjVictoria.innerHTML = '';
    msjDerrota.innerHTML = '';

    if(ingresaPalabraNueva.value.toUpperCase().length <= 8){
    
        ingresaPalabraNueva.style.display = 'none';
        texto1.style.display = 'none';
        btnGuardarPalabra.style.display = 'none';
        btnCancelar.style.display = 'none';
        imgVictoria.style.display = 'none';

        resultadoUs.style.display = 'inline-block';
        btnNuevoJuegoUs.style.display = 'inline-block';        
        btnDesistirUs.style.display = 'inline-block';
        imagen.style.display = 'inline-block';

        console.log(ingresaPalabraNueva.value.toUpperCase());

        palabraOculta = ingresaPalabraNueva.value.toUpperCase().length;

        resultadoUs.value = '';

        for(i=0; i < palabraOculta; i++){

            let span = document.createElement('span');
            resultadoUs.appendChild(span);

        }
        
        document.addEventListener('keyup' , verificaLetraUsuario);

    } else {

        alert('La palabra tiene más de 8 letras, ingrese otra con menos letras!');

    }    
    spanMalas(); 

} 


function verificaLetraUsuario(event) {
    
    letra = event.key.toUpperCase();
    console.log(letra);

    palabraOculta = ingresaPalabraNueva.value.toUpperCase();

    let espacios = document.querySelectorAll('.palabraAdivinarUsuario span');

    let verErradas = document.querySelector('.letras-erradas span');

    let acerto = false;

    for(i=0; i < palabraOculta.length; i++){

        if(letra == palabraOculta[i]){

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

    mostrarMensajeDerrota();
    mostrarMensajeVictoria();

}

function mostrarMensajeDerrota(){

    if (errores == 9){

        msjDerrota.innerHTML = 'Perdiste, la palabra oculta era: ' + ingresaPalabraNueva.value.toUpperCase();
        imagen.src.disabled = true;
        bloqueaTeclado();
        
    }

}

function mostrarMensajeVictoria(){

    if (aciertos == ingresaPalabraNueva.value.toUpperCase().length){

        msjVictoria.innerHTML = 'Haz ganado!! Adivinaste la palabra';
        imagen.src.disabled = true;
        imgVictoria.style.display = 'inline-block';
        bloqueaTeclado();

    }

}

function spanMalas(){

    let spanError = document.createElement('span');     
            
    letrasErradas.appendChild(spanError);

}

function bloqueaTeclado(){

    document.removeEventListener('keyup', verificaLetraUsuario);

}

function jugarNuevo(){

    ingresaPalabraNueva.style.display = 'inline-block';
    texto1.style.display = 'inline-block';
    btnGuardarPalabra.style.display = 'inline-block';
    btnCancelar.style.display = 'inline-block';
    
    resultadoUs.style.display = 'none';
    btnNuevoJuegoUs.style.display = 'none';        
    btnDesistirUs.style.display = 'none';
    imagen.style.display = 'none';
    msjVictoria.innerHTML = '';
    imgVictoria.style.display = 'none';
    letrasErradas.innerHTML = '';
    msjDerrota.innerHTML = '';
    ingresaPalabraNueva.value = '';
    resultadoUs.innerHTML = '';

}

function cancelar(){

    ingresaPalabraNueva.style.display = 'none';
    ingresaPalabraNueva.value = '';
    texto1.style.display = 'none';
    letrasErradas.innerHTML = '';
    btnGuardarPalabra.style.display = 'none';
    btnCancelar.style.display = 'none';
    btnIniciarJuego.style.display = 'inline-block';
    btnAgregarPalabraSec.style.display = 'inline-block';

}

function desistirUsuario(){

    btnIniciarJuego.style.display = 'inline-block';
    btnAgregarPalabraSec.style.display = 'inline-block';
    msjVictoria.innerHTML = '';
    imgVictoria.style.display = 'none';
    letrasErradas.innerHTML = '';
    msjDerrota.innerHTML = '';
    imagen.style.display = 'none';
    resultadoUs.innerHTML = '';
    btnNuevoJuegoUs.style.display = 'none';
    btnDesistirUs.style.display = 'none';
    ingresaPalabraNueva.value = '';
    bloqueaTeclado();
}