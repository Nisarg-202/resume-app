export default function (state = [], action) {
  switch (action.type) {
    case 'RESUMES_LIST':
      return action.payload;
    default:
      return state;
  }
}
