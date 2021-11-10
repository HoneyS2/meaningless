# SELECT
SELECT * FROM `table`;
SELECT `COLUMN` FROM `table` WHERE id = 1;

# LIMIT, OFFSET
SELECT * FROM `table` LIMIT 10;
SELECT * FROM `table` LIMIT 10 OFFSET 0;
SELECT * FROM `table` LIMIT 0, 10;

# ORDER BY
SELECT * FROM `table` ORDER BY id ASC;
SELECT * FROM `table` ORDER BY id DESC;

# COUNT
SELECT COUNT(*) FROM `table`;

# UNION
SELECT * FROM `table_A` UNION DISTINCT SELECT * FROM `table_B`;
SELECT * FROM `table_A` UNION ALL SELECT * FROM `table_B`;

# JOIN
SELECT `COLUMN` FROM `table_A` AS A INNER JOIN `table_B` AS B ON A.Key = B.Key;
SELECT `COLUMN` FROM `table_A` AS A LEFT JOIN `table_B` AS B ON A.Key = B.Key;
SELECT `COLUMN` FROM `table_A` AS A RIGHT JOIN `table_B` AS B ON A.Key = B.Key;
SELECT `COLUMN` FROM `table_A` AS A FULL OUTER JOIN `table_B` AS B ON A.Key = B.Key;

# DISTINCT
SELECT DISTINCT `COLUMN` FROM `table`;

# FIND DUPLICATE VALUES (GROUP BY)
SELECT `COLUMN`, COUNT(*) AS cnt FROM `table` GROUP BY `COLUMN` HAVING cnt > 1;

# UPDATE
UPDATE `table` SET `COLUMN` = 'foo' WHERE id = 1;

# DELETE
DELETE FROM `table` WHERE id = 1;

# EXPLAIN QUERY
EXPLAIN SELECT * FROM `table`;

# DESCRIBE TABLE
DESCRIBE `table`;

# CHECK TABLE CREATE STATEMENT
SHOW CREATE TABLE `table`;

# CHECK ALL VARIABLES
SHOW VARIABLES;

# CHECK MAX CONNECTIONS
SHOW VARIABLES LIKE 'max_connections';
