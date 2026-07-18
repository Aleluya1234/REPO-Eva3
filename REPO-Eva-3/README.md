# Tienda de Mascotas - Evaluacion 3

**Alumno:** Benjamin Elias Nahuelhuaique Chacon  
**Seccion:** C1  
**Tema:** Tema 28 - Tienda de mascotas  

## Descripcion

Aplicacion SPA en React para gestionar pedidos de una tienda de mascotas.  
Los pedidos se guardan en LocalStorage y sobreviven al F5.

## Como ejecutar

### 1. Ejecutar la API (FastAPI)

```bash
cd api-mascotas
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload