export class nuevosol {
    /** @param {string} modo */
    /** @param {Array} soldados*/
    
    selecmo(modo){
        const soldados = [];
        for(var i = 0; i < 25; i++){
            var x=Math.floor(Math.random() * (11 - 1) + 1);
            var y=Math.floor(Math.random() * (11 - 1) + 1);
            var f=x+","+y;
            soldados.push(f);

        }
        soldados.forEach(explosion);
        function explosion(item) {
            console.log(item);
        }
        //location.href ="juego.html";
    }
  }