import { useEffect } from 'react'

export function UnmountLogger () {
  useEffect(() => {
    return () => {
      console.log('Unmounted!');
    };
  }, []);

  return null;
};
