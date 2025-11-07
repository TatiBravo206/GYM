// === AVATAR DE USUARIO ===
const usuario = localStorage.getItem("usuarioLogueado");
const perfilUsuarioBox = document.getElementById("perfilUsuario"); 
const nombreUsuarioSpan = document.getElementById("nombreUsuario");
const menuPerfilDiv = document.getElementById("menuPerfil"); 
const cerrarSesionBtn = document.getElementById("cerrarSesion");
const btnHistorial = document.getElementById("btnHistorial");

// Mostrar nombre del usuario logueado
if (usuario && nombreUsuarioSpan) {
  nombreUsuarioSpan.textContent = usuario;
}

// BOTÓN CERRAR SESIÓN 
if (cerrarSesionBtn) {
  cerrarSesionBtn.addEventListener("click", () => {
    localStorage.removeItem("usuarioLogueado");
    localStorage.removeItem("historialClases");
    window.location.href = '../index.html';
  });
}

// MOSTRAR Y OCULTAR MENÚ PERFIL SOLO CON CLICK 
if (perfilUsuarioBox && menuPerfilDiv) {
  perfilUsuarioBox.addEventListener("click", (e) => {
    e.stopPropagation();
    menuPerfilDiv.style.display = 
      menuPerfilDiv.style.display === "block" ? "none" : "block";
  });

  // Cerrar menú si se hace clic fuera del perfil
  document.addEventListener("click", (e) => {
    if (!perfilUsuarioBox.contains(e.target)) {
      menuPerfilDiv.style.display = "none";
    }
  });
}

// BOTÓN HISTORIAL 
if (btnHistorial) {
  btnHistorial.addEventListener("click", mostrarHistorial);
}

// Clases por sede
const clases = {
  cal1: [ 
    { dia: 3, nombre: "Zumba", profesor: "Ana López", hora: "9:00 AM" },
    { dia: 7, nombre: "Yoga", profesor: "Camila Ruiz", hora: "7:00 PM" },
    { dia: 12, nombre: "Pilates", profesor: "Sofía Martínez", hora: "11:00 AM" },
    { dia: 15, nombre: "HIIT", profesor: "Laura Gómez", hora: "6:30 PM" },
    { dia: 20, nombre: "Spinning", profesor: "David Ramírez", hora: "7:00 AM" },
    { dia: 25, nombre: "CrossFit", profesor: "Carlos Pérez", hora: "8:00 AM" }
  ],
  cal2: [ 
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

// Mostrar calendario y clases 
function mostrarCalendario(id, sede) {
  document.querySelectorAll('.calendario').forEach(c => c.style.display = 'none');
  const cal = document.getElementById(id);
  cal.innerHTML = `<h4>Consulta los horarios de clases grupales</h4>
  <div class='grid-calendario'></div>`;
  const grid = cal.querySelector('.grid-calendario');

  for (let i = 1; i <= 30; i++) {
    const diaDiv = document.createElement('div');
    diaDiv.classList.add('dia');
    diaDiv.textContent = i;

    const clase = clases[id]?.find(c => c.dia === i);
    if (clase) {
      const claseDiv = document.createElement('div');
      claseDiv.classList.add('clase');
      claseDiv.textContent = `${clase.nombre} - ${clase.profesor} - ${clase.hora}`;
      claseDiv.onclick = () => inscribirClase(clase, sede);
      diaDiv.appendChild(claseDiv);
    }
    grid.appendChild(diaDiv);
  }

  cal.style.display = "block";
  cal.scrollIntoView({ behavior: "smooth" });
}

// Inscripción y almacenamiento 
function inscribirClase(clase, sede) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("infoClase").textContent =
    `¡Te has inscrito a ${clase.nombre} con ${clase.profesor} en la sede ${sede} a las ${clase.hora}!`;

  const historial = JSON.parse(localStorage.getItem("historialClases")) || [];
  historial.push({ ...clase, sede });
  localStorage.setItem("historialClases", JSON.stringify(historial));
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}

// Mostrar y cerrar historial 
function mostrarHistorial() {
  const popup = document.getElementById("popupHistorial");
  const lista = document.getElementById("listaHistorial");
  const historial = JSON.parse(localStorage.getItem("historialClases")) || [];

  if (historial.length === 0) {
    lista.innerHTML = "<p>No te has inscrito a ninguna clase aún.</p>";
  } else {
    lista.innerHTML = historial.map(c =>
      `<div class='historial-item'>
        <strong>${c.nombre}</strong><br>
        Profesor: ${c.profesor}<br>
        Hora: ${c.hora}<br>
        Sede: ${c.sede}
      </div>`
    ).join("");
  }
  popup.style.display = "flex";
}

function cerrarHistorial() {
  document.getElementById("popupHistorial").style.display = "none";
}

document.getElementById("popupHistorial").addEventListener("click", e => {
  if (e.target.id === "popupHistorial") {
    cerrarHistorial();
  }
});
