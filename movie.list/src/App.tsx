import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { LoginPage } from './module/pages/LoginPage';
import { MoviePage } from './module/pages/MoviePage';
import { PopularMoviesPage } from './module/pages/PopularMoviesPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PopularMoviesPage />}/>
      <Route path="/movie" element={<PopularMoviesPage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
