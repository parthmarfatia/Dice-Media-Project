import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const FilterOptions = (props) => {
    const {data, setData} = props
    
    function sortOpt(str){
        const sortedData = [...data]
        const [val,order] = str.split('-')
        if(order === 'asc'){
            setData(sortedData.sort(
                (p1, p2) => (p1[val] > p2[val]) ? 1 : (p1[val] < p2[val]) ? -1 : 0
            ))
        }else{
            setData(sortedData.sort(
                (p1, p2) => (p1[val] < p2[val]) ? 1 : (p1[val] > p2[val]) ? -1 : 0
            ))
        }
    }

    return (
        <section className="dropdown--container">
            <Dropdown className="custom--dropdown" onSelect={sortOpt}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Forks
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="forks-asc">Low to High</Dropdown.Item>
                    <Dropdown.Item eventKey="forks-desc">High to Low</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="custom--dropdown" onSelect={sortOpt}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Watchers
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="watchers-asc">Low to High</Dropdown.Item>
                    <Dropdown.Item eventKey="watchers-desc">High to Low</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="custom--dropdown" onSelect={sortOpt}>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    Score
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="score-asc">Low to High</Dropdown.Item>
                    <Dropdown.Item eventKey="score-desc">High to Low</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="custom--dropdown" onSelect={sortOpt}>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Created_at
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="created_at-asc">Old to New</Dropdown.Item>
                    <Dropdown.Item eventKey="created_at-desc">New to Old</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="custom--dropdown" onSelect={sortOpt}>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Updated_at
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="updated_at-asc">Old to New</Dropdown.Item>
                    <Dropdown.Item eventKey="updated_at-desc">New to Old</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </section>
    )
}

export default FilterOptions;