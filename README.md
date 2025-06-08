Sure! Here's the complete `README.md` **as Markdown code**:

````markdown
# Auth API – Authentication System with Node.js, JWT and PostgreSQL

This is a RESTful API project for user authentication with registration, login, and protected routes using JWT. Built with a focus on **security**, **backend best practices**, and support for **Docker + PostgreSQL + Prisma ORM**.

---

## 📦 Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Joi](https://joi.dev/) (validation)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-user/auth-api.git
cd auth-api
````

### 2. Create the `.env` file

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/auth_api?schema=public"
JWT_SECRET="your_jwt_secret"
```

---

### 3. Start PostgreSQL with Docker

```bash
docker compose up -d
```

---

### 4. Install dependencies

```bash
npm install
```

---

### 5. Initialize Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

### 6. Start the server

```bash
npm run dev
```

The server will run at `http://localhost:3000`

---

## 📂 Project Structure

```
src/
├── controllers/      # Auth logic (register, login)
├── middlewares/      # JWT authentication middleware
├── routes/           # Auth routes
├── validators/       # Joi validation schemas
├── prismaClient.js   # Prisma client instance
├── app.js            # Express app configuration
└── server.js         # Server startup
```

---

## 🔐 Endpoints

### `POST /api/auth/register`

Registers a new user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

### `POST /api/auth/login`

Authenticates the user and returns a JWT token.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "jwt_token_here"
}
```

---

## ✅ TODO (Next Steps)

* [ ] Implement refresh tokens
* [ ] Password reset via email
* [ ] User profile or user list (protected route)
* [ ] Unit and integration tests with Jest

---

## 🐳 docker-compose.yml

```yaml
version: '3.8'

services:
  postgres:
    image: postgres
    container_name: postgres-auth-api
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: auth_api
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

---

## 🛡️ Security

* Passwords hashed with `bcrypt`
* JWT token generation with expiration
* Middleware for route protection

---

## 📝 License

This project is open-source and available under the MIT License.

```

You can copy and paste this into a file named `README.md` at the root of your project. Let me know if you want a Portuguese version in parallel or auto-generated docs from your code too!
```
