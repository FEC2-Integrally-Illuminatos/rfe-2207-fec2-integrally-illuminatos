import React from 'react';

const ComparisonRow = ({product, type, productForComparison}) => {
  if (type === 'Name') {
    return (
      <tr>
        <td>{product.name}</td>
        <td>{type}</td>
        <td>{productForComparison.name}</td>
      </tr>
    );
  }
  if (type === 'Category') {
    return (
      <tr>
        <td>{product.category}</td>
        <td>{type}</td>
        <td>{productForComparison.category}</td>
      </tr>
    );
  }
  if (type === 'Rating') {
    return (
      <tr>
        <td>{5}</td>
        <td>{type}</td>
        <td>{4}</td>
      </tr>
    );
  }  if (type === 'Price') {
    return (
      <tr>
        <td>${product['default_price']}</td>
        <td>{type}</td>
        <td>{productForComparison['default_price']}</td>
      </tr>
    );
  }

}

export default ComparisonRow;