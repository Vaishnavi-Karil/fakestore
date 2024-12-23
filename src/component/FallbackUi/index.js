// FallbackUI.js
import React from 'react';

export const FallbackUI = ({ error, resetErrorBoundary }) => (
  <div style={{ background: 'red', color: 'white', borderRadius: '20%' }}>
    <h1>Something Went Wrong</h1>
  </div>
);
