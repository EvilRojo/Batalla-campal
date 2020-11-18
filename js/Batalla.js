export class Batalla {
    /** @param {string} posicion */
    
        verPos(posicion) {
            document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
            var x;
            if(x != 1){
                const soldados=this.soldados();
                x=1
            }
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
        soldados() {
            const soldados=[];
            for (var i = 0; i < 25; i++) {
              var x = Math.floor(Math.random() * (11 - 1) + 1);
              var y = Math.floor(Math.random() * (11 - 1) + 1);
              var f = x + "," + y;
              soldados.push(f);
          
            }
            return soldados;
    
          }
    }