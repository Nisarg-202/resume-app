import axios from 'axios';

export const countryList = function () {
  return async function (dispatch) {
    const response = await axios.get('/countries');
    await dispatch({type: 'COUNTRIES_LIST', payload: response.data});
  };
};

export const addResume = function ({name, file, country, date}) {
  return async function (dispatch) {
    const data = new FormData();
    data.append('name', name);
    data.append('file', file);
    data.append('country', country);
    data.append('date', date);

    const response = await axios.post('/addResume', data);
    if (response.data.condition) {
      await dispatch(getResume());
      alert('Successfully Submited!');
    } else {
      alert('Please Try Again Later!');
    }
  };
};

export const getResume = function () {
  return async function (dispatch) {
    const response = await axios.get('/getResume');
    if (response.data.condition) {
      await dispatch({type: 'RESUMES_LIST', payload: response.data.resumes});
      await dispatch({type: 'FILTER_RESUMES', payload: response.data.resumes});
    }
  };
};

export const getOnRedirect = function () {
  return async function (dispatch, getState) {
    const resumes = getState().resumes;
    await dispatch({type: 'FILTER_RESUMES', payload: resumes});
  };
};

export const nameChange = function (name) {
  return async function (dispatch, getState) {
    const resumes = getState().resumes;
    if (!name) {
      await dispatch({type: 'FILTER_RESUMES', payload: resumes});
    } else {
      let filter_resumes = [];
      if (resumes.length > 0) {
        resumes.forEach(function (item) {
          if (item.name.indexOf(name) > -1) {
            filter_resumes.push(item);
          }
        });
        await dispatch({type: 'FILTER_RESUMES', payload: filter_resumes});
      } else {
        await dispatch({type: 'FILTER_RESUMES', payload: resumes});
      }
    }
  };
};

export const dateChange = function (date) {
  return async function (dispatch, getState) {
    const resumes = getState().resumes;
    if (!date) {
      await dispatch({type: 'FILTER_RESUMES', payload: resumes});
    } else {
      if (resumes.length > 0) {
        const filter_resumes = resumes.filter(function (item) {
          console.log(item.date);
          return (
            new Date(item.date).toLocaleDateString() ===
            new Date(date).toLocaleDateString()
          );
        });
        await dispatch({type: 'FILTER_RESUMES', payload: filter_resumes});
      } else {
        await dispatch({type: 'FILTER_RESUMES', payload: resumes});
      }
    }
  };
};
