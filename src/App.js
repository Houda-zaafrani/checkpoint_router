import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from 'react';
import AddMovie from './component/AddMovie';
import ListMovies from './component/ListMovies';
import data from './data/data';
import FilterMovies from './component/FilterCard';
import { Routes, Route } from "react-router-dom";
import Description from './component/Description';
import FilterCard from './component/FilterCard';

function App() {
   
  const [newMovie, setNewMovie] = useState([]);

  const [movies, setMovies] = useState(data);

  const myTitle = useRef();
  const myUrl = useRef();
  const myDescription = useRef();
  const myRate = useRef();

  const toSearch = useRef();
  const [search, setSearch] = useState("");
  const [rating, setRating]=useState(0)
  const myHandleSearch = (value) => {
    setSearch(toSearch.current.value);
  };
  const handleRate=(rating)=>{
    setRating(rating)
  }
  const myHandleAdd = () => {
    setNewMovie([
      {
        title: myTitle.current.value,
        url: myUrl.current.value,
        description: myDescription.current.value,
        rate: myRate.current.value,
      },
    ]);
    setMovies([...movies, ...newMovie]);
  };
  return (
    <div className="app">
      <div>
        <FilterCard
          handleRate={handleRate}
          toSearch={toSearch}
          myHandleSearch={myHandleSearch}
        />
      </div>

      <div>
        <Routes>
          
          <Route path="/"
            element={
              <ListMovies
                movies={[...movies, ...newMovie].filter(
                  (movie) =>
                    movie.title
                      .toLowerCase()
                      .trim()
                      .includes(search.toLowerCase().trim()) &&
                    movie.rate >= rating
                )}
              />
            }
          />
          <Route path="/description/:id"
            element={<Description movies={[...movies, ...newMovie]} />}
          />
        </Routes>
      </div>

      <div>
        <AddMovie
          myTitle={myTitle}
          myUrl={myUrl}
          myDescription={myDescription}
          myRate={myRate}
          myHandleAdd={myHandleAdd}
        />
      </div>
    </div>
  );
}

export default App;
