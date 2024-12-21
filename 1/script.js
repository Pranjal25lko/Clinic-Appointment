document.addEventListener("DOMContentLoaded", () => {
    const appointmentForm = document.getElementById("appointmentForm");
    const appointmentsList = document.getElementById("appointments");

    
    appointmentForm.addEventListener("submit", (event) => {
        event.preventDefault();

       
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const doctor = document.getElementById("doctor").value;

        
        if (!name || !email || !phone || !date || !time || !doctor) {
            alert("Please fill out all fields.");
            return;
        }

       
        const appointmentItem = document.createElement("li");
        appointmentItem.textContent = `Appointment with ${doctor} on ${date} at ${time}. Contact: ${name} (${email}, ${phone})`;

       
        appointmentsList.appendChild(appointmentItem);

    
        appointmentForm.reset();

        alert("Your appointment has been booked successfully!");
    });
});
