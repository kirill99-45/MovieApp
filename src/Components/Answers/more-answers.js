import { useState } from 'react';

export const MoreAnswers = ({ comment, moreAnswersState, setMoreAnswersState, count }) => {

  const handleMoreAnswers = () => { // Обработка клика по кнопке
    const increase = 2 // Величина, на которую показываем новые ответы
    let hiddenCommentLength = moreAnswersState.allAnswers.length - (moreAnswersState.countOfVisible + increase) // Считаем "грязное"
                                                                                            //количество открытых ответов

    if (hiddenCommentLength < 0) { // Обработка количества открытых ответов, если их больше чем всего комментариев, то приравниваем к нулю
      hiddenCommentLength = 0;
    }

    if (moreAnswersState.countOfVisible < moreAnswersState.allAnswers.length) { // Проверка клика, если еще есть скрытые ответы
      setMoreAnswersState({ // Показать новые ответы
        ...moreAnswersState,
        countOfVisible : moreAnswersState.countOfVisible + increase,
        title :  hiddenCommentLength > 0 ? `Показать ответы (${hiddenCommentLength})` : 'Скрыть',
        length : hiddenCommentLength > 0 ? hiddenCommentLength : null,
      })
    } else { // Если скрытых ответов больше нет
      setMoreAnswersState({ // Скрыть все ответы
        ...moreAnswersState,
        countOfVisible : count,
        length : moreAnswersState.allAnswers.length,
        title : `Показать ответы (${moreAnswersState.allAnswers.length - count})`,
      })
    }
  }

  // JSX //

  return (
    <button className='post-page__more-answers' onClick={handleMoreAnswers}>
      {moreAnswersState.title}
    </button>
  )
}
