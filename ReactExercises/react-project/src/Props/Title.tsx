interface TitleProps {
    children: string
}

export function Title(props: TitleProps): JSX.Element {
    return <h1>{props.children}</h1>
}