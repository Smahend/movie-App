import React, { useEffect, useState } from 'react'

function MovieList() {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
       axios.get("/movies/")
       .then(res=>setMovies(res.data))
       .catch(err=> console.log(err));
    },[]);
  return (
    <>
       <div>
            <h3>Movie List</h3>
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                       <th>Movie Name</th>
                       <tr>Rating</tr>
                       <th>ReleasedDate</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        movies.map(movie=>(
                            <tr key={movie.id}>
                                <td>{movie.movieName}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.releasedDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
       </div>
    </>
  )
}

export default MovieList