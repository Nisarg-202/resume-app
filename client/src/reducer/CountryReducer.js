export default function (state = [], action) {
  switch (action.type) {
    case 'COUNTRIES_LIST':
      return action.payload;
    default:
      return state;
  }
}
