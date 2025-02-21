# <img width="30px" src="https://img.icons8.com/?size=100&id=JiXLgJKyZix0&format=png&color=000000"/> TaskFlow✨

## Project Name: TaskFlow

### A brief description: 
- TaskFlow is a task management application that enables users to efficiently add, edit, delete, and reorder tasks using an intuitive drag-and-drop interface. The tasks are categorized into three sections: To-Do, In Progress, and Done, ensuring seamless workflow organization. The application features real-time database synchronization to maintain data persistence and is designed with a clean, minimalistic, and fully responsive UI.
 


---

### Purpose:

- TaskFlow is built to test and enhance front-end interactivity, backend data management, and real-time synchronization skills while adhering to a structured design system. The application ensures a user-friendly experience for managing tasks effectively while maintaining real-time data integrity.
  

### Main Technology used in this project:
- React.js (Vite.js for fast development)
- React-router
- MongoDB
- Node.js
- Express.js
- Firebase-auth
- Tailwind-CSS
- React-beautiful-dnd package (Drag and drop functionality)

### Main Key Features:

1. Authentication System:

- Users must log in via Firebase Authentication (Google Sign-in).

- User details (ID, email, and display name) are stored in the database upon first login.

2. Task Management System:

- Users can create, edit, delete, and reorder tasks.

- Tasks are categorized into: To-Do, In Progress, Done.

- Drag-and-drop functionality for moving and reordering tasks.

- Instant database synchronization for data persistence.

3. Database & Real-time Syncing:

- MongoDB is used as the database to store tasks.

- Ensures real-time updates using one of the following approaches:MongoDB Change Streams,Optimistic UI,Polling as a fallback.
- Deleted tasks are permanently removed from the database.



4. Frontend UI:

- Built with Vite.js + React for optimal performance.

- Drag-and-drop functionality using React-beautiful-dnd.

- Clean, modern, and fully responsive UI.

- Limited to four colors for a minimalistic look.

5. Responsiveness:

- Works smoothly on both desktop and mobile devices.

- Ensures a mobile-friendly drag-and-drop experience.



### Dependencies:
- cookie-parser: ^1.4.7,
- cors : ^2.8.5,
- dotenv : ^16.4.7,
- express : ^4.21.2,
- jsonwebtoken : ^9.0.2,
- mongodb : ^6.12.0

### How to run on local machine?

1. Open your terminal or command prompt.

2. Use the git clone command followed by the repository URL:-  git clone 'repository-url'

- Replace 'repository-url' with the actual URL of the Git repository you want to clone.

3. To run the project: Navigate to the project directory:- cd 'directory-name' 

4. Run 'npm install' to install project dependencies.

5. Environment setup:Create a '.env' file and put your firebase environment variable there. Save the following variable:
- DB_USER='YOUR_DB_USER'
- DB_PASS='YOUR_DB_PASS'
- ACCESS_TOKEN_SECRET='YOUR_ACCESS_TOKEN_SECRET'

6. Run 'npm run dev' to run the project locally.



###

##  Live Link: 
### Netlify : [https://job-task-rrishiddh.netlify.app](https://job-task-rrishiddh.netlify.app)

### 
##  GitHub Repo Link: 
###  Client Side : [https://github.com/rrishiddh/Task-Flow-Frontend](https://github.com/rrishiddh/Task-Flow-Frontend)


### 


<hr/>