import { Input } from "./Input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../Redux/operations";
import { selectError, selectIsLoading } from "../Redux/selectors";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      {!error && <Input />}
    </>
  );
};
