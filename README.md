# 🏥 Patient Manager (React + TypeScript + Zustand)

Un **Administrador de Pacientes** simple, moderno y eficiente. Esta aplicación web permite a los usuarios gestionar, añadir, editar y eliminar registros de pacientes de forma intuitiva.

Construido sobre el stack de **React** y **TypeScript**, utiliza **Zustand** para la gestión de estado y **Tailwind CSS** para un diseño rápido y atractivo.

---

## ✨ Características Principales

* **Gestión Completa de Pacientes**: Añade nuevos pacientes con datos como nombre, propietario, email, fecha de alta y síntomas.
* **Edición y Eliminación**: Permite modificar cualquier registro existente o eliminarlo permanentemente con una interfaz sencilla.
* **Estado Global Eficiente**: Utiliza **Zustand** para una gestión de estado ligera y predecible, manteniendo la aplicación rápida y reactiva.
* **Notificaciones Amigables**: Implementación de **Toastify** para proporcionar *feedback* visual (mensajes de éxito o error) al usuario después de cada acción (guardar, editar, eliminar).
* **Persistencia de Datos**: Los datos se mantienen en el almacenamiento local del navegador, permitiendo que la información de los pacientes persista incluso después de recargar la página.
* **Diseño Moderno y Responsivo**: Estilizado completamente con **Tailwind CSS** para una interfaz limpia y adaptada a cualquier dispositivo.

---

## 💻 Tecnologías Utilizadas

Este proyecto fue desarrollado con las siguientes herramientas y librerías:

| Tecnología | Descripción |
| :--- | :--- |
| **React** | Biblioteca principal para la interfaz de usuario. |
| **TypeScript** | Añade tipado estático para un código más robusto y escalable. |
| **Vite** | Entorno de *build* rápido para el desarrollo y *bundling*. |
| **Zustand** | Librería de gestión de estado ligera y mínima. |
| **Tailwind CSS** | Framework de CSS *utility-first* para un estilizado rápido. |
| **React-Toastify** | Librería para notificaciones *toast* personalizadas. |
| **UUID** | Generación de identificadores únicos universales para cada paciente. |

---

## 🚀 Guía de Inicio Rápido

Sigue estos pasos para tener una copia del proyecto funcionando en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado **Node.js** y **npm** (o **Yarn** / **pnpm**).

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone [URL-DEL-REPOSITORIO]
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd patient-manager
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    # o yarn install
    ```

### Ejecución

Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o yarn dev
