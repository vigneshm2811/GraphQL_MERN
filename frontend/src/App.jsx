import "./App.css";
import Header from "./components/Header";
import Movies from "./containers/Movies";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <>
      <ModalProvider>
        <Header />
        <Movies />
      </ModalProvider>
    </>
  );
}

export default App;
