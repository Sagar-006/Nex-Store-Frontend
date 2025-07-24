// interface shippingAddress {
//   city:string;
//   firstname:string;
//   lastname:string;
//   street:string;
//   zip:string;
// }

// interface productId {
//   category:string;
//   image:string;
//   name:string;
//   price:number
// }

// interface MyOrderProps {
//   productId: productId;
//   quantity:number;
//   size:string;
//   _id:string;
//   shippingAddress:shippingAddress;
// }

export const MyOrder: React.FC<any> = ({ order }) => {
  return (
    <div className=" flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg shadow-md hover:shadow-lg transition gap-4">
      {/* Left User Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
          {order?.shippingAddress?.firstname?.charAt(0) || "U"}
        </div>
        <div>
          <p className="font-semibold bg-white text-black dark:bg-black dark:text-white">
            {order?.shippingAddress?.firstname || "Unknown User"}
          </p>
          <p className="text-sm text-gray-500">{order?.user?.email}</p>
        </div>
      </div>

      {/* Right Order Info (grid) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-gray-700 w-full sm:w-auto">
        <div>
          <p className="font-medium">#{order._id.slice(-5)}</p>
          <p className="text-xs text-gray-400">Order ID</p>
        </div>
        <div>
          <p className="text-blue-600 font-semibold">₹{order.totalAmount}</p>
          <p className="text-xs text-gray-400">Amount</p>
        </div>
        <div>
          <p>{new Date(order.createdAt).toLocaleDateString()}</p>
          <p className="text-xs text-gray-400">Date</p>
        </div>
        <div>
          <span
            className={`text-sm font-semibold ${
              order.status === "Paid"
                ? "text-green-500"
                : order.status === "Refund"
                ? "text-yellow-500"
                : order.status === "Cancel"
                ? "text-red-500"
                : "text-gray-600"
            }`}
          >
            {order.status}
          </span>
          <p className="text-xs text-gray-400">Status</p>
        </div>
      </div>
    </div>
  );
};
