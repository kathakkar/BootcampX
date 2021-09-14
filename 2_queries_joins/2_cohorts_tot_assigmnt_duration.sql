SELECT SUM(duration) AS total_duration
FROM students 
JOIN cohorts ON cohort_id = cohorts.id
JOIN assignment_submissions ON student_id = students.id 
where cohorts.name = 'FEB12';