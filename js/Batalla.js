import { soldad} from "/soldad.js";
export class Batalla {
    /** @param {string} posicion */
    verPos(posicion) {
        document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
        const soldados = [];
        soldados=soldad;
        soldados.forEach(explosion);
        function explosion(item) {
            if(posicion===item){
                document.getElementById(`salida${posicion}`).src="img/tumba.jpg"
            }
        }
    }
    verPos2(posicion) {
        document.getElementById(`alida${posicion}`).src="img/pasto.jpg"
        
        soldados.forEach(explosion);
        function explosion(item) {
            if(posicion===item){
                document.getElementById(`alida${posicion}`).src="img/tumba.jpg"
            }
        }
    }
  }