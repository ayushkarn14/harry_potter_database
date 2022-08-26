import React, { useEffect, useState } from "react";
import Item from "./Item";
import InfiniteScroll from "react-infinite-scroll-component";

function List(props) {
    let parsedData;
    const [list, setList] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(16);
    const loadData = () => {
        parsedData = props.category.slice(start, end);
        setList(parsedData);
    };
    const fetchMoreData = () => {
        setStart(start + 16);
        setEnd(end + 16);
        parsedData = props.category.slice(start + 16, end + 16);
        setList(list.concat(parsedData));
    };
    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className="container my-5">
                <InfiniteScroll
                    dataLength={list.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="container">
                        <div className="justify-content-around row">
                            {list.map((element) => {
                                return (
                                    <div className="col-md-3 justify-content-center d-flex">
                                        <Item element={element} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    );
}

export default List;
