import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import FireBaseApp from "./utils/FireBase/firebase.init";
import { getAuth } from "firebase/auth";
import NewsPageHome from "./components/pages/NewsPageHome";

//const auth = getAuth(FireBaseApp);
//console.log("found auth :",auth)

const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}>
    <NewsPageHome/>
  </QueryClientProvider>;
}

export default App;
