# School Management API

This is a Node.js API for managing school data. The system allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location. The project uses Express.js and MySQL as the primary technologies.

## Features

- **Add School**: Create a new school entry with name, address, latitude, and longitude.
All fields must be added for school to be successfully added
- **List Schools**: Retrieve a list of schools sorted by proximity to a given location.
To get schools, latitude and longitude queries are needed

## Technologies Used

- Node.js
- Express.js
- MySQL
- dotenv
- mysql2
- Render (for deployment)
- Postman (for testing)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/enockuwumukiza/skl_dbms.git
   cd school-api
