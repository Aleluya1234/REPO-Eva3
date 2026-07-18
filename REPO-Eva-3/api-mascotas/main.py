"""
API: Catálogo de la tienda de mascotas
Alumno: Benjamín Elías Nahuelhuaique Chacón  ·  Sección: C1  ·  Tema 28: Tienda de mascotas
Proyecto EV3 (UA3) — API asignada por el docente.

Ejecutar:
    pip install -r requirements.txt
    uvicorn main:app --host 0.0.0.0 --port 8000

Endpoint principal:  GET /api/productos
Documentación:       http://127.0.0.1:8000/docs
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="API Catálogo de la tienda de mascotas")

# CORS abierto para que el frontend (React/Vite) pueda consumir la API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# "Base de datos" en memoria (arreglo de objetos).
DATOS = [{'id': 1,
  'nombre': 'Alimento perro 15kg',
  'descripcion': 'Adulto todas las razas',
  'categoria': 'Alimento',
  'precio': 29990,
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Alimento+perro+15kg'},
 {'id': 2,
  'nombre': 'Arena para gato',
  'descripcion': '10kg aglomerante',
  'categoria': 'Higiene',
  'precio': 8990,
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Arena+para+gato'},
 {'id': 3,
  'nombre': 'Juguete mordedor',
  'descripcion': 'Caucho resistente',
  'categoria': 'Juguetes',
  'precio': 4990,
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Juguete+mordedor'},
 {'id': 4,
  'nombre': 'Cama mediana',
  'descripcion': 'Acolchada lavable',
  'categoria': 'Accesorios',
  'precio': 19990,
  'disponible': True,
  'imagen': 'https://placehold.co/400x300?text=Cama+mediana'},
 {'id': 5,
  'nombre': 'Rascador',
  'descripcion': 'Torre de 1.2m',
  'categoria': 'Accesorios',
  'precio': 34990,
  'disponible': False,
  'imagen': 'https://placehold.co/400x300?text=Rascador'}]


@app.get("/")
def inicio():
    return {
        "mensaje": "API Catálogo de la tienda de mascotas",
        "endpoint": "GET /api/productos",
        "docs": "/docs",
    }


@app.get("/api/productos")
def listar():
    """Devuelve el JSON con todos los registros."""
    return {"total": len(DATOS), "productos": DATOS}


@app.get("/api/productos/{item_id}")
def obtener(item_id: int):
    """Devuelve un registro por su id (404 si no existe)."""
    for item in DATOS:
        if item["id"] == item_id:
            return item
    raise HTTPException(status_code=404, detail="No encontrado")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
