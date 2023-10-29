

const { createStore, applyMiddleware } = require("redux");
const fetch = require("node-fetch");
const thunk = require("redux-thunk").default;

// InitialState 

const initialStation = {
  loading: false,
  posts: [],
  error: '',
};

const fetchpostsRequested = () => {
  return {
    type: "posts/requested",
  };
};

const fetchpostsSucceeded = (posts) => {
  return {
    type: "posts/succeeded",
    payload: posts,
  };
};

const fetchpostsFaild = (error) => {
  return {
    type: "posts/faild",
    payload: error,
  };
};

const reducer = (state = initialStation, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
        error: '',
  
      };

    case "posts/succeeded":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: '',
      };

    case "posts/faild":
      return {
        ...state,
        loading: false,
        posts:'',
        error: action.payload.message,
      };

    default:
      return state;
  }
};

// Thunk Function Declartion ... 

const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchpostsRequested());
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const posts = await res.json();
      dispatch(fetchpostsSucceeded(posts));
    } catch (err) {

      dispatch(fetchpostsFaild(err));
    }
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(()=>{

  console.log(store.getState())
})

store.dispatch(fetchPosts());

