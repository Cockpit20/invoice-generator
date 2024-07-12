import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Invoice from './Invoice';

const GenerateInvoice = ({ cartItems, totalAmount, user }) => {
    const generatePDF = () => {
        const invoice = document.getElementById('invoice');
        html2canvas(invoice)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save('invoice.pdf');
            })
            .catch((error) => {
                console.error('Error generating PDF', error);
            });
    };

    return (
        <div>
            <Invoice cartItems={cartItems} totalAmount={totalAmount} user={user} />
            <button onClick={generatePDF}>Download Invoice</button>
        </div>
    );
};

export default GenerateInvoice;
