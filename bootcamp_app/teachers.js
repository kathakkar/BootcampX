const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  database: 'bootcampx'
});

pool.query(`SELECT teachers.name AS teacher, cohorts.name AS cohort, COUNT(assistance_requests.*) AS total_assistances 
FROM teachers 
JOIN assistance_requests ON teacher_id = teachers.id 
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id 
WHERE cohorts.name= $1 
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;`,[process.argv[2]])
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort} : ${user.teacher}`);
  })
});