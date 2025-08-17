import React, { useState } from "react";
import { data, ITable } from "./data";

const TableFilter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    [item.name, item.email, item.city].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Filter Table data</h1>
      <hr />
      <label>Search: </label>
      <input
        type="text"
        placeholder="Search value..."
        style={{ marginBottom: "30px", padding: "5px", width: "250px" }}
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
        <table
          border={1}
          cellPadding={10}
          style={{ width: "50%", marginTop: "10px" }}
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableFilter;
