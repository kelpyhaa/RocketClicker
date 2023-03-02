let font;
let clickfx;

let rockets = 1999999999999999;
let rps = 0;

let multiplier = 1;

let frames = 0;

let rocket;

let modelrocketupgrd;
let modelrocketupgrdinfo = [false, 0, 50, 730, 20, 250, 75];
let LMupgrd;
let LMupgrdinfo = [false, 0, 200, 730, 110, 250, 75];
let v2upgrd;
let v2upgrdinfo = [false, 0, 1100, 730, 200, 250, 75];
let saturnvupgrd;
let saturnvupgrdinfo = [false, 0, 12000, 730, 290, 250, 75];
let starshipupgrd;
let starshipupgrdinfo = [false, 0, 150000, 730, 380, 250, 75];
let ionicupgrd;
let ionicupgrdinfo = [false, 0, 1750000, 730, 470, 250, 75];
let skyhookupgrd;
let skyhookupgrdinfo = [false, 0, 18000000, 730, 560, 250, 75];
let moonupgrd;
let moonupgrdinfo = [false, 0, 300000000, 730, 650, 250, 75];
let tardigradeupgrd;
let tardigradeupgrdinfo = [false, 0, 4000000000, 730, 740, 250, 75];
let alienupgrd;
let alienupgrdinfo = [false, 0, 35000000000, 730, 830, 250, 75];
let cloneupgrd;
let cloneupgrdinfo = [false, 0, 95000000000, 730, 920, 250, 75];
let hyperupgrd;
let hyperupgrdinfo = [false, 0, 2000000000000, 730, 1010, 250, 75];
let wormupgrd;
let wormupgrdinfo = [false, 0, 16000000000000, 730, 1100, 250, 75];
let consupgrd;
let consupgrdinfo = [false, 0, 110000000000000, 730, 1190, 250, 75];
let kerbalupgrd;
let kerbalupgrdinfo = [false, 0, 2000000000000000, 730, 1280, 250, 75];


let mars;
let marsmulti = [false, 5000000000];
let prox;
let proxmulti = [false, 900000000000];
let toi;
let toimulti = [false, 1000000000000];
let hd;
let hdmulti = [false, 15000000000000];
let corot;
let corotmulti = [false, 50000000000000];
let k22;
let k22multi = [false, 200000000000000];
let tres;
let tresmulti = [false, 650000000000000];
let k69;
let k69multi = [false, 1200000000000000];

let trail;

let overlay;
let buyoverlay = [];
let multioverlay
let multibuyoverlay = []

let info = " ";
let subinfo = " ";
let owned = " ";

let scroll = 0;
let pscroll = 0;

function preload() {
  font = loadFont("SignikaNegative-Bold.ttf");
  clickfx = loadSound("rocket clicker click_mixdown.mp3")

  rocket = loadImage("rocket.png");

  modelrocketupgrd = loadImage("Model Rocket.png");
  LMupgrd = loadImage("LM.png");
  v2upgrd = loadImage("V-2.png");
  saturnvupgrd = loadImage("saturnv.png");
  starshipupgrd = loadImage("starship.png");
  ionicupgrd = loadImage("Ionic.png");
  skyhookupgrd = loadImage("Skyhook.png");
  moonupgrd = loadImage("Moon.png")
  tardigradeupgrd = loadImage("tardigrade.png")
  alienupgrd = loadImage("alien.png")
  cloneupgrd = loadImage("Clone.png")
  hyperupgrd = loadImage("Hyperdrive.png")
  wormupgrd = loadImage("Wormhole.png")
  consupgrd = loadImage("Consciousness.png")
  kerbalupgrd = loadImage("Kerbal.png")
  
  mars = loadImage("Mars.png")
  prox = loadImage("Alpha.png")
  toi = loadImage("TOI.png")
  hd = loadImage("HD.png")
  corot = loadImage("CoRot.png")
  k22 = loadImage("k22.png")
  tres = loadImage("tres.png")
  k69 = loadImage("k69.png")
  
  trail = loadImage("dots.png")

  overlay = loadImage("overlay.png");
  multioverlay  = loadImage("multioverlay.png")
}

