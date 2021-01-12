import React from 'react';
import { Provider } from 'react-redux';
import 'rmwc/dist/styles'
import getStore  from './store';
import { Main } from './Main';

function App() {
  return (
    <Provider store={getStore()}>
      <div className="App">
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
