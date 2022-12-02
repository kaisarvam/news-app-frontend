import { Grid } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
//import "./App.css";
import NewsAll from "./components/pages/NewsAll";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{backgroundColor:"green"}}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <div style={{backgroundColor:"red",width:"80%"}}>
        <NewsAll />
        </div>
      </Grid>
      </div>
    </QueryClientProvider>
  );
}

export default App;
