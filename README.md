# Real Estate Platform

A modern real estate platform built with React and Django.

## Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```
REACT_APP_API_URL=http://localhost:8000/api
```

3. Start the development server:
```bash
npm run dev
```

## Backend Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install django djangorestframework django-cors-headers
```

3. Navigate to the backend directory:
```bash
cd backend
```

4. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Create a superuser:
```bash
python manage.py createsuperuser
```

6. Start the development server:
```bash
python manage.py runserver
```

## Deployment

1. Frontend:
   - Build the React app: `npm run build`
   - Deploy the `dist` directory to your hosting service

2. Backend:
   - Set up a production database (e.g., PostgreSQL)
   - Configure environment variables
   - Deploy using gunicorn and nginx

## API Documentation

The API endpoints are available at:

- `POST /api/users/signup/` - Create a new user account
- `POST /api/users/login/` - Login and get authentication token
- `GET /api/buildings/` - List all properties
- `GET /api/buildings/:id/` - Get property details
- `GET /api/buildings/:id/rooms/` - List rooms in a building

For protected endpoints, include the authentication token in the request header:
```
Authorization: Bearer <your-token>
```