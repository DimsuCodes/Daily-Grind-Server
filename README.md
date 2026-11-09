# The Daily Grind Server

A basic Node.js and Express server for a local coffee shop, The Daily Grind. It serves the shop's home page and contact page.

## Built With

- Node.js
- Express 5

## Project Structure

```
daily-grind-server/
├── public/
│   ├── index.html
│   └── contact.html
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Getting Started

1. Clone the repo.

   ```bash
   git clone https://github.com/DimsuCodes/Daily-Grind-Server.git
   ```

2. Go into the project folder.

   ```bash
   cd Daily-Grind-Server
   ```

3. Install the packages.

   ```bash
   npm install
   ```

4. Start the server.

   ```bash
   node server.js
   ```

5. Open `http://localhost:3000` in your browser.

## Routes

| Method | URL        | What it sends       |
| ------ | ---------- | ------------------- |
| GET    | `/`        | `public/index.html` |
| GET    | `/contact` | `public/contact.html` |

## Reflection

**1. What is the difference between `res.send()` and `res.sendFile()`, and when would you use each?**

The difference is res.send() sends text while res.sendFile() sends the entire file. If you want to send just a text just use res.send and if you want
to send out an entire file/ webpage use sendFile instead

**2. Why is the `path` module needed when serving files, and what could go wrong with a relative path like `'public/index.html'`?**

The path is needed when you want to send out files when using sendFile because path handles cross-platform path differences. If we use a different folder it wouldnt be able to find and the entire file wouldnt show.

**3. How would you add a third page, such as a menu page?**

to add a third page you would make your menuPage.html inside of the publics folder and then inside of the server.js file you would then add app.get('/menuPage', (req, res) => {
   res.sendFile(path.join( import.meta.dirname, 'public/menuPage.html'))
});

## What I Learned

I learned how to make a live server, make multiple pages/files live by using sendFile with path.join. How to create a node.js file, why we use module instead of commonjs for files.