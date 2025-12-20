# ResumeCraft

ResumeCraft is a modern web application designed to help users create professional resumes effortlessly. With a user-friendly interface, customizable templates, and AI-powered features, ResumeCraft simplifies the resume-building process for job seekers.

## Live Demo

Access the live application here: [Live Application](https://resume-craft-git-main-pathare-1986s-projects.vercel.app/)

---

## Features

- **Resume Builder**: Create and customize resumes with ease.
- **AI-Powered Enhancements**: Generate professional summaries and job descriptions using AI.
- **Customizable Templates**: Choose from multiple modern and minimalistic templates.
- **Real-Time Preview**: View changes instantly as you edit your resume.
- **Secure User Authentication**: Login and manage your resumes securely.
- **Download and Share**: Export resumes as PDFs or share them online.

---

## Technologies Used

### Frontend
- **React**: Component-based UI development.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For navigation and routing.
- **Redux**: State management.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and resume data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: Secure user authentication.

### AI Integration
- **OpenAI API**: For generating professional summaries and descriptions.

---

## Folder Structure

### Client
- **src/**: Contains the main application code.
  - **components/**: Reusable React components.
  - **pages/**: Page-level components (e.g., Dashboard, Resume Builder).
  - **templates/**: Resume templates (e.g., Classic, Modern).
  - **configs/**: Configuration files (e.g., API setup).

### Server
- **controllers/**: Business logic for handling API requests.
- **models/**: Database schemas for resumes and users.
- **routes/**: API endpoints for resumes, users, and AI features.
- **middlewares/**: Authentication and other middleware.
- **config/**: Configuration files (e.g., database, AI integration).

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/resumecraft.git
   cd resumecraft
   ```

2. Install dependencies:
   ```bash
   # Client
   cd client
   npm install

   # Server
   cd ../server
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `server` directory.
   - Add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     OPENAI_API_KEY=your_openai_api_key
     ```

4. Start the development servers:
   ```bash
   # Client
   cd client
   npm run dev

   # Server
   cd ../server
   npm run dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:5173
   ```

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
