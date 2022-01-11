import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import img1 from '../../images/dir1.jpg'
import img2 from '../../images/dir4.jpg'
import img3 from '../../images/dir5.jpg'
import './Director.scss'

const Director = () => {
    return (
        <div className='mt-5'>
           <Container>
           <h2 className='text-center'>Hollywood Best Director</h2>
            <CardGroup >
                <Card className='card'>
                    <Card.Img variant="top" className='h-75' src={img1} />
                    <Card.Body>
                    <Card.Title>Steven Spielberg</Card.Title>
                    <p>Steven Spielberg director best movie name is Jurassic Park,E.T. the Extra-Terrestrial,Schindler's List,Raiders of the Lost Ark,Close Encounters of the Third Kind</p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top"className='h-75' src={img2}/>
                    <Card.Body>
                    <Card.Title>Russo brothers</Card.Title>
                    <p>Russo brothers director best movie name is Jurassic Park,E.T. the Extra-Terrestrial,Schindler's List,Raiders of the Lost Ark,Close Encounters of the Third Kind</p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" className='h-75' src={img3} />
                    <Card.Body>
                    <Card.Title>Peter Jackson</Card.Title>
                    <p>Peter Jackson director best movie name is Jurassic Park,E.T. the Extra-Terrestrial,Schindler's List,Raiders of the Lost Ark,Close Encounters of the Third Kind</p>
                    </Card.Body>
                </Card>
        </CardGroup>
           </Container>
        </div>
    );
};

export default Director;