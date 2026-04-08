# 🛡️ PROTOCOLO DE AUDITORÍA ESTÉTICA: DIMPURA3D
## Reporte de Vulnerabilidades Visuales y Deuda Técnica
Generado por: Senior UI/UX Auditor

---

### 🚨 PRIORIDAD CRÍTICA

**1. ID de Fallo:** `src/app/login/page.tsx:80`
- **Vulnerabilidad:** Falta de Voz de Sistema (Humano vs Técnico). El botón dice "Ingresando..." e "Ingresar". Dimpura3D requiere un tono Ciberpunk/Técnico e Imperativo.
- **Protocolo de Corrección:** Reemplazar por `ESTABLECIENDO ENLACE...` y `AUTENTICAR`.

**2. ID de Fallo:** `src/app/signup/page.tsx:96`
- **Vulnerabilidad:** Falta de Voz de Sistema. El botón dice "Creando cuenta..." y "Registrarte".
- **Protocolo de Corrección:** Reemplazar por `INICIALIZANDO ENTIDAD...` y `INICIALIZAR SECUENCIA`.

**3. ID de Fallo:** `src/app/admin/layout.tsx:23`
- **Vulnerabilidad:** Consistencia Cromática. Se usa el gris genérico de Tailwind (`bg-slate-950`) que no pertenece al mainframe ciberpunk.
- **Protocolo de Corrección:** Cambiar `bg-slate-950` a la clase o variable que establezca el fondo ciberpunk oficial o usar `bg-background` (que está configurado en `globals.css`).

**4. ID de Fallo:** `src/app/admin/page.tsx:13`
- **Vulnerabilidad:** Consistencia Cromática. Uso de `bg-blue-400/10` y `text-blue-400` para la tarjeta "Productos", colores genéricos fuera de la paleta oficial (Cyan Neón #51fbef y Magenta #ff00ff).
- **Protocolo de Corrección:** Reemplazar `bg-blue-400/10` y `text-blue-400` por clases alineadas al tema Ciberpunk (ej. `bg-primary/10 text-primary` o usando las variables cyan/magenta de Tailwind).

---

### ⚠️ PRIORIDAD ALTA

**5. ID de Fallo:** Múltiples paneles en Admin (`src/app/admin/page.tsx:28`, `src/app/admin/productos/page.tsx:29`)
- **Vulnerabilidad:** Protocolo Glassmorphism incompleto o adulterado. Se usan combinaciones como `bg-slate-900/40 border-white/10 backdrop-blur-xl`. Aunque incluye el desenfoque y el borde, usa una base opaca (`slate-900/40`) y carece de la profundidad especificada (`bg-white/5` + `backdrop-blur`).
- **Protocolo de Corrección:** Reemplazar las clases de fondo y borde (ej. `bg-slate-900/40 border-white/10 backdrop-blur-xl`) por la clase de utilidad explícita de glassmorphism `bg-white/5 backdrop-blur border border-white/10` o la clase `.glass` si existe configurada.

**6. ID de Fallo:** `src/app/layout.tsx:52`
- **Vulnerabilidad:** Jerarquía Tipográfica. El `body` tiene asignada la clase `font-sans` genérica por defecto, dejando la fuente no configurada según la jerarquía establecida (Space Grotesk).
- **Protocolo de Corrección:** Cambiar `<body className="font-sans">` a `<body className="font-space-grotesk">`.

**7. ID de Fallo:** `src/components/ui/kbd.tsx:8`
- **Vulnerabilidad:** Jerarquía Tipográfica. Usa la clase `font-sans` en un componente de teclado o botón técnico. Debe usar la fuente secundaria, Orbitron.
- **Protocolo de Corrección:** Cambiar la clase `font-sans` por `font-display` (que carga var(--font-orbitron)).

---

### 🟡 PRIORIDAD MEDIA

**8. ID de Fallo:** `src/components/ui/progress.tsx:25` y `src/components/ui/chart.tsx:292`
- **Vulnerabilidad:** Detección de Estilos Inline. Uso de `style={{ ... }}` que va en contra del estándar de Tailwind V4 o variables CSS globales.
- **Protocolo de Corrección:** Se debe refactorizar su comportamiento mediante utilidades de Tailwind si la transformación o propiedad se puede hacer estáticamente, o a través de variables de estilo inyectadas de Tailwind si aplica. (En los charts a veces es inevitable el inlining, en ese caso la deuda se acepta o se documenta).

**9. ID de Fallo:** Mensajes de estado en Login/Signup (`src/app/login/page.tsx:32`, `src/app/login/page.tsx:101`)
- **Vulnerabilidad:** Voz de Sistema. Mensajes como "Error: ..." o "Cargando..." son un lenguaje muy genérico y amigable en vez de técnico e imperativo.
- **Protocolo de Corrección:** Cambiar a tono técnico Ciberpunk. Ej: `FALLO DE ENLACE: ...` y `SINCRONIZANDO DATOS...`.
