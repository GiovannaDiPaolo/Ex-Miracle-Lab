interface ListItemProps {
  children: string
}  

export function ListItem(props: ListItemProps): JSX.Element {
  return <li>{props.children}</li> 
}

