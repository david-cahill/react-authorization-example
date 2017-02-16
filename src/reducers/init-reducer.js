export default function (initialState, actions) {
  return function (state = initialState, action) {
    if (actions.hasOwnProperty(action.type)) return actions[action.type](state, action)
    return state
  }
}