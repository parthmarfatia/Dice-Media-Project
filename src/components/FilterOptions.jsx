import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const FilterOptions = (props) => {
    const {data, setData} = props
    
    function sortOpt(str){
        const sortedData = [...data]
       switch(str){
        case "forks-asc":
            setData(sortedData.sort(
                (p1, p2) => (p1.forks > p2.forks) ? 1 : (p1.forks < p2.forks) ? -1 : 0
            ))
            break
        case "forks-desc":
            setData(sortedData.sort(
                (p1, p2) => (p1.forks < p2.forks) ? 1 : (p1.forks > p2.forks) ? -1 : 0
            ))
            break
        case "watchers-asc":
            setData(sortedData.sort(
                (p1, p2) => (p1.watchers > p2.watchers) ? 1 : (p1.watchers < p2.watchers) ? -1 : 0
            ))
            break
        case "watchers-desc":
            setData(sortedData.sort(
                (p1, p2) => (p1.watchers < p2.watchers) ? 1 : (p1.watchers > p2.watchers) ? -1 : 0
            ))
            break
        case "scores-asc":
            setData(sortedData.sort(
                (p1, p2) => (p1.score > p2.score) ? 1 : (p1.score < p2.score) ? -1 : 0
            ))
            break
        case "scores-desc":
            setData(sortedData.sort(
                (p1, p2) => (p1.score < p2.score) ? 1 : (p1.score > p2.score) ? -1 : 0
            ))
            break
        case "created-asc":
            setData(sortedData.sort(
                (p1, p2) => (p1.created_at > p2.created_at) ? 1 : (p1.created_at < p2.created_at) ? -1 : 0
            ))
            break
        case "created-desc":
            setData(sortedData.sort(
                (p1, p2) => (p1.created_at < p2.created_at) ? 1 : (p1.created_at > p2.created_at) ? -1 : 0
            ))
            break
        case "updated-asc":
            setData(sortedData.sort(
                (p1, p2) => (p1.updated_at > p2.updated_at) ? 1 : (p1.updated_at < p2.updated_at) ? -1 : 0
            ))
            break
        case "updated-desc":
            setData(sortedData.sort(
                (p1, p2) => (p1.updated_at < p2.updated_at) ? 1 : (p1.updated_at > p2.updated_at) ? -1 : 0
            ))
            break    
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
                    <Dropdown.Item eventKey="created-asc">Old to New</Dropdown.Item>
                    <Dropdown.Item eventKey="created-desc">New to Old</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="custom--dropdown" onSelect={sortOpt}>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Updated_at
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="updated-asc">Old to New</Dropdown.Item>
                    <Dropdown.Item eventKey="updated-desc">New to Old</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </section>
    )
}

export default FilterOptions