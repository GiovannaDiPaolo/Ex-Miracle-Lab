interface TextProps {
    children: string
}

export function Text(props: TextProps): JSX.Element {
    return <p>{props.children}</p>
}