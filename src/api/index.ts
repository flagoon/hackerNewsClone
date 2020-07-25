const JSON = '.json?print=pretty'

export const createUrl = (type: 'top' | 'new'): string =>
  `https://hacker-news.firebaseio.com/v0/${type}stories${JSON}`

export const getStories = (type: 'top' | 'new'): Promise<string[]> => {
  return fetch(createUrl(type))
    .then((response) => response.json())
    .then((res) => res.slice(0, 50))
    .catch((exception) => console.warn(exception))
}
