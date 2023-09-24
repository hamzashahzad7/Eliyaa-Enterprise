const initialState = {
  loading: false,
  items: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "show_loading":
      return { ...state, loading: true };

    case "hide_loading":
      return { ...state, loading: false };

    case "add_product":
      return { ...state, items: [...state.items, action.payload] };

    case "delete_product":
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload),
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
