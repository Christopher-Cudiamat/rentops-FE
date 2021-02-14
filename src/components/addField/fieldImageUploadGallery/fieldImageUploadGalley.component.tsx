import React, { useEffect, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { 
  RemoveButton,
  UpdateButton,
  UploadedImageWrapper,
  UploadImageButton,
  UploadsImageContainer
} from "./fieldImageUploadGallery.style";
import { IPhotoGalleryProps } from "./fieldImageUploadGallery.type";
import {nanoid} from 'nanoid';


const FieldImageUploadGallery: React.FC<IPhotoGalleryProps> = ({
  setPropertyImage,
  label,
  text,
  previewWidth,
}) => {

  
  const [images, setImages] = useState([]);
  const maxNumber = 5;

  
  const handleListingPhoto = (imageList: ImageListType) => {
    setImages(imageList as never[]);
    setPropertyImage("galleryPhotos", imageList);
  }

  return (
    <UploadsImageContainer>
      <ImageUploading
        resolutionType={'less'}
        multiple={true}
        value={images}
        onChange={handleListingPhoto}
        maxNumber={maxNumber}>
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div>
            <UploadImageButton 
              primary
              style={isDragging ? { color: "blue" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              {label}
            </UploadImageButton>
            {
              imageList.length > 0 && 
              <p style={{fontSize: "1.4rem"}}>
                {text}
              </p>}
            {
              imageList.map((image, index) => {
              return  <UploadedImageWrapper key={nanoid()}>
                        <img 
                          src={image.dataURL} 
                          alt="Preview" 
                          width={previewWidth} />
                        <div>
                          <UpdateButton 
                            onClick={() => onImageUpdate(index)}>
                            Update
                          </UpdateButton>
                          <RemoveButton 
                            onClick={() => {
                              onImageRemove(index);
                            }}>
                            Remove
                          </RemoveButton>
                        </div>
                      </UploadedImageWrapper>
            })}
          </div>
        )}
      </ImageUploading>
    </UploadsImageContainer>
  );
}

export default FieldImageUploadGallery;
