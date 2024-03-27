import React from "react";

const WebView = ({groupedData}) => {
  return (
    <div style={{ padding: ".5rem 1rem", backgroundColor: "#e3d8d873" }}>
      {/* Logo and information */}
      <div
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: "#1e40af",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ objectFit: "contain" }}
          src="/Assets/BCORE-LOGO-White.png"
          alt=""
        />
        <p
          style={{
            color: "white",
            fontSize: "smaller",
            margin: "0 4px",
            textAlign: "center",
          }}
        >
          We are a Company Working Towards Clean, Renewable, Reliable &
          Sustainable Energy While Also Making it Affordable For Our Customers.
        </p>
      </div>
      {/* date and name of project */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "6px",
          color: "white",
        }}
      >
        <div style={{ flex: "1", backgroundColor: "#6179C8" }}>
          <p style={{ textAlign: "center" }}>Black bear</p>
        </div>
        <div style={{ flex: "1", backgroundColor: "#3e5bb7" }}>
          <p style={{ textAlign: "center" }}>Reporting day</p>
        </div>
      </div>
      {/* company data */}
      <div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "6px" }}
      >
        <div
          style={{
            flex: "1",
            borderTop: "1px solid #3e5bb7",
            marginRight: "6px",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Company Address</p>
          <p>123 Anywhere St, Any City, ST 12345</p>
        </div>
        <div style={{ flex: "1", borderTop: "1px solid #3e5bb7" }}>
          <p style={{ fontWeight: "bold" }}>Contact Number</p>
          <p>123-456-789</p>
        </div>
        <div
          style={{
            flex: "1",
            borderTop: "1px solid #3e5bb7",
            marginLeft: "6px",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Tax ID</p>
          <p>123-456-789</p>
        </div>
      </div>
      {/* Report */}
      {groupedData.map((dataItem) => (
        <div key={dataItem.id} style={{ marginTop: "12px" }}>
          <div style={{ backgroundColor: "#3e5bb7", color: "white" }}>
            <p style={{ textAlign: "center" }}>{dataItem.id}</p>
          </div>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={styles.header}>Team</th>
                <th style={styles.header}>Task</th>
                <th style={styles.header}>Type Task</th>
                <th style={styles.header}>Quantity</th>
              </tr>
            </thead>
            <tbody>
                {dataItem.dropDownValue.map((option, index) =>(
                <tr key={index}>
                    <td style={styles.cell}>Dato 1</td>
                    <td style={styles.cell}>{option.parent}</td>
                    <td style={styles.cell}>{option.value}</td>
                    <td style={styles.cell}>Dato 4</td>
                </tr>
                ))}
            </tbody>
          </table>
          <div>
            <ul style={{ listStyle: 'inside' }}>
              {Object.values(dataItem.textareaValue).map((value, index) =>(
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#6179C8",
    border: "1px solid black",
    padding: "8px",
    textAlign: "center",
    color: "white",
  },
  cell: {
    border: "1px solid black",
    padding: "8px",
    textAlign: "center",
  },
};

export default WebView;
