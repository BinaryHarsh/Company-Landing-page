import Header from "./components/Header";

function App() {
  return (
    <>
    <div className="border-bottom border-2">
    <Header/>
    </div>
    
      <div className="container-sm">100% wide until small breakpoint</div>
      <div className="container-md">100% wide until medium breakpoint</div>
    </>
  );
}

export default App;