import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <main className="flex min-h-screen py-2 px-8 flex-col bg-background antialiased">
      <Outlet />
    </main>
  );
}
