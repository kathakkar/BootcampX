SELECT  assignments.id, name, day, chapter, COUNT(assistance_requests.*) AS total_assistance 
FROM assignments 
JOIN assistance_requests ON assignment_id = assignments.id 
GROUP BY assignments.id 
ORDER BY total_assistance DESC;