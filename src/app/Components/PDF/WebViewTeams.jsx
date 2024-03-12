const WebViewTeams = ({ teamsSelected }) => {
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
      {teamsSelected.map((dataItem) => (
        <div key={dataItem.id} style={{ marginTop: "12px" }}>
          <div
            style={{
              backgroundColor: "#3e5bb7",
              color: "white",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <p style={{ textAlign: "center" }}>{dataItem.team}</p>
            <p style={{ textAlign: "center" }}>
              showed Up: {dataItem.showedUp}
            </p>
          </div>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={styles.header}>Job Description</th>
                <th style={styles.header}>Manager</th>
                {/* <th style={styles.header}>Task</th>
                  <th style={styles.header}>Type Task</th>
                  <th style={styles.header}>Quantity</th> */}
              </tr>
            </thead>
            <tbody>
              {dataItem.jobDescription.map((option, index) => (
                <tr key={index}>
                  <td style={styles.cell}>{option.description}</td>
                  <td style={styles.cell}></td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th style={styles.header}>Tools</th>
                <th style={styles.header}>QTY</th>
              </tr>
            </thead>
            <tbody>
              {dataItem.tools.map((tool, index) => (
                <tr key={index}>
                  <td style={styles.cell}>{tool.name}</td>
                  <td style={styles.cell}>{tool.quantity}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th style={styles.header}>Buggy</th>
                <th style={styles.header}>Skidsteer</th>
              </tr>
            </thead>
            <tbody>
              {dataItem.skidsteer.map((s, index) => (
                <tr key={index}>
                  <td style={styles.cell}>{s.serial}</td>
                  {/* Comprueba si hay un elemento correspondiente en buggy */}
                  {dataItem.buggy[index] ? (
                    <td style={styles.cell}>{dataItem.buggy[index].serial}</td>
                  ) : (
                    <td style={styles.cell}></td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <div></div>
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
export default WebViewTeams;
