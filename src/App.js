import { Container } from "@mui/system";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import NewsMainPage from "./components/pages/NewsMainPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container sx={{backgroundColor:"#F5EBE0"}}>
        <NewsMainPage/>
        </Container>
    </QueryClientProvider>
  );
}

export default App;
