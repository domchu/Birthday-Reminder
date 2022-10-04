import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>Birthday Reminder</h2>
        <h3>0 Birthday today</h3>
        <List />
      </section>
    </main>
  );
}

export default App;
