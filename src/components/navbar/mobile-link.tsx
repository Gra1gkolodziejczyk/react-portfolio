function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="rounded-xl px-3 py-2 text-sm transition-colors hover:bg-muted">
      {children}
    </a>
  )
}

export default MobileLink;
