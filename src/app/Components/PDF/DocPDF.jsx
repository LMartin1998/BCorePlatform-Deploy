import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const DocPDF = () => {
    const styles = StyleSheet.create({
        page: {
            padding: "1rem 1.5rem",
        },
        section: {
            marginTop: 10,
            marginBottom: 10,
        },
        logoContainer: {
            width: "100%",
            height: "150px",
            backgroundColor: "#1e40af",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        imageLogo: {
            objectFit: "contain"
        },
        logoText: {
            color: "white",
            fontSize: 10,
            textAlign: "center",
            marginTop: 2,
        },
        projectInfoContainer: {
            flexDirection: "row",
            marginTop: 6,
            color: "white",
        },
        projectInfoItem: {
            flex: 1,
            padding: 4,
        },
        companyDataContainer: {
            flexDirection: "row",
            marginTop: 6,
        },
        companyDataItem: {
            flex: 1,
            border: 1,
            borderColor: "#3e5bb7",
            padding: 4,
        },
        reportContainer: {
            marginTop: 12,
        },
        reportHeader: {
            backgroundColor: "#3e5bb7",
            color: "white",
            padding: 4,
            textAlign: "center",
        },
        table: {
            borderCollapse: 'collapse',
            width: '100%',
            marginTop: 8,
        },
        header: {
            backgroundColor: '#6179C8',
            color: 'white',
            padding: 8,
            textAlign: 'center',
            border: '1px solid black',
        },
        cell: {
            border: '1px solid black',
            padding: 8,
            textAlign: 'center',
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.logoContainer}>
                    <Image style={styles.imageLogo} src="/Assets/BCORE-LOGO-White.png" />
                    <Text style={styles.logoText}>
                        We are a Company Working Towards Clean, Renewable, Reliable & Sustainable Energy While Also Making it Affordable For Our Customers.
                    </Text>
                </View>
                <View style={styles.projectInfoContainer}>
                    <View style={[styles.projectInfoItem, { backgroundColor: "#6179C8" }]}>
                        <Text style={{ textAlign: "center" }}>Black bear</Text>
                    </View>
                    <View style={[styles.projectInfoItem, { backgroundColor: "#3e5bb7" }]}>
                        <Text style={{ textAlign: "center" }}>Reporting day</Text>
                    </View>
                </View>
                <View style={styles.companyDataContainer}>
                    <View style={styles.companyDataItem}>
                        <Text style={{ fontWeight: "bold" }}>Company Address</Text>
                        <Text>123 Anywhere St, Any City, ST 12345</Text>
                    </View>
                    <View style={styles.companyDataItem}>
                        <Text style={{ fontWeight: "bold" }}>Contact Number</Text>
                        <Text>123-456-789</Text>
                    </View>
                    <View style={styles.companyDataItem}>
                        <Text style={{ fontWeight: "bold" }}>Tax ID</Text>
                        <Text>123-456-789</Text>
                    </View>
                </View>
                <View style={styles.reportContainer}>
                    <Text style={styles.reportHeader}>Block PCS401</Text>
                </View>
                <View>
                    <View style={styles.table}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.header}>Header 1</Text>
                            <Text style={styles.header}>Header 2</Text>
                            <Text style={styles.header}>Header 3</Text>
                            <Text style={styles.header}>Header 4</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.cell}>Dato 1</Text>
                            <Text style={styles.cell}>Dato 2</Text>
                            <Text style={styles.cell}>Dato 3</Text>
                            <Text style={styles.cell}>Dato 4</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.cell}>Dato 5</Text>
                            <Text style={styles.cell}>Dato 6</Text>
                            <Text style={styles.cell}>Dato 7</Text>
                            <Text style={styles.cell}>Dato 8</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}

export default DocPDF;
