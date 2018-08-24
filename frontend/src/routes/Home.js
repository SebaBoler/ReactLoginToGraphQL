import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
      return (
        <div>
            <p>Page to login link</p>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
      );
    }
  }
  
  export default (Home);