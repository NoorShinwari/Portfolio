import { useState, useEffect } from 'react';

let globalState = {};

let listeners = [];

let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payLoad) => {
    const newState = actions[actionIdentifier](globalState, payLoad);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }
    if (shouldListen) {
      return () => {
        listeners = listeners.filter((li) => li !== setState);
      };
    }
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
