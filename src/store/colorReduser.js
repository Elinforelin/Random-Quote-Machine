const initialState = {
  color: ''
}

const CHANGE_COLOR = 'CHANGE_COLOR'

export const colorReduser = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return { ...state, color: action.payload }
    default:
      return state
  }
}

export const changeColorAction = (payload) => ({
  type: CHANGE_COLOR,
  payload
})