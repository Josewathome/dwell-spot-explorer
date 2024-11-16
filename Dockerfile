# Stage 1: Build the Vite frontend
FROM node:20 as frontend-build

# Set the working directory inside the container for the frontend
WORKDIR /app/frontend

# Copy the frontend source code into the working directory
COPY frontend/ .

# Install dependencies and build the frontend
RUN npm install && npm run build

# Stage 2: Set up the Python/Django backend
FROM python:3.10-slim

# Set the working directory inside the container for the backend
WORKDIR /app/backend

# Copy backend requirements and install dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend source code into the working directory
COPY backend/ .

# Copy the built frontend files into Django's static directory
COPY --from=frontend-build /app/frontend/dist /app/backend/static/

# Expose the application port
EXPOSE 8000

# Command to run the Django backend
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
