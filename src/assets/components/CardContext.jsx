import { createContext, useContext, useReducer } from 'react';

const CardContext = createContext();

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.itemId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.itemId && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      return state;
  }
};

const initialProducts = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=1200&h=900&cc=1",
    "images": [
      "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=1200&h=900&cc=1",
    ],
    "quantity": 0, // new property for tracking quantity
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "data:image/jpeg;base64,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",
    "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ],
    "quantity": 0,
},
{
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://imageio.forbes.com/blogs-images/gordonkelly/files/2018/08/Screenshot-2018-08-10-at-03.58.50.jpg?height=474&width=711&fit=bounds",
    "images": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
    ],
    "quantity": 0,
},
{
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://staticimg.amarujala.com/assets/images/2021/03/15/750x506/oppo-f19-pro-quick-review_1615800517.jpeg",
    "images": [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    ],
    "quantity": 0,
},
{
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg?downsize=*:360",
    "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
    ],
    "quantity": 0,
}
  
];

const CardProvider = ({ children }) => {
  const [cardState, dispatch] = useReducer(cardReducer, { products: initialProducts });

  const totalQuantity = cardState.products.reduce((total, product) => total + product.quantity, 0);
  const totalAmount = cardState.products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  return (
    <CardContext.Provider value={{ cardState, dispatch, totalQuantity, totalAmount }}>
      {children}
    </CardContext.Provider>
  );
};

const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
};

export { CardProvider, useCard };
