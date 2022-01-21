function setup() {
  createCanvas(windowWidth, windowHeight);
  drawImage();
}

function drawImage() {
  let img = createImage(256, 256); // this creates a 256 by 256 blank image 
  img.loadPixels();
  for (let x = 0; x < img.width; x +=1.08) {
    for (let y = 0; y < img.height; y +=1.08) {
      newColour = color(x * 2, y * 2, (x * y)/30)
      img.set(x, y, newColour);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}