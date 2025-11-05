//Boton cerrar sesion
const cerrarSesionBtn = document.getElementById("cerrarSesion");

const usuario = localStorage.getItem("usuarioLogueado");

if (cerrarSesionBtn) {
  cerrarSesionBtn.addEventListener("click", () => {
    localStorage.removeItem("usuarioLogueado");
    window.location.href = '../HTML/login.html';
  });
}

// Clases y horarios del mes de noviembre para cada sede
const clases = {
  cal1: [ // Chapinero
    { dia: 3, nombre: "Zumba", profesor: "Ana López", hora: "9:00 AM" },
    { dia: 7, nombre: "Yoga", profesor: "Camila Ruiz", hora: "7:00 PM" },
    { dia: 12, nombre: "Pilates", profesor: "Sofía Martínez", hora: "11:00 AM" },
    { dia: 15, nombre: "HIIT", profesor: "Laura Gómez", hora: "6:30 PM" },
    { dia: 20, nombre: "Spinning", profesor: "David Ramírez", hora: "7:00 AM" },
    { dia: 25, nombre: "CrossFit", profesor: "Carlos Pérez", hora: "8:00 AM" }
  ],
  cal2: [ // Colina
    { dia: 5, nombre: "Cardio Dance", profesor: "Andrés Pérez", hora: "6:00 PM" },
    { dia: 9, nombre: "Zumba", profesor: "Lucía Gómez", hora: "9:00 AM" },
    { dia: 13, nombre: "Yoga", profesor: "Carlos Ríos", hora: "5:00 PM" },
    { dia: 17, nombre: "HIIT", profesor: "Mariana Gómez", hora: "7:00 PM" },
    { dia: 21, nombre: "Spinning", profesor: "Iván Torres", hora: "6:00 AM" },
    { dia: 28, nombre: "Pilates", profesor: "David Gómez", hora: "8:00 AM" }
  ],
  cal3: [ // Usaquén
    { dia: 4, nombre: "Pilates", profesor: "Sofía Martínez", hora: "10:00 AM" },
    { dia: 8, nombre: "CrossFit", profesor: "Laura Medina", hora: "6:30 PM" },
    { dia: 14, nombre: "Yoga", profesor: "Natalia Vargas", hora: "8:00 AM" },
    { dia: 18, nombre: "Spinning", profesor: "Juan Pérez", hora: "7:00 PM" },
    { dia: 22, nombre: "Zumba", profesor: "Camila Ruiz", hora: "9:00 AM" },
    { dia: 26, nombre: "HIIT", profesor: "Diego Torres", hora: "6:00 AM" }
  ],
  cal4: [ // Bogotá Norte
    { dia: 1, nombre: "CrossFit", profesor: "Andrés Pérez", hora: "7:00 AM" },
    { dia: 6, nombre: "Zumba", profesor: "Ana López", hora: "9:00 AM" },
    { dia: 10, nombre: "Spinning", profesor: "David Ramírez", hora: "10:00 AM" },
    { dia: 14, nombre: "Pilates", profesor: "Sofía Martínez", hora: "7:00 PM" },
    { dia: 18, nombre: "HIIT", profesor: "Mariana Gómez", hora: "6:00 PM" },
    { dia: 22, nombre: "Cardio Dance", profesor: "Lucía Gómez", hora: "5:00 PM" }
  ],
  cal5: [ // Centro Comercial
    { dia: 2, nombre: "HIIT", profesor: "Carlos Pérez", hora: "8:00 AM" },
    { dia: 6, nombre: "Yoga", profesor: "Carlos Ríos", hora: "5:00 PM" },
    { dia: 12, nombre: "Spinning", profesor: "Iván Torres", hora: "9:00 AM" },
    { dia: 16, nombre: "Zumba", profesor: "Ana López", hora: "10:00 AM" },
    { dia: 20, nombre: "Pilates", profesor: "Sofía Martínez", hora: "6:30 PM" },
    { dia: 24, nombre: "CrossFit", profesor: "Diego Torres", hora: "8:00 PM" }
  ],
  cal6: [ // La Candelaria
    { dia: 3, nombre: "Spinning", profesor: "Juan Pérez", hora: "7:00 PM" },
    { dia: 7, nombre: "Yoga", profesor: "Natalia Vargas", hora: "9:00 AM" },
    { dia: 11, nombre: "HIIT", profesor: "Diego Torres", hora: "6:00 PM" },
    { dia: 15, nombre: "Pilates", profesor: "Camila Ruiz", hora: "10:00 AM" },
    { dia: 19, nombre: "Zumba", profesor: "David Ramírez", hora: "9:00 AM" },
    { dia: 23, nombre: "CrossFit", profesor: "Sofía Martínez", hora: "8:00 PM" }
  ]
};