function setup() {
  createCanvas(1000, 600);
  noStroke();
  textAlign(CENTER);
  textFont(font);
  frameRate(60);
}

function draw() {
  background(20);
  
  textSize(50)
  
  image(trail, 450, pscroll + 120, 150, 3000)
  
  //Mars
  image(mars, 360, pscroll + 200, 300, 300)
  text(short(marsmulti[1]), 510, pscroll + 365)
  if (rockets < marsmulti[1] && marsmulti[0] == false) {
    image(multioverlay, 360, pscroll + 200, 300, 300)
  }
  if (multiplier != 2 && marsmulti[0] == true) {
    marsmulti[1] = "uninhabited"
  }
  
  //Proxima Centauri b
  image(prox, 360, pscroll + 600, 300, 300)
  text(short(proxmulti[1]), 510, pscroll + 765)
  if (rockets < proxmulti[1] && proxmulti[0] == false) {
    image(multioverlay, 360, pscroll + 600, 300, 300)
  }
  if (multiplier != 5 && proxmulti[0] == true) {
    proxmulti[1] = "uninhabited"
  }
  
  //TOI 700 b
  image(toi, 360, pscroll + 1000, 300, 300)
  text(short(toimulti[1]), 510, pscroll + 1165)
  if (rockets < toimulti[1] && toimulti[0] == false) {
    image(multioverlay, 360, pscroll + 1000, 300, 300)
  }
  if (multiplier != 10 && toimulti[0] == true) {
    toimulti[1] = "uninhabited"
  }
  
  //HD 209458 b
  image(hd, 360, pscroll + 1400, 300, 300)
  text(short(hdmulti[1]), 510, pscroll + 1565)
  if (rockets < hdmulti[1] && hdmulti[0] == false) {
    image(multioverlay, 360, pscroll + 1400, 300, 300)
  }
  if (multiplier != 18 && hdmulti[0] == true) {
    hdmulti[1] = "uninhabited"
  }
  
  //CoRoT-7b
  image(corot, 360, pscroll + 1800, 300, 300)
  text(short(corotmulti[1]), 510, pscroll + 1965)
  if (rockets < corotmulti[1] && corotmulti[0] == false) {
    image(multioverlay, 360, pscroll + 1800, 300, 300)
  }
  if (multiplier != 26 && corotmulti[0] == true) {
    corotmulti[1] = "uninhabited"
  }
  
  //Kepler-22b
  image(k22, 360, pscroll + 2200, 300, 300)
  text(short(k22multi[1]), 510, pscroll + 2365)
  if (rockets < k22multi[1] && k22multi[0] == false) {
    image(multioverlay, 360, pscroll + 2200, 300, 300)
  }
  if (multiplier != 50 && k22multi[0] == true) {
    k22multi[1] = "uninhabited"
  }
  
  //TrES-4b
  image(tres, 360, pscroll + 2600, 300, 300)
  text(short(tresmulti[1]), 510, pscroll + 2765)
  if (rockets < tresmulti[1] && tresmulti[0] == false) {
    image(multioverlay, 360, pscroll + 2600, 300, 300)
  }
  if (multiplier != 70 && tresmulti[0] == true) {
    tresmulti[1] = "uninhabited"
  }
  
  //Kepler-69c
  image(k69, 360, pscroll + 3000, 300, 300)
  text(short(k69multi[1]), 510, pscroll + 3165)
  if (rockets < k69multi[1] && k69multi[0] == false) {
    image(multioverlay, 360, pscroll + 3000, 300, 300)
  }
  if (multiplier != 150 && k69multi[0] == true) {
    k69multi[1] = "uninhabited"
  }
  
  //borders
  fill(50);
  //Left border
  rect(300, 0, 20, 600);
  //Right border
  rect(700, 0, 20, 600);
  //Top border
  rect(300, 100, 400, 20);
  //Top Filling
  fill(20)
  rect(320, 0, 380, 100)

  frames++;
  if (frames == 60) {
    rockets += Math.ceil(rps * multiplier);
    frames -= 60;
  }

  //clicking rocket
  fill(50);
  circle(145, 350, 250);
  image(rocket, 70, 250, 150, 200);

  //rockets and rps
  textSize(40);
  fill(100);
  text(short(rockets) + " rockets", 150, 120, 1);
  textSize(20);
  fill(70);
  text(short(rps) + " per second" + "  (x" + multiplier + ")", 150, 200);

  //info
  fill(75);
  textSize(30);
  text(info, 510, 30);
  fill(50);
  text(subinfo, 510, 75);
  fill(35);
  textSize(20);
  text(owned, 625, 75);
  textAlign(RIGHT);

  //upgrades

  //Model Rocket
  image(modelrocketupgrd, modelrocketupgrdinfo[3], scroll + 20, modelrocketupgrdinfo[5], modelrocketupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(modelrocketupgrdinfo[2]), 930, scroll + 75);
  if (rockets < modelrocketupgrdinfo[2]) {
    image(overlay, modelrocketupgrdinfo[3], scroll + 20, modelrocketupgrdinfo[5], modelrocketupgrdinfo[6]);
  }

  //Liquid Methane
  image(LMupgrd, LMupgrdinfo[3], scroll + 110, LMupgrdinfo[5], LMupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(LMupgrdinfo[2]), 930, scroll + 165);
  if (rockets < LMupgrdinfo[2]) {
    image(overlay, LMupgrdinfo[3], scroll + 110, LMupgrdinfo[5], LMupgrdinfo[6]);
  }
  
  //V-2 rocket
  image(v2upgrd, v2upgrdinfo[3], scroll + 200, v2upgrdinfo[5], v2upgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(v2upgrdinfo[2]), 930, scroll + 255);
  if (rockets < v2upgrdinfo[2]) {
    image(overlay, v2upgrdinfo[3], scroll + 200, v2upgrdinfo[5], v2upgrdinfo[6]);
  }
  
  //Saturn V
  image(saturnvupgrd, saturnvupgrdinfo[3], scroll + 290, saturnvupgrdinfo[5], saturnvupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(saturnvupgrdinfo[2]), 930, scroll + 345);
  if (rockets < saturnvupgrdinfo[2]) {
    image(overlay, saturnvupgrdinfo[3], scroll + 290, saturnvupgrdinfo[5], saturnvupgrdinfo[6]);
  }
  
  //Starship
  image(starshipupgrd, starshipupgrdinfo[3], scroll + 380, starshipupgrdinfo[5], starshipupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(starshipupgrdinfo[2], 930, scroll + 435);
  if (rockets < starshipupgrdinfo[2]) {
    image(overlay, starshipupgrdinfo[3], scroll + 380, starshipupgrdinfo[5], starshipupgrdinfo[6]);
  }
  
  //Ionic Thrust
  image(ionicupgrd, ionicupgrdinfo[3], scroll + 470, ionicupgrdinfo[5], ionicupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(ionicupgrdinfo[2]), 930, scroll + 525);
  if (rockets < ionicupgrdinfo[2]) {
    image(overlay, ionicupgrdinfo[3], scroll + 470, ionicupgrdinfo[5], ionicupgrdinfo[6]);
  }
  
  //Skyhook
  image(skyhookupgrd, skyhookupgrdinfo[3], scroll + 560, skyhookupgrdinfo[5], skyhookupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(skyhookupgrdinfo[2]), 930, scroll + 615);
  if (rockets < skyhookupgrdinfo[2]) {
    image(overlay, skyhookupgrdinfo[3], scroll + 560, skyhookupgrdinfo[5], skyhookupgrdinfo[6]);
  }
  
  //Moon Base
  image(moonupgrd, moonupgrdinfo[3], scroll + 650, moonupgrdinfo[5], moonupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(moonupgrdinfo[2]), 930, scroll + 705);
  if (rockets < moonupgrdinfo[2]) {
    image(overlay, moonupgrdinfo[3], scroll + 650, moonupgrdinfo[5], moonupgrdinfo[6]);
  }

  //Tardigrade
  image(tardigradeupgrd, tardigradeupgrdinfo[3], scroll + 740, tardigradeupgrdinfo[5], tardigradeupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(tardigradeupgrdinfo[2]), 930, scroll + 795);
  if (rockets < tardigradeupgrdinfo[2]) {
    image(overlay, tardigradeupgrdinfo[3], scroll + 740, tardigradeupgrdinfo[5], tardigradeupgrdinfo[6]);
  }
  
  //Alien
  image(alienupgrd, alienupgrdinfo[3], scroll + 830, alienupgrdinfo[5], alienupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(alienupgrdinfo[2]), 930, scroll + 885);
  if (rockets < alienupgrdinfo[2]) {
    image(overlay, alienupgrdinfo[3], scroll + 830, alienupgrdinfo[5], alienupgrdinfo[6]);
  }
  
  //Clone Machine
  image(cloneupgrd, cloneupgrdinfo[3], scroll + 920, cloneupgrdinfo[5], cloneupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(cloneupgrdinfo[2]), 930, scroll + 975);
  if (rockets < cloneupgrdinfo[2]) {
    image(overlay, cloneupgrdinfo[3], scroll + 920, cloneupgrdinfo[5], cloneupgrdinfo[6]);
  }
  
  //Hyperdrive
  image(hyperupgrd, hyperupgrdinfo[3], scroll + 1010, hyperupgrdinfo[5], hyperupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(hyperupgrdinfo[2]), 930, scroll + 1065);
  if (rockets < hyperupgrdinfo[2]) {
    image(overlay, hyperupgrdinfo[3], scroll + 1010, hyperupgrdinfo[5], hyperupgrdinfo[6]);
  }
  
  //Artificial Wormhole
  image(wormupgrd, wormupgrdinfo[3], scroll + 1100, wormupgrdinfo[5], wormupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(wormupgrdinfo[2]), 930, scroll + 1155);
  if (rockets < wormupgrdinfo[2]) {
    image(overlay, wormupgrdinfo[3], scroll + 1100, wormupgrdinfo[5], wormupgrdinfo[6]);
  }
  
  //Consciousness
  image(consupgrd, consupgrdinfo[3], scroll + 1190, consupgrdinfo[5], consupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(consupgrdinfo[2]), 930, scroll + 1245);
  if (rockets < consupgrdinfo[2]) {
    image(overlay, consupgrdinfo[3], scroll + 1190, consupgrdinfo[5], consupgrdinfo[6]);
  }
  
  //Kerbal
  image(kerbalupgrd, kerbalupgrdinfo[3], scroll + 1280, kerbalupgrdinfo[5], kerbalupgrdinfo[6]);
  textSize(20);
  fill(200);
  text(short(kerbalupgrdinfo[2]), 930, scroll + 1335);
  if (rockets < kerbalupgrdinfo[2]) {
    image(overlay, kerbalupgrdinfo[3], scroll + 1280, kerbalupgrdinfo[5], kerbalupgrdinfo[6]);
  }

  textAlign(CENTER);
  
  //Hovering over something
  //gives info on that thing
  if (mouseX < 220 && mouseX > 70 && mouseY < 450 && mouseY > 250) {
    
    //Upgrades
    info = "Your main rocket";
    subinfo = "click to gain more rockets!";
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 95 &&
    mouseY > scroll + 20
  ) {
    info = "The basic rocket";
    subinfo = "+1 rps!";
    owned = "owned: " + modelrocketupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 185 &&
    mouseY > scroll + 110
  ) {
    info = "Liquid propelant fuel";
    subinfo = "+3 rps!";
    owned = "owned: " + LMupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 275 &&
    mouseY > scroll + 200
  ) {
    info = "Higher rockets";
    subinfo = "+5 rps!";
    owned = "owned: " + v2upgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 365 &&
    mouseY > scroll + 290
  ) {
    info = "Rockets to the moooon!";
    subinfo = "+35 rps!";
    owned = "owned: " + saturnvupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 455 &&
    mouseY > scroll + 380
  ) {
    info = "Carry more farther";
    subinfo = "+250 rps!";
    owned = "owned: " + starshipupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 545 &&
    mouseY > scroll + 470
  ) {
    info = "Compact fuel";
    subinfo = "+1.2k rps!";
    owned = "owned: " + ionicupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 635 &&
    mouseY > scroll + 560
  ) {
    info = "Coming, going, gone";
    subinfo = "+5.8k rps!";
    owned = "owned: " + skyhookupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 725 &&
    mouseY > scroll + 650
  ) {
    info = "Research... on the moon";
    subinfo = "+45k rps!";
    owned = "owned: " + moonupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 815 &&
    mouseY > scroll + 740
  ) {
    info = "Hardy but tardi";
    subinfo = "+250k rps!";
    owned = "owned: " + tardigradeupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 905 &&
    mouseY > scroll + 830
  ) {
    info = "New tech new rockets";
    subinfo = "+1.75m rps!";
    owned = "owned: " + alienupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 995 &&
    mouseY > scroll + 920
  ) {
    info = "2, 4, 6, 8, 16, 32...";
    subinfo = "+10m rps";
    owned = "owned: " + cloneupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 1085 &&
    mouseY > scroll + 1010
  ) {
    info = "Can't touch this";
    subinfo = "+70m rps";
    owned = "owned: " + hyperupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 1175 &&
    mouseY > scroll + 1100
  ) {
    info = "Folding space";
    subinfo = "+145m rps";
    owned = "owned: " + wormupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 1265 &&
    mouseY > scroll + 1190
  ) {
    info = "It's alive!";
    subinfo = "+750m rps";
    owned = "owned: " + consupgrdinfo[1];
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 1355 &&
    mouseY > scroll + 1280
  ) {
    info = "!sonamuh aloH¡";
    subinfo = "+3b rps";
    owned = "owned: " + kerbalupgrdinfo[1];
  } else {
    info = " ";
    subinfo = " ";
    owned = " ";
  }
  
  //multipliers
  
  //Mars
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 500 && mouseY > pscroll + 200 && mouseY > 120) {
    info = "Mars";
    subinfo = "x2 multiplier";
    owned = " "
  }
  
  //Proxima Centauri b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 900 && mouseY > pscroll + 600 && mouseY > 120) {
    info = "Proxima Centauri b";
    subinfo = "x5 multiplier";
    owned = " "
  }
  
  //TOI 700 b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 1300 && mouseY > pscroll + 1000 && mouseY > 120) {
    info = "TOI 700 b";
    subinfo = "x10 multiplier";
    owned = " "
  }
  
  //HD 209458 b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 1700 && mouseY > pscroll + 1400 && mouseY > 120) {
    info = "HD 209458 b (Osiris)";
    subinfo = "x18 multiplier";
    owned = " "
  }
  
  //CoRoT-7b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 2100 && mouseY > pscroll + 1800 && mouseY > 120) {
    info = "CoRoT-7b";
    subinfo = "x26 multiplier";
    owned = " "
  }
  
  //Kepler-22b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 2500 && mouseY > pscroll + 2200 && mouseY > 120) {
    info = "Kepler-22b";
    subinfo = "x50 multiplier";
    owned = " "
  }
  
  //TrES-4b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 2900 && mouseY > pscroll + 2600 && mouseY > 120) {
    info = "TrES-4b";
    subinfo = "x70 multiplier";
    owned = " "
  }
  
  //Kepler-69c
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 3300 && mouseY > pscroll + 3000 && mouseY > 120) {
    info = "Kepler-69c";
    subinfo = "x150 multiplier";
    owned = " "
  }
  
  
  console.log(multiplier)
  
}

