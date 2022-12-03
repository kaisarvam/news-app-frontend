import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPageSide from "./components/Elements/LoginPageSide";
import SignUpPage from "./components/Elements/SignUpPage";
import NewsPageHome from "./components/pages/NewsPageHome";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/home" element={<NewsPageHome />}></Route>
          <Route path="/login" element={<LoginPageSide />}></Route>
          <Route path="/signUp" element={<SignUpPage />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
