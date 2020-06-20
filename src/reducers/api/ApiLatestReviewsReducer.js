import {API_LATEST_REVIEWS_START, API_LATEST_REVIEWS_ERROR, API_LATEST_REVIEWS_COMPLETE} from "../../actions/ActionTypes";

const initialState = {isLoading: false, error: undefined, data: []};

const ApiLatestReviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_LATEST_REVIEWS_START:
            return {
                ...state,
                isLoading: true,
            };
        case API_LATEST_REVIEWS_ERROR:
            console.log("network error", action.error);
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case API_LATEST_REVIEWS_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
};

export default ApiLatestReviewsReducer;