
import {Route
} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
function App() {
  return (
   <>
     <div className="container">
       <Navbar/>
       <br/>
       <Route path="/" element={<MovieList/>}></Route>
       <Route path="/" element={<MovieDetails/>}></Route>
     </div>
   </>
  );
}

export default App;
