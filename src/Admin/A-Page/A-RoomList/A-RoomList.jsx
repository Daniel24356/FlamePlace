import React from "react";
import "./A-RoomList.css"; // Import CSS file for styling

const RoomList = () => {
  const rooms = [
    { name: "Deluxe Room", facility: "Free WiFi, AC, TV", price: "$120", status: "Available" },
    { name: "Executive Suite", facility: "King Bed, Mini Bar, WiFi", price: "$200", status: "Booked" },
    { name: "Standard Room", facility: "WiFi, Breakfast", price: "$80", status: "Available" },
    { name: "Presidential Suite", facility: "Private Pool, Butler Service", price: "$500", status: "Booked" },
    { name: "Single Room", facility: "AC, TV", price: "$60", status: "Available" },
    { name: "Double Room", facility: "Two Beds, WiFi", price: "$100", status: "Booked" },
    { name: "Luxury Suite", facility: "Jacuzzi, Sea View", price: "$300", status: "Available" },
    { name: "Family Room", facility: "4 Beds, Kitchenette", price: "$150", status: "Available" },
    { name: "Honeymoon Suite", facility: "Candle Light Dinner, King Bed", price: "$250", status: "Booked" },
    { name: "Budget Room", facility: "Fan, Shared Bathroom", price: "$40", status: "Available" },
  ];

  return (
    <div className="room-list-container">
      <h2>Room List</h2>
      <table className="room-table">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Facility</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index} className={room.status === "Booked" ? "booked" : "available"}>
              <td>{room.name}</td>
              <td>{room.facility}</td>
              <td>{room.price}</td>
              <td>{room.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomList;
