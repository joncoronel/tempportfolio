export async function minDelay(promise, ms) {
  let [p] = await Promise.all([promise, sleep(ms)]);
  return p;
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
