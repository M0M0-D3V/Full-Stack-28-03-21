const ClothesForm = ({
  formInputs,
  changeFunction,
  submitFunction,
  buttonText,
}) => {
  return (
    <>
      <form onSubmit={submitFunction}>
        <p>
          Category:{" "}
          <input
            type="text"
            name="category"
            value={formInputs.category}
            onChange={changeFunction}
          />
        </p>
        <p>
          imgUrl:{" "}
          <input
            type="text"
            name="imgUrl"
            value={formInputs.imgUrl}
            onChange={changeFunction}
          />
        </p>
        <p>
          Size:{" "}
          <input
            type="text"
            name="size"
            value={formInputs.size}
            onChange={changeFunction}
          />
        </p>
        <p>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formInputs.name}
            onChange={changeFunction}
          />
        </p>
        <p>
          Price:{" "}
          <input
            type="number"
            name="price"
            value={formInputs.price}
            onChange={changeFunction}
            min="0"
            step="0.01"
          />
        </p>
        <p>
          In Stock?:
          <input
            type="checkbox"
            name="inStock"
            checked={formInputs.inStock}
            value={formInputs.inStock}
            onChange={changeFunction}
          />
          Yes
        </p>
        <p>
          On Sale?:
          <input
            type="checkbox"
            name="onSale"
            checked={formInputs.onSale}
            value={formInputs.onSale}
            onChange={changeFunction}
          />
          Yes
        </p>

        <button type="submit">{buttonText}</button>
      </form>
    </>
  );
};

export default ClothesForm;
