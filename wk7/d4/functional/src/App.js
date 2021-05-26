import "./App.css";
import PersonCard from "./components/PersonCard";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"John"}
        firstName="Smith"
        age={42}
        hairColor={"brown"}
      />
      <Counter />
      <UserForm />
    </div>
  );
}

export default App;
