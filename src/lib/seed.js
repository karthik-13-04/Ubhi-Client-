const PORT = process.env.PORT || 3000;

async function run() {
  console.log('Triggering DB seed via Next.js API...');
  try {
    const res = await fetch(`http://localhost:${PORT}/api/seed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server returned ${res.status}: ${text}`);
    }
    
    const data = await res.json();
    console.log('Seed response:', data);
  } catch (err) {
    console.error('Failed to trigger database seeding:', err.message);
    console.log('Tip: Ensure Next.js dev server is running (npm run dev) so the API route is accessible.');
  }
}

run();
