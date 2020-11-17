export class Batalla {
    /** @param {string} posicion */
    verPos(posicion) {
        const soldados = ["1,1", "2,3", "1,5"];
        soldados.forEach(explosion);
        
        function explosion(item, index) {
            if(posicion===item){
                document.getElementById(`salida${posicion}`).src="img/tumba.jpg"
            }else{
                document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
            }
        }
    }
  }