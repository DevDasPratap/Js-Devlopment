BEGIN;

-- 1000 users
INSERT INTO users (name, email)
SELECT 
  'User ' || i,
  'user' || i || '@test.com'
FROM generate_series(1, 1000) AS s(i);

-- 100 products
INSERT INTO products (name, price)
SELECT 
  'Product ' || i,
  (random() * 100)::numeric(5,2)
FROM generate_series(1, 100) AS s(i);

-- 500 orders
INSERT INTO orders (user_id)
SELECT 
  floor(random() * 1000 + 1)::int
FROM generate_series(1, 500);

-- 1500 order_items
INSERT INTO order_items (order_id, product_id, quantity)
SELECT 
  floor(random() * 500 + 1)::int,
  floor(random() * 100 + 1)::int,
  floor(random() * 5 + 1)::int
FROM generate_series(1, 1500);

COMMIT;