import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoryPage } from "./Pages/CategoryPage";
import { MainLayout } from "./Layout/MainLayout";
import { Details } from './Pages/DetailsPage'
// import { LoginPage } from "./Pages/LoginPage";
// import { NotFoundPage } from "./Pages/NotFoundPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* // Definere hovedruten med et element, der repræsenterer hovedlayoutet (MainLayout) */}
        <Route path="/" element={<MainLayout />}>
          {/*  vise kategorisiden */}
          <Route path='/category/:category' element={<CategoryPage />} />
          {/* vise detaljesiden for en artikel */}
          <Route path='/details/:id' element={<Details />} />
        </Route>
        {/* <Route path="/login" element={<LoginPage title="LOGIN" />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter >
  );
}

export default App;
