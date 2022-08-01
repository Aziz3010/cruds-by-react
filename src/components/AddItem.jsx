import React from 'react';

const AddItem = ({ addItem, editItemFromForm, itemNameINP, setItemNameINP, update }) => {
    return (
        <div className="container mt-4">
            <form onSubmit={  update === true ? (e)=>editItemFromForm(e)  : (e)=>addItem(e) } className="row justify-content-between">
                <div className="col-8">
                    <input value={itemNameINP} onChange={(e)=>setItemNameINP(e.target.value)} type="text" className="form-control" id="inputPassword2" placeholder="Item Name.." />
                </div>
                <div className="col-4">
                    {
                        update === true ? <button className="btn btn-warning w-100">Update Item</button> : <button type="submit" className="btn btn-primary w-100">Add Item</button>
                    }
                    
                </div>
            </form>
        </div>
    )
}

export default AddItem;