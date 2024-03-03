## Overview

dashboard with various services and functionalities. It is built using [React](https://reactjs.org/) for the frontend and [Laravel](https://laravel.com/) for the backend.

## Dashboard

The main dashboard includes the following services:

- **Quick Actions**
- **Recent Activities**
- **Recent Connections**
- **System Status**
- **Analytics**
- **Maintenance Reminders**
- **Users List**
- **Vehicle List**
- **Search Filters**
- **Notification Center**
- **Payment Plan Overview**

## Web App Routes

Here are the available routes in your Laravel backend:

### General Routes

- `/`: Home page with basic information.
- `/webPreview/unity`: Unity web preview page.
- `/aboutUs`: About Us page.
- `/contact`: Contact Us page.

### Dashboard Routes

- `/dashboard`: Main dashboard for authenticated users.

### User Account Routes

- `/myaccount`: User account overview.
- `/userAccount/{id?}`: User account details.
- `/userAccount/user/{id?}`: Edit user account.
- `/profile`: Edit user profile.
- `/role`: Update user role.
- `/meeting`: Meeting page.
- `/unity-refresh`: Unity refresh page.

### Reports, Reminders, and Schedules

- `/reports`: Reports resource.
- `/reminders`: Reminders resource.
- `/schedules`: Schedules resource.
- `/whishlist`: Wishlist resource.

### Asset Bundles

- `/assetBundles`: Asset Bundles resource.

### Services and Payment Plans

- `/services`: Services resource.
- `/paymentPlans`: Payment Plans resource.
- `/paymentPlans/subscription`: Subscribe to a new payment plan.

### Vehicles, Devices, and Connections

- `/vehicles`: Vehicles resource.
- `/devices`: Devices resource.
- `/connections`: Connections resource.

### Maintenance and Analytics

- `/basic-maintenance`: Basic Maintenance page.
- `/car-analytics`: Car Analytics page.
- `/connected-services`: Connected Services page.
- `/reminder-notifications`: Reminder Notifications page.
- `/full-maintenance-suite`: Full Maintenance Suite page.
- `/customizable-maintenance-schedules`: Customizable Maintenance Schedules page.
- `/exclusive-discounts`: Exclusive Discounts page.
- `/priority-customer-support`: Priority Customer Support page.
- `/advanced-maintenance-reports`: Advanced Maintenance Reports page.

### Authentication Routes

- `/login`, `/register`: Authentication routes.

## Getting Started

To run the web application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/garrach/Unity-Maintenance-Simulator-Game-Project.git`
2. Install dependencies: `composer install` and `npm install`
3. Configure your environment: Copy `.env.example` to `.env` and set your environment variables.
4. Migrate the database: `php artisan migrate`
5. Start the development server: `php artisan serve`
