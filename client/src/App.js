import React, { useState } from 'react';
import { Switch, Route } from 'react-router'

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" exact component={MovieList}/>
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
