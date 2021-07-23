import React from 'react';
import './App.css';
import { client } from './client';

class App extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()
    .then((response) => {
        console.log(response);
    })
    .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <main>
            <div className="wrapper">

            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
