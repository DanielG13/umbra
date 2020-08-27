-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 27-08-2020 a las 07:00:23
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `umbra`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apartamentos`
--

CREATE TABLE `apartamentos` (
  `id` int(11) NOT NULL,
  `name` int(11) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `area_const` varchar(255) DEFAULT NULL,
  `area_balcon` varchar(255) DEFAULT NULL,
  `area_const_balcon` varchar(255) DEFAULT NULL,
  `area_priv` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `pisoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `apartamentos`
--

INSERT INTO `apartamentos` (`id`, `name`, `tipo`, `area_const`, `area_balcon`, `area_const_balcon`, `area_priv`, `state`, `createdAt`, `updatedAt`, `pisoId`) VALUES
(1, 101, 'A1', '55.59', '4.06', '59.65', '52.12', 1, '2020-08-26 20:26:18', '2020-08-26 20:26:18', 1),
(2, 102, 'C1', '76.30', '2.33', '78.63', '68.85', 1, '2020-08-27 04:20:27', '2020-08-27 04:20:27', 1),
(3, 103, 'B14', '68.01', '2.12', '70.13', '61.50', 0, '2020-08-27 04:23:35', '2020-08-27 04:23:35', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `menus`
--

INSERT INTO `menus` (`id`, `name`, `url`, `logo`, `state`, `createdAt`, `updatedAt`) VALUES
(1, 'Setting', '#', 'faSetting', 1, '2020-08-24 19:08:18', '2020-08-24 19:08:18'),
(2, 'Dashboard', 'umbra/', 'faHome', 1, '2020-08-24 19:08:18', '2020-08-24 19:08:18'),
(3, 'Building manager', '#', 'faBuilding', 1, '2020-08-24 19:15:19', '2020-08-24 19:15:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pisos`
--

CREATE TABLE `pisos` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `torreId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pisos`
--

INSERT INTO `pisos` (`id`, `description`, `state`, `createdAt`, `updatedAt`, `torreId`) VALUES
(1, 'Primer piso de la torre 1', 1, '2020-08-26 18:40:09', '2020-08-26 18:40:09', 1),
(2, 'Piso 2 de la torre 1', 1, '2020-08-27 00:41:43', '2020-08-27 00:41:43', 1),
(3, 'Piso 3 de la torre 1', 1, '2020-08-27 00:45:55', '2020-08-27 00:45:55', 1),
(4, 'piso 4 de la torre 1', 1, '2020-08-27 00:51:27', '2020-08-27 00:51:27', 1),
(5, 'Piso 5 de la torre 1', 1, '2020-08-27 00:53:10', '2020-08-27 00:53:10', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Administrador', '2020-08-24 18:22:52', '2020-08-24 18:22:52'),
(2, 'Digitador', '2020-08-24 18:22:52', '2020-08-24 18:22:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_menus`
--

CREATE TABLE `rol_menus` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `menu_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol_menus`
--

INSERT INTO `rol_menus` (`createdAt`, `updatedAt`, `menu_id`, `rol_id`) VALUES
('2020-08-24 19:35:21', '2020-08-24 19:35:21', 1, 1),
('2020-08-24 19:35:21', '2020-08-24 19:35:21', 2, 1),
('2020-08-24 19:37:01', '2020-08-24 19:37:01', 3, 1),
('2020-08-24 19:37:01', '2020-08-24 19:37:01', 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sub_menus`
--

CREATE TABLE `sub_menus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `menuId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sub_menus`
--

INSERT INTO `sub_menus` (`id`, `name`, `url`, `logo`, `state`, `createdAt`, `updatedAt`, `menuId`) VALUES
(1, 'Menu', 'umbra/setting/menu', NULL, 1, '2020-08-24 19:41:36', '2020-08-24 19:41:36', 1),
(2, 'User', 'umbra/setting/user/list', NULL, 1, '2020-08-24 19:41:36', '2020-08-24 19:41:36', 1),
(3, 'Build', 'umbra/building_manager/build/list', NULL, 1, '2020-08-26 02:32:58', '2020-08-26 02:32:58', 3),
(4, 'Level', 'umbra/building_manager/level/list', NULL, 1, '2020-08-26 02:32:58', '2020-08-26 02:32:58', 3),
(5, 'Apartment', 'umbra/building_manager/apartment/list', NULL, 1, '2020-08-26 20:13:53', '2020-08-26 20:13:53', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `torres`
--

CREATE TABLE `torres` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `torres`
--

INSERT INTO `torres` (`id`, `description`, `state`, `createdAt`, `updatedAt`) VALUES
(1, 'Torre frontal con balcones hacia la playa', 1, '2020-08-26 03:27:02', '2020-08-26 03:27:02'),
(2, 'Torre con vista al jardín central', 1, '2020-08-26 22:36:09', '2020-08-26 22:36:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `identificacion` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `state` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `identificacion`, `name`, `last_name`, `phone_number`, `username`, `email`, `password`, `state`, `createdAt`, `updatedAt`, `roleId`) VALUES
(1, 1143405501, 'Daniel', 'Guerrero Chico', '3148592700', 'Daniel', 'daniel@gmail.com', '$2a$06$8ywl8XFy/4l4oA4CdlfVfegwHvhlNup3XfVzW96B0q3NJI2mjgLvq', 1, '2020-08-24 18:24:22', '2020-08-24 18:24:22', 1),
(2, 12233, 'Carlos', 'Duque', '898984', 'Carlos_Duque', 'carlos@gmail.com', '$2a$06$L/bsGmSdK1aUvIXN4UKmTOSsSIPbzQ/VELyWXH0YqeaCTouhn3t/.', 1, '2020-08-26 07:30:04', '2020-08-26 07:30:04', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apartamentos`
--
ALTER TABLE `apartamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pisoId` (`pisoId`);

--
-- Indices de la tabla `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pisos`
--
ALTER TABLE `pisos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `torreId` (`torreId`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol_menus`
--
ALTER TABLE `rol_menus`
  ADD PRIMARY KEY (`menu_id`,`rol_id`),
  ADD KEY `rol_id` (`rol_id`);

--
-- Indices de la tabla `sub_menus`
--
ALTER TABLE `sub_menus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menuId` (`menuId`);

--
-- Indices de la tabla `torres`
--
ALTER TABLE `torres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `apartamentos`
--
ALTER TABLE `apartamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `pisos`
--
ALTER TABLE `pisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `torres`
--
ALTER TABLE `torres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `apartamentos`
--
ALTER TABLE `apartamentos`
  ADD CONSTRAINT `apartamentos_ibfk_1` FOREIGN KEY (`pisoId`) REFERENCES `pisos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `pisos`
--
ALTER TABLE `pisos`
  ADD CONSTRAINT `pisos_ibfk_1` FOREIGN KEY (`torreId`) REFERENCES `torres` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `rol_menus`
--
ALTER TABLE `rol_menus`
  ADD CONSTRAINT `rol_menus_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rol_menus_ibfk_2` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sub_menus`
--
ALTER TABLE `sub_menus`
  ADD CONSTRAINT `sub_menus_ibfk_1` FOREIGN KEY (`menuId`) REFERENCES `menus` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
