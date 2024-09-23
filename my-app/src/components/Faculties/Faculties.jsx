import { useState } from "react";
import Button from "../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addFaculty } from "../../../src/redux/actions";

const Faculties = () => {
  const list = useSelector((state) => state.faculties.list);
  const [, setList] = useState([]);
  const dispatch = useDispatch();

  function handleAddItem(item) {
    const newId = list.length > 0 ? list[list.length - 1].id + 1 : 0;

    const itemToAdd = {
      id: newId,
      ...item,
    };

    try {
      dispatch(addFaculty(itemToAdd));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section>
        <Button action={() => handleAddItem()}></Button>
      </section>
    </>
  );
};

export default Faculties;
