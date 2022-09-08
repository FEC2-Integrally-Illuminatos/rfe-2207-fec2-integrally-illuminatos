import React from 'react';
import ComparisonRow from './ComparisonRow.jsx';

const ComparisonTable = ({product, productForComparison}) => {
  console.log('prodforcomp', productForComparison)
  return (
    <div className="tableContainer">
      <table>
          <thead>
            <tr>
                <th scope="col">Item 1 Value</th>
                <th scope="col">Characteristic</th>
                <th scope="col">Item 2 Value</th>
            </tr>
          </thead>
          <tbody>
            <ComparisonRow type="Name" product={product} productForComparison={productForComparison}/>
            <ComparisonRow type="Category" product={product} productForComparison={productForComparison}/>
            <ComparisonRow type="Price" product={product} productForComparison={productForComparison}/>
            <ComparisonRow type="Rating" product={product} productForComparison={productForComparison}/>

          </tbody>
      </table>
    </div>
  )
};

export default ComparisonTable;