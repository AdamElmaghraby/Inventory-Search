# Inventory Search and Management App

This is an **Inventory Search and Management** application built with **React**. It allows users to:

- Add new items to the inventory.
- Search items by name, price, type, and brand.
- Delete items from the inventory.

The app fetches data from a local server (e.g., JSON Server) and provides an interactive UI for managing inventory.

This project is part of my learning journey to enhance my understanding of **React** and its ecosystem, focusing on core concepts like component-based architecture, state management, and handling side effects with `useEffect`.

## Features

- **Search**: Filter inventory based on item name, type, brand, or price.
- **Add Item**: Easily add new items to the inventory with details such as name, price, type, and brand.
- **Delete Item**: Remove items from the inventory with a simple click.

## Technologies Used

- **React** for the front-end.
- **Bootstrap** for styling.
- **JSON Server** (or similar backend) for handling data.

## Installation

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm start
   ```

## How It Works

- The app fetches inventory data from `http://localhost:3000/items`.
- Users can filter items through the search bar.
- The inventory can be updated by adding new items or deleting existing ones.
