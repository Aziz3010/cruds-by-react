import React from 'react';

const Table = ({ data, deleteItem, editItemFromBTN }) => {
    return (
        <div className="container my-5">
            <h5 className="text-center mb-5">Display Items</h5>

            <div className="table-responsive table-nowrap text-center">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Controls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length !== 0 ?
                                data.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{data}</td>
                                            <td className='d-flex justify-content-center align-items-center gap-3'>
                                                <button onClick={() => editItemFromBTN(index)} className='btn btn-sm btn-warning'>Edit</button>
                                                <button onClick={() => deleteItem(index)} className='btn btn-sm btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={3}>No Items</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;