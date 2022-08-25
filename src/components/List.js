import React, { useEffect, useState } from "react";
import Item from "./Item";

function List() {
    const [list, setList] = useState([]);
    const loadData = async () => {
        let url = `https://hp-api.herokuapp.com/api/characters`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setList(parsedData);
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <>
            <div className="container">
                <div className="justify-content-around row">
                    {list.map((element) => {
                        return (
                            <div className="col-md-3 justify-content-center d-flex">
                                <Item
                                    image={element.image}
                                    name={element.name}
                                    species={element.species}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default List;
