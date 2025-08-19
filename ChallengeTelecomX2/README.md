# 📊 Predicción de Churn en Telecom X - Miguel Acuña

## 📌 Descripción del Proyecto

Este proyecto aborda el problema de la cancelación de clientes (churn) en Telecom X, una empresa de telecomunicaciones. El objetivo es identificar los factores que impulsan el churn y construir modelos predictivos robustos para anticipar qué clientes tienen mayor probabilidad de abandonar la empresa, permitiendo así intervenciones de retención más efectivas.

---

## 🗂️ Estructura de los Datos

- **Registros:** 7,267 clientes
- **Variables:** 21 columnas con información demográfica, servicios contratados, historial de pagos y estado de churn

---

## 🔍 Principales Hallazgos

- El 55% de los clientes tiene contrato "Month-to-month", segmento con mayor fuga.
- Clientes con menos de 12 meses de antigüedad tienen hasta 3 veces más probabilidad de churn.
- No contar con servicios adicionales (OnlineSecurity, TechSupport, DeviceProtection) incrementa el riesgo.
- El método de pago "Electronic check" tiene la tasa de churn más alta (~34%).
- El tipo de internet "Fiber optic" presenta mayor churn que "DSL".
- Cargos mensuales altos y cargos totales bajos son típicos de clientes nuevos y de alto riesgo.

---

## 🤖 Modelos Utilizados

| Modelo                | AUC   | Recall | Precision | F1   | Observaciones |
|-----------------------|-------|--------|-----------|------|--------------|
| **Random Forest**     | 0.84  | 0.76   | 0.56      | 0.64 | Buen balance entre interpretabilidad y desempeño. |
| **XGBoost**           | 0.85  | 0.82   | 0.54      | 0.64 | Mejor desempeño general, especialmente en recall y AUC. |
| **Red Neuronal (MLP)**| 0.84  | 0.83   | 0.49      | 0.60 | Útil, pero menor desempeño que los modelos de árboles. |

- Todos los modelos fueron validados con cross-validation y ajuste de pesos para el desbalance de clases.
- **XGBoost** es el modelo recomendado para producción por su desempeño superior.
- No se incluyó un modelo de clustering en el análisis final.

---

## 💡 Recomendaciones de Negocio

1. Migrar contratos "Month-to-month" a planes anuales mediante incentivos y descuentos.
2. Promover servicios adicionales (seguridad, soporte, protección de dispositivos) con bundles y ofertas para clientes nuevos.
3. Campañas dirigidas a clientes con "Electronic check" para migrar a métodos automáticos (tarjeta/crédito) con beneficios iniciales.
4. Programa de fidelización por antigüedad: recompensas a los 6 y 12 meses para reducir churn temprano.
5. Alertas proactivas: disparar intervenciones cuando un cliente cumpla condiciones críticas (tenure bajo, contrato M2M, Electronic check).

---

## 🧩 Segmentos de Clientes en Riesgo

- **Clientes con contrato "Month-to-month", menos de 12 meses y pago "Electronic check":** Mayor tasa de cancelación.  
  _Acción:_ Incentivar migración a contratos anuales y pagos automáticos.

- **Usuarios de "Fiber optic" sin servicios adicionales:** Churn superior al promedio.  
  _Acción:_ Promocionar bundles de seguridad y soporte.

- **Clientes con cargos mensuales altos y cargos totales bajos:** Nuevos con paquetes premium, riesgo de baja integración.  
  _Acción:_ Onboarding personalizado y seguimiento inicial.

- **Clientes sin dependientes ni pareja, especialmente "Senior Citizens":** Mayor propensión al churn.  
  _Acción:_ Beneficios exclusivos y comunicación personalizada.

- **Clientes sin servicio de internet:** Oportunidad para upselling de servicios digitales.

---

## 📈 Conclusión

El churn en Telecom X es predecible con alta precisión (AUC hasta 0.85 con XGBoost). Las variables controlables ofrecen palancas directas para reducir la fuga. Implementar las recomendaciones puede recortar el churn anual en 8-12 puntos porcentuales, generando un impacto financiero significativo.

---

## 📄 Informe Completo

Puedes consultar el informe detallado del análisis y resultados en el siguiente enlace:
