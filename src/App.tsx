import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SVGInput } from './SVGInput/SVGInput';
import { SVGControlPanel } from './SVGControlPanel/SVGControlPanel';
import { SVGOutput } from './SVGOutput/SVGOutput';
import './App.css';

const exampleSvg = `<svg width="300" height="300">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
  <circle cx="60" cy="80" r="30" stroke="green" stroke-width="4" fill="yellow" />
</svg>`;

function App() {
  const [svgCode, setSvgCode] = useState<string>();
  const [svgActual, setSvgActual] = useState<string>();

  // Rewrite svgActual if svgCode changes (because it means we got new initial input)
  useLayoutEffect(() => {
    if (svgCode !== svgActual) {
      setSvgActual(svgCode);
    }
  },
    [svgCode]
  );

  return (
    <div className="App">
      <header className="App-header">
        SVG Explorer
      </header>
      <div className="row">
        <div className="col-6">
          <div className='codeInput'>
            <SVGInput svg={svgCode} setSvg={setSvgCode} />
            <i>Example: <code className="example-code" onClick={() => setSvgCode(exampleSvg)}>{exampleSvg}</code></i>
          </div>
          <div className='controlPanel'>
            <SVGControlPanel code={svgActual} setCode={setSvgActual} />
          </div>
        </div>
        <div className="col-6">
          Output:
          <br />
          <SVGOutput svg={svgCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
