import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="sticky bg-primary px-10 min-h-[5vmin] max-h-96h flex flex-row items-center text-xl max-h-96 min-h-60 font-body text-secondary">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor pointer"
      />
      <div className="hidden ml-10 md:flex items-center space-x-6">
        <div className="nav-items group">
          <HomeIcon className="h-4" />
          <p className="span">Home</p>
        </div>
        <div className="nav-items group">
          <SearchIcon className="h-4" />
          <p className="span">Search</p>
        </div>
        <div className="nav-items group">
          <PlusIcon className="h-4" />
          <p className="span">Watchlist</p>
        </div>
        <div className="nav-items group">
          <StarIcon className="h-4" />
          <p className="span">Originals</p>
        </div>
        <div className="nav-items group">
          <img src="/images/movie-icon.svg" className="h-5" />
          <p className="span">Movies</p>
        </div>
        <div className="nav-items group">
          <img src="/images/series-icon.svg" className="h-5" />
          <p className="span">Series</p>
        </div>
      </div>
      <div className="ml-auto">Login</div>
    </div>
  );
}
