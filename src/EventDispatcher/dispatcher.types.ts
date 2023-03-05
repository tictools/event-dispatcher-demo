export interface Dispatcher {
  dispatch: (type: any, paylaod: any) => void
  subscribe: (type: any, listener: any) => Function
}