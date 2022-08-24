import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { PopularMoviesPage } from './module/pages/PopularMoviesPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PopularMoviesPage />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
