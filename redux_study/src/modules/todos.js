/** 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/** 액션 생성함수 선언 */
let nextId = 1; // todo 데이터에서 사용할 고유 id
export const addTOdo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 액션에서 뭔가를 업데이트 할 수도 있음
    text,
  },
});

export const toggleTOdo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

/** 초기 상태 선언 */
// 리듀서 초기 상태 : 꼭 객체일 필요 없음
const initialState = [
  {
    id: 1,
    text: '예시',
    done: false,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
