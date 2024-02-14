"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadQuizzesData = void 0;
const fs_1 = __importDefault(require("fs"));
const pathQuizzes = './src/data/data.json';
const loadQuizzesData = () => {
    try {
        const jsonData = fs_1.default.readFileSync(pathQuizzes, 'utf8');
        const quizzesData = JSON.parse(jsonData);
        console.log(quizzesData);
        return quizzesData.quizzes;
    }
    catch (error) {
        console.error('Erreur lors du chargement des données des quizzes :', error);
        return null;
    }
};
exports.loadQuizzesData = loadQuizzesData;
