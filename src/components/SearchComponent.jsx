import React from 'react';

const SearchComponent = ({ msg, setSearch }) => {

    return (
        <div className="container pt-4">
            {msg ? <h3 className="alert alert-sm alert-danger py-1 small text-center">Not found</h3> : null}
            <form className="row justify-content-between">
                <div className="col-12">
                    <input onChange={(e) => { setSearch(e.target.value) }} type="search" className="form-control" id="inputPassword2" placeholder="Search.." />
                </div>
            </form>
        </div>
    )
}

export default SearchComponent;