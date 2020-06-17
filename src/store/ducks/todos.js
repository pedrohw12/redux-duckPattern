import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  addTodo: ["text"], // 'text' é o argumento que a função addTodo recebe
  toggleTodo: ["id"],
  removeTodo: ["id"],
}); // Esta const substitui as actions + types

// TYPES
// export const Types = {
//   ADD: "todos/ADD",
//   TOGGLE: "todos/TOGGLE",
//   REMOVE: "todos/REMOVE",
// };

const initialState = [];

// Criando os casos de cada reducer
// Observar que os parametros enviados para cada reducer não vem mais de
// payload, vem diretamente
// O que antes era action.payload.text, agora é action.text
const add = (state = initialState, action) => [
  ...state,
  { id: Math.random(), text: action.text, complete: false },
];

const toggle = (state = initialState, action) =>
  state.map((todo) =>
    todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
  );

const remove = (state = initialState, action) =>
  state.filter((todo) => todo.id !== action.id);


// Criando os reducers  
export default createReducer(initialState, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove,
});

// ACTIONS
// export const Creators = {
//   addTodo: (text) => ({
//     type: Types.ADD,
//     payload: {
//       text,
//     },
//   }),

//   toggleTodo: (id) => ({
//     type: Types.TOGGLE,
//     payload: {
//       id,
//     },
//   }),

//   removeTodo: (id) => ({
//     type: Types.REMOVE,
//     payload: {
//       id,
//     },
//   }),
// };
