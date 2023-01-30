import { Button } from "./components/Button/Button";
import { Gentleman } from "./components/Gentleman/Gentleman";
import { Info } from "./components/Info/Info";

const App = (): JSX.Element => {
  const gentlemen = [
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "img/bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      id: 2,
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "img/fary.jpg",
      alternativeText: "The Fary pointing at you",
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "img/julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ];

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info />
        <Button />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentleman) => (
            <li className="gentleman" key={gentleman.id}>
              <Gentleman
                name={gentleman.name}
                status={gentleman.status}
                profession={gentleman.profession}
                twitter={gentleman.twitter}
                picture={gentleman.picture}
                alternativeText={gentleman.alternativeText}
                selected={gentleman.selected}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
