import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-full" style={{ minHeight: "100vh" }}>
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};
