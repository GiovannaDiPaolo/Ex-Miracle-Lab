interface LinkProps {
    href: string;
    openInNewTab?: boolean;
    children: string
  }
  
  export function Link(props: LinkProps): JSX.Element {
    const { href, openInNewTab, children } = props
    return (
      <a href={href} target={openInNewTab ? '_blank' : '_self'}>
        {children}
      </a>
    )
  }
  