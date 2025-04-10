import "./A-GuestList.css"

const GuestList = () => {
    const guests = [
      { name: "John Doe", dateOrder: "2025-02-10", checkIn: "2025-02-12", checkOut: "2025-02-15", roomType: "Deluxe Room", status: "Checked In" },
      { name: "Jane Smith", dateOrder: "2025-02-11", checkIn: "2025-02-13", checkOut: "2025-02-16", roomType: "Executive Suite", status: "Pending" },
      { name: "Michael Johnson", dateOrder: "2025-02-12", checkIn: "2025-02-14", checkOut: "2025-02-18", roomType: "Standard Room", status: "Checked Out" },
      { name: "Emily Davis", dateOrder: "2025-02-13", checkIn: "2025-02-15", checkOut: "2025-02-19", roomType: "Presidential Suite", status: "Checked In" },
      { name: "David Wilson", dateOrder: "2025-02-14", checkIn: "2025-02-16", checkOut: "2025-02-20", roomType: "Single Room", status: "Pending" },
    ];
  
    return (
      <div className="table-container">
        <h2>Guest List</h2>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Date Order</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Room Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest, index) => (
              <tr key={index} className={guest.status === "Checked In" ? "checked-in" : guest.status === "Pending" ? "pending" : "checked-out"}>
                <td>{guest.name}</td>
                <td>{guest.dateOrder}</td>
                <td>{guest.checkIn}</td>
                <td>{guest.checkOut}</td>
                <td>{guest.roomType}</td>
                <td>{guest.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default GuestList