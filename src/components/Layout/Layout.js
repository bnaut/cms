
import React from 'react';

import Header from '../../containers/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

const Layout = ({ children, style }) => {
  return (
    <div 
      id="layout"
      style={{
        display: `grid`,
        gridTemplateColumns: `200px 1fr`,
        gridTemplateRows: `50px 1fr`,
      }}
    >
      <Header style={{ gridColumn: `1/3` }} />
      <Sidebar 
        style={{ 
          minHeight: `calc(100vh - 50px)`,
        }}
      />
      <main style={style}>{children}</main>
      <p 
        style={{
          color: `#4f566b`,
          fontSize: `11px`,
          position: `fixed`,
          bottom: `15px`,
          left: `15px`
        }}
      >
        Proudly powered by 
        <span 
          style={{
            color: `#3388dd`
          }}
        > 
          {' Gather'}
        </span>
      </p>
    </div>
  )
};

export default Layout;
