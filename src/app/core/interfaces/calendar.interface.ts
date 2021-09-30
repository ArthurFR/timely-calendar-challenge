export interface CalendarInfo {
  data: {
    id: number,
    title: string,
  }
}

export interface CalendarEvents {
  data: {
    from: number,​​
    has_next: boolean,
    has_prior: boolean,
    items: CalendarEvent[],
    size: number,
    total: number,
  }
}

export interface CalendarEvent {
  allday: boolean,
  calendar_id: number,
  canonical_url: string,
  cost_display: string,​​​​
  custom_url: string,​​​​
  description_short: string,​​​​
  end_datetime: Date,​​​​
  event_status: string,​​​​
  feed_id: number,​​​​
  id: number,​​​​
  images: EventImage[],​​​​
  instance: string,​​​​
  is_example_event: boolean,​​​​
  post_to_facebook: boolean,​​​​
  post_to_twitter: boolean,​​​​
  start_datetime: Date,​​​​
  timezone: string,​​​​
  title: string,​​​​
  uid: string,​​​​
  url: string,​​​​
  user: string,
}

export interface EventImage {
  small: ImageData,
  medium: ImageData,
  full: ImageData,
}

interface ImageData {
  height: number,
  url: string,
  width: number,
}
