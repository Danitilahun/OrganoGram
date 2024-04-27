import createNode from "./createNode";

export const universityStructure = [
  createNode(
    "O-1",
    "https://example.com/president.jpg",
    null,
    "Dr. Abebe Tesfaye",
    "President",
    "Administration",
    "President's Office",
    0
  ),
  createNode(
    "O-2",
    "https://example.com/dean.jpg",
    "O-1",
    "Dr. Aida Mohammed",
    "Dean",
    "Faculty of Engineering",
    "Engineering Department",
    3
  ),
  createNode(
    "O-3",
    "https://example.com/dean.jpg",
    "O-1",
    "Dr. Yohannes Kassahun",
    "Dean",
    "Faculty of Medicine",
    "Medicine Department",
    2
  ),
  createNode(
    "O-4",
    "https://example.com/faculty.jpg",
    "O-2",
    "Dr. Michael Tadesse",
    "Professor",
    "Electrical Engineering",
    "Electrical Engineering Department",
    0
  ),
  createNode(
    "O-5",
    "https://example.com/faculty.jpg",
    "O-2",
    "Dr. Sara Girma",
    "Associate Professor",
    "Civil Engineering",
    "Civil Engineering Department",
    0
  ),
  createNode(
    "O-6",
    "https://example.com/faculty.jpg",
    "O-3",
    "Dr. Ephrem Worku",
    "Professor",
    "Internal Medicine",
    "Internal Medicine Department",
    0
  ),
  // Add more nodes as needed for other positions, departments, or faculties
];
