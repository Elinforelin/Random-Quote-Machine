const initialState = {
  quotes: [],
}

const FETCH_DATA = 'FETCH_DATA'

export const dataReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, quotes: action.payload }
    default:
      return state
  }
}

export const fetchDataAction = (payload) => ({
  type: FETCH_DATA,
  payload
})