import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { PUBLIC_ROUTES } from "./routes";
import { CustomToaster } from "./components/common/CustomToaster";

function App() {
  return (
    <>
      <CustomToaster />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path={PUBLIC_ROUTES.login} element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
