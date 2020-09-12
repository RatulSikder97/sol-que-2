let notifications = [
  { message: "Lorem", read: true },
  { message: "Ipsum", read: true },
  { message: "Dolor", read: true },
  { message: "Sit", read: false },
  { message: "Amet", read: true },
];

let allRead = true;
console.log("Before allRead = ", allRead, "\n");

// here allRead becomes false
// higher order function: every()

allRead = notifications.every(({ message }) => message === "");
console.log("After allRead = ", allRead, "\n");
