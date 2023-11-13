import React from 'react';
import { Link } from 'react-router-dom';

export default function Kembali(props) {
  console.log(props.directory);
  return (
    <div>
      <Link to="/">
        <div className={`m-2 absolute  mt-4 bg-${props.color} p-2 rounded`}>
          <span className='text-blue-600'>Home </span>/ <span>{props.directory}</span>
        </div>
      </Link>
    </div>
  );
}
