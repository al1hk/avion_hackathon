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
      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: receiptRef.current.scrollWidth,
        windowHeight: receiptRef.current.scrollHeight,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`receipt-${orderDate}.pdf`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md my-8">
      <div ref={receiptRef} className="space-y-8 p-8 bg-white">
        <div className="text-center border-b pb-6">
          <h2 className="text-4xl font-playfair mb-4">AVION</h2>
          <h3 className="text-3xl font-playfair mb-3">Order Receipt</h3>
          <p className="text-gray-600 font-montserrat">Order Date: {orderDate}</p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-3xl font-playfair mb-4">Customer Details</h3>
          <div className="space-y-3">
            <p className='font-montserrat text-lg'><span className="font-semibold">Name:</span> {customerDetails.name}</p>
            <p className='font-montserrat text-lg'><span className="font-semibold">Email:</span> {customerDetails.email}</p>
            <p className='font-montserrat text-lg'><span className="font-semibold">Address:</span> {customerDetails.address}</p>
            <p className='font-montserrat text-lg'><span className="font-semibold">City:</span> {customerDetails.city}</p>
            <p className='font-montserrat text-lg'><span className="font-semibold">State:</span> {customerDetails.state}</p>
            <p className='font-montserrat text-lg'><span className="font-semibold">Postal Code:</span> {customerDetails.postalCode}</p>
            <p className='font-montserrat text-lg'><span className="font-semibold">Phone:</span> {customerDetails.phone}</p>
          </div>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-3xl font-playfair mb-4">Order Items</h3>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-3">
                <div className="flex-grow">
                  <p className="font-montserrat text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 font-montserrat">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right min-w-[120px]">
                  <p className="font-montserrat text-lg">£{(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-gray-600 font-montserrat">£{item.price} each</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 pb-8">
          <div className="flex justify-between items-center border-t border-b py-4 mt-4">
            <span className="text-2xl font-playfair">Total Amount</span>
            <span className="text-2xl font-playfair font-bold min-w-[120px] text-right">£{total.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8 pt-4">
          <p>Thank you for shopping with AVION!</p>
          <p>For any questions, please contact our customer service.</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={downloadReceipt}
          className="bg-[#2A254B] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors font-montserrat text-lg"
        >
          Download Receipt
        </button>
      </div>
    </div>
  );
};

export default Receipt;
