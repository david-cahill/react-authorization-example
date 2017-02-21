import initReducer from './init-reducer'
export default initReducer({ selectedIndex: 0 }, {
  SELECT_BOTTOM_NAVIGATION: (state, { index }) => {
  	return ({ ...state, selectedIndex: index})
  }
})