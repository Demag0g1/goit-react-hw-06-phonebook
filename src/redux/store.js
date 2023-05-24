import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { nanoid } from "nanoid";

const initialState = {
  contacts: [
    {
      id: nanoid(),
      name: 'Rosie Simpson',
      number: '459-12-56',
    },
    {
      id: nanoid(),
      name: 'Hermione Kline',
      number: '443-89-12',
    },
    {
      id: nanoid(),
      name: 'Eden Clements',
      number: '645-17-79',
    },
    {
      id: nanoid(),
      name: 'Annie Copeland',
      number: '227-91-26',
    },
  ],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);