import { PlusIcon, XIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import Header from "../../components/Header";

const Movie = ({ result }) => {
  const image_url = "https://image.tmdb.org/t/p/original/";
  const [showPlayer, setShowPlayer] = useState(false);
  const index = result.videos.results.findIndex((i) => i.type === "Trailer");

  return (
    <div className="relative">
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative z-50">
        <div className="relative min-h-[calc(100vh-72px)] opacity-90 shadow-inner">
          <Image
            src={`${image_url}${result.backdrop_path || result.poster_path}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-y-48 md:inset-y-auto md:bottom-16 inset-x-4 md:inset-x-12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold opacity-90">
            {result.title || result.original_name}
          </h1>
          <div className="flex items-center space-x-3 md:space-x-6">
            <button className="text-xs md:text-base bg-secondary text-primary flex items-center justify-center py-2.5 px-6 rounded hover:bg-opacity-60 transform hover:scale-105 transition duration-200">
              <img
                src="/images/play-icon-black.svg"
                alt="play-icon"
                className="h-6 md:h-8"
              />
              <span className="uppercase font-medium tracking-wide">Play</span>
            </button>
            <button
              className="text-xs md:text-base bg-primary text-secondary flex items-center justify-center py-2.5 px-6 rounded hover:bg-opacity-60 transform hover:scale-105 transition duration-200 "
              onClick={() => setShowPlayer(true)}
            >
              <img
                src="/images/play-icon-white.svg"
                alt="play-icon"
                className="h-6 md:h-8"
              />
              <span className="uppercase font-medium tracking-wide">
                Trailer
              </span>
            </button>
            <div className="rounded-full border-2 cursor-pointer p-1 bg-primary bg-opacity-20 transform hover:scale-105 transition duration-200 hover:opacity-60 ">
              <PlusIcon className="h-7" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 cursor-pointer p-1 bg-primary bg-opacity-20 transform hover:scale-105 transition duration-200 hover:opacity-60">
              <img src="/images/group-icon.svg" alt="group-icon" />
            </div>
          </div>
          <p className="text-sm md: text-base opacity-90 ">
            {result.release_date || result.first_air_date}•{" "}
            {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{" "}
            {result.genres.map((g) => g.name + " ")}{" "}
          </p>
          <h4 className="text-base md:text-lg max-w-4xl font-medium opacity-90">
            {result.overview}
          </h4>
        </div>
        {/* Trailer show area*/}
        {showPlayer && (
          <div
            className="absolute inset-0 bg-primary opacity-80 h-full w-full z-50"
            onClick={() => setShowPlayer(false)}
          />
        )}

        <div
          className={`absolute top-3 inset-x-[7%]  md:inset-x-[13%] rounded overflow-hidden transition duration-200 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between bg-primary text-secondary p-4">
            <span className="font-medium">{result.title} trailer</span>
            <div className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-80 hover:bg-primary">
              <XIcon className="h-5" onClick={() => setShowPlayer(false)} />
            </div>
          </div>
          <div className="relative pt-[56.25%]">
            {showPlayer && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movie;

const url = "https://api.themoviedb.org/3/movie/";

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id);

  const request = await fetch(
    `${url}${id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());

  return {
    props: {
      result: request,
    },
  };
}
