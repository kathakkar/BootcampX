-- SELECT cohorts.name AS cohort_name, count(*) FROM students JOIN cohorts ON cohort_id = cohorts.id
-- JOIN assignment_submissions ON student_id = assignment_submissions.id GROUP BY  cohort_name; 

SELECT cohorts.name AS cohort, count(assignment_submissions.*) AS total_submissions 
FROM assignment_submissions 
JOIN students ON student_id = students.id 
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohort 
ORDER BY total_submissions DESC; 