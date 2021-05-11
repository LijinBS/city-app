import { Provider } from "react-redux";
import store from "./shared/redux/Store";


import './App.scss';
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
