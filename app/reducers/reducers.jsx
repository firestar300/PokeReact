export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var pokemonReducer = (state = '', action) => {
  switch (action.type) {
    case 'DISPLAY_POKEMON':
      return action.id
    default:
      return state;
  }
}
