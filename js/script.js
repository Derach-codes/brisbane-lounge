const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const guestName = document.getElementById("guestName").value.trim();
  const guestEmail = document.getElementById("guestEmail").value.trim();
  const roomType = document.getElementById("roomType").value;
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;
  const guests = document.getElementById("guests").value;

  if (
    guestName === "" ||
    guestEmail === "" ||
    roomType === "" ||
    checkIn === "" ||
    checkOut === "" ||
    guests === ""
  ) {
    bookingMessage.textContent = "Please complete all the required fields.";
    return;
  }

  if (checkOut <= checkIn) {
    bookingMessage.textContent = "Check-out date must be after check-in date.";
    return;
  }

  bookingMessage.textContent = `Thank you, ${guestName}. Your reservation request for the ${roomType} has been received.`;
});

const reserveButtons = document.querySelectorAll(".reserve-btn");
const roomSelect = document.getElementById("roomType");

reserveButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedRoom = button.dataset.room;

    roomSelect.value = selectedRoom;
  });
});

const today = new Date().toISOString().split("T")[0];

document.getElementById("checkIn").min = today;
document.getElementById("checkOut").min = today;

const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");

checkInInput.addEventListener("change", function () {
  checkOutInput.min = checkInInput.value;

  if (checkOutInput.value && checkOutInput.value <= checkInInput.value) {
    checkOutInput.value = "";
  }
});
