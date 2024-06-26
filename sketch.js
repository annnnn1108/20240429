var captureGraphics
var capture_width =640
var capture_height =480

function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO) //啟動攝影機
  capture.size(capture_width,capture_height);//設定顯示畫面大小
  captureGraphics =createGraphics(capture_width,480)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  capture.hide()
  //旋鈕的介面
  var radioElement =createRadio();
  radioElement.position(width/2-300,20)
  radioElement.option("方塊")
  radioElement.option("圓圈")
  radioElement.option("亮度")
  radioElement.style("color","#fff")
  radioElement.style("font-size","30")
}


function draw() {
  background(220);
  noStroke()
  span= 5+map(mouseX,0,width,0,20)
  var span=10
  push()
  translate(width/2-capture_width, height/2-capture_height) //把原點移到(width/2-160, height/2-120)
  image(capture,0,0) //在(0,0)
  for(var x =0;x<captureGraphics.width;x=x+span){
    for(var y=0;y<captureGraphics.height ;y=y+span){
      var pixel =captureGraphics.get(x,y)
      fill(pixel)
      if(radioElement.value()=="方塊"){
        rect(x,y,span)
      }
      if(radioElement.value()=="圓圈"){
        ellipse(x,y,span)
      }
      if(radioElement.value()=="亮度"){
        bk= (pixel[0]+pixel[1]+pixel[2])/3
        fill(bk)
        ellipse(x,y,span)
      }
    }
  }
  pop()
}
