import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setFacultiesSearchTerm,
  addFaculty,
  deleteFaculty,
} from "../redux/actions";
import SearchBar from "../components/common/SearchBar/SearchBar";
import Modal from "../components/Modal/Modal";
import Button from "../components/common/Button/Button";
import AlternateButton from "../components/common/AlternateButton/AlternateButton";
import Dropdown from "../components/common/Dropdown/Dropdown";
import AddFacultiesForm from "../components/Faculties/AddFacultiesForm";

export const FACULTIES_KEY = "faculties";

const Faculties = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const list = useSelector((state) => state.faculties.list);
  const searchTerm = useSelector((state) => state.faculties.searchTerm);
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState({
    id: 0,
    name: "",
  });
  const [, setList] = useState([]);

  useEffect(() => {
    async function getItems() {
      const response = [
        {
          id: 1,
          name: "Facultatea Automatica si Calculatoare",
          description: "Ifvgbnahsmd asdhnajmsda sdahjsdkalsdanm asd jm",
        },
        {
          id: 2,
          name: "Facultatea de Electronica",
          description: "Ifvgbnahsmd asdhnajmsda sdahjsdkalsdanm asd jm",
        },
        {
          id: 3,
          name: "Facultatea de Drept",
          description: "Ifvgbnahsmd asdhnajmsda sdahjsdkalsdanm asd jm",
        },
      ];
      setList(response);

      return response;
    }

    setIsLoading(true);
    getItems()
      .catch((error) => {
        console.error(error);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <section className="section">
      <h2>
        <span>Faculties</span>
      </h2>
      <div>{renderList(list)}</div>
      <SearchBar
        handleChange={(evt) => {
          dispatch(setFacultiesSearchTerm(evt.target.value));
        }}
        placeholder="Search for faculties..."
        searchTerm={searchTerm}
      />

      {isLoading && "se incarca..."}
      {isEditModalOpen &&
        createPortal(
          <Modal
            isOpen={isEditModalOpen}
            handleClose={() => {
              setIsEditModalOpen(false);
            }}
            header={{
              label: "Edit faculty information",
            }}
          >
            <form className={`form modal-form`}>
              <label>
                <span>Faculty</span>
                <input
                  type="text"
                  required
                  value={selectedItem.name}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      name: e.target.value,
                    })
                  }
                ></input>
              </label>
              <Button action={() => handleEditItem(selectedItem)}>SAVE</Button>
            </form>
          </Modal>,
          document.body
        )}
      {isDeleteModalOpen && (
        <Modal
          isOpen={isDeleteModalOpen}
          handleClose={() => {
            setIsDeleteModalOpen(false);
          }}
          header={{
            label: "Faculty Removal",
          }}
        >
          <div>
            All materials and information about the faculty will be deleted
          </div>
          <div>
            <AlternateButton action={() => setIsDeleteModalOpen(false)}>
              No
            </AlternateButton>
            <Button action={() => handleDeleteItem(selectedItem)}>Yes</Button>
          </div>
        </Modal>
      )}

      {isAddFormVisible && <AddFacultiesForm onFormSubmit={handleAddItem} />}

      <div className={"mt-16"}>
        <Button action={() => setIsAddFormVisible(true)}>Add Faculty</Button>
      </div>
    </section>
  );

  async function handleEditItem(editedItem) {
    const yourNextList = [...list];

    if (yourNextList.find((el) => el.name === editedItem.name)) {
      setError("A faculty with the same name already exists.");

      return;
    }

    const item = yourNextList.find((el) => el.id === editedItem.id);
    item.name = editedItem.name;

    try {
      setError("");
      setIsEditModalOpen(false);
      setList(yourNextList);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteItem(item) {
    try {
      //await facultiesService.remove(item.id);
      setError("");
      dispatch(deleteFaculty(item.id));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  function showEditModal(data) {
    setIsEditModalOpen(true);
    setSelectedItem({
      id: data.id,
      name: data.name,
    });
  }

  function showDeleteModal(data) {
    setIsDeleteModalOpen(true);
    setSelectedItem({
      id: data.id,
      name: data.name,
    });
  }

  async function handleAddItem(item) {
    const sortedList = list.sort((a, b) => a.id > b.id);

    if (sortedList.find((el) => el.name === item.name)) {
      setError("A faculty with the same name already exists.");

      return;
    }

    const newId =
      sortedList.length > 0 ? sortedList[sortedList.length - 1].id + 1 : 0;

    const itemToAdd = {
      id: newId,
      ...item,
    };

    try {
      //await facultiesService.create(itemToAdd);

      setError("");
      //setList([...list, itemToAdd]);
      dispatch(addFaculty(itemToAdd));
      setIsAddFormVisible(false);
    } catch (error) {
      console.log(error);
    }
  }

  function renderList(list) {
    if (!list || list.length === 0) {
      return (
        <div className="box box--no-items">There are no faculties added.</div>
      );
    }
    const filteredList =
      searchTerm.length > 0
        ? list.filter((el) => el.name.includes(searchTerm))
        : list;

    return filteredList.map((item) => (
      <div key={item.id} className={`box relative`}>
        <span>{item.name}</span>
        <Dropdown
          onEdit={() => showEditModal(item)}
          onDelete={() => showDeleteModal(item)}
        />
      </div>
    ));
  }
};

export default Faculties;