//RUTINAS POR SEDE
const rutinas = {
  rut1: [ // Chapinero
    { nombre: "Rutina Fuerza Máquinas", nivel: "Intermedio", foco: "Tren Superior", duracion: "60 min" },
    { nombre: "Entrenamiento Funcional", nivel: "Básico", foco: "Cuerpo Completo", duracion: "45 min" }
  ],
  rut2: [ // Colina
    { nombre: "Yoga Terapéutico", nivel: "Básico", foco: "Flexibilidad", duracion: "75 min" },
    { nombre: "Cardio Sin Impacto", nivel: "Intermedio", foco: "Cardiovascular", duracion: "50 min" }
  ],
  rut3: [ // Usaquén
    { nombre: "CrossFit Express", nivel: "Avanzado", foco: "Resistencia", duracion: "30 min" },
    { nombre: "Pilates Suelo", nivel: "Básico", foco: "Core y Postura", duracion: "60 min" }
  ],
  // Agrega rutinas para rut4, rut5 y rut6
  rut4: [],
  rut5: [],
  rut6: [],
};

// Función para mostrar el calendario de la sede
function mostrarCalendario(id) {
  // Oculta otros calendarios
  document.querySelectorAll('.calendario').forEach(c => c.style.display = 'none');
  const cal = document.getElementById(id);
  cal.innerHTML = `<h4>Consulta los horarios de las clases grupales disponibles e inscríbete</h4>
  <h4>Calendario de clases para noviembre</h4>
  <div class='grid-calendario'></div>`;
  const grid = cal.querySelector('.grid-calendario');

  // Generar días del mes (1-30)
  for (let i = 1; i <= 30; i++) {
    const diaDiv = document.createElement('div');
    diaDiv.classList.add('dia');
    diaDiv.innerHTML = i;

    // Buscar si hay una clase en ese día
    const clase = clases[id] && clases[id].find(c => c.dia === i);
    if (clase) {
      const claseDiv = document.createElement('div');
      claseDiv.classList.add('clase');
      claseDiv.textContent = `${clase.nombre} - ${clase.profesor} - ${clase.hora}`;
      claseDiv.onclick = () => inscribirClase(clase);
      diaDiv.appendChild(claseDiv);
    }

    grid.appendChild(diaDiv);
  }

  // Mostrar calendario
  cal.style.display = "block";

  // Desplazar suavemente hacia la sección del calendario
  cal.scrollIntoView({ behavior: "smooth" });
}

// Función para manejar la inscripción a la clase
function inscribirClase(clase) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("infoClase").textContent =
    `¡Te has inscrito a la clase de ${clase.nombre} con ${clase.profesor} a las ${clase.hora}!`;
}

// Función para cerrar el popup
function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}




// MOSTRAR RUTINAS
function mostrarRutinas(id) {
  // Oculta otros contenedores (calendarios y otras rutinas)
  document.querySelectorAll('.calendario').forEach(c => c.style.display = 'none');
  document.querySelectorAll('.rutinas').forEach(r => r.style.display = 'none');

  const rutContainer = document.getElementById(id);
  const rutinasData = rutinas[id];

  let htmlContent = `<h4>Rutinas personalizadas en esta sede</h4>`;

  if (rutinasData && rutinasData.length > 0) {
    htmlContent += `<div class='grid-rutinas'>`;

    rutinasData.forEach(rutina => {
      htmlContent += `
                <div class='rutina-card'>
                    <h5>${rutina.nombre}</h5>
                    <p>Nivel: <span>${rutina.nivel}</span></p>
                    <p>Foco: <span>${rutina.foco}</span></p>
                    <p>Duración: <span>${rutina.duracion}</span></p>
                    <button onclick="alert('Iniciando rutina de ${rutina.nombre}')">Empezar</button>
                </div>
            `;
    });

    htmlContent += `</div>`;
  } else {
    htmlContent += `<p>No hay rutinas personalizadas disponibles para esta sede.</p>`;
  }

  rutContainer.innerHTML = htmlContent;
  rutContainer.style.display = "block";
  rutContainer.scrollIntoView({ behavior: "smooth" });
}
