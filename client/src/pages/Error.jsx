import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  if(error.status === 404) {
  return (
    <Wrapper>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>we can't seem to find the page youare looking for</p>
        <Link to="/dashboard">back home</Link>
      </div>
    </Wrapper>
  );
    } else {
      return (
    <Wrapper>
       <div>
      <h3>somethink go wrong</h3>
    <Link to='/'>Home Page</Link>
    </div>
    </Wrapper>
   
  )
    }
  
}

export default Error