export class Batalla {
    /** @param {string} posicion */
    /** @param {number} numero */
        
        verPos(posicion, numero) {
            var x="A";
            document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
            document.getElementById(`salida${posicion}`).disabled=true;
            const soldados=this.arr();
            soldados.forEach(explosion);
            this.bloqueo(x);
            function explosion(item) {
                if(posicion===item){
                    document.getElementById(`salida${posicion}`).src="img/tumba.jpg"
                    numero=parseInt(numero)+1;
                }
            }
            if(numero>=20){
                numero="Ganaste, Felicidades"
            }
            return numero;
        }
        verPos2(posicion, numero) {
            var x="B";
            document.getElementById(`alida${posicion}`).src="img/pasto.jpg"
            document.getElementById(`salida${posicion}`).disabled=true;
            const soldados=this.arr();
            soldados.forEach(explosion);
            this.bloqueo(x);
            function explosion(item) {
                if(posicion===item){
                    document.getElementById(`alida${posicion}`).src="img/tumba.jpg"
                    numero=parseInt(numero)+1;
                }
            }
            if(numero>=20){
                numero="Ganaste, Felicidades"
            }
            return numero;
        }

        bloqueo(x){
            if(x=="A"){
                document.getElementById(`w1`).disabled=true;
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