import { Route, Routes } from 'react-router-dom';

import './App.scss'

import { restaurants } from './shared/data';

import { Home } from './pages/home/Home'
import { ContextRestaurant } from './context/ContextRestaurant'
import { Header } from './shared/Header';
import { FavoritePage } from './pages/favorite/favoritePage';
import { DetailsPage } from './pages/details/DetailsPage';
import { ContextFavoriteProvider } from './context/ContextFavorite';

function App() {

  return (
    <>
      <Header />
      <ContextRestaurant.Provider value={{restaurantsAll: restaurants}}>
      <ContextFavoriteProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </ContextFavoriteProvider>
      </ContextRestaurant.Provider>
    </>
  )
}

export default App
