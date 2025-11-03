export default function App() {
  const handleclick = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={handleclick}   
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700 transition"
        >
          Click Me
        </button>
      </div>
    </>
  );
}
