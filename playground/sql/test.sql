# SELECT
SELECT * FROM `table`;
SELECT `COLUMN` FROM `table` WHERE id = 1;

# SUBQUERY
SELECT *
FROM `table_A`
WHERE `COLUMN` IN (
    SELECT `COLUMN`
    FROM `table_B`
)
ORDER BY id DESC;

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

# TABLE STRUCTURE COPY
CREATE TABLE `new_table` LIKE `old_table`;
CREATE TABLE IF NOT EXISTS `new_table` LIKE `old_table`;

# TABLE DATA COPY
INSERT INTO `new_table` (SELECT * FROM `old_table`);

# CHECK ALL VARIABLES
SHOW VARIABLES;

# CHECK MAX CONNECTIONS
SHOW VARIABLES LIKE 'max_connections';

# PROFILE
SELECT @@profiling;
SET profiling = 1;
SHOW PROFILES;
SHOW PROFILE;
SHOW PROFILE FOR QUERY 1;

# CHECK EVENT SCHEDULER
SHOW VARIABLES LIKE 'event%';
SET GLOBAL event_scheduler = ON;

# EVENT
SHOW EVENTS;
SHOW CREATE EVENT `event`;

CREATE
EVENT `scheduler` ON SCHEDULE EVERY 1 DAY STARTS '2021-11-24 05:00:00'
DO
DELETE FROM `table` WHERE `created_at` < DATE_ADD(NOW(), INTERVAL -30 DAY);

ALTER
EVENT `scheduler` ON SCHEDULE EVERY 1 DAY STARTS '2021-11-24 05:30:00'
DO
DELETE FROM `table` WHERE `created_at` < DATE_ADD(NOW(), INTERVAL -15 DAY);

DROP EVENT `scheduler`;

# CHECK PROCESSLIST & KILL
SHOW PROCESSLIST;
KILL 1234; -- processlist_id

# CHECK VERSION
SHOW VARIABLES LIKE 'version';
SELECT version();
