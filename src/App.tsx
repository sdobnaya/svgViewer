import React, { useState } from 'react';
import { SVGInput } from './SVGInput/SVGInput';
import './App.css';

const exampleSvg = `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>`;

function App() {
  const [svgCode, setSvgCode] = useState<string>();

  return (
    <div className="App">
      <header className="App-header">
        SVG Explorer
      </header>
      <div className="row">
        <div className="col-6">
          <SVGInput svg={svgCode} setSvg={setSvgCode} />
          <i>Example: <code onClick={() => setSvgCode(exampleSvg)}>{exampleSvg}</code></i>
        </div>
        <div className="col-6">
          Output:
          <br />
          <iframe sandbox='' srcDoc={svgCode}></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
