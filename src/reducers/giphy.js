const initialState = {
  limit: 20,
  offset: 1,
  trendingData: []
}

const giphy = (state = initialState, action) => {
  switch (action.type) {
    case 'GIPHY_SET_TRENDING_LIST':
      return {
        ...state,
        trendingData: [...state.trendingData, ...action.payload.data],
        offset: action.payload.pagination.offset + 1
      }
    default:
      return state
  }
}

export default giphy
