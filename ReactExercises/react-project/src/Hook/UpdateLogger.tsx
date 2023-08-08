import { useEffect } from 'react';

interface UpdateLoggerProps {
  data: any;
}

export function UpdateLogger(props: UpdateLoggerProps): JSX.Element {
  useEffect(() => {
    console.log('Updating!');
  }, [props.data]);

  return <></>;
};

