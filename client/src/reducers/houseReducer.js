import { FETCH_HOUSE } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_HOUSE:
            return action.payload || false;
        default:
            return state;
    }
}