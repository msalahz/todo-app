import { Outlet } from "react-router";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-3">
      <Outlet />
    </main>
  );
}
