export function ExternalLink({ href, className, title, children }) {
    return <a className={className} href={href} title={title} target="_blank" rel="noopener noreferrer">{children || href}</a>;
}
