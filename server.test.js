
const test = require("node:test");
const assert = require("node:assert/strict");

test("application returns a successful HTTP response", async () => {
  const server = require("./server");

  await new Promise((resolve) => {
    if (server.listening) resolve();
    else server.once("listening", resolve);
  });

  try {
    const address = server.address();
    const response = await fetch(`http://127.0.0.1:${address.port}`);

    assert.equal(response.status, 200);

    const body = await response.text();
    assert.match(body, /Cognevance CI\/CD Pipeline/);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  }
});
