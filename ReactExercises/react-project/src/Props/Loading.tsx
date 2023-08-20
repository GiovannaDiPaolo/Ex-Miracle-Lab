interface LoadingProps {
    show: boolean;
    children: React.ReactNode;
  }
  
  export function Loading(props: LoadingProps): JSX.Element {
    const { show, children } = props;
  
    return <div>{show ? children : <p>Loading...</p>}</div>;
  }