import fs from 'fs';

const pathQuizzes = './src/data/data.json';

export const loadQuizzesData = () => {
  try {
    const jsonData = fs.readFileSync(pathQuizzes, 'utf8');
    const quizzesData = JSON.parse(jsonData);
    console.log(quizzesData);
    return quizzesData.quizzes;
  } catch (error) {
    console.error('Erreur lors du chargement des données des quizzes :', error);
    return null;
  }
};
