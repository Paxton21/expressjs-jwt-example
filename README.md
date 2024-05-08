# expressjs-jwt-example

# JWT Authentication Example with Express

This is a simple example of implementing JSON Web Token (JWT) authentication using Node.js and Express. The application provides a protected route that requires a valid JWT token for access, and an endpoint to generate a new JWT token.

## Prerequisites

- Node.js
- npm 

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Paxton21/expressjs-jwt-example.git
   ```

2. Navigate to the project directory:

   ```bash
   cd expressjs-jwt-example
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your secret key:

   ```plaintext
   SECRET_KEY={change me}
   ```

   Replace `{change me}` with a strong, random string that will be used to sign and verify JWT tokens.

5. Start the server:

   ```bash
   node server.js
   ```

   The server will start running on `http://localhost:3000`.

## Usage

The application provides the following routes:

- `GET /`: A simple route that responds with "Hello World!".
- `GET /protected`: A protected route that requires a valid JWT token in the `Authorization` header. If the token is valid, it will respond with a success message and the decoded user information.
- `POST /post`: A route to generate a new JWT token. Send a POST request with a JSON payload containing `username`, `password`, and `email` fields. The server will respond with a new JWT token that expires in 1 hour.

To access the protected route, you will need to include the JWT token in the `Authorization` header of your request, like so:

```
Authorization: Bearer <your-jwt-token>
```

Replace `<your-jwt-token>` with the token obtained from the `/post` endpoint.

## Dependencies

- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): An implementation of JSON Web Tokens
- [body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file

## License

This project is licensed under the [MIT License](LICENSE).
