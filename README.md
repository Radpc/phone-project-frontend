# Devices project - Frontend

![image](https://github.com/user-attachments/assets/93bc4fff-8a34-4e0d-9654-e1f46944a172)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.16.

# How to use
## Web
Currently (as 29/04/2025), this project is hosted on an AWS server,[here](http://18.228.64.165).

## Local
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

![image](https://github.com/user-attachments/assets/285372ac-e3c9-4b6b-8923-af9e0b700d83)


# Keypoints
- Device management
- - Create
  - Edit
  - List
  - See details
  - Remove
- Device category management
- - Create
  - Edit
  - List
  - See details
  - Remove
- Field validations
- Authentication (Login and logout)
- Material UI Components
- Separated colors file
- List pagination
- Api response/error typings

## CI/CD
This repository is equipped with a `github actions workflow`, that builds the project and deploys over the ec2 instance on AWS every time a new push is made on `main`.

The secrets are safely passed through `github secrets`

# Notes
More elements were planned, but not yet implemented: `User management`, `search filters` (already in the backend)
