import DeleteButton from "../components/DeleteButton";
import { Link, navigate } from "@reach/router";

const ClothesList = ({ clothes, setClothes }) => {
  const removeFromDom = (id) => {
    setClothes(clothes.filter((clothing) => clothing._id !== id));
  };
  return (
    <>
      {clothes.length > 0 &&
        clothes.map((clothing) => {
          return (
            <div key={clothing._id}>
              {console.log(clothing)}
              <p>Category: {clothing.category}</p>
              <p>Name: {clothing.name}</p>
              <p>Size: {clothing.size}</p>
              <p>Price: {clothing.price}</p>
              <p>inStock: {clothing.inStock ? "Yes" : "No"}</p>
              <p>onSale: {clothing.onSale ? "Yes" : "No"}</p>
              <img
                src={clothing.imgUrl}
                alt={clothing.name}
                style={{ width: "300px" }}
              />
              <Link to={`/edit/${clothing._id}`}>Edit</Link>
              <DeleteButton
                id={clothing._id}
                successCallBack={() => removeFromDom(clothing._id)}
              />
            </div>
          );
        })}
    </>
  );
};

export default ClothesList;
