import React from 'react';
import ComparisonRow from './ComparisonRow.jsx';

const ComparisonTable = () => {
  return (
    <div className="tableContainer">
      <table>
          <caption>
            Comparing
          </caption>
          <thead>
            <tr>
                <th scope="col">Item 1 Value</th>
                <th scope="col">Characteristic</th>
                <th scope="col">Item 2 Value</th>
            </tr>
          </thead>
          <tbody>
            <ComparisonRow />
            <ComparisonRow />
            <ComparisonRow />
            <ComparisonRow />
            <ComparisonRow />
            <ComparisonRow />
            <ComparisonRow />
            <ComparisonRow />
            <ComparisonRow />
            <ComparisonRow />
            <ComparisonRow />
            <ComparisonRow />
          </tbody>
      </table>
    </div>
  )
};

export default ComparisonTable;