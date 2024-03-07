## Overview

dashboard with various services and functionalities. It is built using [React](https://reactjs.org/) for the frontend and [Laravel](https://laravel.com/) for the backend.

## Dashboard

The main dashboard includes the following services:

| Service                                | Description                                            |
| -------------------------------------- | ------------------------------------------------------ |
| Quick Actions                          | Perform quick actions and tasks.                       |
| Recent Activities                      | View recent user activities.                           |
| Recent Connections                     | Explore recent connections made.                       |
| System Status                          | Check the current system status.                       |
| Analytics                              | Analyze data and generate insights.                    |
| Maintenance Reminders                  | Receive reminders for maintenance tasks.               |
| Users List                             | View a list of users.                                  |
| Vehicle List                           | Explore a list of registered vehicles.                 |
| Search Filters                         | Use filters to search for specific data.               |
| Notification Center                    | Access notifications and alerts.                       |
| Payment Plan Overview                  | Overview of payment plans and subscriptions.           |

## Web App Routes

Here are the available routes in your Laravel backend:

| Route                                   | Description                                           |
| ---------------------------------------| ----------------------------------------------------- |
| `/`                                     | Home page with basic information.                      |
| `/webPreview/unity`                     | Unity web preview page.                                |
| `/aboutUs`                              | About Us page.                                        |
| `/contact`                              | Contact Us page.                                      |
| `/dashboard`                            | Main dashboard for authenticated users.               |
| `/myaccount`                            | User account overview.                                |
| `/userAccount/{id?}`                    | User account details.                                 |
| `/userAccount/user/{id?}`               | Edit user account.                                    |
| `/profile`                              | Edit user profile.                                    |
| `/role`                                | Update user role.                                     |
| `/meeting`                             | Meeting page.                                         |
| `/unity-refresh`                       | Unity refresh page.                                   |
| `/reports`                             | Reports resource.                                    |
| `/reminders`                           | Reminders resource.                                  |
| `/whishlist`                           | Wishlist resource.                                   |
| `/assetBundles`                        | Asset Bundles resource.                              |
| `/services`                            | Services resource.                                   |
| `/paymentPlans`                        | Payment Plans resource.                              |
| `/paymentPlans/subscription`           | Subscribe to a new payment plan.                      |
| `/vehicles`                            | Vehicles resource.                                   |
| `/devices`                             | Devices resource.                                    |
| `/connections`                         | Connections resource.                                |
| `/basic-maintenance`                   | Basic Maintenance page.                              |
| `/car-analytics`                       | Car Analytics page.                                  |
| `/connected-services`                  | Connected Services page.                             |
| `/reminder-notifications`              | Reminder Notifications page.                         |
| `/full-maintenance-suite`              | Full Maintenance Suite page.                         |
| `/customizable-maintenance-schedules`  | Customizable Maintenance Schedules page.             |
| `/exclusive-discounts`                 | Exclusive Discounts page.                            |
| `/priority-customer-support`           | Priority Customer Support page.                      |
| `/advanced-maintenance-reports`       | Advanced Maintenance Reports page.                  |

| `/login`, `/register`                  | Authentication routes.                              |

## Getting Started

To run the web application locally, follow these steps:

1. Clone the repository: `https://github.com/garrach/Unity-Maintenance-Simulator-Game-Project.git`
2. Install dependencies: `composer install` and `npm install`
3. Configure your environment: Copy `.env.example` to `.env` and set your environment variables.
4. Migrate the database: `php artisan migrate`
5. Start the development server: `php artisan serve`
