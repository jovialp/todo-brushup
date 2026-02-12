import  { useState, useCallback, memo } from "react";

const STATUS_OPTIONS = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

const OrderRow = memo(function OrderRow({ order, onStatusChange }: {
  order: { id: string; status: string };
  onStatusChange: (id: string, newStatus: string) => void;
}) {
  const selectId = `status-${order.id}`;

  return (
    <tr>
      <th scope="row">{order.id}</th>

      <td>
        <span >Current status: {order.status}</span>
        <label htmlFor={selectId} style={{display: "none"}}>
          Change status for order {order.id}
        </label>



        <select
          id={selectId}
          value={order.status}
          onChange={(e) =>
            onStatusChange(order.id, e.target.value)
          }
        >
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
});

export default function OrderTable() {
  const [orders, setOrders] = useState(() => [
    { id: "ORD-101", status: "Pending" },
    { id: "ORD-102", status: "Processing" },
    { id: "ORD-103", status: "Shipped" },
    { id: "ORD-104", status: "Delivered" },
  ]);

  const handleStatusChange = useCallback((id:string, newStatus:string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );

  }, []);

  return (
    <section aria-labelledby="orders-heading">
      <h2 id="orders-heading">Order Management</h2>



      <table>
        <caption>List of customer orders and their current status</caption>

        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
              onStatusChange={handleStatusChange}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
