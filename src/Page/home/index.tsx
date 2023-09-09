import React, { useEffect } from "react";
import { pokemonListService, pokemonDetailService } from "@/service/";
import SearchFrom from "@/components/SearchFrom";

const HomePage = () => {
  const callData = async () => {
    const data = await pokemonDetailService.getPokemonDetail("ditto");
    console.log("data", data.data);
  };

  useEffect(() => {
    callData();
  }, []);
  return (
    <div className=" w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img src="/img/logo.webp" className="max-h-[80px] mt-[20px]" alt="" />
      </div>
      <SearchFrom />
    </div>
  );
};

export default HomePage;
