export class Batalla {
    /** @param {string} posicion */
    
        verPos(posicion) {
            document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
            var x=Number;
            const soldados=[];
            soldados=this.arr();
            soldados.forEach(explosion);
            function explosion(item) {
                if(posicion===item){
                    document.getElementById(`salida${posicion}`).src="img/tumba.jpg"
                }
            }
        }
        verPos2(posicion) {
            document.getElementById(`alida${posicion}`).src="img/pasto.jpg"
            const soldados=["1,1", "3,7", "1,6"];
            soldados.forEach(explosion);
            function explosion(item) {
                if(posicion===item){
                    document.getElementById(`alida${posicion}`).src="img/tumba.jpg"
                }
            }
        }
        arr(arreglo) {
            arreglo=[];
            for (var i = 0; i < 25; i++) {
              var x = Math.floor(Math.random() * (11 - 1) + 1);
              var y = Math.floor(Math.random() * (11 - 1) + 1);
              var f = x + "," + y;
              arreglo.push(f);
          
            }
            return arreglo;
    
          }
    }