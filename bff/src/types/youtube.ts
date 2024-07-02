type thumbnailsProps = {
  url: string
  width: number
  height: number
}

type Item =  {
  kind: string
  etag: string
  id: {
    kind: string
    videoId: string
  },
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: thumbnailsProps,
      medium: thumbnailsProps,
      high: thumbnailsProps
    },
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
  }
}

export interface Youtube {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: Item[]
}