import Main from "./components/common/Main";
import Navbar from "./components/common/Navbar";
import { CalculateProvider } from "./context/CalculateContext";

function App() {
  return (
    <main className="flex flex-col justify-between min-h-[calc(100vh)]">
      <div className="flex flex-col justify-center min-h-[calc(100vh - 60px)] w-[90%] max-w-[450px] mx-auto py-4 flex-grow">
        <Navbar />
        <CalculateProvider>
          <Main />
        </CalculateProvider>
      </div>
    </main>
  );
}

export default App;
