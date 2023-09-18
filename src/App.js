import "./App.css";
import FunctionalComponent from "./Component/FunctionalComponent";
import ClassComponent from "./Component/ClassComponent";
import Message from "./Component/Message";
import Counter from "./Component/Counter";
import EventBind from "./Component/EventBind";
import FormClass from "./Component/FormClass";

function App() {
  return (
    <div className="App">
      <FormClass />
      {/* <EventBind /> */}
      {/* <Counter /> */}

      {/* <Message /> */}

      {/* <FunctionalComponent name="Function Component">
        <p>Function Child Property</p>
      </FunctionalComponent> */}
      {/*<ClassComponent n nent">
        <p>Class Child Property</p>
      </ClassComponent> */}
    </div>
  );
}

export default App;
