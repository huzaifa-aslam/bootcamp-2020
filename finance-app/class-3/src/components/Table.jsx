import React from "react";
import { Table } from "react-bootstrap";
import tableData from "./json/data.json";

export const TableData = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>UpdatedOn</th>
            <th>Discription</th>
            <th>Brand Name</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.costPrice}</td>
                <td>{item.listPrice}</td>
                <td>{item.Quantity}</td>
                <td>{item.UpdatedOn}</td>
                <td>{item.Discription}</td>
                <td>{item.brandName}</td>
                <td>{item.companyName}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
