import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPageSide from "./components/pages/LoginPageSide";
import SignUpPage from "./components/pages/SignUpPage";
import NewsPageHome from "./components/pages/NewsPageHome";
import NotFound from "./components/pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsPageHome />}></Route>
          <Route path="/login" element={<LoginPageSide />}></Route>
          <Route path="/signUp" element={<SignUpPage />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
