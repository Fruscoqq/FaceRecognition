import React, { useState, useContext } from 'react';
import FaceContext from '../context/faceRecognition/faceContext';
import ImageField from './ImageField';

const ImageLinkForm = () => {
  const faceContext = useContext(FaceContext);

  const [image, setImage] = useState({
    imgLink: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();
    if (image.imgLink === '') {
      console.log('error');
    } else {
      faceContext.getImg(image.imgLink);
      setImage({ imgLink: '' });
    }
  }

  const onChange = (e) => {
    e.preventDefault();
    setImage({ ...image, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h4 className="text-center text-light py-3">This web application will detect faces in your uploaded pictures. Give it a try!</h4>
      <div className="imageForm">
        <form className="form-group" onSubmit={onSubmit}>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Upload your picture" aria-label="Recipient's username" aria-describedby="button-addon2" name="imgLink" value={image.imgLink} onChange={onChange} />
            <div class="input-group-append">
              <button class="btn btn-primary" type="submit" id="button-addon2">Upload!</button>
            </div>
          </div>
        </form>
      </div>
      {faceContext.fieldValue.length !== 0 && (<ImageField />)}
    </div>
  )
}

export default ImageLinkForm
