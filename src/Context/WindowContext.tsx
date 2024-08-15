import { createContext, useContext, useEffect } from "react";
import { setWindowSize } from "../feature/window/windowSlice";
import { windowContextProps, windowContext } from "../Types/app";
import { /* useAppSelector ,*/ useAppDispatch } from "../app/hooks";

const WindowSizeContext = createContext<windowContext | null>(null);

function WindowProvider({ children }: windowContextProps) {
  // const windowSize = useAppSelector((state) => state.window.windowSize);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function setWindowWidth() {
      dispatch(setWindowSize(window.innerWidth));
    }

    window.addEventListener("resize", setWindowWidth);

    // CleanUp Function
    return () => {
      window.removeEventListener("resize", setWindowWidth);
    };
  }, []);

  return (
    <WindowSizeContext.Provider value="">{children}</WindowSizeContext.Provider>
  );
}

export default WindowProvider;

export const useWindow = () => {
  return useContext(WindowSizeContext);
};
