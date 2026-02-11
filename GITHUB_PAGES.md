# Despliegue en GitHub Pages - Guía Paso a Paso

## Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `company-website` (o el que prefieras)
3. Elige "Private" o "Public"
4. **NO** marques "Initialize with README" (ya tenemos archivos)
5. Click "Create repository"

## Paso 2: Subir el Código a GitHub

Abre la terminal en el proyecto y ejecuta:

```bash
cd /Users/pauvilar/SonIA/company-website

# Inicializar git (si no está ya inicializado)
git init

# Añadir todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: SonIA HR website"

# Conectar con GitHub (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/company-website.git

# Subir el código
git branch -M main
git push -u origin main
```

## Paso 3: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En "Source" (Fuente), selecciona: **GitHub Actions**
5. ¡Listo! El workflow se ejecutará automáticamente

## Paso 4: Verificar el Despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Cuando termine (✓ verde), tu sitio estará en:
   ```
   https://TU_USUARIO.github.io/company-website/
   ```

## Paso 5: Configurar Dominio Personalizado (Opcional)

Si quieres usar `https://sonia-hr.com`:

### En GitHub:
1. Settings > Pages
2. En "Custom domain", escribe: `sonia-hr.com`
3. Click "Save"
4. Marca "Enforce HTTPS" (cuando esté disponible)

### En tu Proveedor de DNS:
Añade estos registros DNS:

```
Tipo: A
Host: @
Valor: 185.199.108.153

Tipo: A
Host: @
Valor: 185.199.109.153

Tipo: A
Host: @
Valor: 185.199.110.153

Tipo: A
Host: @
Valor: 185.199.111.153

Tipo: CNAME
Host: www
Valor: TU_USUARIO.github.io
```

### Crear archivo CNAME:

```bash
echo "sonia-hr.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push
```

## Actualizaciones Futuras

Cada vez que quieras actualizar el sitio:

```bash
# Hacer cambios en los archivos
# Luego:
git add .
git commit -m "Descripción de los cambios"
git push
```

El sitio se actualizará automáticamente en 1-2 minutos.

## Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/company-website.git
```

### Error: "refusing to merge unrelated histories"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### El sitio no se actualiza
- Verifica que el workflow terminó correctamente en la pestaña Actions
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
- Espera 2-3 minutos para la propagación

## Verificación Final

Antes de solicitar revisión de WhatsApp Business:

- [ ] El sitio está accesible en tu URL
- [ ] Las 3 páginas funcionan:
  - Homepage: `/`
  - Aviso Legal: `/aviso-legal`
  - Política de Privacidad: `/politica-privacidad`
- [ ] HTTPS está habilitado (candado verde)
- [ ] No hay errores 404
- [ ] Email visible: hola@sonia-hr.com
- [ ] Toda la información legal está presente

**Espera 24-48 horas después del despliegue antes de solicitar la revisión de WhatsApp Business.**
