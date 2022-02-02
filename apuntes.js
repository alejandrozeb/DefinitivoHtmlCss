/* apuntes curso Platzi

Paginas estaticas: tienen información que no cambia, landing page, generado en el cliente.
paginas dinamica: la información cambia,que consume endpoints, generado en el servidor.

HTML--------------------------------
hypertext markup languaje saltar de contenido con hiperlinks

anatomia de una pagweb container-header-maincontent(sidebar, secciones)-footer

***************tipos de imagenes**************
lossy vs lossless
con perdida/sin perdida
el tamaño afecta a la carga de la pagina
    ***lossless***
no se pierde calidad pero pesadas
    ***losy***
pierde calidad pero carga mas rapido

imagens liegras son las seleccines
gif-lossless (grapchis)
png8-lossless (iconos, transparencias, logos 256 colores)
png24-lossless (tiene mas de 256 colores, fotografias)
jpg/jpeg-Lossy (gama de colores ilimitado, pierdecalidad al comprimir, para fotografia)
svg-vector/lossless (formato ligero, logos,los pixelesson responsive, pantallas de alta resolucion)

****optimizando imagenes****
70kb en promedio por imagen
    *tiny png
    *verexif elimina los metadatos(camaras)

*******formularios***********************
el mejor formulario es cuando no lo hay

*******Css********
cascade style
cascada es el algoritmo que usa elnavegador para el render.
html->lapiz
css-> colores, tijeras, adornos

html-> esqueleto
css-> ropa, estilo de cabello ... etc

pseudo clases
define el estilo de un estado especial de un elemento

pseudo elementos
define el estilo de una parte especifica de un elemento

BEM para nombrar clases en css, para escalar

*****************ANAtomia de una regla css********
todo es una regla
selector tiene una dclaracion con elementos property y value ;

*****MOdelo caja**************************************
los elementos se renderizan como cajas
margin espacio externo de la caja
border la linea que define los elementos
padding espacio interno de la caja hacia adentro
contenido pude ser cualquier elemnto

with tmamño de la caja o contenido
high alto

posicion con top right left bottom

margin transparente
color de fondo igual transparente
imagen de fondo se rellena con el contenido
relleno paddind
border
contenido visible
******herencia****************************
hereda del padre inmediato

***especificidad******
orden de ejecucion de css
orden al declarar
importancia,especificidad, orden de las fuentes

si se tiene el mismo nivel de importancia la especificidad decide cual aplicar.
si se tiene la misma especificidad el orden de las fuentes controla el resultado final

importancia------------------------
1 primero el navegador carga sus propio estilo
2 declaraciones normales en css
3 declaraciones en hojas con !importan(no es buena practica usar !important)

-----------especificidad------------
!important 1.0.0.0.0
inline Styles (son los que vienen con stylo) 0.1.0.0.0
#id         0.0.1.0.0
#clases     0.0.0.1.0
tag         0.0.0.0.1

pueden existir combinaciones 0.0.1.1, 0.1.0.1
con los que varia la especificidad de cada elemento

------reglas cascada----------
1conflicto -> important? -> inline? -> selector? -> fuente original

--orden de las fuentes----------
css trabajo como cascada

las dclaraciones del final anularan las de arriba
VScode te da la especificidad de la regla con la yuda del mouse

mala practica usar demasiados id
mejos usar clases y selectores

---------combinators------------------------------------
mejoran la especificidad
combinamos multiples slectores y creamos una mayor especificidad

hermano adyacente o cercano div+p
hermano general div-p
hijo div>p
descendiente div p

-----------Medidas------------------------------------------
absolutas: pixeles no cambia sin importar el tamaño del navegador
Relativas: cambian el tamaño dependiendo del dispositivo EM, REM, % max, min, viewportWidht and high
------------------Position---------------------------------------
Position
static por defecto los elementos se quedan estaticos
absolute, realtive,  fixed, sticky
--------------------------Display--------------------
block la etiquetas usan el 100 %

inline utiliza el espacio del contenido. no se puede usar padding o margin top or bot tampoco tiene with and high

inline block ya podemos usar los padding o margin
toma solo el espacio de su contenido

----display flex-----------
responsive
los hijos coexisten uno delante de otro
display direction es la forma en como se acomodan los hijos por defecto viene en row
opciones flex-direction column, row-reverse(voltea eñ orden de los hijos) , column-reverse

debemos tener un container principal
flex-wrap: wrap los  hijos se hacen responsive y van bajando de row
wrap-reverse suben los hijos

justify content:center alinea el contenido de manera horizontal evita el uso del margin
flex-end alinea a la derecha
flex-start alian a la izquierda
space-around los contenedores se reparten
space-evenly el espacio entre hijos es el mismo

vertical
align-items:
flex end abajo
flex start arriba
stretch los hijos se estiran al 100% de su contenedor padre sin high
baseline los hijos toman el high de su contenido

order podemos asignar un orden en los containers que sea independiente del class name los que no tienen orden se van a la izquierda

flex-grow hace que el box llene todo el espacio que sobre o tmanie disminuye.

flex-basis: 10rem;
flex-grow: 1; se convierte en responsive los containers

---------------------Variables-----------------------------------
custom properties podemos guardar valores y evitamos generar codigo repetido.
se repiten tamaño de fuentes, colores... etc

:root{} 
--<<name variable>> 
sintaxis

--------------------web fonts-----------------------------------------
genericas 
serif tienen puntas la final
sans-serif no tienen puntas al final
cursive cursiva
monospace 
ya vienen instaladas como fuentes bases

podemos buscar con google fonts einsertar el embed en el codigo
los import no son buenas particas las fuentes deben estar en el header como link

carga primero con la fuente por default y luego cambia fuente con la deseada.

podemos usar un css como regla
font-family: roboto, sans-serifs;

buenas practica 1 fuente por proyecto
importar en el head

-----------Responsive Design------------------------------------------
breakpoints el tamaño donde se redimensiona la pantalla

media queries

@media (min-width:480px){ 768px, 1024px
se ejecuta el codigo aqui
    .class{

    }
    .div{
        
    }
}

Mobile first/only
siempre de un mobile a tablet a laptop

debe ir en orden de menor tamaño al maximo
poodemos usar diferentes tipos de css en diferentes archivos especificado el tamaño

<link rel="stylesheet" href="./style.css">
<link rel="stylesheet" href="./table.css" media="screen and (min-width: 760px)">

asi el usuario solo usa el codigo que necesita.

----------------------Paatronrs de maquetacion, Responsive Design-----

mostly Fluid
inicia con columnas -> reacomodamos las columnas por o,por importancia

LayoutShifter
los containers se van reacomodadndo con containers padres






*/
