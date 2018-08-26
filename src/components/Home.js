import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/home.style';

export default function Home() {
  return (
    <div>
      <p style={s.p}>
        Home
      </p>
      <p style={s.p}>
        Please see the ... for instructions on how to
        use this boilerplate to deploy your own single page app using GitHub Pages.
      </p>
      <div style={s.pageLinkContainer}>
        <Link to="/example">
          Example page
        </Link>
      </div>
      <div style={s.pageLinkContainer}>
        <Link to="/example/two-deep?field1=foo&field2=bar#boom!">
          Example two deep with query and hash
        </Link>
      </div>
    </div>
  );
}
