# Event Access & Table Management System

A comprehensive web-based application for managing strictly-by-invitation events with secure access control, table assignments, and food service tracking.

## 🚀 Features

### Core Functionality

- **Secure Guest Access**: QR codes + SMS codes for dual authentication
- **Real-time Access Control**: Track guest entry/exit with comprehensive logging
- **Table Management**: Assign guests to tables with group/family support
- **Food Service Tracking**: Monitor food delivery per table
- **Role-based Access**: Organizer, Gate Checker, and Server roles
- **Dashboard Analytics**: Real-time statistics and activity monitoring

### Access Control

- QR code scanning for smartphone users
- SMS code entry for guests without smartphones
- IN/OUT status tracking with re-entry support
- Comprehensive access logging and audit trails
- Prevention of credential sharing and unauthorized access

### Guest Management

- Bulk guest list upload (CSV/Excel support)
- Automatic credential generation (QR + SMS)
- Group/family identification for seating arrangements
- Table assignment (manual or automatic)
- Invitation resend and credential reset capabilities

### Table & Seating

- Dynamic table creation and management
- QR codes for each table
- Guest seating assignment and tracking
- Real-time table occupancy status
- Food service monitoring per table

## 🏗️ Architecture

### Backend (Node.js + Express + MongoDB)

- **Models**: Events, Guests, Tables, Staff, AccessLogs
- **Controllers**: Event, Guest, Table, and Auth management
- **Middleware**: Authentication and role-based authorization
- **Utilities**: QR generation, credential management, database operations

### Frontend (React + Tailwind CSS)

- **Components**: Modular React components with role-based access
- **Context**: Authentication state management
- **Routing**: Protected routes with role-based navigation
- **UI**: Modern, responsive design with Tailwind CSS

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn package manager

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd EventAccesAndTableManagement
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=8001
MONGODB_URI=mongodb://localhost:27017/event_management
JWT_SECRET=your_jwt_secret_here
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

### 4. Start the Application

**Backend:**

```bash
cd backend
npm run dev
```

**Frontend:**

```bash
cd frontend
npm start
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## 🔐 User Roles & Permissions

### Organizer

- Create and manage events
- Upload guest lists
- Assign tables and manage seating
- View comprehensive dashboard
- Resend invitations and reset credentials
- Access to all system features

### Gate Checker

- Verify guest access (QR/SMS)
- Mark guests IN/OUT
- View guest status and table information
- Access to access control features

### Server

- Track food service delivery
- Scan table QR codes for seating info
- Update food service status
- Access to food service and access control

## 📱 Usage Guide

### For Organizers

#### Creating an Event

1. Log in with organizer credentials
2. Navigate to Dashboard
3. Create new event with details
4. Upload guest list (CSV/Excel format)

#### Managing Guests

1. Access Guest Management section
2. View all guests for selected event
3. Assign tables manually or use auto-assignment
4. Resend invitations or reset credentials as needed

#### Table Management

1. Create tables for the event
2. Assign guests to tables
3. Monitor table occupancy and food service status

### For Staff

#### Access Control

1. Use QR scanner or SMS code entry
2. Verify guest credentials
3. Mark guests IN/OUT as needed
4. View guest information and table assignments

#### Food Service

1. Scan table QR codes
2. Update food service status for guests
3. Monitor delivery progress

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/login` - Staff login
- `POST /api/auth/logout` - Staff logout

### Events

- `POST /api/events` - Create event
- `POST /api/events/:eventId/guests/upload` - Upload guest list
- `POST /api/events/:eventId/tables/assign` - Assign tables
- `GET /api/events/:eventId/dashboard` - Get dashboard data

### Guests

- `POST /api/guests/verify` - Verify guest access
- `GET /api/guests/:eventId` - Get event guests
- `PUT /api/guests/checkin/:id` - Check in guest
- `PUT /api/guests/checkout/:id` - Check out guest

### Tables

- `POST /api/tables/add` - Create table
- `GET /api/tables/:eventId` - Get event tables
- `PUT /api/tables/assign` - Assign guest to table
- `PUT /api/tables/food-service/:tableId` - Update food service
- `POST /api/tables/scan/:tableId` - Scan table QR

## 📊 Data Models

### Guest Schema

```javascript
{
  eventId: ObjectId,
  fullName: String,
  contact: {
    email: String,
    phone: String,
    whatsapp: String
  },
  groupIdentifier: String,
  accessCredentials: {
    qrCode: String,
    smsCode: String
  },
  currentStatus: String, // 'Not Arrived', 'IN', 'OUT'
  table: {
    tableId: ObjectId,
    seated: Boolean
  },
  foodStatus: String // 'Not Served', 'Served'
}
```

### Table Schema

```javascript
{
  eventId: ObjectId,
  tableNumber: Number,
  qrCode: String,
  occupiedGuests: [ObjectId],
  foodServedCount: Number,
  status: String // 'Available', 'Occupied'
}
```

## 🚨 Security Features

- JWT-based authentication
- Role-based access control
- Unique per-guest credentials
- Comprehensive audit logging
- Credential validation and verification
- Prevention of credential sharing

## 🔄 Future Enhancements

- Self-service RSVP system
- Badge printing integration
- Payment gateway integration
- Real-time SMS notifications
- Advanced analytics and reporting
- Mobile app for staff
- Integration with external event platforms

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   - Ensure MongoDB is running
   - Check connection string in `.env` file

2. **QR Scanner Not Working**

   - Ensure camera permissions are granted
   - Check browser compatibility

3. **Authentication Issues**
   - Verify JWT secret in environment variables
   - Check token expiration

### Support

For technical support or feature requests, please create an issue in the repository.

## 📄 License

This project is licensed under the ISC License.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for scalability and performance
- Focused on user experience and security
- Comprehensive logging and monitoring capabilities
