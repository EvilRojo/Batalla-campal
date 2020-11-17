export class Batalla {
    /** @param {string} posicion */
    verPos(posicion) {
        if(posicion==="1,1"){
            document.getElementById(`salida${posicion}`).src="img/tumba.jpg"
        }else{
            document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
        }
    }
  }