import {combineReducers} from 'redux';
import CountryReducer from './CountryReducer';
import ResumeReducer from './ResumeReducer';
import FilterResumeReducer from './FilterResumeReducer';

export default combineReducers({
  countries: CountryReducer,
  resumes: ResumeReducer,
  filter_resumes: FilterResumeReducer,
});
