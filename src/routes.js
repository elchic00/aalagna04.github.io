import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import PlaySnake from "./components/Snake";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/snake" element={<PlaySnake />} />
    </Routes>
  );
};