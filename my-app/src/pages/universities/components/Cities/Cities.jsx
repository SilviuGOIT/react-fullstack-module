import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Icon from "../../../common/components/Icon/Icon";
import Button from "../../../common/components/Button/Button";
import Dropdown from "../../../common/components/Dropdown/Dropdown";
import Modal from "../../../common/components/Modal/Modal";
import ErrorAlert from "../../../common/components/ErrorAlert/ErrorAlert";
import AlternateButton from "../../../common/components/Button/AlternateButton";
import AddCitiesForm from "./AddCitiesForm";

import styles from "./Cities.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
    addCity,
    deleteCity,
    updateCity,
    fetchCities,
} from "../../../../redux/slices/citiesSlice";
import Loading from "../../../common/components/Loading/Loading";

const Cities = () => {
    const [isAddFormVisible, setIsAddFormVisible] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const citiesStatus = useSelector((state) => state.cities.status);
    const isLoading = citiesStatus === "loading";

    const dispatch = useDispatch();
    const error = useSelector((state) => state.cities.error);
    const [selectedItem, setSelectedItem] = useState({
        id: 0,
        name: "",
    });

    const list = useSelector((state) => state.cities.items);

    useEffect(() => {
        if (citiesStatus === "idle") {
            dispatch(fetchCities());
        }
    }, [citiesStatus, dispatch]);

    return (
        <section className="section">
            <h2>
                <Icon variant="pin" label="Cities" />
                <span>Cities</span>
            </h2>
            <div className={`${styles.itemsList}`}>{renderList(list)}</div>

            {isLoading && <Loading />}
            {isEditModalOpen &&
                createPortal(
                    <Modal
                        isOpen={isEditModalOpen}
                        handleClose={() => {
                            setIsEditModalOpen(false);
                        }}
                        header={{
                            icon: <Icon variant={"pencil"} size={40} />,
                            label: "Edit city information",
                        }}
                    >
                        <form className={`form modal-form`}>
                            <label>
                                <span>City</span>
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
                        label: "City Removal",
                    }}
                >
                    <code>{selectedItem.id}</code>
                    <div>
                        All materials and information about the city will be deleted
                    </div>
                    <div className={styles.deleteModalControls}>
                        <AlternateButton action={() => setIsDeleteModalOpen(false)}>
                            No
                        </AlternateButton>
                        <Button action={() => handleDeleteItem(selectedItem)}>Yes</Button>
                    </div>
                </Modal>
            )}

            {isAddFormVisible && <AddCitiesForm onFormSubmit={handleAddItem} />}

            {error.length > 0 && <ErrorAlert errors={error} />}

            <div className={"mt-16"}>
                <Button action={() => setIsAddFormVisible(true)}>Add City</Button>
            </div>
        </section>
    );

    async function handleEditItem(item) {
        try {
            const yourNextList = [...list];

            if (yourNextList.find((el) => el.name === item.name)) {
                throw new Error("A city with the same name already exists.");
            }

            const editedItemId = list.find((el) => el.id === selectedItem.id)?.id;
            const updatedItem = {
                ...item,
                id: editedItemId,
            };

            await dispatch(updateCity(updatedItem));
        } catch (error) {
            console.error(error.message);
        } finally {
            setIsEditModalOpen(false);
        }
    }

    async function handleDeleteItem(item) {
        try {
            await dispatch(deleteCity(item.id));
        } catch (error) {
            console.error(error.message);
        } finally {
            setIsDeleteModalOpen(false);
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
            console.error("A city with the same name already exists.");

            return;
        }

        try {
            await dispatch(addCity(item));
        } catch (error) {
            console.error("Nu a putut fi create orasul");
        } finally {
            setIsAddFormVisible(false);
        }
    }

    function renderList(list) {
        if (!list || list.length === 0) {
            return (
                <div className="box box--no-items">There are no cities added.</div>
            );
        }

        return list.map((item) => (
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

Cities.propTypes = {};

export default Cities;
