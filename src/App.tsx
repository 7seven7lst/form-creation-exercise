import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLoading from './components/PageLoading';
import NotFound from './components/NotFound';

const BandPage = lazy(() => import('./pages/BandPage'));
const HomePage = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoading />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route path="/band" element={<NotFound />} />
        <Route
          path="/band/:bandId"
          element={
            <Suspense fallback={<PageLoading />}>
              <BandPage />
            </Suspense>
          }
        />
        <Route path="/band/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
