import ButtonComp from "./components/ButtonComp";
import Container from "./components/Container";
import InputComp from "./components/InputComp";
import Status from "./components/Status";
import User from "./components/User";
import User2 from "./components/context/User";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import Counter from "./components/state/Counter";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import CounterComp from "./components/class/CounterComp";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";

function App() {
  const handleClickfunction = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    alert(event.target);
    console.log(id);
  };
  return (
    <>
      {/* Children type and children as a jsx type */}
      <Status>
        <HeadingFunction>
          This is the Heading in the heading tag
        </HeadingFunction>
      </Status>

      {/* passing function to the children and input changes event  */}
      <ButtonComp handleButtonClick={handleClickfunction} />
      <InputComp />

      {/* Style props or css props  */}
      <Container
        styles={{
          border: "1px solid red",
          color: "gray",
          fontSize: "1.2rem",
          fontWeight: 800,
        }}
      />

      {/* usestate future value and type assertion */}
      <User />

      {/* useReducer hook with simple type and with strict action types */}
      <Counter />

      {/* useContext hook simple and with future values*/}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User2 />
      </UserContextProvider>

      {/* useRef hook with dom reference and to manage mutable refs */}
      <DomRef />
      <MutableRef />

      {/* class component with typescript */}
      <CounterComp message="This is a message for class component" />

      {/* more advance component props */}
      <Private isLoggedIn={true} component={Profile} />

      {/* Generic Props */}
      <List
        items={["Batman", "superman", "spiderman", "iron man"]}
        onClick={(item) => alert(item)}
      />
      <List items={[1, 2, 3, 4, 5]} onClick={(item) => alert(item)} />
      {/* <List
        items={[{ name: "jarman" }, { name: "jit" }, { name: "singh" }]}
        onClick={(item) => alert(item)}
      /> */}

      {/* Restricting props */}
      <RandomNumber value={10} isPositive/>
    </>
  );
}

type HeadingProps = {
  children: string;
};
const HeadingFunction = ({ children }: HeadingProps) => <h1>{children}</h1>;

export default App;
