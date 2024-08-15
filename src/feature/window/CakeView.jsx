import { useSelector, useDispatch } from "react-redux";
import { ordered, reStocked } from "./windowSlice";

const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number Of Cakes - {numberOfCakes}</h1>
      <button onClick={() => dispatch(ordered())}>Order Cakes</button>
      <button onClick={() => dispatch(reStocked(10))}>Restock Cakes</button>
    </div>
  );
};

export default CakeView;
