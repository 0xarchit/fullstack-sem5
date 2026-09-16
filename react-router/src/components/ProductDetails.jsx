import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  return (
    <>
      <p> Product ID: {id}</p>
    </>
  )
}

export default ProductDetails;
