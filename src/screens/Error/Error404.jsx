import React from "react";

const Error404 = () => {
  return       <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
  <div className="text-center">
 
    <div className="animate-spin-slow mb-6">
      <svg
        className="w-24 h-24 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6 4a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>

    
    <h1 className="text-8xl font-extrabold text-white mb-4 animate-pulse ">
      404
    </h1>
    <p className="text-2xl text-white font-light mb-8 animate-fade-in">
      صفحه‌ای که به دنبال آن بودی پیدا نشد!
    </p>

    
    <button
      onClick={() => window.history.back()}
      className="px-8 py-4 text-xl font-bold text-blue-500 bg-white rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      بازگشت
    </button>
  </div>
</div>;
};

export  {Error404};
