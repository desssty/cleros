import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const MainPage = lazy(() => import("./MainPage"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
}
