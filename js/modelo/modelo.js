// Calse Perfil con minimos atributos para crear un objeto perfil
class Perfil{
	constructor(nombre, apellido, mail, pass){
		this._id=0;
		this._nombre= nombre;
		this._apellido= apellido;		
		this._mail= mail;
		this._pass=pass;

		this._Datos;
		this._Cv;
			
	}
	// instancio la clase Datos que guarda los datos del perfil
	crearDatos(foto, puesto, fNac, localidad, cp, enlaces){
		this._Datos = new Datos(foto, puesto, fNac, localidad, cp, enlaces);
	}
	// instancio la clase Cv y le paso lo minimo de información para cargar un Cv
	crearCv(descripcion){
		this._Cv = new Cv(descripcion);
	}	
	// Motodos getters y Setters para la Clase Perfil
	get nombre(){
		return this._nombre;
	}
	set nombre(newNombre){
		this._nombre= newNombre;
	}
	get apellido(){
		return this._apellido;
	}
	set apellido(newApellido){
		this._apellido= newApellido;
	}
	get mail(){
		return this._mail;
	}
	set mail(newMail){
		this._mail= newMail;
	}
	get pass(){
		return this._pass;
	}
	set pass(newPass){
		this._pass= newPass;
	}

}
// Clase Datos con los atributos de los mismos
class Datos{
	constructor(foto, puesto, fNac, localidad, cp, enlaces){
		this._foto= foto;
		this._puesto= puesto;
		this._fNac=fNac;
		this._localidad= localidad;
		this._cp= cp;
		this._enlaces= enlaces;
	}
	// Getters y Setters de los atributos de la clase Datos
	get foto(){
		return this._foto;
	}
	set foto(newFoto){
		this._foto= newFoto;
	}

	get puesto(){
		return this._puesto;
	}
	set puesto(newPuesto){
		this._puesto= newPuesto;
	}

	get fNac(){
		return this._fNac;
	}
	set fNac(newFNac){
		this._fNac= newFNac;
	}
	get localidad(){
		return this._localidad;
	}
	set localidad(newLocalidad){
		this._localidad= newLocalidad;
	}
	get cp(){
		return this._cp;
	}
	set cp(newCp){
		this._cp= newCp;
	}
	get enlaces(){
		return this._enlaces;
	}
	set enlaces(newEnlaces){
		this._enlaces= newEnlaces;
	}
}
// Clase Cv con el atributo descripción (el mínimo que se puede cargar) y el resto pretenden ser objetos
class Cv{
	constructor(descripcion){
		this._Habilidades;
		this._descripcion= descripcion;
		this._Experiencias;
		this._Portafolio;
		this._Educacion;
		this._Pasatiempos;
	}
	// Metodos para instanciar Habilidades, Experiencias, Portafolio, Educación y Pasatiempos
	// Los objetos Portafolio y Pasatiempos tienen los mismos atributos, por eso los 2 son de tipo Galeria
	crearHabididades(habilidad, nivel){
		this._Habilidades = new Habididades(habilidad, nivel);
	}
	crearExperiencia(empresa, trabajo, enlace){
		this._Experiencias = new Experiencias(empresa, trabajo, enlace);
	}
	crearPortafolio(icono, nombre, enlace){
		this._Portafolio = new Galeria(icono, nombre, enlace);
	}
	crearEducacion(institucion, titulo, url){
		this._Educacion = new Educacion(institucion, titulo, url);
	}
	crearPasatiempo(icono, nombre, enlace){
		this._Pasatiempos = new Galeria(icono, nombre, enlace);
	}
}
// Clase Habilidades
class Habididades{
	constructor(habilidad, nivel){
		this._habilidad = habilidad;
		this._nivel = nivel;
	}
	// Getters y Setters de habilidades
	get habilidad(){
		return this._habilidad;
	}
	set habilidad(newHabilidad){
		this._habilidad = newHabilidad;
	}
	get nivel(){
		return this._habilidad;
	}
	set nivel(newNivel){
		this._nivel = newNivel;
	}
}
// clase Experiencias que extiende de Item, ambos reciven 3 parametros de tipo strings y tienen arreglos que guardan arreglos
class Experiencias extends Item{
	get items(){
		return this._arreglo;
	}
}
// Clase Galeria que extiende de Item, tienen las misma cantidad de atributos y ejecutan los mismos metodos
class Galeria extends Item{
	get items(){
		return this._arreglo;
	}
}
// Clase Educacion que extiende de Item, tienen las misma cantidad de atributos y ejecutan los mismos metodos
class Educacion extends Item{
	get items(){
		return this._arreglo;
	}
}
// La clase Item, se instancia con 3 strings y ejecuta el metodo crearItem
class Item{
	constructor(origen, texto, destino){
		this._arreglo=[];
		this._origen = origen;
		this._cadena = cadena;
		this._destino = destino;
		crearItem(this._origen, this._cadena, this._destino);
	}
	// metodo para crear Item
	crearItem(newOrigen, newCadena, newDestino){
		this._arreglo.push([newOrigen, newCadena, newDestino]);
	}
	/* metodo para eliminar un elemento según indice, dentro de splice indice se reduce en 1 ya que el usuario ingresa según
		cantidad de elementos y no por nro de indice.
	*/
	eliminarItem(indice){
		this._arreglo.splice(indice-1, 1);
	}
	// Se elimina el elemento del arreglo según indice y se agrega en su lugar el nuevo arreglo pasado por parametro
	modificarItem(indice, origen, cadena, destino){
		this._arreglo.splice(indice-1, 1 , '['+[origen, cadena, enlace]+']')
	}
	// Devuelve un arreglo con arreglos de Item, con origen, cadena y destino
	get items(){
		return this._arreglo;
	}
}
/*
class Experiencias{
	constructor(empresa, trabajo, enlace){
		this._experiencias=[];
		this._empresa = empresa;
		this._trabajo = trabajo;
		this._enlace = enlace;
		crearExperiencia(this._empresa, this._trabajo, this.enlace);
	}
	crearExperiencia(newEmpresa, newTrabajo, newEnlace){
		this._experiencias.push([newEmpresa, newTrabajo, newEnlace]);
	}
	eliminarExperiencia(indice){
		this._experiencias.splice(indice-1, 1);
	}
	modificarExperiencia(indice, empresa, trabajo, enlace){
		this._experiencias.splice(indice-1, 1 , '['+[empresa, trabajo, enlace]+']')
	}
	get experiencias(){
		return this._experiencias;
	}
}*/
