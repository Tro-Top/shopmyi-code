import React, {
  createContext,
  FC,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import {
  BrandById_purchasesPerBrand,
  BrandById_purchasesPerBrand_result,
  BrandById_purchasesPerBrand_result_brand,
  BrandById_purchasesPerBrand_result_brand_purchases,
  BrandById_purchasesPerBrand_result_byInfluencer,
} from "lib/graphql/queries/BrandbyId/__generated__/BrandById";

export type ContextType = {
  brand: {};
  influencer: {};
  updateChosenLang: (newLang: string) => void;
  updateChosenCur: (newCur: string) => void;
  setLoggedInFrom: (newCur: string) => void;
};
type Action =
  | {
      type: "SET_BRAND_NAME_AVATAR";
      payload: {};
    }
  | {
      type: "SET_LOADING";
    }
  | {
      type: "SET_NOT_LOADING";
    }
  | {
      type: "CHECKOUT";
      payload: {};
    };

export interface State {
  isLoading: boolean;
  brand: BrandById_purchasesPerBrand_result_brand;
  influencer: BrandById_purchasesPerBrand_result_byInfluencer;
}
const initialState = {
  isLoading: false,
  brand: {},
  influencer: {},
};
export const DataContext = createContext<State | any>(initialState);

function AppStateReducer(state: State, action: Action): any {
  switch (action.type) {
    case "SET_BRAND_NAME_AVATAR": {
      return {
        brand: action.payload,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "SET_NOT_LOADING": {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
export const AppProvider: FC = (props) => {
  const [state, dispatch] = useReducer(AppStateReducer, initialState);

  const setBrandData = useCallback(
    (payload: Object) => dispatch({ type: "SET_BRAND_NAME_AVATAR", payload }),
    [dispatch]
  );
  const setIsloading = useCallback(() => dispatch({ type: "SET_LOADING" }), [
    dispatch,
  ]);
  const setNotLoading = useCallback(
    () => dispatch({ type: "SET_NOT_LOADING" }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      brand: state.brand,
      isLaoding: state.isLoading,
      setBrandData,
      setIsloading,
      setNotLoading,
    }),
    [state]
  );
  return <DataContext.Provider value={value} {...props} />;
};
export const useAppContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error(`useAppState must be used within a ManagedAppContext`);
  }
  return context;
};
export const ManagedAppContext: FC = ({ children }) => (
  <AppProvider>{children}</AppProvider>
);
