import ItemDetails from "../ItemDetails";
import { useState, useEffect } from 'react';
import products from '../../data/data.json';
import './carousel.css';
export default function Carousel() {
    let [start, setStart] = useState(0);
    let [category, setCategory] = useState('all');
    let [data, setData] = useState([]);

    const updateStart = (e, type) => {
        e.preventDefault();
        if (type === "left") {
            start >= 0 && setStart(start - 1);
        }
        if (type === "right") {
            start < data.length - 3 && setStart(start + 1);
        }
    }

    useEffect(() => {
        const getData = () => {
            let data = products.filter(product => {
                return category === 'all' ? true : product.category === category;
            });
            setData(data)
        }
        getData(category);
        setStart(0);
    }, [category]);



    let dataToShow = data.slice(start, start + 3);

    return (
        <div style={{ width: "1000px", margin: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <label htmlFor="category">Choose Category :  </label>
                    <select id="category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="all">all</option>
                        <option value="fashion">fashion</option>
                        <option value="mobile">mobile</option>
                        <option value="electronics">electronics</option>
                    </select>
                </div>
                <div>
                    {`Showing ${start + 1}-${start + 3} of ${data.length} results for "${category}" `}
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <button disabled={!start} onClick={(e) => updateStart(e, "left")}>{"<"}</button>
                {dataToShow[0] && <ItemDetails data={dataToShow[0]}></ItemDetails>}
                {dataToShow[1] && <ItemDetails data={dataToShow[1]} type="big"></ItemDetails>}
                {dataToShow[2] && <ItemDetails data={dataToShow[2]}></ItemDetails>}
                <button disabled={!(data.length - 3 - start)} onClick={(e) => updateStart(e, "right")}>{">"}</button>
            </div>
        </div>
    )
}