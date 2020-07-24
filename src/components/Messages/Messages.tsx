import React from 'react'
import { Message, MessageHeader, MessageInfo } from './Messages.sc'

interface Item {
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

const messages: Array<Item> = [
  {
    by: 'yolossn',
    descendants: 1,
    id: 23909959,
    kids: [23909968],
    score: 1,
    time: 1595359083,
    title:
      'Show HN: Query2metric |Run queries in defined frequency and expose it as metrics',
    type: 'story',
    url: 'https://github.com/yolossn/query2metric',
  },
  {
    by: 'bookofjoe',
    descendants: 0,
    id: 23909957,
    score: 1,
    time: 1595359075,
    title: 'Porsche tests 3D-printed pistons for 911 GT2 RS',
    type: 'story',
    url:
      'https://www.cnet.com/roadshow/news/porsche-tests-3d-printed-pistons-for-911-gt2-rs/',
  },
  {
    by: 'simonebrunozzi',
    descendants: 1,
    id: 23909954,
    kids: [23909970],
    score: 1,
    time: 1595359060,
    title: 'The physics of the space elevator [pdf]',
    type: 'story',
    url:
      'https://pdfs.semanticscholar.org/d402/ba5f97884b7398ae2a1ff79136f9c1a03993.pdf',
  },
  {
    by: 'christian_fei',
    descendants: 0,
    id: 23909950,
    score: 1,
    time: 1595359042,
    title: 'Simple email trick to manage your newsletters',
    type: 'story',
    url:
      'https://cri.dev/posts/2020-07-21-Simple-email-trick-to-manage-your-newsletters/',
  },
  {
    by: 'GiulioS',
    descendants: 0,
    id: 23909936,
    score: 1,
    time: 1595358970,
    title: 'The CVE Turns 21: The Story of How It Made It This Far',
    type: 'story',
    url:
      'https://secalerts.co/article/the-cve-turns-21-the-story-of-how-it-made-it-this-far/a7475dee',
  },
]

const Messages: React.FC = () => {
  return (
    <>
      {messages.map((message) => {
        return (
          <Message key={message.id}>
            <MessageHeader>
              <a href={message.url}>{message.title}</a>
            </MessageHeader>

            <MessageInfo>
              by <a href="test">{message.by}</a> on {message.time} with{' '}
              <a href="test">{message.descendants}</a> comments
            </MessageInfo>
          </Message>
        )
      })}
    </>
  )
}

export default Messages
