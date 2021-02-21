
export const scaleImage =(
  dataUrl:any,
  scaleRatio:any,
  imageType:any,
  imageArguments:any,
  callback:any)  => {

  var image:any, oldWidth, oldHeight, newWidth, newHeight, canvas, ctx, newDataUrl;
  // "use strict";

  if(dataUrl.length > 30000){

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
  } else {

    imageType = imageType || "image/jpeg";
    imageArguments = imageArguments || 1;

    image = new Image();

    image.onload = function() {
      oldWidth = image.width;
      oldHeight = image.height;
  
      canvas = document.createElement("canvas");
      canvas.width = oldWidth;
      canvas.height = oldHeight;

      ctx = canvas.getContext("2d");
      ctx!.drawImage(image, 0, 0, oldWidth, oldHeight);
      newDataUrl = canvas.toDataURL(imageType, imageArguments);
      callback(newDataUrl);
    }
    
    image.src = dataUrl;
  }
}