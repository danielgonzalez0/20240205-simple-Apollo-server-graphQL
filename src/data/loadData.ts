import fs from 'fs';
import { Quiz, QuizzesData } from './interface';

const pathQuizzes = './src/data/data.json';

export const loadQuizzesData = (): Quiz[] | null => {
  try {
    const jsonData = fs.readFileSync(pathQuizzes, 'utf8');
    const quizzesData : QuizzesData = JSON.parse(jsonData);
    const quizzes : Quiz[] = quizzesData.quizzes;
    return quizzes;
  } catch (error) {
    console.error('Erreur lors du chargement des données des quizzes :', error);
    return null;
  }
};
