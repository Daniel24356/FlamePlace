import React from "react";
import "./BookingTable.css";

const bookings = [
  {
    id: 1,
    profile: "🧑‍💼",
    name: "John Deo",
    checkIn: "12-08-2019",
    checkOut: "15-08-2019",
    status: "Paid",
    phone: "123-456-7890",
    roomType: "Deluxe",
    documents: ["ID", "Passport"],
  },
  {
    id: 2,
    profile: "👩‍💼",
    name: "Jane Smith",
    checkIn: "05-07-2021",
    checkOut: "10-07-2021",
    status: "Pending",
    phone: "987-654-3210",
    roomType: "Suite",
    documents: ["ID"],
  },
  {
    id: 3,
    profile: "🧑‍💼",
    name: "Mark Lee",
    checkIn: "20-06-2023",
    checkOut: "25-06-2023",
    status: "Paid",
    phone: "456-789-1230",
    roomType: "Standard",
    documents: ["Passport"],
  },
  {
    id: 4,
    profile: "👨‍💼",
    name: "Alex Brown",
    checkIn: "01-09-2022",
    checkOut: "05-09-2022",
    status: "Canceled",
    phone: "321-654-9870",
    roomType: "Deluxe",
    documents: ["ID"],
  },
  {
    id: 5,
    profile: "👩‍💼",
    name: "Emily Davis",
    checkIn: "15-03-2020",
    checkOut: "20-03-2020",
    status: "Paid",
    phone: "654-987-3210",
    roomType: "Suite",
    documents: ["Passport"],
  },
  {
    id: 6,
    profile: "🧑‍💼",
    name: "Daniel Kim",
    checkIn: "28-11-2021",
    checkOut: "30-11-2021",
    status: "Unpaid",
    phone: "789-123-4560",
    roomType: "Standard",
    documents: ["ID", "Visa"],
  },
  {
    id: 7,
    profile: "👨‍💼",
    name: "Sophia Lee",
    checkIn: "10-05-2023",
    checkOut: "15-05-2023",
    status: "Paid",
    phone: "123-789-4560",
    roomType: "Deluxe",
    documents: ["ID"],
  },
  {
    id: 8,
    profile: "🧑‍💼",
    name: "Michael Fox",
    checkIn: "03-12-2022",
    checkOut: "08-12-2022",
    status: "Pending",
    phone: "321-987-6540",
    roomType: "Suite",
    documents: ["Passport"],
  },
  {
    id: 9,
    profile: "👩‍💼",
    name: "Olivia Reed",
    checkIn: "22-07-2021",
    checkOut: "27-07-2021",
    status: "Paid",
    phone: "654-321-9870",
    roomType: "Standard",
    documents: ["ID", "Visa"],
  },
];

const BookingTable = () => {
  return (
    <div className="booking-container">
      <h2>Booking Details</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
            <th>Phone</th>
            <th>Room Type</th>
            <th>Documents</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.profile}</td>
              <td>{booking.name}</td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>
              <td className={`status ${booking.status.toLowerCase()}`}>
                {booking.status}
              </td>
              <td>{booking.phone}</td>
              <td>{booking.roomType}</td>
              <td>{booking.documents.join(", ")}</td>
              <td>
                <button className="view-btn">View</button>
                <button className="edit-btn">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
