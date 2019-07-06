import {COUNTER_DECREMENT, COUNTER_INCREMENT} from "../actions/ActionTypes";

const CounterReducer = (state ={count:0},action) => {
    switch (action.type){
        case COUNTER_INCREMENT:
            return {
                count: state.count + 1
            };
        case COUNTER_DECREMENT:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}
export default CounterReducer;