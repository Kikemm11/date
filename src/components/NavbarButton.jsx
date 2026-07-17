import React from 'react';
import { Link } from 'react-router-dom';

function NavbarButton({ content, link }) {
    return (
        <div>
            <Link to={link}>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full">
                {content}
                </button>
            </Link>
        </div>
    );
  }
  
  export default NavbarButton;