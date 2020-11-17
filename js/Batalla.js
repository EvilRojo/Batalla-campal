export class Batalla {
    /** @param {string} posicion */
    verPos(posicion) {
        const soldados = ["1,1"];
        soldados.forEach(explosion);
        
        function explosion(item) {
            if(posicion===item){
                document.getElementById(`salida${posicion}`).src="img/tumba.jpg"
            }else{
                document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
            }
        }
    }
  }