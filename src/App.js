import React from 'react';
import { Switch, Route } from 'react-router';
import GlobalStorage from './context/GlobalStorage';

import { Login, Foods, Profile, Drinks, DrinkRecipe, FoodRecipe, DrinkProgress,
  ExploreFood, Explore, ExploreDrink, ExploreFoodIng, ExploreFoodArea, ExploreDrinkIng,
  RecipesDone, RecipesFav, FoodProgress, NotFound } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <GlobalStorage>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/perfil" component={ Profile } />

          {/* Export Foods */}
          <Route exact path="/comidas" component={ Foods } />
          <Route exact path="/comidas/:id" component={ FoodRecipe } />
          <Route exact path="/comidas/:id/in-progress" component={ FoodProgress } />

          {/* Export Drinks */}
          <Route exact path="/bebidas" component={ Drinks } />
          <Route exact path="/bebidas/:id" component={ DrinkRecipe } />
          <Route exact path="/bebidas/:id/in-progress" component={ DrinkProgress } />

          {/* Export Explore */}
          <Route exact path="/explorar" component={ Explore } />
          <Route exact path="/explorar/comidas" component={ ExploreFood } />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ ExploreFoodIng }
          />
          <Route exact path="/explorar/comidas/area" component={ ExploreFoodArea } />
          <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ ExploreDrinkIng }
          />

          {/* Export Recipes */}
          <Route exact path="/receitas-feitas" component={ RecipesDone } />
          <Route exact path="/receitas-favoritas" component={ RecipesFav } />

          <Route component={ NotFound } />
        </Switch>
      </GlobalStorage>
    </div>
  );
}

export default App;
