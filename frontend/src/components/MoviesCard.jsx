import React from "react";

const MoviesCard = (props) => {
  return (
    <div className="py-3  sm:max-w-xl sm:mx-auto">
      <div className="bg-white shadow-lg border-gray-100 max-h-80	h-80 border sm:rounded-3xl p-8 flex space-x-8">
        <div className="h-48 overflow-visible w-1/2">
          <img
            className="rounded-3xl shadow-lg"
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold">{props?.movieData?.name}</h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">
              {props?.movieData?.genre}
            </div>
            <div className="text-lg text-gray-800">
              {props?.movieData?.year}
            </div>
          </div>
          <p className=" text-gray-400 max-h-40 overflow-y-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
