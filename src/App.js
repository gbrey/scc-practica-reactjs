import "./styles.css";

import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <Counter initialValue={10} />
    </div>
  );
}
