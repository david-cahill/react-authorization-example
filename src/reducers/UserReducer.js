import initReducer from './init-reducer'
export default initReducer({}, {
  SET_USER: (state, { user }) => {
  	return ({ ...state, user})
  }
})