import { Route, Routes } from 'react-router-dom';

import './App.scss'

import { restaurants } from './shared/data';

import { Home } from './pages/home/Home'
import { ContextRestaurant } from './context/ContextRestaurant'
import { Header } from './shared/Header';
import { FavoritePage } from './pages/favorite/favoritePage';
import { DetailsPage } from './pages/details/DetailsPage';

function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={
          <ContextRestaurant.Provider value={{restaurantsAll: restaurants}}>
            <Home />
          </ContextRestaurant.Provider>
        } />

        <Route path="/details/:id" element={
          <ContextRestaurant.Provider value={{restaurantsAll: restaurants}}>
            <DetailsPage />
          </ContextRestaurant.Provider>
        } />
        
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </>
  )
}

export default App
