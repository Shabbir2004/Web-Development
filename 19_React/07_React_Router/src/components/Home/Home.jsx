import React from "react";
import { Link } from "react-router-dom";
import aiimage from "../Home/ai.jpeg"; // Make sure the path is correct

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl font-sans text-gray-900">
      <aside className="relative w-full overflow-hidden bg-gradient-to-br from-purple-800 via-indigo-900 to-gray-900 rounded-xl sm:py-24 py-12 text-white">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 items-center">
            {/* 👇 AI image moved to left */}
            <div className="flex justify-center sm:justify-start mb-8 sm:mb-0">
              <img className=" mx-15 w-96 opacity-90" src={aiimage} alt="AI Visual" />
            </div>

            {/* 👇 Text + Button on the right */}
            <div className="text-center sm:text-right sm:ml-auto space-y-6">
              <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight mr-9">
                Experience the Future of AI
                <span className="block sm:text-3xl mt-2 font-medium text-indigo-300">
                  Redefining intelligence with every click.
                </span>
              </h2>

              <Link
                className="inline-flex items-center px-6 py-3 font-semibold bg-indigo-600 hover:bg-indigo-500 transition rounded-lg shadow-md"
                to="/"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0l8 6v12l-8 6-8-6v-12l8-6zm0 1.802l-6.666 5v10.396l6.666 5 6.666-5v-10.396l-6.666-5zm-1 4.198h2v7h-2v-7zm0 9h2v2h-2v-2z" />
                </svg>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* 👇 Secondary image section */}
     

      {/* 👇 Heading */}
      <h1 className="text-center text-2xl sm:text-5xl py-12 font-semibold text-gray-800">
        Welcome to Smart AI Solutions
      </h1>
    </div>
  );
}
