export class Batalla {
    /** @param {string} posicion */
    verPos(posicion) {
        document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
        const soldados = ["1,1", "1,3", "1,5"];
        soldados.forEach(explosion);
        function explosion(item) {
            if(posicion===item){
                document.getElementById(`salida${posicion}`).src="img/tumba.jpg"
            }
        }
    }
  }