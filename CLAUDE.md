# Portafolio Personal - Proyecto React + Vite

## 📋 Descripción del Proyecto

Portafolio personal de desarrollador con efectos visuales impresionantes usando componentes animados de React Bits. El objetivo es crear una experiencia web memorable y elegante.

## 🎯 Objetivo Principal

Crear un portafolio web moderno con:
- Backgrounds animados usando React Bits (Liquid Ether y otros)
- Diseño elegante y profesional
- Scroll suave con múltiples secciones
- Componentes reutilizables y bien organizados

## 🛠️ Stack Tecnológico

- **Framework**: React 18+ con Vite
- **Librería de Animaciones**: React Bits (componentes open source)
- **3D/Graphics**: Three.js (requerido por React Bits)
- **Estilos**: CSS puro + inline styles
- **Lenguaje**: JavaScript (JSX)

## 📁 Estructura del Proyecto

```
rickfolio/
├── src/
│   ├── components/
│   │   ├── LiquidEther.jsx          # Background animado principal
│   │   ├── LiquidEther.css
│   │   ├── [OtrosComponentes].jsx   # Componentes de React Bits que se irán agregando
│   │   └── [OtrosComponentes].css
│   ├── App.jsx                      # Componente principal con layout
│   ├── App.css                      # Estilos del layout principal
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Estilos globales
├── public/
├── package.json
└── CLAUDE.md                        # Este archivo

```

## 🎨 Componentes de React Bits en Uso

### Instalados:
1. **LiquidEther** - Background principal con efecto fluido animado
   - Ubicación: `src/components/LiquidEther.jsx`
   - CSS: `src/components/LiquidEther.css`
   - Props configurables: colors, mouseForce, cursorSize, autoDemo, etc.

### Por Agregar:
- El usuario irá agregando más componentes de React Bits según los vaya encontrando
- Cada componente se agregará a `src/components/` con su respectivo CSS
- Se integrarán en `App.jsx` según se necesiten

## 📐 Layout y Estructura

### App.jsx - Estructura Actual:

```jsx
<>
  {/* Background Fijo (position: fixed, zIndex: -1) */}
  <div className="background-container">
    <LiquidEther {...props} />
  </div>

  {/* Contenido con Scroll (position: relative, zIndex: 1) */}
  <div className="content-container">
    <section className="hero">
      {/* Hero content */}
    </section>
    
    <section className="about">
      {/* About content */}
    </section>
    
    <section className="projects">
      {/* Projects content */}
    </section>
    
    <section className="contact">
      {/* Contact content */}
    </section>
  </div>
</>
```

### Principios de Diseño:

1. **Z-Index Layers**:
   - Background animado: `z-index: -1` (fixed)
   - Contenido: `z-index: 1` (relative)
   - Modales/Overlays: `z-index: 10+` (si se necesitan)

2. **Scroll Behavior**:
   - Background permanece fijo con `position: fixed`
   - Contenido hace scroll normalmente
   - Cada sección tiene `minHeight: 100vh` para full-screen

3. **Responsive**:
   - Mobile-first approach
   - Breakpoints estándar: 768px, 1024px, 1440px

## 🔧 Configuración de Componentes React Bits

### Cómo Agregar Nuevos Componentes:

1. **Crear archivos**:
   ```
   src/components/NuevoComponente.jsx
   src/components/NuevoComponente.css
   ```

2. **Estructura del componente**:
   ```jsx
   import { useEffect, useRef } from 'react';
   import './NuevoComponente.css';

   export default function NuevoComponente({ 
     // props aquí
   }) {
     // lógica del componente
     return (
       <div className="nuevo-componente-container">
         {/* JSX del componente */}
       </div>
     );
   }
   ```

3. **Importar en App.jsx**:
   ```jsx
   import NuevoComponente from './components/NuevoComponente';
   ```

4. **Usar en el layout**:
   - Decidir si es background (zIndex: -1) o contenido (zIndex: 1+)
   - Configurar props según necesidad

## 🎯 Tareas y Flujo de Trabajo

### Proceso Actual:

1. ✅ Proyecto inicializado con Vite
2. ✅ Three.js instalado
3. ✅ LiquidEther implementado como background
4. ✅ Layout básico con scroll configurado
5. 🔄 **SIGUIENTE**: Agregar más componentes de React Bits

### Workflow para Nuevos Componentes:

