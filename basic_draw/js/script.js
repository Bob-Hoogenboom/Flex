canvas1 = document.getElementById('canvas1');
const context = canvas1.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas1.width = width;
canvas1.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C
let ab,bc,ca
let mAB,mBC,mCA
let lAB,lBC,lCA
let circumCenter

ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ca = new LinearFunction(1,1);

mAB = new Point(200,200,5,"white",false);
mBC = new Point(400,500,5,"white",false);
mCA = new Point(600,200,5,"white",false);

lAB = new LinearFunction(1,1);
lBC = new LinearFunction(1,1);
lCA = new LinearFunction(1,1);

A = new Point(200,100,10,"red",false,"A");
B = new Point(400,400,10,"blue",false,"B");
C = new Point(600,100,10,"green",false,"C");

circumCenter = new Point(50,50,5,"grey",false);

function anime(XY){

  console.log(XY);
  context.clearRect(0,0,width,height);
  context.fillStyle = "rgba(0,255,0,0.4)";
  context.beginPath();
  context.moveTo(XY.x,XY.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);
  context.closePath();
  context.stroke();
  context.fill();


  A.draw(context);
  B.draw(context);
  C.draw(context);


  ab.slope =(B.y - A.y)/(B.x - A.x);
  ab.intercept = B.y - B.x*ab.slope;
  ab.draw(context);

  bc.slope =(C.y - B.y)/(C.x - B.x);
  bc.intercept = C.y - C.x*bc.slope;
  bc.draw(context);

  ca.slope =(A.y - C.y)/(A.x - C.x);
  ca.intercept = A.y - A.x*ca.slope;
  ca.draw(context);

  mAB.x = (A.x + B.x)/2;
  mAB.y = (A.y + B.y)/2;
  mAB.draw(context);

  mBC.x = (B.x + C.x)/2;
  mBC.y = (B.y + C.y)/2;
  mBC.draw(context);

  mCA.x = (C.x + A.x)/2;
  mCA.y = (C.y + A.y)/2;
  mCA.draw(context);


  lAB.slope = -1/ab.slope;
  lAB.intercept = mAB.y -mAB.x*lAB.slope;
  lAB.draw(context);

  lBC.slope = -1/bc.slope;
  lBC.intercept =mBC.y -mBC.x*lBC.slope;
  lBC.draw(context);

  lCA.slope = -1/ca.slope;
  lCA.intercept =mCA.y -mCA.x*lCA.slope;
  lCA.draw(context);

  circumCenter.x = lAB.intersection(lBC).x;
  circumCenter.y = lAB.intersection(lBC).y;
  circumCenter.draw(context);

  let dx = circumCenter.x -A.x;
  let dy = circumCenter.y -A.y;
  distance = Math.sqrt(dx*dx + dy*dy);

  context.beginPath();
  context.arc(circumCenter.x,circumCenter.y,distance,0,2*Math.PI);
  context.stroke();

}
setInterval(anime,10)
