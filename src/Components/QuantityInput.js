const QuantityInput = ({ showLabel, ...props }) => {
  return (
    <div>
      {showLabel && <label htmlFor="quantity">Quantity: </label>}
      <input
        aria-label="quantity"
        id="quantity"
        type="number"
        defaultValue="1"
        min="1"
        {...props}
      />
    </div>
  );
};

export default QuantityInput;
