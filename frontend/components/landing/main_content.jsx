import React from 'react';
import DiscoveryPage from '../discovery/discovery_container';
import SponsorBookPage from '../sponsor/sponsor_container';
import SponsorShelfPage from '../sponsor/shelf_container';
import QuotePage from '../quotes/quotes_container';

class MainContent extends React.Component {
  render() {
    return (
      <div id="main-main">
        <div id="main-content">
          <div id="left-container">
            <DiscoveryPage />
            <QuotePage />
          </div>
          <div id="right-container">
            <SponsorBookPage />
            <SponsorShelfPage />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
