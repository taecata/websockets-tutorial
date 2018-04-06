var socket;

function setup(){

   createCanvas(windowWidth, windowHeight);

   socket = io.connect();
   socket.on('mouse', newDrawing);
    
}

function newDrawing(data){
  fill(0, 0, 255);
  stroke(255);
  ellipse(data.x, data.y, 100, 100);
}

function mouseDragged(){
	console.log(mouseX + ' ' + mouseY);

	var data = {
		x: mouseX, 
		y: mouseY
	}

  socket.emit('mouse', data);

  fill(255, 0, 0);
  stroke(255);
  ellipse(mouseX, mouseY, 100, 100);
}
