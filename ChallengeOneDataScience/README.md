### 🛍️ Proyecto de Análisis de Datos: Alura Store - Challenge one Miguel Acuña

#### 📋 Descripción del Proyecto

El Sr. Juan, propietario de la cadena Alura Store, busca decidir qué tienda vender para iniciar un nuevo emprendimiento. Este proyecto analiza datos de ventas, rendimiento y reseñas de las cuatro tiendas de la cadena con el objetivo de identificar la tienda menos eficiente y presentar una recomendación basada en datos.

#### 📊 Descripción del Dataset

El conjunto de datos incluye información sobre:

*   🛒 Producto: Referencia al producto adquirido.
*   🗂️ Categoría: Clasificación del producto.
*   💰 Precio y Envío: Valores de venta y costos asociados.
*   📅 Fecha y Ubicación de Compra: Información temporal y geográfica.
*   ⭐ Calificación de Compra: Evaluación de la experiencia del cliente.
*   💳 Tipo de Pago y Cuotas: Métodos de pago utilizados.
*   📍 Coordenadas Geográficas: Ubicación de las transacciones.

#### 🔍 Análisis Realizados

**1️⃣ Facturación**

*   🏆 La Tienda 1 tiene los mayores ingresos (26.13%) y un ingreso promedio por producto de $487,867.9.
*   📉 La Tienda 4 tiene los menores ingresos (23.58%) y un ingreso promedio por producto de $440,362.8.
*   ⚖️ La diferencia porcentual de ingresos entre la Tienda 1 y la Tienda 4 es de solo 2.55%, indicando un desempeño financiero similar entre las tiendas.

**2️⃣ Ventas por Categoría**

*   💻 Electrónicos y Electrodomésticos representan el 68.92% de los ingresos totales y son las categorías más lucrativas.
*   🪑 Muebles tiene alta demanda, pero su contribución a los ingresos es moderada.
*   🧸 Juguetes y 🏀 Deportes y diversión tienen altos volúmenes de ventas, pero bajos ingresos debido a precios bajos.
*   🎸 Instrumentos musicales tienen bajos volúmenes de ventas, pero precios altos, lo que los hace una categoría con potencial de crecimiento.

**3️⃣ Calificaciones**

*   ⭐ Las calificaciones promedio oscilan entre 3.7 y 4.2, indicando una percepción positiva general.
*   🧸 Juguetes y 🪑 Muebles son las categorías mejor calificadas en la mayoría de las tiendas.
*   🏠 Artículos para el hogar y 🏀 Deportes y diversión muestran variaciones significativas en calificaciones entre tiendas.

**4️⃣ Costos de Envío**

Se calculó el costo de envío promedio para cada tienda, identificando posibles áreas de optimización logística.

**5️⃣ Utilidades**

*   💵 Las cuatro tiendas tienen una utilidad bruta del 94.67%, reflejando una buena salud financiera.
*   🏆 Electrónicos, Electrodomésticos y Muebles generan más del 83% de la utilidad total.
*   📉 La Tienda 4 tiene los ingresos más bajos, pero destaca en la categoría de Electrónicos.

**6️⃣ Productos Más y Menos Vendidos**

🏅 Productos más vendidos

| 🏬 Tienda | 🛒 Producto más vendido | 🗂️ Categoría    | ⭐ Calificación promedio | 📌 Conclusión                                       |
| :-------- | :---------------------- | :-------------- | :----------------------- | :-------------------------------------------------- |
| Tienda 1  | Microondas              | Electrodomésticos | 4.03                     | Popularidad alineada con la alta calificación de la categoría. |
| Tienda 2  | Iniciando en programación | Libros          | 3.95                     | Popularidad posiblemente por relevancia o precio.    |
| Tienda 3  | Kit de bancas           | Muebles         | 4.10                     | Refuerza la posición de Muebles como categoría líder. |
| Tienda 4  | Cama box                | Muebles         | 3.99                     | Popularidad suficiente para mantener su relevancia.  |

❌ Productos menos vendidos

| 🏬 Tienda | 🛒 Producto menos vendido | 🗂️ Categoría        | ⭐ Calificación promedio | 📌 Conclusión                                       |
| :-------- | :---------------------- | :------------------ | :----------------------- | :-------------------------------------------------- |
| Tienda 1  | Auriculares con micrófono | Electrónicos        | 4.00                     | Las bajas ventas podrían deberse a precio o competencia. |
| Tienda 2  | Juego de mesa           | Juguetes            | 4.02                     | Las bajas ventas no están relacionadas con la calificación. |
| Tienda 3  | Bloques de construcción | Juguetes            | 4.20                     | Posiblemente por falta de interés en este producto específico. |
| Tienda 4  | Guitarra eléctrica      | Instrumentos musicales | 3.91                     | La baja calificación podría estar afectando las ventas. |

#### 💡 Recomendaciones

*   **Enfoque en categorías clave:**
    Priorizar Electrónicos, Electrodomésticos y Muebles, que generan más del 83% de la utilidad total.
*   **Refuerzo en marketing:**
    Mejorar la percepción de categorías con calificaciones menores a 3.8 para aumentar ventas y utilidad.
*   **Optimización de categorías secundarias:**
    Implementar estrategias específicas para Instrumentos musicales, Juguetes, y Artículos para el hogar.

#### 🛑 Decisión Final

Se recomienda vender la Tienda 4, ya que:

*   Tiene la menor participación en la categoría de Electrodomésticos, una de las más lucrativas.
*   Su desempeño financiero, aunque similar al de las otras tiendas, no presenta ventajas significativas.

#### 🛠️ Herramientas Utilizadas

*   Python: Análisis de datos y visualización.
*   Pandas: Manipulación de datos.
*   Matplotlib/Seaborn: Creación de gráficos.
*   Google Colab: Documentación y análisis interactivo.

#### 📈 Gráficos y Visualizaciones

Incluye gráficos de Pareto, análisis de calificaciones y ventas por categoría.
