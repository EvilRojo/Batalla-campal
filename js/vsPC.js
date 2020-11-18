export class Batalla {
    /** @param {string} posicion */
        
        verPos(posicion) {
            var x="A";
            document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
            const soldados=["1,1", "3,7", "1,6","9,9","9,2","3,6","5,9","8,6","4,8","2,3","1,8","6,9","3,1","4,4","8,2","7,4","6,4","4,6","5,7","2,4"];
            soldados.forEach(explosion);
            this.bloqueo(x);
            function explosion(item) {
                if(posicion===item){
                    document.getElementById(`salida${posicion}`).src="img/tumba.jpg"
                }
            }
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
    }