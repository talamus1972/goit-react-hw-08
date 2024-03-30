import { Suspense } from "react";
import AppBar from "../AppBar/App.Bar";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <div style={{ margin: "o auto", padding: "0 16px" }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
     <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
