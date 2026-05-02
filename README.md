# Task Board - Backend API

RESTful API built with NestJS, MongoDB, and TypeScript for the Task Board application.

![NestJS](https://img.shields.io/badge/NestJS-11.0-E0234E.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248.svg)
![Railway](https://img.shields.io/badge/Deploy-Railway-0B0D0E.svg)

## Live API

**Base URL:** `https://task-board-backend-production.up.railway.app`

## API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------| ------------- |
| POST | `/auth/signup` | Register a new user | No |
| POST | `/auth/signin` | Login and get JWT token | No |

### Tasks

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------| ------------- |
| GET | `/tasks` | Get all user's tasks | Yes |
| GET | `/tasks/:id` | Get a single task | Yes |
| POST | `/tasks` | Create a new task | Yes |
| PATCH | `/tasks/:id` | Update a task | Yes |
| DELETE | `/tasks/:id` | Delete a task | Yes |

## 🛠️ Tech Stack

- **Framework:** NestJS 11.0
- **Language:** TypeScript 5.7
- **Database:** MongoDB Atlas
- **ODM:** Mongoose 9.2
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcrypt
- **Validation:** class-validator & class-transformer
- **Deployment:** Railway

## 📊 API Response Format

**Success Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Learn NestJS",
  "status": "pending",
  "createdAt": "2026-03-13T04:36:05.477Z",
  "updatedAt": "2026-03-13T04:36:05.477Z"
}
```

**Error Response:**
```json
{
  "statusCode": 400,
  "message": ["Title cannot be empty"],
  "error": "Bad Request"
}
```

**Unauthorized Response:**
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

## Related Projects

- [Task Board Frontend](https://github.com/EmmanuelLeonIslas/task-board) - Vite + TypeScript + Tailwind

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Emmanuel León Islas
- GitHub: [@Emmanuel León Islas](https://github.com/EmmanuelLeonIslas)

---

Built with NestJS and MongoDB