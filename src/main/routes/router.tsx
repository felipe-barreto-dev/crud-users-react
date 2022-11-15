import { MakeHome } from '@/main/factories/pages';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
