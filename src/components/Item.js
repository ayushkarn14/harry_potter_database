function Item(props) {
    // const handleReadMore = () => {
    //     console.log("Read more");
    // };
    return (
        <div
            className="card m-3 text-white bg-dark"
            style={{
                width: "14rem",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <img
                className="card-img-top"
                src={props.element.image}
                alt="Card cap"
                style={{ height: "350px", width: "222px", objectFit: "cover" }}
            />
            <div className="card-body">
                <h5
                    className="card-title"
                    style={{ textShadow: "0 0 8px #0fa" }}
                >
                    {props.element.name}
                </h5>
                <p className="card-text" style={{ fontSize: "80%" }}>
                    <strong>Species: </strong>
                    {props.element.species}
                    <br />
                    <strong>House: </strong>
                    {props.element.house ? props.element.house : "NA"}
                    <br />
                    <strong>Ancestry: </strong>
                    {props.element.ancestry
                        ? props.element.ancestry
                        : "Unknown"}
                    <br />
                    <strong>Wand: </strong>
                    <span>wood: </span>
                    {props.element.wand.wood ? props.element.wand.wood : "NA"}
                    <br />
                    &emsp;&emsp;&emsp;<span>core: </span>
                    {props.element.wand.core ? props.element.wand.core : "NA"}
                    <br />
                    &emsp;&emsp;&emsp;<span>length: </span>
                    {props.element.wand.length
                        ? props.element.wand.length + '"'
                        : "NA"}
                    <br />
                    <strong>Patronus: </strong>
                    {props.element.patronus
                        ? props.element.patronus
                        : "Unknown"}
                    <br />
                </p>
                {/* <button
                    type="button".
                    class="btn btn-light btn-sm"
                    onClick={handleReadMore}
                >
                    Read More
                </button> */}
            </div>
        </div>
    );
}

export default Item;
