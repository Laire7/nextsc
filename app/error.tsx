// app/error.tsx  (주의!) error page는 client에서만 렌더링된다!
'use client';

import { useEffect } from 'react';

// app/error.tsx  (주의!) error page는 client에서만 렌더링된다!

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {}, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <pre className='text-red-500'>{error.stack || error.message}</pre>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
