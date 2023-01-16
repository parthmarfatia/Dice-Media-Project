import React from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardsInfo = (props) => {
    const dataArray = props.data
    const cards = dataArray.map((data)=>{
        const {id, name, description, forks, score, watchers, updated_at, created_at, html_url} = data
        return (
            <Card key={id} className="single--card" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="bg-warning p-2">{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Forks: {forks}</ListGroup.Item>
                    <ListGroup.Item>Watchers: {watchers}</ListGroup.Item>
                    <ListGroup.Item>Score: {score}</ListGroup.Item>
                    <ListGroup.Item>Created_at: {created_at.slice(0,10)}</ListGroup.Item>
                    <ListGroup.Item>Updated_at: {updated_at.slice(0,10)}</ListGroup.Item>
                </ListGroup>
                <a className="card--link" href={html_url} target="_blank">Open Repository</a>
            </Card>
        )    
    })
    return(
        <section className="cards--container">
            {cards}
        </section>
    )
}

export default CardsInfo