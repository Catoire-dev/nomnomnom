import { Route, Routes } from 'react-router-dom';

import './App.scss'

import { restaurants } from './shared/data';

import { Home } from './pages/home/Home'
import { ContextRestaurant } from './context/ContextRestaurant'
import { Header } from './shared/Header';
import { FavoritePage } from './pages/favorite/favoritePage';
import { DetailsPage } from './pages/details/DetailsPage';
import { ContextFavoriteProvider } from './context/ContextFavorite';
import { MouseRunning } from './shared/MouseRunning';

function App() {
  const homeRoute = "/";
  const elementsRoute = "/details/:id";
  const favoriteRoute = "/favorite";

  return (
    <>
      <Header />
      <ContextRestaurant.Provider value={{restaurantsAll: restaurants}}>
      <ContextFavoriteProvider>
        <Routes>
          <Route path={homeRoute} element={<Home />} />
          <Route path={elementsRoute} element={<DetailsPage />} />
          <Route path={favoriteRoute} element={<FavoritePage />} />
        </Routes>
      </ContextFavoriteProvider>
      </ContextRestaurant.Provider>
      <MouseRunning />
    </>
  )
}

export default App
