import MovieThumbnail from "./MovieThumbnail";

function Movies({ results, title }) {
  return (
    <div className="flex relative flex-col space-y-2 max-w-7xl my-10 px-8 mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide snap-x p-2 -m-2">
        {results.map((res) => (
          <MovieThumbnail key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
