import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { 
  RemoveButton,
  UpdateButton,
  UploadedImageWrapper,
  UploadImageButton,
  UploadsImageContainer
} from "./fieldImageUploadGallery.style";


const FieldImageUploadGallery = (props:any) => {

  
  const [images, setImages] = React.useState([]);
  const maxNumber = 5;

  const handleListingPhoto = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[]);
    props.setPropertyImage(props.multiple ? "galleryPhotos" : "propertyPhoto", imageList);
  };

  return (
    <UploadsImageContainer>
      <ImageUploading
        multiple={props.multiple}
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
              isMultiple={props.multiple}
              style={isDragging ? { color: "blue" } : undefined}
              onClick={onImageUpload}
              {...dragProps}>
              {props.label}
            </UploadImageButton>
            {imageList.length > 0 && 
              <p style={{fontSize: "1.4rem"}}>
                {props.text}
              </p>}
            {
              imageList.map((image, index) => {
              return <UploadedImageWrapper isMultiple={props.multiple}>
                <img 
                  src={image.dataURL} 
                  alt="Preview" 
                  width={props.previewWidth} />
                <div>
                  <UpdateButton 
                    onClick={() => onImageUpdate(index)}>
                    Update
                  </UpdateButton>
                  <RemoveButton 
                    onClick={() => onImageRemove(index)}>
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
