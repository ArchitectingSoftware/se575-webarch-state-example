import * as PostActions from '../actions/post.actions';
import { Post }         from '../models/post.model'
export type Action = PostActions.All;
/// Default app state
const defaultState: Post = {
  text: 'Hello. I am the default post',
	likes: 0,
	history: []
}
/// Helper function to create new state object
const newState = (state, newData, historyAction) => {
  return Object.assign({}, state, newData, {history: [...state.history, historyAction]})
}
/// Reducer function
export function postReducer(state: Post = defaultState, action: Action) {
	switch (action.type) {
  		case PostActions.EDIT_TEXT:
  			return newState(state, { text: action.payload }, 'EDIT: ' + action.payload);
      case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 }, 'UP');
  		case PostActions.DOWNVOTE:
  			return newState(state, { likes: state.likes - 1 }, 'DOWN');
  		case PostActions.RESET:
  			return {...defaultState,  history: [...state.history, 'RESET']}
  		default:
  			return state;
	}
}