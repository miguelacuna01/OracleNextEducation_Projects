## Challenege - Telecom X: Análisis y Predicción de Churn de Clientes - Miguel Acuña

## 📌 Descripción del Proyecto

Telecom X es una empresa de telecomunicaciones que enfrenta una alta tasa de cancelación de clientes (*churn*), lo que representa un desafío para su rentabilidad y crecimiento. Este proyecto busca analizar los factores que influyen en el churn y construir un modelo predictivo para identificar clientes con alta probabilidad de abandonar el servicio, facilitando estrategias de retención proactivas.

## 🗂️ Estructura del Proyecto

- **1️⃣ Descripción del problema:** Contexto y motivación del análisis.
- **2️⃣ Análisis exploratorio de los datos:** Caracterización del dataset, visualización y análisis de variables relevantes.
- **3️⃣ Preprocesamiento:** Limpieza y transformación de datos.

## 💡 Principales Insights sobre el Churn

- 📅 **Tipo de contrato:**  
  El contrato "Month-to-month" (mes a mes) es el mayor predictor de churn. Los contratos de uno o dos años están asociados a mayor retención.

- 🌐 **Servicios de internet y adicionales:**  
  Los clientes con "Fiber optic" tienen mayor churn. No contar con servicios adicionales (OnlineSecurity, OnlineBackup, DeviceProtection, TechSupport) incrementa el riesgo de churn. Los que no tienen internet casi no se dan de baja.

- 📺 **Servicios de streaming:**  
  No tener StreamingTV o StreamingMovies se asocia a mayor churn.

- 💳 **Método de pago:**  
  "Electronic check" está vinculado a una tasa de churn mucho más alta que otros métodos.

- 📊 **Correlaciones numéricas:**  
  Fuerte relación entre cargos mensuales y totales. La antigüedad del cliente (tenure) se relaciona más con cargos totales que con cargos mensuales. ¡Ojo con la multicolinealidad!

- 👤 **Variables demográficas:**  
  El género no influye en el churn. La mayoría no son adultos mayores ni tienen dependientes, pero se recomienda analizar su impacto.

- ☎️ **Otros hallazgos:**  
  No tener servicio telefónico o internet se asocia a menor churn.

## 📈 Ejemplos de Visualizaciones

- 🔥 **Heatmap de correlación:**  
  <div align="center">
    <img src="https://raw.githubusercontent.com/hatlpm/ch-TelcomX/main/fig_corr_num.png" alt="Distribución de variables numéricas" width="600"/>
    <p><em>Figura 1: Heatmap de correlación entre variables numéricas relevantes para el churn</em></p>
  </div>

- 🧩 **Gráficos de distribución:**  
  <div align="center">
    <img src="https://raw.githubusercontent.com/hatlpm/ch-TelcomX/main/fig_dis_num.png" alt="Distribución de variables numéricas" width="600"/>
    <p><em>Figura 2: Distribución de variables numéricas relevantes para el churn</em></p>
  </div>
