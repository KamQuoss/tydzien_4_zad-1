import "./styles.css";

import Form from "./FormFunction";
import FormClassComp from "./FormClass";

export default function App() {
  return (
    <div className="App">
      <p>Below functional component</p>
      <Form />
      ...
      <p>Below class component</p>
      <FormClassComp />
    </div>
  );
}
