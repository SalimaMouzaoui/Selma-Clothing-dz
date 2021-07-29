
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/directory/header/header.component';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div >
      <h1>HATS PAGE</h1>
    </div >
  );
}

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/hats' component={HatsPage} /> */}
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;