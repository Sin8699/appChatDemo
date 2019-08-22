import { combineReducers } from "redux";

var reducerUserName = (state = "", action) => {
  if (action.type === "SET_USER_NAME") return action.username;
  return state;
};

var reducerListOnline = (state = [], action) => {
  if (action.type === "GET_LIST_USER_ONLINE") return action.arr;
  if (action.type === "ADD_LIST_ONLINE") return state.concat(action.item);
  return state;
};

var reducerListChat = (state = [], action) => {
  if (action.type === "SET_LOG_CHAT") return action.arr;
  if (action.type === "ADD_LIST_CHAT") return state.concat(action.mess);
  return state;
};

var reducerTyping = (state = { showTyping: false, name: "" }, action) => {
  if ((action.type = "SET_TYPING"))
    return { showTyping: action.show, name: action.name };
  return state;
};

var reducer = combineReducers({
  username: reducerUserName,
  listOnline: reducerListOnline,
  listChat: reducerListChat,
  userTyping: reducerTyping
});
export default reducer;
