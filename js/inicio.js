export class nuevosol {
    /** @param {string} modo */
    selecmo(modo){
        location.href ="juego.html";
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
      paso(soldadosu){
          return soldadosu;
      }
}