import React from 'react';

function App() {
  const [color, setColor] = React.useState("red");

  const blueColor = () => {
    setColor("blue");
  };

  const redColor = () => {
    setColor("red");
  };

  const greenColor = () => {
    setColor("green");
  };

  const amberColor = () => {
    setColor("orange");
  };

  const grayColor = () => {
    setColor("gray");
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 bottom-12 flex justify-center">
        <div className="bg-white rounded-md p-4 shadow-md flex space-x-4">
          <button
            onClick={blueColor}
            className="rounded-full p-4 bg-blue-800"
            aria-label="Blue Background"
          ></button>
          <button
            onClick={redColor}
            className="rounded-full p-4 bg-red-800"
            aria-label="Red Background"
          ></button>
           <button
            onClick={greenColor}
            className="rounded-full p-4 bg-green-800"
            aria-label="green Background"
          ></button>
          <button
            onClick={amberColor}
            className="rounded-full p-4 bg-amber-800"
            aria-label="amber Background"
          ></button>
          <button
            onClick={grayColor}
            className="rounded-full p-4 bg-gray-500"
            aria-label="gray Background"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
