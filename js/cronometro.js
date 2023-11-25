/* 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
 */

let tiempoDeEspera;
let tiempoDeInicio = false;
let hora = 0
let minuto = 0
let segundo = 0 

const iniciar = ()=>{
  console.log('inicia el cronometro')
  if(!tiempoDeInicio ){
    tiempoDeInicio = true;
    tiempoDeEspera = setInterval(actualizarTiempo, 1000)
  }
}

const actualizarTiempo = () =>{
  segundo++
 // console.log(segundo);
  if(segundo>=60){
    segundo = 0;
    minuto++;
    console.log(minuto);
    if(minuto >= 60){
      minuto = 0;
      hora++;
    }
  }
}

