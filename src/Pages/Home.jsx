import React, { useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent";
import AddItem from "../components/AddItem";
import Table from "../components/Table";

const Home = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [itemNameINP, setItemNameINP] = useState("");
    const [itemID, setItemID] = useState(0);
    const [msg, setMsg] = useState(false);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const readData = () => {
            if (localStorage.getItem("itemName")) {
                setData(JSON.parse(localStorage.getItem("itemName")));
            }
        };
        readData();

        if (search.length !== 0) {
            let newItems = data.filter((item) => item.toLowerCase().includes(search));
            if (newItems.length !== 0) {
                setData(newItems);
                setMsg(false);
            }
            if (newItems.length === 0) {
                setData(JSON.parse(localStorage.getItem("itemName")));
                setMsg(true);
            }
        }
        if (search.length === 0) {
            setData(JSON.parse(localStorage.getItem("itemName")));
            setMsg(false);
        }
    }, [search]);

    const addItem = (e) => {
        e.preventDefault();
        if (itemNameINP !== "") {
            data.push(itemNameINP);
            localStorage.setItem("itemName", JSON.stringify(data));
            setItemNameINP("");
        }
    };

    const deleteItem = (itemID) => {
        data.splice(itemID, 1);
        localStorage.setItem("itemName", JSON.stringify(data));
        setData(JSON.parse(localStorage.getItem("itemName")));
    };

    const editItemFromForm = (e) => {
        e.preventDefault();
        setUpdate(false);
        const selectedItem = JSON.parse(localStorage.getItem("itemName"));
        selectedItem.splice(itemID, 1, itemNameINP);
        localStorage.setItem("itemName", JSON.stringify(selectedItem));
        setData(JSON.parse(localStorage.getItem("itemName")));
        setItemNameINP("");
    };

    const editItemFromBTN = (itemID) => {
        setUpdate(true);
        const selectedItem = JSON.parse(localStorage.getItem("itemName"));
        setItemNameINP(selectedItem[itemID]);
        setItemID(itemID);
    };

    return (
        <>
            <SearchComponent msg={msg} setSearch={setSearch} />
            <AddItem
                addItem={addItem}
                editItemFromForm={editItemFromForm}
                itemNameINP={itemNameINP}
                setItemNameINP={setItemNameINP}
                update={update}
            />
            <Table
                data={data}
                deleteItem={deleteItem}
                editItemFromBTN={editItemFromBTN}
            />
        </>
    )
}

export default Home