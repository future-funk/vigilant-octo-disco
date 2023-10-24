export interface ReseachQuestionAnswer {
  question: string
  answer: string
  subAnswers?: string[]
}

export interface Contact {
  name: string
  email: string
}

export interface DataSource {
  data: string
  subSources?: string[]
}

export interface Research {
  id: string
  name: string
  published_dt: Date
  description: string
  tags: string[]
  imageUrl: string
  attachmentUrl: string
  executive_summary: object[]
  referenceUrl?: string
  videoUrl?: string
}
