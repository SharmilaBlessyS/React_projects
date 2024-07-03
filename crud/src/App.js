import React, { useReducer } from 'react';
import './App.css';

// Initial state
const initialState = {
  userData: [],
  name: "",
  update: false,
  userId: null
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        userData: [...state.userData, { id: Date.now(), name: action.payload }],
        name: ""
      };
    case 'DELETE_USER':
      return {
        ...state,
        userData: state.userData.filter(item => item.id !== action.payload)
      };
    case 'UPDATE_STATE':
      const user = state.userData.find(item => item.id === action.payload);
      return {
        ...state,
        name: user.name,
        userId: user.id,
        update: true
      };
    case 'UPDATE_USER':
      return {
        ...state,
        userData: state.userData.map(item => item.id === state.userId ? { ...item, name: state.name } : item),
        name: "",
        update: false,
        userId: null
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userData, name, update } = state;

  const handleSubmit = () => {
    dispatch({ type: 'ADD_USER', payload: name });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  const updateState = (id) => {
    dispatch({ type: 'UPDATE_STATE', payload: id });
  };

  const UpdateUser = () => {
    dispatch({ type: 'UPDATE_USER' });
  };

  return (
    <div className="App container-fluid">
      <form className='border p-3 rounded' >
        <h1 className='text-center fs-1'>Todo App</h1>
        <div className="form-group">
          <label htmlFor='name-filed'>Add your Task:</label>
          <input
            type='text'
            name='name'
            id='name-field'
            value={name}
            placeholder='Enter your Task...'
            className="form-control w-25 mt-3"
            onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
          />
        </div>
        <div className='form-group'>
          {
            update ?
              (<button type='button' onClick={UpdateUser} className='btn btn-success my-3 px-4'>Update</button>) :
              (<button type='button' onClick={handleSubmit} className='btn btn-primary my-3 px-4'>Submit</button>)
          }
        </div>
      </form>

      <table className='table table-hover mt-3 w-100 mt-2'>
        <thead>
          <tr>
            <th>NO:</th>
            <th>NAME</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((items, index) => (
              <tr key={items.id}>
                <td>{index + 1}</td>
                <td>{items.name}</td>
                <td><button className='btn btn-success' onClick={() => updateState(items.id)}  >Update</button></td>
                <td><button className='btn btn-danger' onClick={() => handleDelete(items.id)} >Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
