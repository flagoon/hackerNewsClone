declare interface Item {
  by: string
  descendants: number
  id: number
  score: number
  kids?: Array<number>
  time: number
  title: string
  type: string
  url: string
}

declare interface Author {
  created: number
  id: string
  karma: number
  submitted: string[]
}
