# URL-Shortener-API
A simple, production-grade REST API built with **Node.js**, **Express**, and **PostgreSQL** that converts long URLs into short codes, and redirects users when those short codes are accessed.

---

## 🚀 Features

- 🔗 Shortens long URLs via a RESTful POST endpoint
- 🚦 Redirects short URLs back to original URLs
- 🛡️ Validates URL input format
- 🧠 Stores all URLs in a PostgreSQL database
- 🕒 Adds automatic timestamp on creation
- 📦 Tested via Postman (collection attached)

---

## 🛠️ Tech Stack

- **Language:** JavaScript
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Validation:** `valid-url`
- **Unique Code Gen:** `nanoid`

---

## 📁 API Endpoints

### POST `/shorten`
Shortens a long URL.

- **Request Body (JSON)**
```json
{
  "url": "https://example.com/very/long/link"
}
```
- **Response (JSON)**
```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```
---

### GET /:code
- **Redirects to the original URL**.
```
http://localhost:5000/abc123
→ Redirects to → https://example.com/very/long/link
```
---

## 📊 Database Schema

| Field        | Type   | Description                   |
|--------------|--------|-------------------------------|
| `originalurl`| TEXT   | The original long URL         |
| `shortCode`  | STRING | Unique short identifier       |
| `createdAt`  | DATE   | Auto-generated timestamp      |
| `updatedAt`  | DATE   | Auto-generated timestamp      |

---

## How to Run Locally

1. Clone the repo
   ```
   git clone https://github.com/mohdgeelani/URL-Shortener-API.git
   cd url_shortener_api

   ```
2. Install dependencies
   ```
   npm install
   ```
3. Create a .env file in project root folder
   ```
   PORT=5000
    DB_NAME=urlshortener
    DB_USER=postgres
    DB_PASSWORD=yourpassword
    DB_HOST=localhost
    DB_PORT=5432
    BASE_URL=http://localhost:5000

   ```
4. Run the app
   ```
   node index.js

   ```
5. Test via Postman 
