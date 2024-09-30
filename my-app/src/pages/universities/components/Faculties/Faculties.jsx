import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import facultiesService from "../../../common/service/facultiesService";
import Modal from "../../../common/components/Modal/Modal";
import Icon from "../../../common/components/Icon/Icon";
import ErrorAlert from "../../../common/components/ErrorAlert/ErrorAlert";
import Button from "../../../common/components/Button/Button";
import AlternateButton from "../../../common/components/Button/AlternateButton";
import Dropdown from "../../../common/components/Dropdown/Dropdown";
import AddFacultiesForm from "./AddFacultiesForm";
import SearchBar from "../../../common/components/SearchBar/SearchBar";

import styles from "./Faculties.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  editFaculty,
  addFaculty,
  deleteFaculty,
} from "../../../../redux/slices/facultiesSlice";
import { setSearchTerm } from "../../../../redux/slices/facultiesSearchTermSlice";

export const FACULTIES_KEY = "faculties";

const Faculties = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const list = useSelector((state) => state.faculties);
  const searchTerm = useSelector((state) => state.facultiesSearchTerm);
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState({
    id: 0,
    name: "",
  });
  const [, setList] = useState([]);

  useEffect(() => {
    async function getItems() {
      const response = await facultiesService.get();
      setList(response);

      return response;
    }

    // Aici e logica de executie a functie de useEffect
    setIsLoading(true);
    getItems()
      .catch((error) => {
        console.error(error);
        setError("A aparut o eroare la obtinerea listei de orase.");
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <section className="section">
      <h2>
        <Icon variant="robot" label="Faculty" />
        <span>Faculties</span>
      </h2>
      <div className={`${styles.itemsList}`}>{renderList(list)}</div>
      <SearchBar
        handleChange={(evt) => {
          dispatch(setSearchTerm(evt.target.value));
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
              icon: <Icon variant={"pencil"} size={40} />,
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
            icon: <Icon variant={"handpointing"} size={40} />,
            label: "Faculty Removal",
          }}
        >
          <div>
            All materials and information about the faculty will be deleted
          </div>
          <div className={styles.deleteModalControls}>
            <AlternateButton action={() => setIsDeleteModalOpen(false)}>
              No
            </AlternateButton>
            <Button action={() => handleDeleteItem(selectedItem)}>Yes</Button>
          </div>
        </Modal>
      )}

      {isAddFormVisible && <AddFacultiesForm onFormSubmit={handleAddItem} />}

      {error.length > 0 && <ErrorAlert errors={error} />}

      <div className={"mt-16"}>
        <Button action={() => setIsAddFormVisible(true)}>Add Faculty</Button>
      </div>
    </section>
  );

  async function handleEditItem(selectedItem) {
    const yourNextList = [...list];

    if (yourNextList.find((el) => el.name === selectedItem.name)) {
      setError("A faculty with the same name already exists.");

      return;
    }

    const editedItem = yourNextList.find((el) => el.id === selectedItem.id);

    try {
      dispatch(editFaculty(editedItem))
      // await facultiesService.update(editedItem.id, editedItem);
      setError("");
      setIsEditModalOpen(false);
      setList(yourNextList);
    } catch (error) {
      setError("Nu a putut fi modificat orasul");
    }
  }

  async function handleDeleteItem(item) {
    try {
      //await facultiesService.remove(item.id);
      setError("");
      dispatch(deleteFaculty(item.id));
      setIsDeleteModalOpen(false);
    } catch (error) {
      setError(error.message);
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

    if (list.find((el) => el.name === item.name)) {
      setError("A faculty with the same name already exists.");

      return;
    }

    try {
      //await facultiesService.create(itemToAdd);

      setError("");
      //setList([...list, itemToAdd]);
      dispatch(addFaculty(itemToAdd));
      setIsAddFormVisible(false);
    } catch (error) {
      setError("Nu a putut fi creat orasul");
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
      <div key={item.id} className={`box relative ${styles.listItem}`}>
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
