import React from 'react'
import ProgressBarComp from '../ProgressBarComp/ProgressBarComp'
import ButtonComp from '../ButtonComp/ButtonComp'

interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
}

interface CardCompProps {
  course: Course;
}

const CardComp: React.FC<CardCompProps> = ({ course }) => {
  return (
    <div className="course-card">
      <h3 className="course-title">{course.title}</h3>
      <p className="instructor-name">{course.instructor}</p>
      <ProgressBarComp data={course.progress} />
      <p className="progress-text">{course.progress}% completed</p>
      <ButtonComp />
    </div>
  )
}

export default CardComp