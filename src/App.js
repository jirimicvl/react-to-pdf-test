import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function App() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {
          ({ toPdf }) => <button onClick={toPdf}>Convert to Pdf</button>
        }
      </Pdf>
      {/* <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div> */}

      {/* Testing another paragraph */}
      <div ref={ref}>
        <h1>Test test</h1>
        <h2>Meow meow</h2>
      </div>
    </div>
  );
}

export default App;
