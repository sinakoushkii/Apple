import { Route, Routes } from "react-router-dom";
import router from "./routes";


const App = () => {
  return (
    <div className="container mx-auto">
      <p>navbar</p>
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      footer
    </div>
  );
};
export default App;
