import { Container } from "@mui/system";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import LayoutWrapper from "./components/Elements/LayoutWrapper";
import NewsMainPage from "./components/pages/NewsMainPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutWrapper>
        <Container maxWidth="xl" sx={{ backgroundColor: "#F5EBE0" }}>
          <NewsMainPage />
        </Container>
      </LayoutWrapper>
    </QueryClientProvider>
  );
}

export default App;
