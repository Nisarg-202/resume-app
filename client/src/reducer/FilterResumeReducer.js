export default function (state = [], action) {
  switch (action.type) {
    case 'FILTER_RESUMES':
      return action.payload;
    default:
      return state;
  }
}
