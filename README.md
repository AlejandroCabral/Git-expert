# API consulta (RNC y Cédula).

## Objetivo:
_Obtener los datos correspondiente de un usuario, contribuyente o cedulado, a través de su identificador, RNC o Cédula respectivamente._

## Descripción 📋:
  Esta api permite consultar y obterner ciertos datos de contribuyentes registrados en la Dirección General de Impuestos Internos (DGII) mediante su RNC o cédula utilizando la ruta:

  _/api/rnc/**RNC o Cédula**_

  Obteniendo como resultado los siguientes datos:

    {
    "id",
    "rncCedula",
    "nombre",
    "estado"
    }
  

  También permite obtener los datos de usuarios cedulados en el padrón electoral mediante su número de cédula utilizando la ruta:

  _/api/cedula/**Número de Cédula**_

  Obteniendo como resultado los siguientes datos:

    {
    "id",
    "cedula_completa",
    "nombres",
    "apellido1,
    "apellido2",
    "sexo"
    }


## Herramientas de desarrollo ⚙️:

  * ASP.NET
  * C#
  * Dapper
  * Sql Server

## Función ⌨️: 
  Toma información de la base datos en Sql server y retorna los datos especificados anteriormente según la ruta especificada. 