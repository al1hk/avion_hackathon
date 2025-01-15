"use client"
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ReceiptProps {
  customerDetails: {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
  };
  items: any[];
  total: number;
  orderDate: string;
}

const Receipt = ({ customerDetails, items, total, orderDate }: ReceiptProps) => {
  const receiptRef = useRef<HTMLDivElement>(null);

  const downloadReceipt = async () => {
    if (receiptRef.current) {
      const canvas = await html2canvas(receiptRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`receipt-${orderDate}.pdf`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div ref={receiptRef} className="space-y-6">
        <div className="text-center border-b pb-4">
          <h2 className="text-3xl font-bold">Order Receipt</h2>
          <p className="text-gray-600">Order Date: {orderDate}</p>
        </div>

        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">Customer Details</h3>
          <p><strong>Name:</strong> {customerDetails.name}</p>
          <p><strong>Email:</strong> {customerDetails.email}</p>
          <p><strong>Address:</strong> {customerDetails.address}</p>
          <p><strong>City:</strong> {customerDetails.city}</p>
          <p><strong>State:</strong> {customerDetails.state}</p>
          <p><strong>Postal Code:</strong> {customerDetails.postalCode}</p>
          <p><strong>Phone:</strong> {customerDetails.phone}</p>
        </div>

        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">Order Items</h3>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-right">
          <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={downloadReceipt}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Download Receipt
        </button>
      </div>
    </div>
  );
};

export default Receipt;