```
1. Usuario encuentra componente en reactbits.dev
2. Usuario copia JSX → crea archivo en src/components/
3. Usuario copia CSS → crea archivo CSS correspondiente
4. Usuario actualiza App.jsx con el nuevo componente
5. Claude Code REVISA:
   - Imports correctos
   - Z-index apropiado
   - No hay conflictos de estilos
   - No hay overlapping de elementos
   - Estructura del código limpia
```

## 🚨 Reglas Importantes

### DO's ✅:

1. **Organización**:
   - Un componente = un archivo .jsx + un archivo .css
   - Imports siempre al inicio del archivo
   - Exports default al final

2. **Styling**:
   - Usar CSS modules o clases únicas para evitar conflictos
   - Background components: `position: fixed, z-index: -1`
   - Content components: `position: relative, z-index: 1+`

3. **Performance**:
   - useEffect para inicializar animaciones
   - Cleanup en el return del useEffect
   - Lazy loading para componentes pesados (si es necesario)

### DON'Ts ❌:

1. **No hacer**:
   - No poner JSX fuera de la función del componente
   - No olvidar el cleanup en useEffect
   - No usar z-index aleatorios
   - No amontonar componentes sin revisar overlapping

2. **Evitar**:
   - Estilos inline excesivos (usar CSS files)
   - Imports circulares
   - Props drilling excesivo

## 🔍 Checklist de Revisión (Para Claude Code)

Cuando el usuario pase su `App.jsx` actualizado, revisar:

- [ ] Todos los imports están presentes y son correctos
- [ ] No hay JSX fuera de funciones de componentes
- [ ] Los z-index están bien estructurados (background < content < overlays)
- [ ] No hay elementos que se sobrepongan visualmente sin intención
- [ ] Los estilos inline son apropiados (o sugerir moverlos a CSS)
- [ ] La estructura es legible y está bien indentada
- [ ] No hay warnings de props faltantes
- [ ] El código sigue las convenciones de React
- [ ] Los componentes de React Bits están correctamente configurados
- [ ] El scroll funciona correctamente

## 📝 Notas Adicionales

### Convenciones de Código:

```jsx
// Componentes con PascalCase
import LiquidEther from './components/LiquidEther';

// Props con camelCase
<LiquidEther 
  mouseForce={20}
  autoDemo={true}
/>

// Clases CSS con kebab-case
className="liquid-ether-container"

// Inline styles con camelCase
style={{ 
  zIndex: -1,
  backgroundColor: 'transparent'
}}
```

### Debugging Tips:

1. **Si el background no se ve**: Verificar z-index y position
2. **Si hay scroll horizontal**: Agregar `overflow-x: hidden` en body
3. **Si el componente no carga**: Verificar imports y que el archivo existe
4. **Si hay lag**: Verificar que useEffect tiene cleanup
5. **Si los colores no se ven**: Verificar que Three.js está instalado

## 🎓 Recursos

- [React Bits Documentation](https://reactbits.dev/)
- [React Bits GitHub](https://github.com/DavidHDev/react-bits)
- [Three.js Documentation](https://threejs.org/docs/)
- [Vite Documentation](https://vitejs.dev/)

## 👤 Developer Info

- **Perfil**: Desarrollador backend explorando frontend
- **Nivel**: Familiarizado con backend, aprendiendo efectos visuales avanzados
- **Preferencias**: Diseños elegantes e impresionantes, código limpio y estructurado

---

## 🤖 Instrucciones para Claude Code

**Rol**: Actúa como un senior frontend developer que revisa código y estructura.

**Cuando el usuario comparta su App.jsx**:
1. Analiza la estructura completa
2. Identifica problemas de overlapping, z-index, o imports
3. Sugiere mejoras de organización si es necesario
4. Valida que los componentes de React Bits estén bien integrados
5. Proporciona feedback constructivo y específico

**Estilo de respuesta**:
- Directo y conciso
- Code snippets cuando sea necesario
- Explicaciones claras de por qué algo está mal o bien
- Sugerencias de mejores prácticas

**NO hacer**:
- No reescribir todo el código sin que se pida
- No asumir que el usuario quiere cambiar el stack tecnológico
- No sugerir librerías adicionales sin justificación fuerte

---

**Última actualización**: Diciembre 2024
**Estado del proyecto**: En desarrollo activo 🚧
