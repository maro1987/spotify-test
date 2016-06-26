import React, { PropTypes } from 'react';

export default function CoreLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.object.isRequired
};
