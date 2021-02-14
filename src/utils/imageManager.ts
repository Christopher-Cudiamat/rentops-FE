import imageCompression from 'browser-image-compression';

export const compressImage = async(image: any) => {
  const imageFile = image;
    console.log(imageFile);
    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile!.size / 1024 / 1024} MB`);
    
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile!, options);
      const compressedFiles = await imageCompression.getDataUrlFromFile(compressedFile);
      // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      // console.log(`compressedFile size ${compressedFiles.size / 1024 / 1024} MB`); // smaller than maxSizeMB
      console.log("compressImage",compressedFiles)
      return compressedFile;
    } catch (error) {
      console.log(error);
    }
}


export function scaleImage(dataUrl:any, scaleRatio:any, imageType:any, imageArguments:any, callback:any) {
  // "use strict";
  var image:any, oldWidth, oldHeight, newWidth, newHeight, canvas, ctx, newDataUrl;

  // Provide default values
  imageType = imageType || "image/jpeg";
  imageArguments = imageArguments || 0.7;

  // Create a temporary image so that we can dimensions of new image.
  image = new Image();
  image.onload = function() {
    oldWidth = image.width;
    oldHeight = image.height;
    newWidth = Math.floor(oldWidth * scaleRatio);
    newHeight = Math.floor(oldHeight * scaleRatio);

    // Create a temporary canvas to draw the downscaled image on.
    canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Draw the scaled image on the canvas and trigger the callback function.
    ctx = canvas.getContext("2d");
    ctx!.drawImage(image, 0, 0, newWidth, newHeight);
    newDataUrl = canvas.toDataURL(imageType, imageArguments);
    callback(newDataUrl);
  }
  image.src = dataUrl;
}