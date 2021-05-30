import { Switch ,Route} from "react-router-dom";
import Collection from "./pages/collection";
import Home from "./pages/home";

function App() {
    return(
      <div style={{overflow: 'hidden'}}>
      <Switch>
          <Route path="/collection">
            <Collection/>
          </Route>
      </Switch>    
      </div>    
    );

}

export default App;
