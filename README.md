# Openshelf

**Openshelf** is a modern web application designed to function like a virtual library. Administrators can add books to the shelf, and users can explore the collection, filter by category, and rent books for their desired timeframe. The app brings the convenience and simplicity of an Airbnb-style interface to the world of book rentals.

## Features

### For Users
- **Browse Books**: Discover a wide range of books available for rent.
- **Filter by Category**: Narrow down your search based on specific genres or categories.
- **Flexible Rental Periods**: Select your preferred date range to rent a book.

### For Admins
- **Add Books**: Easily add new books to the collection with all relevant details.
- **Manage Library**: Keep the book catalog up to date.

## Tech Stack

Openshelf is built with the following technologies:

- **TypeScript**: Ensures type safety and robust code structure.
- **Next.js**: Provides server-side rendering and seamless routing for a fast and dynamic user experience.
- **React**: Powers the dynamic and interactive user interface.
- **Prisma**: Simplifies database management with a type-safe ORM.
- **MongoDB**: Serves as the primary database, enabling scalable and flexible data storage.

## Getting Started

Follow these steps to set up and run Openshelf locally:

### Prerequisites
- Node.js (v14 or later)
- MongoDB instance (local or cloud-based)
- Package manager (npm or yarn)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Jet1a/Openshelf.git
   cd Openshelf
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure the environment variables:
   Create a `.env` file in the root directory and add the necessary variables (e.g., database connection string, API keys, etc.).
   ```env
   DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/openshelf?retryWrites=true&w=majority
   ```

4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

5. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open the app in your browser at `http://localhost:3000`.

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

### Steps to Contribute
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

Feel free to explore, contribute, and make book renting a seamless experience with Openshelf!

