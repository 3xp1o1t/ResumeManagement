# Resume Managment

Una aplicacion echa con .Net Core 7, ASP.Net, Entity Framework, SQL Server y React con TypeScript.

## Backend

### Requisitos

1. ASP.NET Core Web API Project
2. Microsoft Entity Framework Core 7.0.14
3. Microsoft Entity Framework SqlServer 7.0.14
4. Microsoft Entity Framework Tools 7.0.14

### Pasos

1. Opciones de creacion del proyecto
   1. HTTPS habilitado
   2. Use Controllers
   3. OPEN API
2. Eliminar WeatherForecast y su controlador ejemplo
3. Estructura de carpetas
   1. Core
      1. AutoMapperConfig
      2. Context
      3. Dtos
      4. Entities
      5. Enums
4. Agregar cadena de conexion en appsettings.json
5. Configurar contexto en Program.cs
6. Crear entidades y Enums
7. Iniciarlizar migraciones
   1. PM> Add-Migration initial-migration
   2. PM> Update-Database
8. Verificar las migraciones en SQL Server Management Studio
