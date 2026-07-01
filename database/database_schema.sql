--
-- PostgreSQL database dump
--

\restrict oBwoMjpQmnIyZAt4F0HZhLN2iODavS71Y5p1KpTOW9RVmQ43ngF2Dy6LBG6Aw7V

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

-- Started on 2026-07-01 10:44:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 5043 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 24782)
-- Name: empleados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.empleados (
    id_empleado character varying(7) NOT NULL,
    nombre character varying(50),
    apellido character varying(50),
    cargo character varying(30),
    turno character varying(20)
);


ALTER TABLE public.empleados OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 24806)
-- Name: registros_parqueadero; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.registros_parqueadero (
    id_registro character varying(7) NOT NULL,
    id_usuario_fk character varying(7) NOT NULL,
    id_empleado_ingreso_fk character varying(7) NOT NULL,
    id_empleado_salida_fk character varying(7) NOT NULL,
    id_vehiculo_fk character varying(7) NOT NULL,
    fecha_hora_ingreso timestamp without time zone NOT NULL,
    fecha_hora_salida timestamp without time zone NOT NULL,
    total_pago numeric
);


ALTER TABLE public.registros_parqueadero OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 24800)
-- Name: tarifas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tarifas (
    id_tarifa character varying(7) NOT NULL,
    tipo_vehiculo character varying(20),
    tarifa_plena numeric(10,2),
    tarifa_por_minuto numeric(10,2)
);


ALTER TABLE public.tarifas OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 24774)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id_usr character varying(7) NOT NULL,
    nombre character varying(50),
    apellido character varying(50),
    correo character varying(100),
    password character varying(255),
    rol character varying(50)
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24788)
-- Name: vehiculos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vehiculos (
    id_vehiculo character varying(7) NOT NULL,
    id_usuario_fk character varying(7) NOT NULL,
    placa character varying(10),
    tipo_vehiculo character varying(20),
    color character varying(30)
);


ALTER TABLE public.vehiculos OWNER TO postgres;

--
-- TOC entry 5034 (class 0 OID 24782)
-- Dependencies: 220
-- Data for Name: empleados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.empleados (id_empleado, nombre, apellido, cargo, turno) FROM stdin;
\.


--
-- TOC entry 5037 (class 0 OID 24806)
-- Dependencies: 223
-- Data for Name: registros_parqueadero; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.registros_parqueadero (id_registro, id_usuario_fk, id_empleado_ingreso_fk, id_empleado_salida_fk, id_vehiculo_fk, fecha_hora_ingreso, fecha_hora_salida, total_pago) FROM stdin;
\.


--
-- TOC entry 5036 (class 0 OID 24800)
-- Dependencies: 222
-- Data for Name: tarifas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tarifas (id_tarifa, tipo_vehiculo, tarifa_plena, tarifa_por_minuto) FROM stdin;
\.


--
-- TOC entry 5033 (class 0 OID 24774)
-- Dependencies: 219
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id_usr, nombre, apellido, correo, password, rol) FROM stdin;
7810275	jhon 	nocove 	s0088594@gmail.com	081214	usuario
3467032	jhon alexander	nocove	jhonsito111@gmail.com	081214	usuario
4863662	arturo	diaz	arturodiaz9@gmail.com	5050	usuario
5892131	freddy 	ardila	freddycardila@gmail.com	1234	usuario
\.


--
-- TOC entry 5035 (class 0 OID 24788)
-- Dependencies: 221
-- Data for Name: vehiculos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vehiculos (id_vehiculo, id_usuario_fk, placa, tipo_vehiculo, color) FROM stdin;
\.


--
-- TOC entry 4874 (class 2606 OID 24787)
-- Name: empleados empleados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empleados
    ADD CONSTRAINT empleados_pkey PRIMARY KEY (id_empleado);


--
-- TOC entry 4880 (class 2606 OID 24819)
-- Name: registros_parqueadero registros_parqueadero_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.registros_parqueadero
    ADD CONSTRAINT registros_parqueadero_pkey PRIMARY KEY (id_registro);


--
-- TOC entry 4878 (class 2606 OID 24805)
-- Name: tarifas tarifas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tarifas
    ADD CONSTRAINT tarifas_pkey PRIMARY KEY (id_tarifa);


--
-- TOC entry 4872 (class 2606 OID 24781)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usr);


--
-- TOC entry 4876 (class 2606 OID 24794)
-- Name: vehiculos vehiculos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehiculos
    ADD CONSTRAINT vehiculos_pkey PRIMARY KEY (id_vehiculo);


--
-- TOC entry 4882 (class 2606 OID 24825)
-- Name: registros_parqueadero fk_empleado_ingreso; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.registros_parqueadero
    ADD CONSTRAINT fk_empleado_ingreso FOREIGN KEY (id_empleado_ingreso_fk) REFERENCES public.empleados(id_empleado);


--
-- TOC entry 4883 (class 2606 OID 24830)
-- Name: registros_parqueadero fk_empleado_salida; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.registros_parqueadero
    ADD CONSTRAINT fk_empleado_salida FOREIGN KEY (id_empleado_salida_fk) REFERENCES public.empleados(id_empleado);


--
-- TOC entry 4884 (class 2606 OID 24820)
-- Name: registros_parqueadero fk_usuario_reg; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.registros_parqueadero
    ADD CONSTRAINT fk_usuario_reg FOREIGN KEY (id_usuario_fk) REFERENCES public.usuarios(id_usr);


--
-- TOC entry 4881 (class 2606 OID 24795)
-- Name: vehiculos fk_usuario_vehiculo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehiculos
    ADD CONSTRAINT fk_usuario_vehiculo FOREIGN KEY (id_usuario_fk) REFERENCES public.usuarios(id_usr);


--
-- TOC entry 4885 (class 2606 OID 24835)
-- Name: registros_parqueadero fk_vehiculo_reg; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.registros_parqueadero
    ADD CONSTRAINT fk_vehiculo_reg FOREIGN KEY (id_vehiculo_fk) REFERENCES public.vehiculos(id_vehiculo);


-- Completed on 2026-07-01 10:44:53

--
-- PostgreSQL database dump complete
--

\unrestrict oBwoMjpQmnIyZAt4F0HZhLN2iODavS71Y5p1KpTOW9RVmQ43ngF2Dy6LBG6Aw7V

