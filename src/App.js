import React, { useState } from "react";
import data from "./Data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>Birthday Reminder</h2>
        <h3>0 Birthday today</h3>
        <List />
        <button onClick={() => {}}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
