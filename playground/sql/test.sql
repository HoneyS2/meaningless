# SELECT
SELECT * FROM `table`;
SELECT COUNT(*) FROM `table`;
SELECT `COLUMN` FROM `table` WHERE id = 1;

# DISTINCT
SELECT DISTINCT `COLUMN` FROM `table`;

# FIND DUPLICATE VALUES
SELECT `COLUMN`, COUNT(*) AS cnt FROM `table` GROUP BY `COLUMN` HAVING cnt > 1;

# UPDATE
UPDATE `table` SET `COLUMN` = 'foo' WHERE id = 1;

# DELETE
DELETE FROM `table` WHERE id = 1;

# EXPLAIN QUERY
EXPLAIN SELECT * FROM `table`;

# DESCRIBE TABLE
DESCRIBE `table`;
