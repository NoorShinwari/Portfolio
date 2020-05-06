import React, {
  useReducer,
  /*useState,*/
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
};

// function Ingredients() {
const Ingredients = () => {
  const [userIngredients, dipatch] = useReducer(ingredientReducer, []);
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [httpState, dispatchHttp] = useReducer(httpReducer, {
  //   loading: false,
  //   error: null,
  // });
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  const { isLoading, data, error, sendRequest } = useHttp();

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  const addIngredientHandler = useCallback((ingredient) => {
    // // setIsLoading(true);
    // dispatchHttp({
    //   type: 'SEND',
    // });
    // fetch('https://react-hooks-update-fb720.firebaseio.com/ingredients.json', {
    //   method: 'POST',
    //   body: JSON.stringify(ingredient),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then((response) => {
    //     // setIsLoading(false);
    //     dispatchHttp({ type: 'RESPONSE' });
    //     return response.json();
    //   })
    //   .then((responseData) => {
    //     // setUserIngredients((prevIngredients) => [
    //     //   ...prevIngredients,
    //     //   {
    //     //     id: responseData.name,
    //     //     ...ingredient,
    //     //   },
    //     // ]);
    //     dipatch({
    //       type: 'ADD',
    //       ingredient: {
    //         id: responseData.name,
    //         ...ingredient,
    //       },
    //     });
    //   });
  }, []);

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://react-hooks-update-fb720.firebaseio.com/ingredients/${ingredientId}.json`,
        'DELETE'
      );
    },
    [sendRequest]
  );

  const clearError = useCallback(() => {
    // setError(null);
    // dispatchHttp({ type: 'CLEAR' });
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);
  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dipatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);
  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
