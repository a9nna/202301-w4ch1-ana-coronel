import { Button } from "./components/Button/Button";
import { Info } from "./components/Info/Info";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info />
        <Button />
      </section>
    </div>
  );
};

export default App;
