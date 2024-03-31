import { Suspense } from "react";
import AppBar from "../AppBar/App.Bar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import css from "./Layout.module.css"

export default function Layout() {
  return (
    <div>
      <AppBar />
      <div className={css.wrapper}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
}
