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

- **Request Body (JSON):**
```json
{
  "url": "https://example.com/very/long/link"
}
```
