
function guardar(){

const form = document.querySelector('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const tipo_identificacion = document.getElementById('tipo_identificacion');
const cedula = document.getElementById('cedula');
const pasaporte = document.getElementById('pasaporte');
const edad = document.getElementById('edad');
const pais = document.getElementById('pais');
const lugar_de_estudios = document.getElementById('lugar_de_estudios');
const academico = document.getElementById('academico');
const fecha_nacimiento = document.getElementById('fecha_nacimiento');
const especialidad = document.getElementById('especialidad');

form.addEventListener('submit', (e) => {
e.preventDefault();
const data = {
nombre: nombre.value,
apellido: apellido.value,
tipo_identificacion: tipo_identificacion.value,
cedula: cedula.value,
pasaporte: pasaporte.value,
edad: edad.value,
pais: pais.value,
lugar_de_estudios: lugar_de_estudios.value,
academico: academico.value,
fecha_nacimiento: fecha_nacimiento.value,
especialidad: especialidad.value,
};
localStorage.setItem('datos', JSON.stringify(data));
alert('Datos guardados exitosamente.');
form.reset();

});


}


function showSection(sectionId) {
     
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
  }

  function datos(){
  var tipoIdentificacion = document.getElementById("tipo_identificacion");
  var cedulaContainer = document.getElementById("cedula_container");
  var pasaporteContainer = document.getElementById("pasaporte_container");

  tipoIdentificacion.addEventListener("change", function() {
      if (tipoIdentificacion.value === "cedula") {
      cedulaContainer.style.display = "block";
      pasaporteContainer.style.display = "none";
      } else if (tipoIdentificacion.value === "pasaporte") {
      cedulaContainer.style.display = "none";
      pasaporteContainer.style.display = "block";
      }
    });

    var tipoIdentificacion = document.getElementById("tipo_identificacion");
    var cedulaContainer = document.getElementById("cedula_container");
    var pasaporteContainer = document.getElementById("pasaporte_container");

    tipoIdentificacion.addEventListener("change", function() {
        if (tipoIdentificacion.value === "cedula") {
        cedulaContainer.style.display = "block";
        pasaporteContainer.style.display = "none";
        } else if (tipoIdentificacion.value === "pasaporte") {
        cedulaContainer.style.display = "none";
        pasaporteContainer.style.display = "block";
        }
      });

    }

      function ocultarMenu() {
        document.getElementById("menu").style.display = "none";
        document.getElementById("ocultar-menu").style.display = "none";
        document.getElementById("show-menu").style.display = "block";
        document.getElementById("show-menu").style.visibility = "visible";
        document.getElementById("ocultar-menu").style.visibility = "hidden";
      }
      
      function showMenu() {
        document.getElementById("menu").style.display = "block";
        document.getElementById("show-menu").style.display = "none";
        document.getElementById("ocultar-menu").style.display = "block";
        document.getElementById("ocultar-menu").style.visibility = "visible";
      }
      