import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import UserHeader from './UserHeader'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserPageCard1 from './UserPageCard1';
import UserPageSmallCard from './UserPageSmallCard';
import './UserPage.css';


export default function UserPage() {
    const { login } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        async function getData() {
            const initialData = await axios.get(`https://api.github.com/users/${login}`);
            setData(initialData.data);
        }
        getData();
    }, [login]);

    return (
        <div className="UserPageMain">
            <div class='UserPage'>
                <UserHeader info={data}></UserHeader>

                <Container fluid>

                    {/* Row 1: Full width */}
                    <Row className="mb-3">
                        <Col md={12}>
                            <UserPageCard1 info={data}></UserPageCard1>
                        </Col>
                    </Row>

                    {/* Row 2: 3 columns */}
                    <Row className="mb-3">
                        <Col md={4}>
                            <UserPageSmallCard heading={data.followers} subHeading="followers"></UserPageSmallCard>
                        </Col>
                        <Col md={4}>
                            <UserPageSmallCard heading={data.following} subHeading="following"></UserPageSmallCard>
                        </Col>
                        <Col md={4}>
                            <UserPageSmallCard heading={data.public_repos} subHeading="repositories"></UserPageSmallCard>
                        </Col>
                    </Row>

                    {/* Row 3: Full width */}
                    <Row className="mb-3">
                        <Col md={12}>
                            <a href={data.html_url}  target="_blank">view Github profile</a>
                        </Col>
                    </Row>

                    {/* Row 4: Full width */}
                    <Row>
                        <Col md={12}>
                            <Link
                                className="card-link"
                                to={`/`}
                            >
                                Back to home
                            </Link>
                        </Col>
                    </Row>

                </Container>



            </div>
        </div>
    )
}