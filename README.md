# Subscription Tracker API

   

A robust RESTful API designed to power a modern subscription management application. This backend allows users to track their recurring subscriptions, monitor spending, and receive scheduled, durable email reminders for upcoming payments using Upstash Workflow.

-----

## \#\# Features

  * 🔐 **Secure JWT Authentication**: User registration and login handled via JSON Web Tokens stored in HTTP-only cookies.
  * 💳 **Full Subscription Management**: Complete CRUD (Create, Read, Update, Delete) operations for subscriptions.
  * 🔔 **Durable Payment Reminders**: Utilizes **Upstash Workflow** to reliably schedule and send email reminders on a predefined schedule (e.g., 7, 5, 2, and 1 day before renewal).
  * 🛡️ **Enhanced Security**: Integrated **Arcjet** middleware for rate limiting and bot detection to protect API endpoints.
  * 👤 **User Profile Management**: Endpoints for users to view and manage their own profile information.
  * 📊 **Analytics & Dashboard**: Dedicated endpoints to provide summaries of monthly/yearly spending and breakdowns by category.
  * 🏷️ **Category Management**: Allows users to create, update, and delete custom subscription categories for better organization.
  * ✨ **Centralized Error Handling**: A dedicated error middleware ensures consistent and predictable error responses.

-----

## \#\# Technologies Used

  * **Backend**: Node.js, Express.js
  * **Database**: MongoDB with Mongoose ODM
  * **Authentication**: JSON Web Tokens (`jsonwebtoken`), `bcrypt.js`, `cookie-parser`
  * **Durable Workflows**: Upstash Workflow (`@upstash/workflow`)
  * **Security**: Arcjet (`@arcjet/node`)
  * **Email & Scheduling**: Nodemailer, Day.js
  * **Environment Variables**: `dotenv`

-----

## \#\# Setup and Installation

Follow these steps to get the project running on your local machine.

### \#\#\# Prerequisites

  * Node.js (v18 or later recommended)
  * npm or yarn
  * MongoDB (a local instance or a cloud URI from MongoDB Atlas)
  * An [Upstash](https://upstash.com/) account for Redis/Workflow.
  * An [Arcjet](https://arcjet.com/) account for the security middleware key.

### \#\#\# 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### \#\#\# 2. Install Dependencies

```bash
npm install
```

### \#\#\# 3. Set Up Environment Variables

Create a file named `.env` in the root of the project and populate it with your credentials.

```env
# Server Configuration
PORT=5000
SERVER_URL=http://localhost:5000

# Database and Authentication
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=a_very_strong_and_random_secret_string_for_jwt
JWT_EXPIRE=1d

# Upstash Workflow Credentials
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token

# Arcjet Security Key
ARCJET_KEY=your_arcjet_site_key

# Email Configuration (e.g., for Nodemailer with Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password
```

### \#\#\# 4. Run the Server

```bash
# For development with automatic restart (if you have nodemon installed)
npm run dev

# For production
npm start
```

The API server should now be running on `http://localhost:5000`.

-----

## \#\# API Endpoints

All endpoints are prefixed with `/api/v1`.

### \#\#\# Authentication (`/auth`)

| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/sign-up` | Register a new user. |
| `POST` | `/sign-in` | Log in a user and set a JWT cookie. |
| `POST` | `/sign-out` | Log out a user and clear their session cookie. |

### \#\#\# User Profile (`/users`)

| Method | Route | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/me` | Get the profile of the currently logged-in user. | Yes |
| `PUT` | `/me` | Update the profile of the logged-in user. | Yes |
| `PUT` | `/me/password`| Change the password for the logged-in user. | Yes |
| `DELETE`| `/me` | Delete the account of the logged-in user. | Yes |

### \#\#\# Subscriptions (`/subscriptions`)

| Method | Route | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Get all subscriptions for the logged-in user. | Yes |
| `POST` | `/` | Create a new subscription and trigger its reminder workflow. | Yes |
| `GET` | `/:id` | Get a single subscription by its ID. | Yes |
| `PUT` | `/:id` | Update a subscription's details. | Yes |
| `DELETE`| `/:id` | Delete a subscription. | Yes |
| `PATCH` | `/:id/status`| Update only the status (e.g., to 'active' or 'cancelled').| Yes |

### \#\#\# Analytics & Dashboard (`/dashboard`)

| Method | Route | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/summary` | Get a comprehensive summary for the user's dashboard (total spending, upcoming renewals, etc.). | Yes |
| `GET` | `/spending`| Get a detailed breakdown of spending by category or time. | Yes |
| `GET` | `/reminders` | Get a list of all subscriptions with upcoming renewal dates. | Yes |

### \#\#\# Categories (`/categories`)

| Method | Route | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Get all custom categories for the user. | Yes |
| `POST` | `/` | Create a new custom category. | Yes |
| `PUT` | `/:id` | Update a category's name or color. | Yes |
| `DELETE`| `/:id` | Delete a category. | Yes |
