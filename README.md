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

The difference is that `res.send()` sends text, while `res.sendFile()` sends an entire file. If you just want to send text, use `res.send()`, and if you want
to send an entire file or webpage, use `res.sendFile()` instead.

**2. Why is the `path` module needed when serving files, and what could go wrong with a relative path like `'public/index.html'`?**

The `path` module is needed when you want to send files using `res.sendFile()` because it handles cross-platform path differences. If we ran the server from a different folder, it wouldn't be able to find the file, and the page wouldn't show.

**3. How would you add a third page, such as a menu page?**

To add a third page, you would make your `menuPage.html` inside of the `public` folder, and then add this route inside of the `server.js` file:

```js
app.get('/menuPage', (req, res) => {
   res.sendFile(path.join( import.meta.dirname, 'public/menuPage.html'))
});
```

## What I Learned

I learned how to make a live server and how to make multiple pages/files live by using `sendFile` with `path.join`. I also learned how to create a Node.js file and why we use ES Modules instead of CommonJS for files.