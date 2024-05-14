import React from 'react';
import { Page, Document, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#d4d4d4',
        padding: 20,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        textAlign: 'justify',
        border: '1px solid #CCCCCC', // Add border
    },
    header: {
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottom: '2px solid #333333', // Add border bottom
    },
    text: {
        fontSize: 12,
        textAlign: 'justify',
        fontFamily: 'Times-Roman',
    },
    textB: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'justify',
        fontFamily: 'Times-Roman',
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 10,
    },
    footer2: {
        position: 'absolute',
        bottom: 40,
        left: 40,
        right: 0,
        textAlign: 'justify',
        fontFamily: 'Times-Roman',

        fontSize: 10,
    },
});

// Create PDF component
const FullMaintenancePDF = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>FullMaintenance Report</Text>
                <Text style={styles.text}>
                    Title : {data.rep.title}{"\n\n"}FullMaintenance :

                </Text>

                {data.rep.dataMain.map((task) => (
                    <Text style={styles.text}>
                        {(typeof (task.device) === "object") && task.device[0].type}
                        {((typeof (task.status) === "number") && task.status) ? (task.status === 1 ? ' ok' : '[pending]') : '..pending'}

                        {`\n for:`}
                        <Text style={styles.textB}>
                            {(typeof (task.user) === "object") && task.user.name}
                        </Text>
                    </Text>
                ))}

                <Text style={styles.text}>
                    {`\n`}
                    Sincerely, {data.user.name}
                </Text>
            </View>
            <View style={styles.footer2}>
                <Text>
                    Report Disclaimer:{"\n\n"}

                    This report, along with any accompanying documents, is provided for informational purposes only and{"\n"}
                    does not constitute professional advice. While every effort has been made to ensure the accuracy{"\n"}
                    and completeness of the information contained herein, no warranty, express or implied, is given regarding{"\n"}
                    the reliability, suitability, or correctness of the contents. The views and opinions expressed in this report{"\n"}
                    are those of the author(s) and do not necessarily reflect{"\n"}
                    the official policy or position of Car Maintain.{"\n"}
                </Text>
            </View>

            <View style={styles.footer}>
                <Text>Generated on: {new Date().toLocaleString()}</Text>
            </View>
        </Page>
    </Document>
);

export default FullMaintenancePDF;
