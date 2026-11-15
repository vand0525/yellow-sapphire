import { useEffect, useState } from 'react';

export const DESKTOP_QUERY = '(min-width: 800px)';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(query).matches
      : false,
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleChange = () => setMatches(media.matches);
    handleChange();

    media.addEventListener('change', handleChange);

    return () => media.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}
