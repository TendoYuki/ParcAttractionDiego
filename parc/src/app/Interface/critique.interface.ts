export interface CritiqueInterface {
  critique_id: number | null,
  attraction_id: number,
  name: string,
  first_name: string, 
  text: string,
  mark: Number,
  isAnonym: boolean
}