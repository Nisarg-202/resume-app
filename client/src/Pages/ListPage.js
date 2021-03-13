import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {nameChange, dateChange, getOnRedirect} from '../action';

function ListPage(props) {
  const [name, setName] = useState('');
  const [date, setDate] = useState();
  useEffect(function () {
    props.getOnRedirect();
  }, []);
  function onNameChange(e) {
    setName(function () {
      return e.target.value;
    });
    props.nameChange(e.target.value);
  }
  function onDateChange(e) {
    setDate(function () {
      return e.target.value;
    });
    props.dateChange(e.target.value);
  }
  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <input
        onChange={onNameChange}
        value={name}
        placeholder="Search by name"
        type="text"
      />
      <input
        onChange={onDateChange}
        value={date}
        placeholder="Search By date"
        type="date"
        className="mt-2"
      />
      {props.resumes.length > 0 &&
        props.resumes.map(function (item) {
          return (
            <div>
              <h1>{item.name}</h1>
              <p>{new Date(item.date).toLocaleDateString()}</p>
              <p>{item.country}</p>
              <a href={`https://polar-atoll-36675.herokuapp.com/${item._id}`} target="_blank">
                View Resume
              </a>
              <br />
              <a href={`https://polar-atoll-36675.herokuapp.com/${item._id}`} download>
                Download Resume
              </a>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

function mapStateToProps(state) {
  return {resumes: state.filter_resumes};
}

export default connect(mapStateToProps, {
  nameChange,
  dateChange,
  getOnRedirect,
})(ListPage);
