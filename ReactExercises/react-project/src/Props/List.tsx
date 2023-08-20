import { ListItem } from './ListItem';

export function List(): JSX.Element {
  const myList: string[] = [
    "Observar el HTML",
    "Pensar en cómo puedo extraer cada parte en componentes",
    "Usarlos, o mejor dicho, reusarlos en React",
  ]
  const listItems = myList.map(el => <ListItem>{el}</ListItem>)
  return <ul>{listItems}</ul>;
}

