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
  const homeRoute = "/";
  const elementsRoute = "/details/:id";
  const favoriteRoute = "/favorite";
  const imgFooter = "./src/assets/img/mice.png";
  const imgAltFooter = "A mice"

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
      <img id="mice-footer" src={imgFooter} alt={imgAltFooter}/>
    </>
  )
}

export default App
