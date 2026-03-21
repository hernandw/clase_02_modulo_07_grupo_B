--creamos la BBDD
create database farmacia_store_db;

-Crear la Tabla
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price INT NOT NULL,
  image_url VARCHAR(255)
);



--Insertar Registros de ejemplo 

INSERT INTO products (name, description, price, image_url)
VALUES
('Paracetamol 500mg', 'Alivia dolor y fiebre', 2990, '/images/product1.png'),
('Ibuprofeno 400mg', 'Ayuda a reducir dolor e inflamación', 4590, '/images/product2.png'),
('Vitamina C', 'Suplemento para reforzar defensas', 5990, '/images/product3.png'),
('Protector Solar FPS 50', 'Protección diaria para la piel', 8990, '/images/product4.png'),
('Shampoo Anticaspa', 'Limpieza profunda y control de caspa', 7490, '/images/product5.png'),
('Crema Hidratante', 'Hidratación facial para uso diario', 10990, '/images/product6.png'),
('Alcohol Gel 250ml', 'Limpieza y desinfección de manos', 2490, '/images/product7.png'),
('Mascarillas Desechables', 'Pack de protección personal', 3990, '/images/product8.png'),
('Jarabe para la Tos', 'Alivio de molestias respiratorias', 6890, '/images/product9.png'),
('Termómetro Digital', 'Medición rápida de temperatura', 12990, '/images/product10.png'),
('Vitamina D', 'Apoyo para huesos y sistema inmune', 6490, '/images/product11.png'),
('Pasta Dental Sensible', 'Cuidado diario para dientes sensibles', 3790, '/images/product12.png');
-

--agregamos registros

INSERT INTO products (name, description, price, image_url)
VALUES
