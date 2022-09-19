import * as React from 'react';
import Appbar from './components/AppBar';
import Splash from './components/Splash';

function App () {
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect (() => {
    document.title = "Robert-Mihai Ciurea"
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, []);

    return isLoading?

      <React.Fragment>
        <Splash/>
      </React.Fragment> 
      : 
      <React.Fragment>
        <Appbar/>
      </React.Fragment>
}

export default App;