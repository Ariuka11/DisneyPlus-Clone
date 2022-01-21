import Image from "next/image";
import { useRouter } from "next/router";

const TvShowThumbnail = ({ res }) => {
  const url = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <div
      className="flex min-w-[200px] min-h-[300px] md:min-w-[250px] md:min-h-[380px] overflow-hidden shadow-xl rounded-lg cursor-pointer border-4 border-secondary border-opacity-5 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 my-2"
      onClick={() => router.push(`/show/${res.id}`)}
    >
      <Image
        src={`${url}${res.poster_path || res.backdrop_path}`}
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};

export default TvShowThumbnail;
