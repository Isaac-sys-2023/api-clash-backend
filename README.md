
# Clash Royale API Proxy

Este es un backend intermedio (proxy API) que consume la API oficial de Clash Royale y expone endpoints personalizados para ser consumidos por una aplicación móvil desarrollada en Flutter.

## 🚀 Características

- Rutas organizadas por módulos (`clans`, `players`, `cards`, etc.)
- Conexión segura con la API oficial de Clash Royale usando `Bearer Token`
- CORS habilitado para consumo desde aplicaciones móviles o web
- Preparado para desplegarse fácilmente en plataformas como Render o Railway

## 🛠️ Requisitos

- Node.js ≥ 14
- Una clave API válida de Clash Royale (la obtienes desde [developer.clashroyale.com](https://developer.clashroyale.com))

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/TuUsuario/api-clash-backend.git
cd api-clash-backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env`:

```env
CLASH_API_KEY=tu_clave_api_aqui
PORT=3000
```

4. Inicia el servidor:

```bash
node server.js
```

Tu API estará corriendo en `http://localhost:3000/api`.

## 🔐 Seguridad

**¡IMPORTANTE!** Nunca subas tu archivo `.env` ni tu `CLASH_API_KEY` a GitHub ni a ningún repositorio público. Agrega esto a tu `.gitignore`:

```
.env
```

## ⚠️ Disclaimer

> **Este proyecto NO está afiliado, respaldado ni patrocinado por Supercell.**
> Supercell no se hace responsable del contenido u operación de esta aplicación.
> Para más información oficial visita: [https://supercell.com](https://supercell.com).

## 📚 Licencia

Este proyecto se distribuye bajo la licencia MIT. Úsalo para fines personales o educativos.
