var mid = 200; // middle on x-axis

var n = 0;
var c = 3;

var points = [];

var start = 0;
var finish = 1597;

function setup() {
createCanvas(400, 400);
}

// Cheat Sheet

// ellipse(x,y,w,[h])

// arc(a,b,c,d,start,stop,[mode])
// QUARTER_PI, HALF_PI, PI, TWO_PI
// OPEN, CHORD, PIE

/*
beginShape();
curveVertex(84,  91);
curveVertex(84,  91);
curveVertex(68,  19);
curveVertex(21,  17);
curveVertex(32, 100);
curveVertex(32, 100);
endShape();
*/

// line(x1,y1,x2,y2)

function draw(){
  background(0,0,0); // black background

  translate(width / 2, height / 2);
  rotate(n * 0.3*PI/180);

  for (var i = 0; i < start; i++) {
    var a = i * 137.5 * PI/180;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);

    //fill(255,255,100); // yellow tone (r,g,b) values
    //fill(255,20,255); // purple tone (r,g,b) values
    //fill(100,150,255); // blue-ish tone (r,g,b) values
    fill(255,255,255); // white tone (r,g,b) values
    noStroke();
    ellipse(x, y, 3);
  }

// draw Bodhisattva prep:

rotate(-n * 0.3*PI/180);
translate(-width / 2, -height / 2);

translate(0, 28);

rectMode(CENTER);

// Position is Centered
// Now Let's Animate a Hovering Effect

x = floor(5 * sin(n/5.0*PI/180.0))
y = floor(8 * cos(2*n/5.0*PI/180.0))

translate(x,y);

// draw Bodhisattva

fill(255-5,224-4,189-3); // shadowed skin tone (r,g,b) values
noStroke();
// strokeCap(ROUND); // this is default (also see: SQUARE)

// Body
rect(mid, 145, 20, 100); // neck
ellipse(mid, 200, 60); // belly
ellipse(mid-10, 175, 30); // left shoulder
ellipse(mid+10, 175, 30); // right shoulder

// Ears
ellipse(mid-25,130,12); // top-left (ear-bridge)
ellipse(mid+25,130,12); // top-right (ear-bridge)
ellipse(mid-24,138,12,25); // bottom-left (ear-bridge)
ellipse(mid+24,138,12,25); // bottom-right (ear-bridge)

// Color Change
fill(255,224,189); // skin tone (r,g,b) values

// Head
ellipse(mid, 115, 60); // top circle
ellipse(mid, 130, 50); // bottom circle

// Color Change
strokeWeight(2); // line thickness
stroke(255-75,224-75,189-75); // olive skin tone (r,g,b) values

// Eyes`
arc(mid-12,125,12,10,0,PI,OPEN);
arc(mid+12,125,12,10,0,PI,OPEN);

// Mouth
arc(mid,140,15,10,0,PI,OPEN);

// Color Change
noStroke();
fill(255,0,0); // red tone (r,g,b) values

// Head Dots
ellipse(mid-6,115,4); // bottom-left dot
ellipse(mid+6,115,4); // bottom-right dot
ellipse(mid-6,108,4); // mid-left dot
ellipse(mid+6,108,4); // mid-right dot
ellipse(mid-6,101,4); // top-left dot
ellipse(mid+6,101,4); // top-right dot

// Color Change
fill(255,224,189); // skin tone (r,g,b) values

// Legs
ellipse(mid-40, 225, 40); // left knee
ellipse(mid+40, 225, 40); // right knee

// Feet
ellipse(mid-45, 242, 20);
ellipse(mid+45, 242, 20);

// Color Change
fill(244,196,48); // saffron color (r,g,b) values

// Robe (Legs)
ellipse(mid-40, 225, 40); // left knee
ellipse(mid+40, 225, 40); // right knee
ellipse(mid,232,100,42); // middle cloth

// Robe Detail (Legs)

// Color Change
strokeWeight(10); // line thickness
stroke(244,196,48); // saffron color (r,g,b) values

// Robe (Body)
bezier(mid+16,165,mid+30,188-3,mid+24,188+10,mid-22,212); // over-shoulder
ellipse(mid+18, 200, 20, 20); // right side

// Robe Detail (Body)

// Color Change
noFill();
stroke(255,224,189); // skin tone (r,g,b) values

// Arms
bezier(mid-22,168,mid-40,188-3,mid-34,188+10,mid-0,212); // left
bezier(mid+22,168,mid+40,188-3,mid+34,188+10,mid+0,212); // right

// Hands

// Robe ()

// Robe Detail ()

// UPDATE LOOP VALUES
if (start < finish){
  start += 5;
}
  else{
  // Do Nothing
  }

n += 5;
}
