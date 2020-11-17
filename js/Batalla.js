export class Batalla {
    /** @param {string} posicion */
    verPos(posicion) {
        switch(posicion){
            case "1,1":
                document.getElementById("salida"+posicion).src="img/tumba.jpg"
            break;
            case "1,2":
                document.getElementById("salida1.2").src="img/tumba.jpg"
            break;
        }

    }
  }