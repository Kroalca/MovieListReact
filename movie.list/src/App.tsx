import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { LoginPage } from './module/pages/LoginPage';
import { MoviePage } from './module/pages/MoviePage';
import { PopularMoviesPage } from './module/pages/PopularMoviesPage';
import { MainLayout } from './module/shared/layout/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PopularMoviesPage />}/>
          <Route path="movie" element={<PopularMoviesPage />} />
          <Route path="movie/:id" element={<MoviePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;
