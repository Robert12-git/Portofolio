import * as React from 'react';
import Appbar from './components/AppBar';

function App () {
  React.useEffect (() => {
    document.title = "Robert-Mihai Ciurea"
  }, []);

  return (
    <React.Fragment>
      <Appbar/>
    </React.Fragment>
  );
}

export default App;