
const WebView = () => {
    return (
        <div style={
            {padding: ".5rem 1rem", backgroundColor: "#e3d8d873"}
        }>
             {/* Logo and information */}
            <div style={
                {
                    width: "100%",
                    height: "150px",
                    backgroundColor: "#1e40af",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }
            }> 
                <img src="/Assets/BCORE-LOGO-White.png" alt="" />
                <p style={
                    {
                        color: "white",
                        fontSize: "smaller",
                        margin: "0 4px",
                        textAlign: "center",
                    }
                }>We are a Company Working Towards Clean, Renewable, Reliable & Sustainable Energy While Also Making it Affordable For Our Customers.</p>
            </div>
             {/* date and name of project */}
            <div style={
                {
                    display: "flex",
                    alignItems: "center",
                    marginTop: "6px",
                    color: "white"
                }
            }>
                <div style={{flex:"1", backgroundColor: "#6179C8"}}>
                    <p style={{textAlign:"center"}}>Black bear</p>
                </div>
                <div style={{flex:"1", backgroundColor: "#3e5bb7"}}>
                    <p style={{textAlign:"center"}}>Reporting day</p>
                </div>
            </div>
            {/* company data */}
            <div style={{display: "flex", alignItems: "flex-start", marginTop: "6px"}}>
                <div style={{flex: "1", borderTop: "1px solid #3e5bb7", marginRight: "6px"}}>
                    <p style={{fontWeight: "bold"}}>Company Address</p>
                    <p>123 Anywhere St, Any City, ST 12345</p>
                </div>
                <div style={{flex: "1", borderTop: "1px solid #3e5bb7"}}>
                    <p style={{fontWeight: "bold"}}>Contact Number</p>
                    <p>123-456-789</p>
                </div>
                <div style={{flex: "1", borderTop: "1px solid #3e5bb7", marginLeft: "6px"}}>
                    <p style={{fontWeight: "bold"}}>Tax ID</p>
                    <p>123-456-789</p>
                </div>
            </div>
            {/* Report */}
            <div style={{marginTop:"12px"}}>
                <div style={{backgroundColor: "#3e5bb7", color:"white"}}>
                    <p style={{textAlign:"center"}}>Block PCS401</p>
                </div>
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                <tr>
                    <th style={styles.header}>Header 1</th>
                    <th style={styles.header}>Header 2</th>
                    <th style={styles.header}>Header 3</th>
                    <th style={styles.header}>Header 4</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={styles.cell}>Dato 1</td>
                    <td style={styles.cell}>Dato 2</td>
                    <td style={styles.cell}>Dato 3</td>
                    <td style={styles.cell}>Dato 4</td>
                </tr>
                <tr>
                    <td style={styles.cell}>Dato 5</td>
                    <td style={styles.cell}>Dato 6</td>
                    <td style={styles.cell}>Dato 7</td>
                    <td style={styles.cell}>Dato 8</td>
                </tr>
                {/* Puedes añadir más filas según sea necesario */}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    header: {
      backgroundColor: '#6179C8',
      border: '1px solid black',
      padding: '8px',
      textAlign: 'center',
      color: "white"
    },
    cell: {
      border: '1px solid black',
      padding: '8px',
      textAlign: 'center',
    },
  };
 
export default WebView;