/* 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
 */

let tiempo;
let horas = 0
let minutos = 0
let segundos = 0 

const inicio = ()=>{
    tiempo = setInterval(actualizarTiempo,1000);
    console.log(tiempo)
  }

const pausar = ()=>{
  clearInterval(tiempo);
}

const resetear = () =>{
  clearInterval(tiempo);
  segundos = 0;
  minutos = 0;
  horas = 0;
    
}


const actualizarTiempo = () =>{
  segundos++
 console.log(segundos);
  if(segundos>=60){
    segundos = 0;
    minutos++;
    console.log(minuto);
    if(minutos >= 60){
      minutos = 0;
      horas++;
    }
  }
}



//document.getElementById('tiempo').addEventListener('click', iniciar)

