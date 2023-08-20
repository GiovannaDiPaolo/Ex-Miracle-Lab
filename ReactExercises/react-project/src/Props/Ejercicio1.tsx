import { Text } from './Text';
import { List } from './List';
import { Link } from './Link';
import { Loading } from './Loading';
import { Title } from './Title';

export function Ejercicio1(): JSX.Element {
  return (
    <div>
      <Title>Necesito partir en componentes todo esto</Title>
      <Text>
        Para ello puedo usar React que me permitirá reutilizar todos esos componentes. Para ello tengo que:
      </Text>
      <List/>
      <Link href="https://react.dev/" openInNewTab>
        React Docs
      </Link>
    </div>
  );
}

export function AppWithLoading(props: { show: boolean }): JSX.Element {
  const { show } = props;

  return (
    <Loading show={show}>
      <Ejercicio1/>
    </Loading>
  );
}
