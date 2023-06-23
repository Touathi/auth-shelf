
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "user" ("username", "password")
VALUES ('Grigori', '123456789');

INSERT INTO "item" ("description", "image_url", "user_id")
VALUES ('A chocolate cake, definitely not a lie', 'https://3.bp.blogspot.com/_cd6_MFUGTUE/TI-qhkYbt0I/AAAAAAAAAV8/wJHhnJVi8Lo/s1600/the_cake_is_a_lie_portal.jpg', '1'), 
('The bees knees', 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/honey-1296x728-header.jpg?w=1155&h=1528', '1');