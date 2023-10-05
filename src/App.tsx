import { AlgorithmProvider } from './common/context/Algorithm';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <AlgorithmProvider>
        <Layout />
      </AlgorithmProvider>
    </div>
  );
}

export default App;
