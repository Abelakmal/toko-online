import React from 'react';
import { Link } from 'react-router-dom';

export default function Kembali() {
  return (
    <div>
      <Link to="/">
        <div className="m-2 absolute  mt-4">
          <span className="border p-2 bg-green-600 rounded text-white">kembali >>></span>
        </div>
      </Link>
    </div>
  );
}
