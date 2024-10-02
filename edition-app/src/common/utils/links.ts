export function buildUrl(pageId: string): string {
  const link = document.querySelector<HTMLAnchorElement>(`#${pageId} a`);

  if (!link) return "";

  return link.href;
}
