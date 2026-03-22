# CapgeminiTutorial — Frontend Angular

Full-stack board game library management application developed as part of the Capgemini training program. The frontend is built with **Angular 18** and **Angular Material**, and connects to a **Spring Boot** REST API backend.

## 🛠️ Tech Stack

- **Angular 18** — Component-based SPA framework
- **Angular Material** — UI component library (tables, forms, dialogs, paginator)
- **ngx-translate** — Runtime internationalization (ES / EN)
- **Spring Boot** *(backend)* — REST API with JPA and H2 database
- **RxJS** — Reactive data handling
- **Server-Side Rendering (SSR)** — via Angular Universal

## ✨ Features

- Full **CRUD** for: Categories, Authors, Games, Clients and Loans
- **Filtering and pagination** on all listing views
- **Business rule validation** on loans:
  - Return date cannot be before start date
  - Maximum loan period of 14 days
  - Same game cannot be loaned to two clients on overlapping dates
  - A client cannot have more than 2 active loans on the same day
- **Internationalization (i18n)** — switch between Spanish and English at runtime, persisted via localStorage
- Confirmation **dialogs** before destructive actions

## 📸 Screenshots

### Main Page
![Main Page](docs/MainPage.png)

### Authors
![Authors](docs/Authors.png)

### Categories
![Categories](docs/Categories.png)

### Clients
![Clients](docs/Clients.png)

### Loans
![Loans](docs/Loans.png)

### Create Entity
![Create Entity](docs/CreateEntity.png)

### Edit Entity
![Edit Entity](docs/EditEntities.png)

### Delete Entity
![Delete Entity](docs/DeleteEntity.png)

### Filters (1)
![Filter 1](docs/Filter_1.png)

### Filters (2)
![Filter 2](docs/Filter_2.png)

### Language Selector
![Language Selector](docs/LanguageSelect.png)

## 🚀 Getting Started

### Prerequisites
- Node.js v20+
- Angular CLI v18
- Java 17+ (for the backend)

### Frontend

```bash
npm install
ng serve
