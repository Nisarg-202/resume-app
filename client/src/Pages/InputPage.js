import React, {useState} from 'react';
import {connect} from 'react-redux';

import {addResume} from '../action';

function InputPage(props) {
  const [name, setName] = useState('');
  const [date, setDate] = useState();
  const [country, setCountry] = useState('');
  const [file, setFile] = useState();

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onDateChange(e) {
    setDate(e.target.value);
  }

  function onFileChange(e) {
    setFile(e.target.files[0]);
  }

  function onCountryChange(e) {
    setCountry(e.target.value);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    await props.addResume({name, file, country, date});
    setName(function () {
      return '';
    });
    setCountry(function () {
      return '';
    });
    setDate(function () {
      return null;
    });
    setFile(function () {
      return null;
    });
  }

  return (
    <div className="container">
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Your name"
            onChange={onNameChange}
            required
            value={name}
            type="text"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Date"
            onChange={onDateChange}
            required
            value={date}
            type="date"
          />
        </div>
        <div className="form-group">
          <select
            className="custom-select"
            onChange={onCountryChange}
            required
            value={country}
          >
            <option selected>Select Menu</option>
            {props.countries.length > 0 &&
              props.countries.map(function (item) {
                return <option value={item}>{item}</option>;
              })}
          </select>
        </div>
        <div className="form-group">
          <input
            className="form-control-file"
            placeholder="Resume"
            onChange={onFileChange}
            required
            type="file"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {countries: state.countries};
}

export default connect(mapStateToProps, {addResume})(InputPage);
