# School Management System

A full-stack MERN application developed for **Pimpri Chinchwad Apang Vidyalaya** to digitize school and hostel management. The platform streamlines academic administration, hostel allocation, communication, and student services through role-based dashboards for Students, Teachers, and Administrators.

The system integrates secure authentication, hostel management, assignment and attendance tracking, result management, AI-powered student assistance, and cloud-based file storage into a single web application.

---

## Key Features

- Role-based authentication for Students, Teachers, and Administrators
- Student, Teacher, and Admin dashboards
- Assignment upload and management
- Attendance tracking and monitoring
- Result publishing and academic performance management
- Hostel room allocation and application system
- Hostel fee and occupancy management
- AI-powered student assistant
- School announcements and notifications
- Contact & Help Desk support system
- Profile management with image uploads
- Secure JWT authentication and protected APIs
- Cloudinary integration for media storage
- Responsive user interface

---

## Core Modules

### Student Portal

- View assignments and study resources
- Track attendance and academic results
- Apply for hostel accommodation
- Access hostel status and room information
- Chat with the AI assistant
- Receive notifications and announcements
- Manage personal profile

### Teacher Portal

- Upload assignments
- Mark student attendance
- Publish examination results
- Manage student records
- Respond to support requests
- Send notifications to students

### Admin Portal

- Manage students and teachers
- Add, edit, and remove hostel rooms
- Approve or reject hostel applications
- Monitor system statistics
- Manage user accounts and permissions

---

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Redux Toolkit
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- Cookie Parser
- Multer
- Nodemailer

### Cloud & AI

- Cloudinary
- OpenAI API
- REST API Architecture

---

## Installation

## Installation

### Clone the Repository

```bash
git clone https://github.com/Shriniwas1/EduTrack.git

cd EduTrack
```
### Backend Setup

```bash
cd Backend

npm install
```

Create a `.env` file inside the **Backend** directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password

OPENAI_API_KEY=your_openai_api_key
```

Start the backend

```bash
npm run dev
```

### Frontend Setup

```bash
cd ../Frontend

npm install

npm run dev
```