function mouseClicked() {

  //multipliers
  
  //Mars
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 500 && mouseY > pscroll + 200 && mouseY > 120) {
    if (marsmulti[0] == true) {
      clickfx.play()
      multiplier = 2;
      marsmulti[1] = "inhabited"
    } else if (rockets >= marsmulti[1]) {
      clickfx.play()
      marsmulti[0] = true;
      multiplier = 2;
      rockets -= marsmulti[1]
      marsmulti[1] = "inhabited"
    }
  }
  
  //Proxima Centauri b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 900 && mouseY > pscroll + 600 && mouseY > 120) {
    if (proxmulti[0] == true) {
      clickfx.play()
      multiplier = 5;
      proxmulti[1] = "inhabited"
    } else if (rockets >= proxmulti[1]) {
      clickfx.play()
      proxmulti[0] = true;
      multiplier = 5;
      rockets -= proxmulti[1]
      proxmulti[1] = "inhabited"
    }
  }
  
  //TOI 700 b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 1300 && mouseY > pscroll + 1000 && mouseY > 120) {
    if (toimulti[0] == true) {
      clickfx.play()
      multiplier = 10;
      toimulti[1] = "inhabited"
    } else if (rockets >= toimulti[1]) {
      clickfx.play()
      toimulti[0] = true;
      multiplier = 10;
      rockets -= toimulti[1]
      toimulti[1] = "inhabited"
    }
  }
  
  //HD 209458 b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 1700 && mouseY > pscroll + 1400 && mouseY > 120) {
    if (hdmulti[0] == true) {
      clickfx.play()
      multiplier = 18;
      hdmulti[1] = "inhabited"
    } else if (rockets >= hdmulti[1]) {
      clickfx.play()
      hdmulti[0] = true;
      multiplier = 18;
      rockets -= hdmulti[1]
      hdmulti[1] = "inhabited"
    }
  }
  
  //CoRoT-7b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 2100 && mouseY > pscroll + 1800 && mouseY > 120) {
    if (corotmulti[0] == true) {
      clickfx.play()
      multiplier = 26;
      corotmulti[1] = "inhabited"
    } else if (rockets >= corotmulti[1]) {
      clickfx.play()
      corotmulti[0] = true;
      multiplier = 26;
      rockets -= corotmulti[1]
      corotmulti[1] = "inhabited"
    }
  }
  
  //Kepler-22b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 2500 && mouseY > pscroll + 2200 && mouseY > 120) {
    if (k22multi[0] == true) {
      clickfx.play()
      multiplier = 50;
      k22multi[1] = "inhabited"
    } else if (rockets >= k22multi[1]) {
      clickfx.play()
      k22multi[0] = true;
      multiplier = 50;
      rockets -= k22multi[1]
      k22multi[1] = "inhabited"
    }
  }
  
  //TrES-4b
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 2900 && mouseY > pscroll + 2600 && mouseY > 120) {
    if (tresmulti[0] == true) {
      clickfx.play()
      multiplier = 70;
      tresmulti[1] = "inhabited"
    } else if (rockets >= tresmulti[1]) {
      clickfx.play()
      tresmulti[0] = true;
      multiplier = 70;
      rockets -= tresmulti[1]
      tresmulti[1] = "inhabited"
    }
  }

  //Kepler-69c
  if (mouseX < 660 && mouseX > 360 && mouseY < pscroll + 3300 && mouseY > pscroll + 3000 && mouseY > 120) {
    if (k69multi[0] == true) {
      clickfx.play()
      multiplier = 150;
      k69multi[1] = "inhabited"
    } else if (rockets >= k69multi[1]) {
      clickfx.play()
      k69multi[0] = true;
      multiplier = 150;
      rockets -= k69multi[1]
      k69multi[1] = "inhabited"
    }
  }
  
  //Upgrades
  if (mouseX < 220 && mouseX > 70 && mouseY < 450 && mouseY > 250) {
    clickfx.play()
    rockets += Math.ceil(1 * multiplier);
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 95 &&
    mouseY > scroll + 20
  ) {
    if (rockets >= modelrocketupgrdinfo[2]) {
      clickfx.play()
      modelrocketupgrdinfo[0] = true;
      modelrocketupgrdinfo[1]++;
      rockets -= modelrocketupgrdinfo[2];
      modelrocketupgrdinfo[2] *= 1.5;
      modelrocketupgrdinfo[2] = Math.ceil(modelrocketupgrdinfo[2]);
      rps += 1;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 185 &&
    mouseY > scroll + 110
  ) {
    if (rockets >= LMupgrdinfo[2]) {
      clickfx.play()
      LMupgrdinfo[0] = true;
      LMupgrdinfo[1]++;
      rockets -= LMupgrdinfo[2];
      LMupgrdinfo[2] *= 1.5;
      LMupgrdinfo[2] = Math.ceil(LMupgrdinfo[2]);
      rps += 3;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 275 &&
    mouseY > scroll + 200
  ) {
    if (rockets >= v2upgrdinfo[2]) {
      clickfx.play()
      v2upgrdinfo[0] = true;
      v2upgrdinfo[1]++;
      rockets -= v2upgrdinfo[2];
      v2upgrdinfo[2] *= 1.5;
      v2upgrdinfo[2] = ceil(v2upgrdinfo[2]);
      rps += 5;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 365 &&
    mouseY > scroll + 290
  ) {
    if (rockets >= saturnvupgrdinfo[2]) {
      clickfx.play()
      saturnvupgrdinfo[0] = true;
      saturnvupgrdinfo[1]++;
      rockets -= saturnvupgrdinfo[2];
      saturnvupgrdinfo[2] *= 1.5;
      saturnvupgrdinfo[2] = Math.ceil(saturnvupgrdinfo[2]);
      rps += 35;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 455 &&
    mouseY > scroll + 380
  ) {
    if (rockets >= starshipupgrdinfo[2]) {
      clickfx.play()
      starshipupgrdinfo[0] = true;
      starshipupgrdinfo[1]++;
      rockets -= starshipupgrdinfo[2];
      starshipupgrdinfo[2] *= 1.5;
      starshipupgrdinfo[2] = Math.ceil(starshipupgrdinfo[2]);
      rps += 250;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 545 &&
    mouseY > scroll + 470
  ) {
    if (rockets >= ionicupgrdinfo[2]) {
      clickfx.play()
      ionicupgrdinfo[0] = true;
      ionicupgrdinfo[1]++;
      rockets -= ionicupgrdinfo[2];
      ionicupgrdinfo[2] *= 1.5;
      ionicupgrdinfo[2] = Math.ceil(ionicupgrdinfo[2]);
      rps += 1200;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 635 &&
    mouseY > scroll + 360
  ) {
    if (rockets >= skyhookupgrdinfo[2]) {
      clickfx.play()
      skyhookupgrdinfo[0] = true;
      skyhookupgrdinfo[1]++;
      rockets -= skyhookupgrdinfo[2];
      skyhookupgrdinfo[2] *= 1.5;
      skyhookupgrdinfo[2] = Math.ceil(skyhookupgrdinfo[2]);
      rps += 5800;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 725 &&
    mouseY > scroll + 450
  ) {
    if (rockets >= moonupgrdinfo[2]) {
      clickfx.play()
      moonupgrdinfo[0] = true;
      moonupgrdinfo[1]++;
      rockets -= moonupgrdinfo[2];
      moonupgrdinfo[2] *= 1.5;
      moonupgrdinfo[2] = Math.ceil(moonupgrdinfo[2]);
      rps += 45000;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 815 &&
    mouseY > scroll + 540
  ) {
    if (rockets >= tardigradeupgrdinfo[2]) {
      clickfx.play()
      tardigradeupgrdinfo[0] = true;
      tardigradeupgrdinfo[1]++;
      rockets -= tardigradeupgrdinfo[2];
      tardigradeupgrdinfo[2] *= 1.5;
      tardigradeupgrdinfo[2] = Math.ceil(tardigradeupgrdinfo[2]);
      rps += 250000;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 905 &&
    mouseY > scroll + 630
  ) {
    if (rockets >= alienupgrdinfo[2]) {
      clickfx.play()
      alienupgrdinfo[0] = true;
      alienupgrdinfo[1]++;
      rockets -= alienupgrdinfo[2];
      alienupgrdinfo[2] *= 1.5;
      alienupgrdinfo[2] = Math.ceil(alienupgrdinfo[2]);
      rps += 1750000;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 995 &&
    mouseY > scroll + 720
  ) {
    if (rockets >= cloneupgrdinfo[2]) {
      clickfx.play()
      cloneupgrdinfo[0] = true;
      cloneupgrdinfo[1]++;
      rockets -= cloneupgrdinfo[2];
      cloneupgrdinfo[2] *= 1.5;
      cloneupgrdinfo[2] = Math.ceil(cloneupgrdinfo[2]);
      rps += 10000000;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 1085 &&
    mouseY > scroll + 810
  ) {
    if (rockets >= hyperupgrdinfo[2]) {
      clickfx.play()
      hyperupgrdinfo[0] = true;
      hyperupgrdinfo[1]++;
      rockets -= hyperupgrdinfo[2];
      hyperupgrdinfo[2] *= 1.5;
      hyperupgrdinfo[2] = Math.ceil(hyperupgrdinfo[2]);
      rps += 70000000;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 1175 &&
    mouseY > scroll + 900
  ) {
    if (rockets >= wormupgrdinfo[2]) {
      clickfx.play()
      wormupgrdinfo[0] = true;
      wormupgrdinfo[1]++;
      rockets -= wormupgrdinfo[2];
      wormupgrdinfo[2] *= 1.5;
      wormupgrdinfo[2] = Math.ceil(wormupgrdinfo[2]);
      rps += 145000000;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 1265 &&
    mouseY > scroll + 990
  ) {
    if (rockets >= consupgrdinfo[2]) {
      clickfx.play()
      consupgrdinfo[0] = true;
      consupgrdinfo[1]++;
      rockets -= consupgrdinfo[2];
      consupgrdinfo[2] *= 1.5;
      consupgrdinfo[2] = Math.ceil(consupgrdinfo[2]);
      rps += 750000000;
    }
  } else if (
    mouseX < 980 &&
    mouseX > 730 &&
    mouseY < scroll + 1355 &&
    mouseY > scroll + 1080
  ) {
    if (rockets >= kerbalupgrdinfo[2]) {
      clickfx.play()
      kerbalupgrdinfo[0] = true;
      kerbalupgrdinfo[1]++;
      rockets -= kerbalupgrdinfo[2];
      kerbalupgrdinfo[2] *= 1.5;
      kerbalupgrdinfo[2] = Math.ceil(kerbalupgrdinfo[2]);
      rps += 3000000000;
    }
  }
}

function mouseWheel(event) {
  if (mouseX < width && mouseX > 720 && mouseY < height && mouseY > 0) {
    scroll += event.delta * -1;
    if (scroll > 0) {
      scroll = 0;
    } else if (scroll < -780) {
      scroll = -780;
    }
    print(scroll);
  }
  if (mouseX < 700 && mouseX > 320 && mouseY < height && mouseY > 120) {
    pscroll += event.delta * -1;
    if (pscroll > 0) {
      pscroll = 0;
    } else if (pscroll < -2750) {
      pscroll = -2750;
    }
  }
}

function short(num) {
  if (num > 999999 && num < 1000000000) {
    return (Math.floor(num / 1000000) + "." + (Math.floor(num / 1000) % 1000) + "m");
  } else if (num > 999999999 && num < 1000000000000) {
    return (Math.floor(num / 1000000000) + "." + (Math.floor(num / 1000000) % 1000) + "b");
  } else if (num > 999999999999 && num < 1000000000000000) {
    return (Math.floor(num / 1000000000000) + "." + (Math.floor(num / 1000000000) % 1000) + "t");
  } else if (num > 999999999999999 && num < 1000000000000000000) {
    return (Math.floor(num / 1000000000000000) + "." + (Math.floor(num / 1000000000000) % 1000) + "qd");
  } else {
    return num;
  }
}
