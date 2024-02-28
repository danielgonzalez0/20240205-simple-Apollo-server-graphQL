export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Quiz {
  id: number;
  title: string;
  icon: string;
  color: string;
  questions: Question[];
}

export interface QuizzesData {
  quizzes: Quiz[];
}
