# Task Board - Backend API

RESTful API built with NestJS, MongoDB, and TypeScript for the Task Board application.

![NestJS](https://img.shields.io/badge/NestJS-11.0-E0234E.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248.svg)
![Railway](https://img.shields.io/badge/Deploy-Railway-0B0D0E.svg)

## Live API

**Base URL:** `https://task-board-backend-production.up.railway.app`

## API Endpoints

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a single task |
| POST | `/tasks` | Create a new task |
| PATCH | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

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

## Related Projects

- [Task Board Frontend](https://github.com/YOUR-USERNAME/task-board-frontend) - Vite + TypeScript + Tailwind

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Your Name
- GitHub: [@Emmanuel León Islas](https://github.com/EmmanuelLeonIslas)

---

Built with NestJS and MongoDB