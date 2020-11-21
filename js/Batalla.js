export class Batalla {
    /** @param {string} posicion */
    /** @param {number} numero */
        
        verPos(posicion, numero) {
            var x="A";
            document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
            const soldados=this.arr();
            soldados.forEach(explosion);
            this.bloqueo(x);
            function explosion(item) {
                if(posicion===item){
                    document.getElementById(`salida${posicion}`).src="img/tumba.jpg"
                    numero=numero+1;
                }
            }
            return numero
        }
        verPos2(posicion) {
            var x="B";
            document.getElementById(`alida${posicion}`).src="img/pasto.jpg"
            const soldados=["1,5", "3,4", "5,6","8,7","9,3","7,7","5,8","7,1","9,4","9,8","5,8","2,2","4,3","7,5","6,3","3,5","1,9","8,2","6,1","5,3"];
            soldados.forEach(explosion);
            this.bloqueo(x);
            function explosion(item) {
                if(posicion===item){
                    document.getElementById(`alida${posicion}`).src="img/tumba.jpg"
                }
            }
        }

        bloqueo(x){
            if(x=="A"){
                x="B";
            }else{
                x="A";
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