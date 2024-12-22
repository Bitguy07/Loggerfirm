import { authData } from "../../Authentication/AuthWrapper";

const PaymentPage = () => {
    const { qrCodeUrl } = authData;
  return (
    <div className="bg-blue-700 h-full w-full flex flex-col items-center justify-center text-white">
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Billing App</h1>
      <p className="mb-4 ">
        Scan the QR Code below to make a payment.
      </p>
      {qrCodeUrl ? (
        <img src={qrCodeUrl} alt="QR Code" className="mt-4" />
      ) : (
        <p>Loading QR Code...</p>
      )}
    </div>
    </div>
  );
};

export default PaymentPage;
