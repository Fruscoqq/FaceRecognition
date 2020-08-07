import {
  FACE_FETCH_IMG
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case FACE_FETCH_IMG:
      return {
        ...state,
        fieldValue: action.payload.data.regions[0].region_info.bounding_box,
        fieldUrl: action.payload.input.data.image.url,
        loading: ''
      }
    default:
      return state;
  }
}
