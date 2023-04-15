import JS from "../components/Icons/JS";
import Scss from "../components/Icons/Scss";
import Node from "../components/Icons/Node.jsx";
export const postList = [

    {
        fullName: 'node-create',
		name: 'node-create',
		params: ['noPages'],
        description: 'Этот скрипт позволяет создавать реакт компоненты в один клик и объявлять sass переменные на весь проект',
        writeOn: [<Node/>],
	},
	
    {
		fullName: 'Тест по HTML сделанный на HTML',
		params: [],
        name:'htmltest',
        description: 'Тест на нативном джаваскрипте с плохим адаптивом. Сделал в качестве учебного проекта в колледже, тогда только изучал основы джаваскрипта. Позже переписал его на реакте, а старую версию с кучей костылей сохранил в первозданном виде. В нем 25 вопросов по HTML и CSS, за каждый вопрос выдаётся один балл. В конце выставляется оценка по пятибальной шкале. Всего на тест даётся 30 минут. Есть переключатель темы, также меняется фон в разных частях теста',
        writeOn: [<JS/>, <Scss/>],
	},
	
]