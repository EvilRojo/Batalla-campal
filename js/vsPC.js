export class Batalla {
    /** @param {string} posicion */
    /** @param {number} numero */

        
        verPos(posicion, numero, numero2) {
            var x="A";
            const cord=this.IA();
            document.getElementById(`salida${posicion}`).src="img/pasto.jpg"
            document.getElementById(`alida${cord}`).src="img/pasto.jpg"
            const soldados=this.arr();
            soldados.forEach(explosion);
            this.bloqueo(x);
            function explosion(item) {
                if(posicion===item){
                    document.getElementById(`salida${posicion}`).src="img/tumba.jpg"
                    numero=parseInt(numero)+1;
                }
                if(cord===item){
                    document.getElementById(`alida${cord}`).src="img/tumba.jpg"
                    numero2=parseInt(numero2)+1;
                }
            }
            if(numero>=10){
                numero="Ganaste, Felicidades"
                x="C";
                this.bloqueo(x);
            }
            if(numero2>=10){
                numero2="Gana la PC"
                x="C";
                this.bloqueo(x);
            }
            const contenedor=[numero, numero2];
            return contenedor;
        }

        IA(cordenada){
            cordenada="";
            var x = Math.floor(Math.random() * (11 - 1) + 1);
            var y = Math.floor(Math.random() * (11 - 1) + 1);
            var cordenada = x + "," + y;
            return cordenada;
    
          
        }
        

        bloqueo(Rojo){
            
            for(var i = 0; i < 100; i++){
                var x=1;
                var y=1;
                switch (true){
                    case i<=9:
                        x=x;
                        y=y+i;
                    break;
                    case i>9 && i<=19:
                        x=2;
                        y=y+(i-10);
                    break;
                    case i>19 && i<=29:
                        x=3;
                        y=y+(i-20);
                    break;
                    case i>29 && i<=39:
                        x=4;
                        y=y+(i-30);
                    break;
                    case i>39 && i<=49:
                        x=5;
                        y=y+(i-40);
                    break;
                    case i>49 && i<=59:
                        x=6;
                        y=y+(i-50);
                    break;
                    case i>59 && i<=69:
                        x=7;
                        y=y+(i-60);
                    break;
                    case i>69 && i<=79:
                        x=8;
                        y=y+(i-70);
                    break;
                    case i>79 && i<=89:
                        x=9;
                        y=y+(i-80);
                    break;
                    case i>89 && i<=99:
                        x=10;
                        y=y+(i-90);
                    break;
                }
                if(Rojo=="A"){
                document.getElementById(`salida${x},${y}`).disabled=false;
                document.getElementById(`alida${x},${y}`).disabled=true;
                
                }
                if(Rojo=="C"){
                    document.getElementById(`alida${x},${y}`).disabled=true; 
                    document.getElementById(`salida${x},${y}`).disabled=true;
                }
            }

    }
        arr(arreglo) {
            arreglo=[];
            for (var i = 0; i < 45; i++) {
              var x = Math.floor(Math.random() * (11 - 1) + 1);
              var y = Math.floor(Math.random() * (11 - 1) + 1);
              var f = x + "," + y;
              arreglo.push(f);
          
            }
            return arreglo;
    
          }
    }