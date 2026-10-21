// Sanitized portfolio example.
// All identifiers and request structures below are synthetic.

pm.variables.set("referenceSubscription", "55500001");
pm.variables.set("referenceSim", "89000000000000000001");

// Paste one synthetic subscription identifier per line.
const batchIdentifiersRaw = `
55500001
55500002
55500003
55500004
55500005
`;

function generateSessionId() {
  const demoOperatorId = "DEMO";
  const uniquePart = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  return `${demoOperatorId}-${uniquePart}-POSTMAN`;
}

function buildBatchXml(rawText) {
  return rawText
    .split(/\r?\n/)
    .map(value => value.trim())
    .filter(Boolean)
    .map(identifier =>
      `<item><identifier>${identifier}</identifier><secondaryIdentifier/></item>`
    )
    .join("");
}

pm.variables.set("sessionId", generateSessionId());
pm.variables.set("batchItems", buildBatchXml(batchIdentifiersRaw));

console.log("sessionId:", pm.variables.get("sessionId"));
console.log("batch item count:", batchIdentifiersRaw
  .split(/\r?\n/)
  .map(value => value.trim())
  .filter(Boolean)
  .length
);
