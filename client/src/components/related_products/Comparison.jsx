import React from 'react';

const ComparisonTable = () => {
  return (
    <div className="tableContainer">
      <table>
          <caption>
            Item Comparison
          </caption>
          <thead>
            <tr>
                <th scope="col">Item 1 Value</th>
                <th scope="col">Characteristic</th>
                <th scope="col">Item 2 Value</th>
            </tr>
          </thead>
          <tbody>

            <tr>
                <td>Item Value</td>
                <td>Characteristic</td>
                <td>Item Value</td>
            </tr>

            <tr>
                <td>Item Value</td>
                <td>Characteristic</td>
                <td>Item Value</td>
            </tr>


            <tr>
                <td>Item Value</td>
                <td>Characteristic</td>
                <td>Item Value</td>
            </tr>

            <tr>
                <td>Item Value</td>
                <td>Characteristic</td>
                <td>Item Value</td>
            </tr>

          </tbody>
      </table>
    </div>
  )
};

export default ComparisonTable;