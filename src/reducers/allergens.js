import { GET_ALL_ALLERGENS } from '../actions/allergens'

const allergens = (state = [], { type, payload}) => {
  switch (type) {
    case GET_ALL_ALLERGENS:
      return payload;
    default: 
      return state;
  }
}

export default allergens 