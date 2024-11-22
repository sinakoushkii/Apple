import { Route, Routes } from "react-router-dom";
import router from "./routes";
import Navbar from "@components/shared/Navbar";

const App = () => {
  return (
    <div className="container mx-auto px-7">
      <Navbar />
      <Routes>
        footer
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      footer
    </div>
  );
};
export default App;
