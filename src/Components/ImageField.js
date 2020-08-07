import React, { useContext, useEffect, useRef, useState } from 'react';
import FaceContext from '../context/faceRecognition/faceContext';
import faceContext from '../context/faceRecognition/faceContext';

const ImageField = () => {
  const faceContext = useContext(FaceContext);

  const ref = useRef();
  const [img, setImg] = useState({
    height: '',
    width: ''
  });


  useEffect(() => {
    setImg({ ...img, height: ref.current.clientHeight, width: ref.current.clientWidth })
    console.log(`This is height ${img.height}`);
    console.log(`This is width ${img.width}`);
  }, [faceContext]);

  return (
    <div className="p-3">
      <div className="fieldImg">
        <img src={faceContext.fieldUrl} class="img-fluid rounded-lg" id="inputImage" ref={ref} alt="Responsive image" />
        <div><h4 className="text-primary">HEADER {img.height}</h4></div>
      </div>
    </div>
  )
}

export default ImageField
