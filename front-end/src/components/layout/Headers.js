// frontend/src/components/layout/Headers.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // added
import { connect } from 'react-redux'; // added
import { Menu, Dropdown, Row, Col, Card,Button } from 'antd';
import { Input } from 'antd';

import "./Layout.css";

class HeaderMain extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth; // added
    const { Search } = Input;

    const jobPostLink = (
      <Link to='/post_job' className='item'>
          <Button>Post Job</Button>
      </Link> 
    );

    const viewAppliedJob = (
      <Link to='/view_jobs' className='item'>
          <Button>View Applied Job</Button>
      </Link> 
    );

    const feelingLucky = (
      <Button>I Feel Lucky</Button>
    );

    const jobViewLink = (
      <Link to='/view_jobs' className='item'>
          <Button>View Applied Jobs</Button>
      </Link>
    );

    const homePageEmployeeLink = (
      <Link to='/home_employee' className='item'>
          <Button>Home</Button>
      </Link>
    );

    const homePageEmployerLink = (
      <Link to='/home' className='item'>
          <Button>Home</Button>
      </Link>
    );
    
    const searchButton = (
        <Search
        placeholder={"Search"}
        allowClear
      />
    );

    // added
    const guestLinks = (
        <Link to='/register_employee' className='item'>
          <Button>Register</Button>
        </Link>    
    );

    // updated
    return (
      <div className='ui inverted menu' style={{ borderRadius: '0' }}>
        {isAuthenticated && user.is_employee && homePageEmployeeLink}
        {isAuthenticated && user.is_employer && homePageEmployerLink}
        {isAuthenticated && user.is_employer && jobPostLink}
        {isAuthenticated && user.is_employee && jobViewLink}
        {!isAuthenticated && guestLinks}
        <div className='search-button-container'>
            {searchButton}          
        </div>
      </div>
    );
  }
}

// added
const mapStateToProps = state => ({
  auth: state.auth
});

// updated
export default connect(
  mapStateToProps
)(HeaderMain);