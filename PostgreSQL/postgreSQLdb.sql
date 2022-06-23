--Product table
CREATE TABLE product (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	description TEXT,
	price NUMERIC(5,2) NOT NULL CHECK(price>=0),
  stock SMALLINT NOT NULL CHECK(stock>=0),
  caregories TEXT[],
  variants TEXT[],
  sizes TEXT[],
  img TEXT NOT NULL,
  createdAt TIMESTAMPZ DEFAULT CURRENT_TIMESTAMP
  );

INSERT INTO product(
  name,description,price,stock,caregories,variants,sizes,img)
VALUES('Nice shirt','Those are nice shirts',50,300,ARRAY['shirt','men'],
  ARRAY['black','blue','grey'],ARRAY['s','m','l','xl','xxl'],'shirt.png');

CREATE INDEX product_name_idx
	on product(name ASC);

SELECT name,price FROM product 
  WHERE stock BETWEEN 100 AND 250;

SELECT * FROM product 
  WHERE stock >= 100 AND price<= 60;

SELECT name,price FROM product
	WHERE price<=(
		SELECT AVG(price) from product
);

--User table
CREATE TABLE "user"(
	id SERIAL PRIMARY KEY,
	firstName VARCHAR(255) NOT NULL,
	secondName VARCHAR(255) NOT NULL,
	address TEXT,
	phone NUMERIC,
	email VARCHAR(255) NOT NULL UNIQUE,
	role BOOLEAN DEFAULT "USER" NOT NULL,
	isBanned BOOLEAN DEFAULT FALSE NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	picture TEXT NOT NULL
	);

  INSERT INTO "user"
  (firstName,secondName,address,phone,email,picture)
  VALUES('Miljo','Maraqa','Kirkkonummi',435425356,'miljo@fkemail.com','profilePicture.png');
		('John','Doe','Vanta',435425556,'John@fkemail.com','profilePicture.png');
		('Tarita','Maraqa','Kirkkonummi',4354235356,'Tarita@fkemail.com','profilePicture.png');


--Order table
  CREATE TABLE "order"(
			id SERIAL PRIMARY KEY,
			createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			user_id int REFERENCES "user"(id)
)
INSERT INTO order(user_id)VALUES(1)


CREATE TABLE orders_product(
	order_id int REFERENCES order(id),
	product_id int REFERENCES product(id),
	PRIMARY KEY(order_id,product_id)
	)
INSERT INTO orders_product(order_id,product_id)VALUES(1,2)

	SELECT name AS product_name,CONCAT(firstName,' ',secondName) as full_name,price,phone,address FROM orders_product
		JOIN order on order.id = orders_product.order_id JOIN product ON product.id =orders_product.product_id
		"user" ON "user".id =order.user_id;
