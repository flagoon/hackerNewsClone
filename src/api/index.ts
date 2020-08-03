const JSON = '.json?print=pretty'

export const createUrl = (type: 'top' | 'new'): string =>
  `https://hacker-news.firebaseio.com/v0/${type}stories${JSON}`

/**
 * It's fetching IDs of post ids.
 * @param {'new' | 'top'} type - type of story
 * @returns {string[]} - array of ids
 */

export const getStories = (type: 'top' | 'new'): Promise<string[]> => {
  return fetch(createUrl(type))
    .then((response) => response.json())
    .then((res) => res.slice(0, 50))
    .catch((exception) => console.warn(exception))
}

/**
 * Get author information.
 * @param {string} id - id of author
 */
export const getAuthor = (id: string): Promise<Author> => {
  return fetch(
    `https://hacker-news.firebaseio.com/v0/user/${id}${JSON}`,
  ).then((response) => response.json())
}

export const getPosts = (ids: string[]): Promise<Item[]> => {
  const restrictedIds = ids.slice(0, 50)
  const postsFetch = restrictedIds.map((id) =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}${JSON}`),
  )
  return Promise.all(postsFetch).then((posts) =>
    Promise.all<Item>(posts.map((p) => p.json())),
  )
}
