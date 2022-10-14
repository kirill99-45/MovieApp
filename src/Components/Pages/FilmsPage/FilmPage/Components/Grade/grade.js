import { useState } from 'react';
import './grade.css';

export const Grade = () => {

  const [gradeState, setGradeState] = useState('user-grade-hidden')

  const getUserGrade = () => {
    setGradeState(gradeState === 'user-grade-open' ? 'user-grade-hidden' : 'user-grade-open')
  }

  const getResult = (maxGrade) => { // Создаем массив от 1 до указанного значения
    const result = []

    for (let i = 1; i <= maxGrade; i++) {
      result.push(i)
    }
    return result
  }

  const Grades = getResult(10).map(item => {
    return <span key={item}>{item}</span>
  })

  return (
    <>
      <button type='button' className='btn__user-grade' onClick={getUserGrade}>Оценить
        <div className={gradeState}>
          <img src='https://cdn-icons-png.flaticon.com/512/1828/1828884.png' />
          { Grades }
        </div>
      </button>
    </>
  )
}
