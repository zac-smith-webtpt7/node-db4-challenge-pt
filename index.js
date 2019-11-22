const server = require("./server.js");

const PORT = process.env.PORT || 5566;

server.listen(PORT, () => {
  console.log(`\n *** Server is running on port ${PORT} ***\n`);
});
