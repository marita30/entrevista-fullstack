# Prueba técnica - Entrevista Full-Stack Developer 

## Pregunta 1 -  Encuentra el 'outlier' de paridad

Dado un arreglo de enteros (con un mínimo de 3 elementos, pero puede ser bien grande), el cual está compuesto en su totalidad por números pares o impares, excepto por un elemento, el outlier. Escriba un método que encuentre ese outlier.

Esta función debe ser implementada en JavaScript y no se pueden utilizar librerias externas. Completa la función en el archivo pregunta1.js. 

Ejemplos:
```
[2, 4, 0, 100, 4, 11, 2602, 36]
Debería retornar: 11 (el único elemento impar)

[160, 3, 1719, 19, 11, 13, -21]
Debería retornar: 160 (el único elemento par)
```

## Pregunta 2 - Diseñando un sistema IoT

En Capta Hydro desarollamos soluciones tecnológicas para mejorar la gestión de recursos hídricos, enfocados en redes de canales de riego.

Las Asociaciones de Canalistas (AC) son instituciones que tienen la labor de distribuir el agua extraida de un río y repartirla a los Regantes según los derechos de agua de estos. Velan por el buen funcionamiento de los canales (ej: que estén limpios, que no hayan estancamientos o filtraciones significativas), llevan registros de los caudales y deben distribuir el agua de manera transparente y justa.   

Queremos desarrollar un sistema que modernice y optimize esta gestión. Actualmente contamos con los siguientes dispositivos:
- Estación de Telemetría (alias CFT). Estos equipos vienen equipados con un sensor de caudal (L/s). 
- Automatizador de Compuerta (alias CFC). Este dispositivo cuenta con un actuador para mover la compuerta y regular el caudal del canal.

Las AC adquieren un conjunto de estos dispositivos según sus necesidades para apoyar la gestión de sus canales. Puedes asumir que ambos dispositivos tienen conexión a internet conectandose a la red 4G y que siempre estarán energizados.  

Se te ha encargado diseñar un sistema, el cual mediante una plataforma web, los usuarios (pertenecientes a las AC) puedan consultar los datos de las estataciones de telemetría (CFT), tanto en tiempo real como histórica y descargar reportes de aquella data. También configurar alertas de caudal bajo y alto y ser notificados de estos eventos en tiempo real. Por otro lado, se espera que los usuarios puedan telecomandar las compuertas desde la aplicación web.

**¿Como diseñarías este sistema? Apoyate con un diagrama y si algo no queda claro, por favor detalla tus supuestos.**

Bonus: Hay ocasiones donde nuestros equipos son instalados en lugares remotos sin acceso a la red celular. ¿Como enfrentarías esta situación?  
