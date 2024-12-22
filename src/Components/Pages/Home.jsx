import React, { useState } from "react";

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="bg-blue-700 h-full w-full flex flex-col items-center justify-center text-white">
        <div className="h-auto w-full text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to the Homepage</h1>
        </div>
      <button
        className="bg-white text-blue-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-all"
        onClick={toggleMessage}
      >
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      {showMessage && (
        <div className="h-auto w-full text-center">
            <p className="mt-6 text-lg font-light">
                This is an interactive homepage For testing purpose ..............!
            </p>
        </div>
      )}
    </div>
  );
};

export default Home;
