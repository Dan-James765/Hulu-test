import Thumbnail from "../Thumbnail Components/Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <>
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </FlipMove>
      <h1>test</h1>
    </>
  );
}

export default Results;
