import { combineReducers } from 'redux';
import counter from './counter'; // 리듀서 가져오기
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
// 여러 리듀서 하나로 합치기 완료!
