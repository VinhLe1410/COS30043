import producthighlights from '@/assets/producthighlights.json'
import events from '@/assets/events.json'

export interface typedEvent {
  eventid: string
  eventname: string
  category: string
  durationhour: number
}

export interface typedProductCard {
  title: string
  description: string
}

export const productCards: typedProductCard[] = producthighlights
export const typedEvents: typedEvent[] = events 