SELECT day, count(*) As total_assignments
FROM assignments 
GROUP BY day 
ORDER BY day;