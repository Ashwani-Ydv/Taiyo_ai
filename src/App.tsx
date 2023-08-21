import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './utils/store'
import ContactsPage from './components/ContactsPage'; 
import ChartsAndMapsPage from './components/ChartsAndMapsPage';  
import Sidebar from './components/Sidebar';

// Create a query client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="flex h-screen bg-gray-100">
          <div  className="w-64 bg-white shadow-lg">
          <Sidebar/>
          </div>
          <div className="flex-1 overflow-y-auto p-5">
          <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/map&graph" element={<ChartsAndMapsPage />} />
      </Routes>
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

