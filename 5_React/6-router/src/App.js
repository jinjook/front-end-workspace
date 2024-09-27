import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Layout from "./components/Layout";
import Error from "./pages/Error";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="create" element={<Create />} />
        </Route>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;

/*
<Routes> : 경로 여러개
  <Route path=보여지는 경로 element={실제 경로} />
  <Route path=보여지는 경로/:뒤에 붙는 url(변경 가능) element={실제 경로} />
</Routes>
*/