import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Header
        title="Insight BI"
        subtitle="Built by Thomas Somers"
        description="Making data-driven decisions easier."
      />
      <Dashboard />
    </>
  );
}

export default App;