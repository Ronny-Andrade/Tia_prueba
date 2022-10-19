# Tia_prueba
PRUEBA PASANTE DATA SCIENCE V3

Tecnologias 

Base de datos: MySQL
Backend: Django
Frontend: ReactJS
Orden de datos: Python

# Descripción de carpetas:

ENTORNODJ: Esta carpeta tiene las librerias necesarias para el funcionamiento de Django.

LecturaMovies: Los datos descargados eran muy pesados por lo cual se opto utilizar unos cuantos datos para el proyecto, los datos separados estaban desordenados por lo cual se realizado un codigo el python que ordena los datos en formato csv para importalos en la base de datos.

Backend: Contiene la logica para consumir los datos desde el front mediante la URL. Nota: Si existen problemas con los cors dirigase a los settings.py y agregue el nuevo origen.

Frontend: Contiene la logica del front.

# Pasos para el correcto funcionamiento del programa:

0.) Dirigase a la carpeta 'Tia_Backend/Tia_Backend' y abra el archivo settings.py actualice los datos para la conexion de la base de datos. NOTA: Puede poner cualquier nombre a la base de datos pero mas adelante se creara una base de datos "tia_movies", por lo cual es recomendable no tocar ese apartado.

1.) Crear una base de datos llamada "tia_movies", utilizando el comando "create database "tia_movies"

2.) Crear un entorno virtual para el funcionamento de django, haga cd a la carpeta Tia_prueba en el terminal de windows, y aplique el comando 'python -m venv 
EntornoDJ'. nota: para que el comando funcione tiene que instalar django 'python -m pip install Django'

3.) Una vez creado los componentes necesarios para el entorno, mediante la terminal de windows dirigase a la carpeta EntornoDJ/Scripts y ponge el comando 'activate', esto activara el entorno virtual para el funcionamiento de django. NOTA: NO CIERRE LA TERMINAL CON EL ENTORNO ACTIVADO.

4.) Desde la misma terminal del entorno activado haga cd hasta Tia_Backend.

5.) Una vez en la ruta de Tia_Backend utilice el comando 'python manage.py migrate'

6.) Una vez realizado los migrate dirigase a la base de datos 'tia_movies', he importe el .csv de la carpeta LecturaMovies.

7.) Al momento de importar los datos tenga cuidado en dar next, esto se debe a que django por defecto crear un apartado id, por lo cual al momento de importar el .csv se desordenaran las columnas, le aparecerá por pantalla una tabla con unas columna llamadas 'Source column' y 'Dest column' mire que concuerde ambas columnas con su nombre. Ejemplo: ProductID con product y asi sucesivamente.

8.) Desde la terminal que tiene el entorno activade ingrese el comando 'python manage.py runserver', esto le dara una direccion. NOTA: No cierre el terminal.

9.) Vaya a la carpeta 'Tia_Front' desde una terminal instale los modulos con el comando 'npm install'.

10.) Utilice el comando 'npm run dev', este le arrojara un enlace por el cual puede visualizar el proyecto.

NOTA: Los datos que se enviaron no tenia el apartado fecha.
