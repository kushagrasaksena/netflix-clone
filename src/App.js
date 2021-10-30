import "./App.css";
import Row from "./Row.js";
import requests from "./request.js";

// function App() {
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Hey Header! */}
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      </header>
    </div>
  );
}

// export default App;
