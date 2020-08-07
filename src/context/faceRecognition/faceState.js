import React, { useReducer } from 'react';
import FaceContext from './faceContext';
import FaceReducer from './faceReducer';
import Clarifai from 'clarifai';
// Need to import here types.js later
import { FACE_FETCH_IMG, FACE_CALC_IMG } from '../types';

const FaceState = props => {

  const app = new Clarifai.App({
    apiKey: 'c0a3f98572cf4cdeb4419f437e769920'
  });


  const initialState = {
    fieldValue: [],
    fieldUrl: '',
    loading: ''
  }


  const [state, dispatch] = useReducer(FaceReducer, initialState);

  // Functions goes here

  const getImg = async (imgData) => {
    state.loading = true;
    const res = await app.models.predict("a403429f2ddf4b49b307e318f00e528b", `${imgData}`);
    dispatch({
      type: FACE_FETCH_IMG,
      payload: res.outputs[0]
    })
    state.loading = false;
  }


  return (
    <FaceContext.Provider
      value={{
        fieldValue: state.fieldValue,
        fieldUrl: state.fieldUrl,
        loading: state.loading,
        getImg
      }}>
      {props.children}
    </FaceContext.Provider>
  )
}

export default FaceState;