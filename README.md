# 🧾Full Stack: Job Tracker App
__Introduction__

Job Tracker App is a full-stack web application designed to help job seekers efficiently manage and track their job application journey. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this app allows users to log every job they apply to, monitor the status of each application, and keep personal notes, all in one place.

Whether you're applying for internships, full-time roles, or freelance gigs, this tool simplifies your process by providing a centralized dashboard to view, update, and organize your job hunt.

## Objective

To provide users with a personal dashboard to keep track of all their job applications in one place, with important details like company name, application date, status, and notes.

__Features__

This application provides following features to the users:

- Secure user signup and login using JWT authentication
- Personalized dashboard to manage job applications
- Add new job applications with relevant details
- Edit and delete existing job applications
- Track application status: Applied, Interview, Offer, Rejected
- Logout functionality to end user session securely

__Tech Stack Used__

| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React, Axios, CSS      |
| Backend     | Node.js, Express       |
| Database    | MongoDB, Mongoose      |
| Auth        | JWT (JSON Web Token)   |


## Screenshots

__Sign Up__

![image](https://github.com/user-attachments/assets/494c63eb-dc7a-443e-923e-8b29ccefeb1a)

__Login__

![image](https://github.com/user-attachments/assets/020e7625-7a65-4723-a4d0-a94295491d4a)

__Dashboard__

![image](https://github.com/user-attachments/assets/635f6c05-2768-4006-a0b9-870d106f8fad)

__Add Job Form__

![image](https://github.com/user-attachments/assets/10550d00-229a-4f25-a181-eb15f4e1f791)

## 🚀 How to Run the Project

1. Download or clone the project from GitHub and open it in a code editor like VS Code.

2. Set up the backend by going into the server folder, installing the required packages using npm install, and creating a .env file. In that file, you must add your own MongoDB connection string (MONGO_URI) and a secret key (JWT_SECRET), make sure to replace the placeholder values with your actual details.

3. Start the backend server using npm start after setting up the environment file. Then go to the client folder, run npm install to install frontend dependencies, and start the frontend with npm start.

4. Open your browser and go to http://localhost:3000 to use the Job Tracker App. You’ll now be able to register, log in, and manage job applications.

## Project Status

- Completed: All planned features are implemented and functional

- Tested locally: The app has been tested with sample users and workflows

- Ready for deployment or showcase

- Open for future improvements (like analytics, filters, or cloud deployment)


## Author

__Prachi Chhetri__

Full Stack Developer


