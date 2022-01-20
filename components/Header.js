import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="sticky top-0 z-[1000] bg-primary px-10 min-h-[5vmin] max-h-96h flex flex-row items-center text-xl max-h-96 min-h-60 font-body text-secondary">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor pointer"
      />
      <div className="hidden ml-10 md:flex items-center md:space-x-2 lg:space-x-6">
        <a className="nav-items group">
          <HomeIcon className="h-4 mb-[0.2rem]" />
          <span className="span">Home</span>
        </a>
        <a className="nav-items group">
          <SearchIcon className="h-4 mb-[0.2rem]" />
          <span className="span">Search</span>
        </a>
        <a className="nav-items group">
          <PlusIcon className="h-4 mb-[0.2rem]" />
          <span className="span">Watchlist</span>
        </a>
        <a className="nav-items group">
          <StarIcon className="h-4 mb-[0.2rem]" />
          <span className="span">Originals</span>
        </a>
        <a className="nav-items group">
          <img src="/images/movie-icon.svg" className="h-5 mb-[0.2rem]" />
          <span className="span">Movies</span>
        </a>
        <a className="nav-items group">
          <img src="/images/series-icon.svg" className="h-5 mb-[0.2rem]" />
          <span className="span">Series</span>
        </a>
      </div>
      <button className="ml-auto text-center pb-2  md:pl-6">Login</button>
    </div>
  );
}
