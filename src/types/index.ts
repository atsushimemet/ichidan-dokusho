export interface ReadingRecord {
  id: string;
  bookTitle: string;
  readingAmount: ReadingAmount;
  learning: string;
  tomorrowAction: string;
  createdAt: Date;
}

export type ReadingAmount = '1章' | '1段落' | '1文だけ';

export interface ReadingFormData {
  bookTitle: string;
  readingAmount: ReadingAmount;
  learning: string;
  tomorrowAction: string;
}