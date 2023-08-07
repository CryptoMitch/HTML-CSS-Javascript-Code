// This is some code I used in my CryptoCompanion.app web application.

import React from 'react';

const Coin360Widget = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <iframe
      src="https://coin360.com/widget/map?utm_source=embed_map"
      title="Coin360.com: Cryptocurrency Market State"
      width="80%"
      height="700px"
    ></iframe>
  </div>
);

export default Coin360Widget;