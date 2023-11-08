import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "./components/Navbar";
import ImageCard from "./components/ImageCard";
import { useGlobalApi } from "./contexts/apiContext";

export default function App() {
  const { showImages, totalImages, fetchMoreData } = useGlobalApi();

  return (
    <div className="App">

      <Navbar />
      <InfiniteScroll
        dataLength={showImages.length}
        next={fetchMoreData}
        hasMore={showImages.length !== totalImages}
        loader={<div><img className="w-[100px]" src="https://i.gifer.com/ZKZg.gif" alt="" /></div>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="all-images flex flex-wrap justify-center items-center"
      >
        {showImages.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
