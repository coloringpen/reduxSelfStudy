// 액션타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초깃값 (객체가 아니고, 원시값이어도 됨)
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
