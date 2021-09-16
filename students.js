const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  database: 'bootcampx'
});


pool.query(`SELECT students.id as student_id, students.name as student_name, cohorts.name as cohorts_name FROM students JOIN cohorts ON cohorts.id = cohort_id 
where cohorts.name LIKE '${process.argv[2]}%' LIMIT ${process.argv[3]};`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.student_name} has an id of ${user.student_id} and was in the ${user.cohorts_name} cohort`);
  })
});