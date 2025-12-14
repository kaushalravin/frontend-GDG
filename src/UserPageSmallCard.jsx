import Card from 'react-bootstrap/Card';
export default function UserPageSmallCard({heading,subHeading}){
    return(
        <Card
          bg="light"
          text="dark"
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>{heading}</Card.Title>
            <Card.Text>
              {subHeading}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}