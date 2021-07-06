import { Card } from "../components/Card";
import { DarkModeToggle } from "../components/DarkmodeToggle";

function Home(props: any) {
  const {setSelectedTheme} = props
  return (
    <div>
      <h1>Home</h1>

      <Card title="Sven" paragraph="Is Cool" />
      <DarkModeToggle setSelectedTheme={setSelectedTheme} />
    </div>
  );
}

export default Home;
