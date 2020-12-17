var bimg = null;
var fimg = null;
var thres=240;
var bgCanvas= null;
var foreCanvas=null;
function foregroundImg(){
  foreCanvas=document.getElementById("fgcan");
  var foreImg=document.getElementById("fgfile");
  fimg =new SimpleImage(foreImg);
  fimg.drawTo(foreCanvas);
  }

function backgroundImg(){
  bgCanvas=document.getElementById("bgcan");
  var backImg=document.getElementById("bgfile");
  bimg= new SimpleImage(backImg);
  bimg.drawTo(bgCanvas);
  }

function greenscreen(){
  var output = new SimpleImage(fimg.getWidth(),fimg.getHeight());
  for(var pixel of fimg.values()){
  var x = pixel.getX();
  var y = pixel.getY();
  if(pixel.getGreen()>thres){
      var bgPixel = bimg.getPixel(x,y);
      output.setPixel(x,y,bgPixel);
    }
    else{
      output.setPixel(x,y,pixel);
    }
  }
  return output;
}
function composite(){
  if ((fimg==null)||(!fimg.complete())){
      alert("foreground not loaded");
      return;
      }
  if((bimg==null)||(!bimg.complete())){
    alert("background not loaded");
    return;
  }
  clearScreen();
  var compo = greenscreen();
  compo.drawTo(foreCanvas);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}
function clearScreen() {
  doClear(foreCanvas);
  doClear(bgCanvas);
}