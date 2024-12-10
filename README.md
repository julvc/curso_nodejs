### Descripción de la Tarea: Desarrollo de una Pokédex API

**Objetivo**: Desarrollar una API RESTful para una Pokédex utilizando Express.js, implementando autenticación JWT y siguiendo las mejores prácticas de arquitectura de software.

**Requerimientos Funcionales**:

1.  **Sistema de Autenticación**:
    
    -   Registro de entrenadores Pokemon
    -   Login con generación de JWT
    -   Protección de rutas específicas
2.  **Gestión de Pokémon**:
    
    -   Crear nuevos Pokémon (solo usuarios autenticados)
    -   Listar todos los Pokémon (público)
    -   Ver detalles de un Pokémon específico (público)
    -   Listar Pokémon por entrenador (autenticado)
    -   Actualizar información de Pokémon (solo el entrenador dueño)
    -   Eliminar Pokémon (solo el entrenador dueño)

**Estructura de Datos**:

1.  **Usuario (Entrenador)**:

{
    id: number,
    username: string,
    password: string,
    role: string
}

2.  **Pokémon**:

{
    id: number,
    name: string,
    type: string,
    level: number,
    trainerId: number,
    createdAt: Date
}

**Endpoints a implementar**:

1.  **Autenticación**:
    
    -   POST  `/auth/register`  - Registro de nuevo entrenador
    -   POST  `/auth/login`  - Login de entrenador
2.  **Pokémon**:
    
    -   GET  `/pokemon`  - Listar todos los Pokémon
    -   GET  `/pokemon/:id`  - Ver detalle de un Pokémon
    -   GET  `/pokemon/trainer/mypokemons`  - Ver mis Pokémon (autenticado)
    -   POST  `/pokemon`  - Crear nuevo Pokémon (autenticado)
    -   PUT  `/pokemon/:id`  - Actualizar Pokémon (autenticado)
    -   DELETE  `/pokemon/:id`  - Eliminar Pokémon (autenticado)

**Criterios de Evaluación**:

1.  **Arquitectura y Organización (30%)**:
    
    -   Correcta separación de responsabilidades (controllers, services, middleware)
    -   Uso apropiado de módulos y exportaciones
    -   Manejo de errores consistente
2.  **Autenticación (25%)**:
    
    -   Implementación correcta de JWT
    -   Protección adecuada de rutas
    -   Validación de propiedad de Pokémon
3.  **API REST (25%)**:
    
    -   Uso correcto de verbos HTTP
    -   Estructura adecuada de endpoints
    -   Respuestas HTTP apropiadas
4.  **Código y Buenas Prácticas (20%)**:
    
    -   Código limpio y bien documentado
    -   Nombres descriptivos de variables y funciones
    -   Manejo de errores apropiado

**Bonus (puntos extra)**:

-   Implementar validación de datos (por ejemplo, con Joi o express-validator)
-   Agregar paginación en los endpoints de listado
-   Implementar búsqueda de Pokémon por tipo
-   Agregar endpoints para estadísticas (por ejemplo, Pokémon por tipo)
-   Implementar sistema de evolución de Pokémon