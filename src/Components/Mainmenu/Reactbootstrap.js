import React, { Component } from 'react'
import { Container, Row, Col,Card,Button } from 'react-bootstrap'
import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/photos`
export default class Reactbootstrap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }
  }
  render() {

    return (<>
      <div className="container text-center">
        <h2 className='py-3'>React bootstrap UI package</h2>
        <Container>
          <Row>

            {
              this.state.photos.map((res, i) => {
                return (<Col lg={4} md={4} sm={6} xs={12}>
                  <Card className="my-3">
                  <Card.Img variant="top" className="w-50 mx-auto" src={res.thumbnailUrl} />
                    <Card.Body>
                      <Card.Title className="h5">{res.title}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <a variant="primary" href={res.url} target="_blank">Visit site</a>
                    </Card.Body>
                  </Card>
                </Col>)
              })
            }

          </Row>
        </Container>
      </div>
    </>)
  }

  componentDidMount() {
    axios.get(url).then((result) => this.setState({ photos: result.data })).catch();

  }
}
