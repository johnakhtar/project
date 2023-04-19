import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import React from 'react';
import Categories from './containers/Categories';
import Preview from './components/common/Preview';
import Favourite from './containers/Favourite';

const Router = () => {
    return (
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path='/categories' element={<Categories/> }/>
            <Route  path='/preview/:id/' element={<Preview/>}/>
          <Route  path='/favourites' element={<Favourite/>}/>
        </Routes>
    );
};
export default Router;
