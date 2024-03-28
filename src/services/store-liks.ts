interface LinkData {
  id: string;
  longUrl: string;
  shortUrl: string;
}

export async function getLinksSaved(key: string): Promise<LinkData[]> {
  const myLinksJson = await localStorage.getItem(key);
  const myLinks: LinkData[] = myLinksJson ? JSON.parse(myLinksJson) : [];
  return myLinks;
}

export async function saveLink(key: string, newLink: LinkData): Promise<void> {
  const linksStored = await getLinksSaved(key);
  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log("Esse link já existe na sua lista");
    return;
  }

  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log("Link salvo com sucesso!");
}

export function deleteLink(links: LinkData[], id: string): LinkData[] {
  const myLinks = links.filter((item) => item.id !== id);

  localStorage.setItem("linksEncurtados", JSON.stringify(myLinks));

  return myLinks;
}
