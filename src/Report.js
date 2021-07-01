import React, { Component } from "react";


class Report extends Component {
  renderTableData = () => {
    let arr = this.props.finalCenters.map((center) => {
      let { name, address, pincode, availability_18, availability_45 } = center;

      return (
        <tr>
          <td style={{ border: "3px double black" }}>{`${name}, ${address}`}</td>
          <td style={{ border: "3px double black" }}>{pincode}</td>
          <td style={{ border: "3px double black" }}>
            {availability_18 && (
              <tr>
                <td>18</td>
              </tr>
            )}
            {availability_45 && (
              <tr>
                <td>45</td>
              </tr>
            )}
          </td>
          <td style={{ border: "3px double black" }}>
            <tr>
              <td>{availability_18}</td>
            </tr>
            <tr style={{ border: "3px double black" }}>
              <td>{availability_45}</td>
            </tr>
          </td>
        </tr>
      );
    });

    return arr;
  };
  render() {
    return (
      <table id="Centers" style={{ border: "1px solid white" }}>
        <thead>
          <tr>
            <th>Center</th>
            <th>Pincode</th>
            <th>Age</th>
            <th>Available Capacity</th>
          </tr>
        </thead>
        <tbody>{this.renderTableData()}</tbody>
      </table>
    );
  }
}

export { Report };
