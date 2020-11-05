CREATE DATABASE fyi;

CREATE TABLE Doctor (
    colegiado integer NOT NULL UNIQUE,
    nombreDoc varchar NOT NULL,
    email varchar NOT NULL,
    telefono varchar NOT NULL,
    direccion varchar NOT NULL,
    especialidad varchar NOT NULL,
    PRIMARY KEY (colegiado)
);

INSERT INTO Doctor VALUES (1234, 'Erinson', 'eri@galileo.edu', '22334455', '5 calle', 'Traumatologo');
INSERT INTO Doctor VALUES (1235, 'Hegyver', 'eri@galileo.edu', '22334455', '5 calle', 'Ginecologo');

CREATE TABLE Paciente (
    dpi bigint NOT NULL UNIQUE,
    nombre varchar NOT NULL,
    apellido varchar NOT NULL,
    email varchar NOT NULL,
    passwd varchar,
    colegiado integer UNIQUE, 
    FOREIGN KEY (colegiado) REFERENCES Doctor (colegiado),
    PRIMARY KEY (dpi)
);

INSERT INTO Paciente VALUES (2200330101, 'Gizeh', 'Garcia', 'g@gali.edy', '123abc');
INSERT INTO Paciente VALUES (22003301010, 'Gizeh', 'Garcia', 'g@gali.edy', '123abc',1234);
INSERT INTO Paciente VALUES (22003301011, 'Marisol', 'Garcia', 'g@gali.edy', '123abc',1234);


SELECT p.dpi, p.nombre, p.apellido, p.email, p.passwd, d.nombreDoc AS doctor FROM Paciente p LEFT JOIN Doctor d ON d.colegiado=p.colegiado;

CREATE TABLE Audios (
    correlativo serial NOT NULL,
    link varchar NOT NULL,
    funcion varchar,
    autor varchar,
    PRIMARY KEY (correlativo)
);

INSERT INTO Audios VALUES (default, 'www.google.com', 'Relajación', 'Gizeh' );
INSERT INTO Audios VALUES (default, 'www.facebook.com', 'Diversión', 'GizehG' );


CREATE TABLE ContactoSOS (
    idSOS serial NOT NULL,
    nombreSOS varchar NOT NULL,
    telefono varchar NOT NULL ,
    email varchar NOT NULL,
    dpi bigint NOT NULL,
    FOREIGN KEY (dpi) REFERENCES Paciente (dpi),
    PRIMARY KEY (idSOS)
);

INSERT INTO ContactoSOS VALUES (default, 'Hegyver Borrayo', '3332223', 'h@ga.edy', 22003301010);
SELECT c.idSOS, c.nombreSOS, c.telefono, c.email, CONCAT (p.nombre, ' ', p.apellido) AS paciente FROM ContactoSOS c, Paciente p WHERE c.dpi=p.dpi; 

CREATE TABLE HistoriaClinica (
    idHIS serial NOT NULL,
    fecha_nac varchar NOT NULL,
    peso integer NOT NULL,
    altura integer NOT NULL ,
    traumas varchar,
    cirugias varchar,
    medicamentosActuales varchar,
    infecciones varchar,
    dpi bigint NOT NULL,
    FOREIGN KEY (dpi) REFERENCES Paciente (dpi),
    PRIMARY KEY (idHIS)
);

INSERT INTO HistoriaClinica VALUES (default, '31/03/1995', 150, 168, 'no', 'no', 'no','', 22003301010 );
INSERT INTO HistoriaClinica VALUES (default, '31/03/1998', 150, 168, 'no', 'no', default,'', 22003301010 );

CREATE TABLE Rutina (
    idRutina serial NOT NULL,
    pesoIdeal integer,
    tiempoDisponible integer,
    hora_entreno varchar,
    dpi bigint NOT NULL,
    FOREIGN KEY (dpi) REFERENCES Paciente (dpi),
    PRIMARY KEY (idRutina)
);
INSERT INTO Rutina VALUES (default, '100lb', default, default, 22003301010);

CREATE TABLE Ejercicios(
    idEjercicio serial NOT NULL,
    nombre varchar NOT NULL,
    descripcion varchar,
    repeticiones varchar,
    idRutina integer NOT NULL,
    FOREIGN KEY (idRutina) REFERENCES Rutina(idRutina),
    PRIMARY KEY (idEjercicio)
);
INSERT INTO Ejercicios VALUES (default, 'Trotar', default, default, 1);

-- Rutina caminar
-- Ejercicios: trotar
-- Ejercicios: estirar
-- 

CREATE TABLE Dieta (
    idDieta serial NOT NULL,
    porciones varchar,
    alergias varchar,
    tabaco varchar,
    alcohol varchar,
    dpi bigint NOT NULL,
    FOREIGN KEY (dpi) REFERENCES Paciente (dpi),
    PRIMARY KEY (idDieta)
);
INSERT INTO Dieta VALUES (default, '4', default, default, default, 22003301010);


CREATE TABLE Alimentos(
    idAlimento serial NOT NULL,
    nombre varchar NOT NULL,
    tipo varchar,
    idDieta integer NOT NULL,
    FOREIGN KEY (idDieta) REFERENCES Dieta (idDieta),
    PRIMARY KEY (idAlimento)
);
INSERT INTO Alimentos VALUES (default, 'Manzana', default, 1);
INSERT INTO Alimentos VALUES (default, 'Lechuga', default, 1);


