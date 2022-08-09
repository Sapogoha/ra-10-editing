import './App.css';

import AddForm from './components/AddForm';
import FilteredList from './components/FilteredList';
import Filter from './components/Filter';
import FullList from './components/Full List';

function App() {
  return (
    <div className="app">
      <AddForm />
      <Filter />
      <FilteredList />
      <FullList />
    </div>
  );
}

export default App;
