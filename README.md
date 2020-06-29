# html-css
HTML and CSS3 lessons
# design url
<https://zpl.io/bAoEqPP>
# SEMANTIC HTML
# HTML
<https://www.w3schools.com/html/>
# HTML SEMÁNTICO
<https://www.w3schools.com/html/html5_semantic_elements.asp>

# ETIQUETAS ANTERIORES
	• h1, h2, h3, h4, h5, h6…
	• div
	• P
	• ul > li
	• a
	• span
	• button
	• table > tr > td

# ETIQUETAS SEMÁNTICAS
	• main
	• header
	• nav
	• section
	• article
	• figure
	• figcaption
	• time
	• mark
	• footer

# ELEMENTOS DE FORMULARIO
	• form
		○ novalidate
	• fieldset
	• legend
	• input
		○ required
		○ type
			§ text
			§ url
			§ email
			§ password
			§ checkbox
			§ radio
			§ textarea
		○ pattern
		○ min / max
		○ maxlength

# ITCSS (Scalable and maintenable css arquitecture)
	• Seetings: Utiliza preprocesadores y contiene fuentes, definiciones de color y configuraciones generales.
	• Tools: mixins y funciones, no deberían contener estilos.
	• Generic: capa donde reseteamos y normalizamos estilos. Primera capa con css.
	• Elements: Estilos base para elementos html y redefinición del predeterminado del navegador.
	• Objects: Selectores basados ​​en clases que definen patrones de diseño no decorados.
	• Components: Componente UI específicos. Aquí es donde tendremos el grueso de nuestros proyectos con los componentes desarrollados para nuestras necesidades.
	• Utilities: Utilidades y clases de ayuda que pueden sobrescribir cualquier definición anterior en el triángulo.

  Ésta arquitectura nos dará como resultado estilos que van desde lo general a lo explicito, de poco a muy específico (sin llegar a utilizar la especifidad de ID, ya que no está contemplada) y de largo alcance a localizado.


# BEM (Block Element Modifier)
```
  $> .block
```
```
  $> .block--modifier
```
```
  $> .block__element
```
```
  $> .block__element--modifier
```

# Instructions
To install node dependencies
```
  $> npm-install
```
To run local server with scss compilation watch 
```
  $> npm run hard-live
```
