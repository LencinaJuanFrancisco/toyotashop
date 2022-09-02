import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CradProduct({ product }) {
  return (
   
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.imge} />
        <Card.Body>
          <Card.Title>{product.bran}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Comprar</Card.Link>
          <Card.Link href="#">Ver mas</Card.Link>
        </Card.Body>
      </Card>
   
  );
}

export default CradProduct;
