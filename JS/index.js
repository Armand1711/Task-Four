var vehicles = []; // Array to store logged vehicles

function logVehicle() {
  var vehicleType = document.getElementById("vehicleType").value;
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  var registrationNumber = document.getElementById("registrationNumber").value;
  var condition = document.getElementById("condition").value;

  // Create a vehicle object
  var vehicle = {
    vehicleType: vehicleType,
    make: make,
    model: model,
    registrationNumber: registrationNumber,
    condition: condition
  };

  // Add the vehicle object to the array
  vehicles.push(vehicle);

  // Clear the form inputs
  document.getElementById("vehicleForm").reset();

  // Log the array of vehicles 
  console.log(vehicles);
}
