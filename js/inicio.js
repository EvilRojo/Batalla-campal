export class nuevosol {
    /** @param {string} modo */
    /** @param {Array} soldados*/
    

    selecmo(modo){
        for(i = 0; i < 25; i++){
            var x=Math.random() * (11 - 1) + 1;
            var y=Math.random() * (11 - 1) + 1;
            var f=x+","+y;
            soldados.push(f);

        }
        soldados.forEach(explosion);
        function explosion(item) {
            if(posicion===item){
                console.log(item);
            }
        }
        //location.href ="juego.html";
    }
  }