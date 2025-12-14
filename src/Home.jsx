import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header.jsx'
import NoUser from './NoUser.jsx'
import UserCard from './UserCard.jsx'
import Footer from './Footer.jsx'
import axios from 'axios'
import './App.css'


export default function Home(){
    const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const info = await axios.get(
        "https://api.github.com/users?per_page=5"
      )
      setData(info.data)
    }
    getData()
  }, [])

    return(
        <div>
            <Header></Header>
            <NoUser></NoUser>
      <div className="main-container">
        
          <Container fluid>
            <Row className="g-4 justify-content-center">
              {data.map(user => (
                <Col
                  key={user.id}
                  xs={12}
                  md={4}
                  className="d-flex justify-content-center"
                >
                  <UserCard login={user.login}></UserCard>
                </Col>
              ))}
            </Row>
          </Container>
        
      </div>
        </div>
        
    )
}