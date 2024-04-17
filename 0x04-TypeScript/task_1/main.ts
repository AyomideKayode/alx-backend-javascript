// ./task_1/main.ts

// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key : string]: any; // index signature for allowing additional properties
}
