/*
	23-2-2020
	klasse om een tweedimensionale vector mee aan te geven

	eigenschappen
	* dx (verschuiving in de x-richting)
	* dy (verschuiving in de y-richting )
*/

class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    vectorSum(a,b){
      this.dx = a.dx + b.dx;
      this.dy = a.dy + b.dy;
    }

    difVector(a, b){
      this.dx = a.dx - b.dx;
      this.dy = a.dy - b.dy;
    }

    get magnitude(){
      let a = this.dx;
      let b = this.dy;
      return Math.sqrt(a*a + b*b);
    }

    get angle(){
      //return Math.atan(this.dy/this.dx);
      return Math.atan2(this.dy, this.dx);
    }

    draw(x,y,vcolor){
      let color = vcolor || "white";
      let sh = 5;
      let hh = 20;
      let hw = 30;
      let sw = this.magnitude - hw;



      context.save();
      context.beginPath();
      context.fillStyle = color;
      context.translate(x,y);

      context.rotate(this.angle);

      context.moveTo(0,0);
      context.moveTo(0,0);
      context.lineTo(0,sh);
      context.lineTo(sw,sh);
      context.lineTo(sw,hh);
      context.lineTo(sw + hw,0);

      context.lineTo(sw,-hh);
      context.lineTo(sw,-sh);
      context.lineTo(0,-sh);
      context.closePath();
      context.fill();
      context.stroke();
      context.restore();
    }
}
