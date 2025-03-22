import React, { ReactNode,useReducer } from "react";
import CartContext from "../store/cartcontext";


type CartItem = {
    id: string;
    name: string;
    price: number;
    amount: number;
    src: string;
};

type CartState = {
    items: CartItem[];
    totalAmount: number;
};

const defaultCartState:CartState = {
    items:[],
    totalAmount:0
} 

const cartReducer = (state:CartState,action:any=[]) => {
    if(action.type==='ADD'){
        const updateTotalAmount = 
        state.totalAmount + action.item.price * action.item.amount;

        //verificar si encuentra el intex en cart 
        const existingIntemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )
        //end the checking

        //Asingnando the existing item variable to the existing variable the Cart
        const existingItem = state.items[existingIntemIndex];
        //end

        let updatedItems:any;

        if (existingItem) {
            const updatedItem ={
                ...existingItem,
                amount : existingItem.amount + action.item.amount
            }

            updatedItems = [...state.items];
            updatedItems[existingIntemIndex] =  updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }

        return {
            items:updatedItems,
            totalAmount:updateTotalAmount,
        }
    }
    
    if(action.type==='REMOVE'){
      //Checking if an item already exists in the Cart, if yes findng it's index , if no , giving it a value of null
      const existingItemIndex = state.items.findIndex(
          (item) => item.id === action.id
      );
      //END

      //Assigning the existing item variable to the existingItem variable
      const existingItem = state.items[existingItemIndex];
      //END

      //Finding the accurate Total Amount
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      //END
      let updatedItems;

      //Checking if the amount is equals to 1
      if (existingItem.amount === 1) {
          updatedItems = state.items.filter((item) => item.id !== action.id);
      }
      //END
      else {
          //Get all the items in the cart, decrements the item amount and assigns them to the updatedItem
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          //END

          //Get all the items in the cart and assigns the updatedItem varibale to the Existing item
          updatedItems = [...state.items];
          updatedItems[existingItemIndex] = updatedItem;
          //END
      }
  
      return {
      //Returning the items data and totalAmount
          items: updatedItems,
          totalAmount: updatedTotalAmount,
       //END
      };
    }
    //Returns the default cart state if no condition is met
    return defaultCartState;
    //END

}

interface CartProviderProps {
    children: ReactNode;
}


const CartProvider:React.FC<{ children: ReactNode }> = ({ children })  => {
        //Using the useReducr hook
        const [cartState, dispatchCartAction] = useReducer(
          cartReducer,
          defaultCartState
        );
        //END
      
        const addItemHandler = (item: CartItem) => {
          dispatchCartAction({
            type: "ADD",
            item: item,
          });
        };
        
        const removeItemHandler = (id: string) => {
          dispatchCartAction({
            type: "REMOVE",
            id: id,
          });
        };
      
        //Defining and Automating the cartContext Functions
        const cartContext = {
          items: cartState.items,
          totalAmount: cartState.totalAmount,
          addItem: addItemHandler,
          removeItem: removeItemHandler,
        };
      
        //Rendering every content being rendered by the use CartContext, using the .Provider to let the context be able to manage other parts of the application
        return (
          <CartContext.Provider value={cartContext}>
              {children}
          </CartContext.Provider>
        );
  
}

export default CartProvider;

