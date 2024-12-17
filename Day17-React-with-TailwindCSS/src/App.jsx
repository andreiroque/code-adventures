import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="h-screen font-mono">
      <Navigation />
      <div className="h-4/5 flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-8xl">Hello, World!</h1>
      </div>
    </div>
  );
};

export default App;
