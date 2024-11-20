//App.jsx
import { Route, Routes } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    <div>
      navbar
      <Routes>
        {router.map((route,index)=><Route key={index} path={route.path} element={<route.element />} />)}
      </Routes>
      footer
    </div>
  );
};
export default App;
