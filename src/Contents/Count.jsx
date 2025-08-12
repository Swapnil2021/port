import React, { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const STORAGE_KEY = 'portfolioVisitorCount';

  useEffect(() => {
    // Simulate fetching visitor count from backend or localStorage
    let storedCount = parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0;
    storedCount += 1; // Increment by 1 for this visit
    localStorage.setItem(STORAGE_KEY, storedCount);
    setCount(storedCount);
  }, []);

  if (count === null) return <p>Loading visitors...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
      <p>👥 Visitors so far: {count}</p>
    </div>
  );
}
