import React from 'react'
import { courses } from '../../data/coursesData';
import '../../assets/styles/myCourses.css';
import CardComp from '../../components/CardComp/CardComp';

const MyCourses = () => {
  return (
    <div>
      <h1>My Courses</h1>
      <div className="courses-grid">
        {courses.map(course => (
          <CardComp key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default MyCourses