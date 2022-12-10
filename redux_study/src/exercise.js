import { legacy_createStore as createStore } from 'redux';
// createStore는 스토어를 만들어주는 함수
// 리액트 프로젝트에서는 단 하나의 스토어만!

/** 리덕스에서 관리 할 상태 정의 */
const initialState = {
  counter: 0,
  text: '',
  list: [],
};

/** 액션 타입 정의 - 액션 함수 내부에서 사용할 것 */
// 액션 타입은 주로 대문자로 작성
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/** 액션 생성함수 정의 */
// 주로 Camelcase 작성
function increase() {
  return {
    type: INCREASE, // 액션 객체에 type값 필수
  };
}

// 간단한 화살표 함수 정의
const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text, // 액션 내부에 type말고 추가적인 필드 가능
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

/** 리듀서 만들기 */
// 위 액션 생성함수를 통해 만들어진 객체들(액션들) 참조
// 새로운 상태를 만드는 함수(리듀서)들 만들기
// 불변성은 꼭 지키기

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

/** 스토어 만들기 */
const store = createStore(reducer);
console.log(store.getState()); // 현재 스토어 안에 있는 상태 조회

// 스토어 내부 상태가 바뀔때마다 호출되는 listener
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독 해제하고 싶을 때 호출

// 액션들을 dispatch
// 리덕스 스토어 안의 상태는 액션이 디스패치됨에 따라 업데이트됨
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));
