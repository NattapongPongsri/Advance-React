import React from "react";
import { generationList, typesList, sortList } from "@/Utils/optionlist";
const SearchFrom = () => {
  return (
    <form className="grid grid-cols-4 gap-x-[20px]">
      <div>
        <label
          htmlFor="generation"
          className="block capitalize mb-2 text-mb font-medium text-white"
        >
          generation
        </label>
        <select
          id="generation"
          className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#3367A4] focus:border-[#3367A4] block w-full p-2.5"
        >
          {/* <option selected>Choose a country</option> */}
          {generationList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`generation-key-${index}`}
                value={index}
                selected
              >
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="type"
          className="block capitalize mb-2 text-mb font-medium text-white"
        >
          Type
        </label>
        <select
          id="type"
          className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#3367A4] focus:border-[#3367A4] block w-full p-2.5"
        >
          {/* <option selected>Choose a country</option> */}
          {typesList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`type-key-${index}`}
                value={item}
                selected
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="sort"
          className="block mb-2 capitalize text-mb font-medium text-white"
        >
          Sort By
        </label>
        <select
          id="sort"
          className="bg-[#253641] capitalize border  border-gray-300 text-white text-sm rounded-lg focus:ring-[#3367A4] focus:border-[#3367A4] block w-full p-2.5"
        >
          {/* <option selected>Choose a country</option> */}
          {sortList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`sort-key-${index}`}
                value={item}
                selected
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="generation"
          className="block mb-2 text-mb font-medium text-white"
        >
          Search
        </label>
        <input
          id="generation"
          className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#3367A4] focus:border-[#3367A4] block w-full p-2.5"
        />
      </div>
    </form>
  );
};

export default SearchFrom;
