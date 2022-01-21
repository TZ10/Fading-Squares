## Before Starting This Task

Watch the following video and skim its accompanying note.

* Custom Images ([video](https://drive.google.com/file/d/1u-OSw2zk730O39jBs4lE0HUm-MN2643G/view?usp=sharing)|[note](https://github.com/MissStrong/ICS2O_Semester_1_2021-2022/blob/main/Notes/Unit%202/Note%2014%20-%20Custom%20Images.md))

**Only begin this task if you have already finished Exercise 7.**

## Instructions

Go to **script.js** under **Files** and complete line 11 to create the RGB values in the blank image using expressions involving `x` and `y`. Keep trying until you get a result you like. Here are a few example results from the note: 

![](https://raw.githubusercontent.com/MissStrong/ICS2O_Semester_1_2021-2022/main/Images/Custom_Image_1.png)
![](https://raw.githubusercontent.com/MissStrong/ICS2O_Semester_1_2021-2022/main/Images/Custom_Image_2.png)
![](https://raw.githubusercontent.com/MissStrong/ICS2O_Semester_1_2021-2022/main/Images/Custom_Image_3.png)
![](https://raw.githubusercontent.com/MissStrong/ICS2O_Semester_1_2021-2022/main/Images/Custom_Image_4.png)

*Do not* modify anything in **index.html**. This HTML file needs to be there in order for the sketch to display properly.

When it works, click **Submit** in the top right corner. 

## script.js

Here is the original code in **script.js** for reference:

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  drawImage();
}

function drawImage() {
  let img = createImage(256, 256); // this creates a 256 by 256 blank image 
  img.loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      newColour = // create a colour here using x and y
      img.set(x, y, newColour);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
```
