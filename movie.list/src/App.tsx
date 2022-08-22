import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { MoviesPage } from './module/pages/MoviesPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MoviesPage />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
