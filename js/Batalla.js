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
            document.getElementById(`alida${posicion}`).disabled=true;
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
                for(var i = 0; i < 100; i++){
                    var x=1;
                    var y=1;
                    switch (i){
                        case i<=9:
                            x=x;
                            y=y+i;
                        break;
                        case i<=19:
                            x=2;
                            y=y+(i-10);
                        break;
                        case i<=29:
                            x=3;
                            y=y+(i-20);
                        break;
                        case i<=39:
                            x=4;
                            y=y+(i-30);
                        break;
                        case i<=49:
                            x=5;
                            y=y+(i-40);
                        break;
                        case i<=59:
                            x=6;
                            y=y+(i-50);
                        break;
                        case i<=69:
                            x=7;
                            y=y+(i-60);
                        break;
                        case i<=79:
                            x=8;
                            y=y+(i-70);
                        break;
                        case i<=89:
                            x=9;
                            y=y+(i-80);
                        break;
                        case i<=99:
                            x=10;
                            y=y+(i-90);
                        break;
                    }
                    document.getElementById(`salida${x},${y}`).disabled=true;
                    console.log(x+","+y);
                }
                
                
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