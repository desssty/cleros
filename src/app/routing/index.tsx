import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "shared/ui/main-layout";
import { lazy, Suspense } from "react";

const MainPage = lazy(() => import("pages/main"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <MainPage />
          </Suspense>
        ),
      },
    ],
  },
]);
