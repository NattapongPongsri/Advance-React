import { useState } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "@/Page/home";
import DetailPage from "@/Page/detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);

  return (
    <div className="bg-[url('/img/list_bg.jpg')] min-h-[100vh]">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
