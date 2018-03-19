INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Double Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Deluxe Cheeseburger', false);


-- add new colums for sequilize
ALTER TABLE burgers
ADD COLUMN createdAt DATETIME NOT NULL AFTER devoured;
ADD COLUMN updatedAt DATETIME NOT NULL AFTER createdAt;