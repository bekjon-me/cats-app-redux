import React, { useEffect } from "react";

import CatCard from "./components/CatCard";
import NeighborCatCard from "./components/NeighborCatCard";
import uuid from "react-uuid";
import catRandom from "./utils/catRandom";
import catRandomImage from "./utils/catRandomImage";
import hasCollar from "./utils/collarRandom";
import colorRandom from "./utils/colorRandom";
import { useDispatch, useSelector } from "react-redux";
import { Cat } from "./store/@types.cats";
import { addCat, minusOne, selectCats } from "./store/CatsSlice";

export default function App() {
  const cats = useSelector(selectCats);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
      dispatch(
        addCat({
          id: uuid(),
          name: catRandom(),
          color: colorRandom(),
          age: 0,
          hasCollar: hasCollar(),
          image: catRandomImage(),
          feedTime: 35,
        })
      );
    }, 5000);

    const feedInterval: NodeJS.Timer = setInterval(() => {
      dispatch(minusOne());
    }, 1000);

    return () => {
      // setCats([]);
      clearInterval(interval);
      clearInterval(feedInterval);
    };
  }, []);

  return (
    <div className="flex h-100 w-100 bg-black text-white justify-around p-10">
      <div className="bg-gray-400 rounded-md text-black flex flex-col gap-2">
        <h2 className="text-center mt-2 text-xl">All generated cats</h2>
        {cats?.map((cat: Cat) => (
          <CatCard cat={cat} key={cat.id} />
        ))}
      </div>
      <div className="bg-gray-400 rounded-md text-black flex flex-col gap-2 h-min">
        <h2 className="text-center mt-2 text-xl">
          Cats adopted by my neighbor
        </h2>
        {cats
          ?.filter((a: Cat) => !a.hasCollar)
          ?.map((cat: Cat) => (
            <NeighborCatCard cat={cat} key={cat.id} />
          ))}
      </div>
    </div>
  );
}
