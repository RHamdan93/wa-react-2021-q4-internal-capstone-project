const ProductDetailsSpecs = ({ specs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Spec</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {specs.map((spec, idx) => (
          <tr key={idx}>
            <td>{spec.spec_name}</td>
            <td>{spec.spec_value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductDetailsSpecs;
