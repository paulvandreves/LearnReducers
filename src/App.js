import logo from './logo.svg';
import './App.css';

// Tutorial referenced: https://www.robinwieruch.de/react-usereducer-hook

const initialTodos = [
  {
    id: 'a',
    task: 'Learn React',
    complete: false,
  },
  {
    id: 'b',
    task: 'Learn Firebase',
    complete: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const [todos, dispatch] = useReducer(todoReducer, initialTodos);

function App() {
  return (
    <div className="App">
      
        
     
    </div>
  );
}

export default App;
