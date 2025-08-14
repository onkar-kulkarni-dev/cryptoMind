import Home from 'components/pages/home/home';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import RoutesComponent from 'common/routes/routes';
import '../src/common/styles/_variables.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RoutesComponent />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
