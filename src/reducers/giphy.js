const initialState = {
  limit: 20,
  offset: 0,
  hasMore: true,
  trendingData: []
}

const giphy = (state = initialState, action) => {
  switch (action.type) {
    case 'GIPHY_SET_TRENDING_LIST':
      return {
        ...state,
        trendingData: [...state.trendingData, ...action.payload.data],
        offset: state.offset + action.payload.pagination.count
      }
    default:
      return state
  }
}

export default giphy
