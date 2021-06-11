import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import SelectedItems from './components/SelectedItems';
import Home from './components/Home';
import Login from './components/Login';
import AdminDashboard from './components/DashBoardComponets/AdminDashboard';
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client';



const client=new ApolloClient({
  cache:new InMemoryCache,
  uri:"http://localhost:5000/e-shope",
});
function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
          <Route path="/" exact component={Home}/>
          <Route exact path="/product/selectedproduct" component={SelectedItems}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
        </Router>
      </ApolloProvider>
  );
}

export default App;
