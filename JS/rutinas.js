// AVATAR DE USUARIO
const usuario = localStorage.getItem("usuarioLogueado");
const perfilUsuarioBox = document.getElementById("perfilUsuario"); 
const nombreUsuarioSpan = document.getElementById("nombreUsuario");
const menuPerfilDiv = document.getElementById("menuPerfil"); 
const cerrarSesionBtn = document.getElementById("cerrarSesion");
const btnHistorial = document.getElementById("btnHistorial");

// Mostrar nombre del usuario si existe
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

// MOSTRAR / OCULTAR MENÚ PERFIL
if (perfilUsuarioBox && menuPerfilDiv) {
  perfilUsuarioBox.addEventListener("click", (e) => {
    e.stopPropagation();
    menuPerfilDiv.classList.toggle("activo");
  });

  // Cerrar el menú si se hace clic fuera
  document.addEventListener("click", (e) => {
    if (!perfilUsuarioBox.contains(e.target)) {
      menuPerfilDiv.classList.remove("activo");
    }
  });
}

//RUTINAS
const rutinas = [
    {
        id: 'masa',
        title: 'Ganar Masa Muscular',
        image: 'img/masa.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '8 semanas',
                description: 'Introducción a los ejercicios compuestos con énfasis en técnica y progresión.',
                exercises: [
                    { name: 'Press de banca (ligero)', sets: '3 x 8-10', rest: '90s' },
                    { name: 'Sentadillas (sin carga)', sets: '3 x 10-12', rest: '90s' },
                    { name: 'Remo con mancuerna', sets: '3 x 10', rest: '60s' },
                    { name: 'Puente de glúteos', sets: '3 x 12', rest: '60s' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '10 semanas',
                description: 'Mayor volumen con énfasis en progresión de carga.',
                exercises: [
                    { name: 'Press de banca', sets: '4 x 6-8', rest: '90s' },
                    { name: 'Sentadillas', sets: '4 x 6-8', rest: '120s' },
                    { name: 'Remo con barra', sets: '4 x 8', rest: '90s' },
                    { name: 'Peso muerto', sets: '3 x 5-6', rest: '120s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '12 semanas',
                description: 'Entrenamiento avanzado para maximizar fuerza y masa con técnicas intensificadas.',
                exercises: [
                    { name: 'Press de banca (pesado)', sets: '5 x 4-6', rest: '120s' },
                    { name: 'Sentadillas (peso)', sets: '5 x 5', rest: '150s' },
                    { name: 'Remo con barra pesado', sets: '5 x 5', rest: '120s' },
                    { name: 'Peso muerto', sets: '4 x 4', rest: '150s' }
                ]
            }
        ]
    },
    {
        id: 'peso',
        title: 'Bajar de Peso',
        image: 'img/peso.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '6 semanas',
                description: 'Cardio moderado y circuitos con bajo impacto para comenzar a quemar grasa.',
                exercises: [
                    { name: 'Caminata rápida / bici', sets: '25-30 min', rest: '-' },
                    { name: 'Circuito cuerpo libre', sets: '3 rondas', rest: '60s' },
                    { name: 'Burpees modificados', sets: '3 x 8', rest: '45s' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '8 semanas',
                description: 'Combinación de HIIT y fuerza para maximizar gasto calórico.',
                exercises: [
                    { name: 'HIIT (cinta/bici)', sets: '20 min', rest: '-' },
                    { name: 'Burpees', sets: '4 x 12', rest: '45s' },
                    { name: 'Mountain climbers', sets: '4 x 30s', rest: '30s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '10 semanas',
                description: 'Alta intensidad y volumen para pérdida de grasa mantenida.',
                exercises: [
                    { name: 'Sprint intervals', sets: '15-20 min', rest: '-' },
                    { name: 'Circuito metabólico', sets: '5 rondas', rest: '60s' },
                    { name: 'Saltos en caja', sets: '4 x 10', rest: '60s' }
                ]
            }
        ]
    },
    {
        id: 'tonificar',
        title: 'Tonificar',
        image: 'img/tonificar.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '4 semanas',
                description: 'Control corporal y ejercicios básicos para tonificar.',
                exercises: [
                    { name: 'Plancha', sets: '3 x 30s', rest: '30s' },
                    { name: 'Sentadillas sin peso', sets: '4 x 12', rest: '45s' },
                    { name: 'Flexiones (rodillas)', sets: '3 x 10', rest: '60s' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '6 semanas',
                description: 'Más repeticiones y control para definición.',
                exercises: [
                    { name: 'Plancha lateral', sets: '3 x 45s', rest: '30s' },
                    { name: 'Sentadillas con salto', sets: '4 x 10', rest: '45s' },
                    { name: 'Flexiones', sets: '4 x 10-12', rest: '60s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '8 semanas',
                description: 'Ejercicios avanzados para definición y resistencia.',
                exercises: [
                    { name: 'Circuito de alta repetición', sets: '5 rondas', rest: '45s' },
                    { name: 'Pistol squats', sets: '3 x 6', rest: '60s' },
                    { name: 'Handstand push-ups (o progresiones)', sets: '4 x 6', rest: '90s' }
                ]
            }
        ]
    },
    {
        id: 'funcional',
        title: 'Entrenamiento Funcional',
        image: 'img/funcional.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '4 semanas',
                description: 'Movimientos básicos para mejorar movilidad y coordinación.',
                exercises: [
                    { name: 'Movilidad dinámica', sets: '10 min', rest: '-' },
                    { name: 'Kettlebell swings (ligero)', sets: '3 x 12', rest: '60s' },
                    { name: 'Farmer carry ligero', sets: '3 x 30m', rest: '60s' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '6 semanas',
                description: 'Aumenta la carga y la complejidad de los patrones de movimiento.',
                exercises: [
                    { name: 'Circuito funcional', sets: '20 min', rest: '-' },
                    { name: 'Kettlebell swings', sets: '4 x 15', rest: '60s' },
                    { name: 'Farmer carry', sets: '4 x 40m', rest: '90s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '8 semanas',
                description: 'Patrones complejos con cargas y trabajo pliométrico.',
                exercises: [
                    { name: 'Circuito con peso', sets: '5 rondas', rest: '60s' },
                    { name: 'Pliometría avanzada', sets: '4 x 10', rest: '90s' },
                    { name: 'Carry con peso', sets: '4 x 60m', rest: '90s' }
                ]
            }
        ]
    },
    {
        id: 'hiit',
        title: 'HIIT (Alta Intensidad)',
        image: 'img/funcional.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '4 semanas',
                description: 'Intervalos moderados con pausas amplias para adaptar al cuerpo.',
                exercises: [
                    { name: 'Sprint suave / bici', sets: '10 x 20s', rest: '40s' },
                    { name: 'Jumping jacks', sets: '3 x 30s', rest: '30s' },
                    { name: 'Sentadillas aéreas', sets: '3 x 12', rest: '45s' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '6 semanas',
                description: 'Intervalos más cortos y exigentes para mejorar capacidad anaeróbica.',
                exercises: [
                    { name: 'Sprint intervals', sets: '12 x 30s', rest: '30s' },
                    { name: 'Burpees', sets: '4 x 12', rest: '45s' },
                    { name: 'Kettlebell swings', sets: '4 x 15', rest: '60s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '8 semanas',
                description: 'Sesiones intensas y cortas para máxima quema calórica y capacidad.',
                exercises: [
                    { name: 'Sprint + resistencia', sets: '15 x 30s', rest: '20s' },
                    { name: 'Circuito plyo', sets: '5 rondas', rest: '45s' },
                    { name: 'Burpee tuck jumps', sets: '4 x 10', rest: '60s' }
                ]
            }
        ]
    },
    {
        id: 'fuerza',
        title: 'Circuito de Fuerza',
        image: 'img/masa.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '6 semanas',
                description: 'Circuitos con máquinas y cargas ligeras para ganar fuerza base.',
                exercises: [
                    { name: 'Press de pecho (máquina)', sets: '3 x 10', rest: '60s' },
                    { name: 'Polea baja', sets: '3 x 12', rest: '60s' },
                    { name: 'Leg press', sets: '3 x 12', rest: '90s' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '8 semanas',
                description: 'Mayor carga por estación y menos descanso para hipertrofia.',
                exercises: [
                    { name: 'Press de banca', sets: '4 x 6-8', rest: '90s' },
                    { name: 'Sentadillas', sets: '4 x 8', rest: '120s' },
                    { name: 'Remo en máquina', sets: '4 x 10', rest: '90s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '10 semanas',
                description: 'Circuitos pesados con énfasis en fuerza máxima y potencia.',
                exercises: [
                    { name: 'Power cleans', sets: '5 x 3', rest: '150s' },
                    { name: 'Sentadilla frontal', sets: '5 x 5', rest: '150s' },
                    { name: 'Press militar', sets: '5 x 5', rest: '120s' }
                ]
            }
        ]
    },
    {
        id: 'movilidad',
        title: 'Movilidad y Flexibilidad',
        image: 'img/funcional.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '3 semanas',
                description: 'Rutina suave para aumentar rango de movimiento y reducir molestias.',
                exercises: [
                    { name: 'Estiramientos dinámicos', sets: '10-12 min', rest: '-' },
                    { name: 'Yoga básico', sets: '15 min', rest: '-' },
                    { name: 'Foam rolling', sets: '8 min', rest: '-' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '5 semanas',
                description: 'Secuencias más largas y trabajo de movilidad articular.',
                exercises: [
                    { name: 'Secuencia de movilidad', sets: '20 min', rest: '-' },
                    { name: 'Estiramientos sostenidos', sets: '4 x 60s', rest: '-' },
                    { name: 'Movilidad de cadera', sets: '3 x 12', rest: '30s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '8 semanas',
                description: 'Trabajo avanzado para mejorar rendimiento y prevenir lesiones.',
                exercises: [
                    { name: 'Movilidad activa avanzada', sets: '25 min', rest: '-' },
                    { name: 'Estiramientos profundos', sets: '5 x 60s', rest: '-' },
                    { name: 'Trabajo de técnica', sets: '15 min', rest: '-' }
                ]
            }
        ]
    },
    {
        id: 'cardio',
        title: 'Cardio Endurance',
        image: 'img/peso.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '6 semanas',
                description: 'Sesiones sostenidas para mejorar resistencia aeróbica.',
                exercises: [
                    { name: 'Trote suave / bici', sets: '30-35 min', rest: '-' },
                    { name: 'Remo moderado', sets: '20 min', rest: '-' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '8 semanas',
                description: 'Aumenta duración e intensidad para mejorar umbral aeróbico.',
                exercises: [
                    { name: 'Correr a ritmo', sets: '40 min', rest: '-' },
                    { name: 'Series largas', sets: '5 x 5 min', rest: '90s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '10 semanas',
                description: 'Entrenamientos prolongados y esfuerzos controlados para atletas.',
                exercises: [
                    { name: 'Rodaje largo', sets: '60-90 min', rest: '-' },
                    { name: 'Tempo runs', sets: '30-40 min', rest: '-' }
                ]
            }
        ]
    },
    {
        id: 'rehab',
        title: 'Rehabilitación y Postura',
        image: 'img/funcional.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '4 semanas',
                description: 'Ejercicios para recuperar movimiento y fortalecer cadenas débiles.',
                exercises: [
                    { name: 'Activación de glúteos', sets: '3 x 12', rest: '30s' },
                    { name: 'Puente isométrico', sets: '3 x 20s', rest: '30s' },
                    { name: 'Retracción escapular', sets: '3 x 15', rest: '30s' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '6 semanas',
                description: 'Progresiones para mejorar control motor y postura.',
                exercises: [
                    { name: 'Trabajo de core dinámico', sets: '4 x 30s', rest: '30s' },
                    { name: 'Sentadillas asistidas', sets: '4 x 10', rest: '60s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '8 semanas',
                description: 'Protocolo avanzado para readaptación funcional.',
                exercises: [
                    { name: 'Trabajo proprioceptivo', sets: '4 x 12', rest: '45s' },
                    { name: 'Fortalecimiento global', sets: '4 x 10', rest: '60s' }
                ]
            }
        ]
    },
    {
        id: 'pilates',
        title: 'Pilates Reformer / Mat',
        image: 'img/tonificar.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '4 semanas',
                description: 'Bases de control postural y respiración para mejorar estabilidad.',
                exercises: [
                    { name: 'Hundimientos de cadera', sets: '3 x 12', rest: '30s' },
                    { name: 'Círculos de piernas', sets: '3 x 10', rest: '30s' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '6 semanas',
                description: 'Mayor control y secuencias combinadas.',
                exercises: [
                    { name: 'Roll up', sets: '4 x 8', rest: '30s' },
                    { name: 'Swimming', sets: '4 x 30s', rest: '30s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '8 semanas',
                description: 'Progresiones avanzadas para fuerza y control.',
                exercises: [
                    { name: 'Teaser', sets: '4 x 8', rest: '45s' },
                    { name: 'Control balance', sets: '4 x 10', rest: '45s' }
                ]
            }
        ]
    },
    {
        id: 'yoga',
        title: 'Yoga para Fuerza y Equilibrio',
        image: 'img/tonificar.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '4 semanas',
                description: 'Posturas básicas y respiración para estabilidad y fuerza funcional.',
                exercises: [
                    { name: 'Saludo al sol', sets: '5 rondas', rest: '-' },
                    { name: 'Posturas de equilibrio', sets: '3 x 30s', rest: '30s' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '6 semanas',
                description: 'Secuencias más largas con trabajo de fuerza isométrica.',
                exercises: [
                    { name: 'Vinyasa flow', sets: '20 min', rest: '-' },
                    { name: 'Posturas de fuerza', sets: '4 x 30s', rest: '30s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '8 semanas',
                description: 'Práctica avanzada con enfoque en movilidad y fuerza integrada.',
                exercises: [
                    { name: 'Secuencia avanzada', sets: '30 min', rest: '-' },
                    { name: 'Equilibrio dinámico', sets: '4 x 45s', rest: '30s' }
                ]
            }
        ]
    },
    {
        id: 'pesas',
        title: 'Entrenamiento con Pesas (Avanzado)',
        image: 'img/masa.svg',
        variants: [
            {
                level: 'Principiante',
                duration: '6 semanas',
                description: 'Introducción al uso de cargas libres y técnicas básicas.',
                exercises: [
                    { name: 'Guía técnica de movimientos', sets: '3 x 8-12', rest: '90s' },
                    { name: 'Trabajo unilateral básico', sets: '3 x 10', rest: '60s' }
                ]
            },
            {
                level: 'Intermedio',
                duration: '8 semanas',
                description: 'Progresión hacia cargas mayores y trabajo por grupos musculares.',
                exercises: [
                    { name: 'Press banca pesado', sets: '4 x 6', rest: '120s' },
                    { name: 'Peso muerto', sets: '4 x 5', rest: '150s' }
                ]
            },
            {
                level: 'Avanzado',
                duration: '12 semanas',
                description: 'Programas orientados a fuerza máxima y periodización.',
                exercises: [
                    { name: 'Mesociclos de fuerza', sets: 'variable', rest: '-' },
                    { name: 'Técnicas avanzadas (clusters, dropsets)', sets: 'variable', rest: '-' }
                ]
            }
        ]
    }
];

// DOM refs
const container = document.getElementById('rutinas-container');
const detalles = document.getElementById('rutina-detalles');
const searchInput = document.getElementById('search');
const filterLevel = document.getElementById('filter-level');

function renderCards(list) {
    container.innerHTML = '';
    list.forEach(r => {
        const card = document.createElement('article');
        card.className = 'rutina';
        const first = r.variants[0];
        card.innerHTML = `
            <img src="${r.image}" alt="${r.title}">
            <h2>${r.title}</h2>
            <p style="min-height:42px">${first.description}</p>
            <div style="display:flex;gap:8px;justify-content:center;align-items:center;margin-bottom:8px;color:var(--muted);font-size:0.9rem;">
                <select class="level-select" data-id="${r.id}" style="padding:6px 10px;border-radius:8px;border:1px solid rgba(10,102,255,0.08);background:transparent;color:var(--card-text);font-weight:600;">
                    ${r.variants.map(v => `<option value="${v.level}">${v.level}</option>`).join('')}
                </select>
                <span class="duration" style="color:var(--muted);">${first.duration}</span>
            </div>
            <button data-id="${r.id}" data-level="${first.level}">Ver rutina</button>
        `;
        container.appendChild(card);
    });

    container.querySelectorAll('.level-select').forEach(sel => {
        sel.addEventListener('change', (e) => {
            const id = sel.dataset.id;
            const card = sel.closest('.rutina');
            const nivel = sel.value;
            const rutina = rutinas.find(x => x.id === id);
            const variant = rutina.variants.find(v => v.level === nivel);
            if (card) {
                const durationSpan = card.querySelector('.duration');
                const descP = card.querySelector('p');
                const btn = card.querySelector('button');
                if (durationSpan) durationSpan.textContent = variant.duration;
                if (descP) descP.textContent = variant.description;
                if (btn) btn.dataset.level = variant.level;
            }
        });
    });

    container.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => showDetails(btn.dataset.id, btn.dataset.level));
    });
}

function showDetails(id, level) {
    const r = rutinas.find(x => x.id === id);
    if (!r) return;
    const variant = r.variants.find(v => v.level === level) || r.variants[0];
    const exercises = Array.isArray(variant.exercises) ? variant.exercises.slice() : [];
    const minExercises = 8;
    while (exercises.length < minExercises) {
        const n = exercises.length + 1;
        exercises.push({
            name: `Ejercicio complementario ${n}`,
            sets: '3 x 12',
            rest: '60s'
        });
    }

    detalles.innerHTML = `
        <h1>Rutina: ${r.title} — <small style="color:var(--muted);font-weight:600">${variant.level}</small></h1>
        <div style="display:flex;gap:16px;align-items:center;justify-content:center;flex-wrap:wrap;margin-bottom:12px;">
            <div style="color:var(--muted)">Duración: <strong>${variant.duration}</strong></div>
        </div>
        <p style="color:var(--muted);margin-bottom:12px">${variant.description}</p>
        <ul>
            ${exercises.map(e => `<li><strong>${e.name}</strong> — ${e.sets} ${e.rest && e.rest !== '-' ? `· descanso ${e.rest}` : ''}</li>`).join('')}
        </ul>
    `;
    detalles.scrollIntoView({ behavior: 'smooth' });
}

// Filtros
function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const level = filterLevel ? String(filterLevel.value || '').trim() : 'all';
    let list = rutinas.slice();
    if (level && level.toLowerCase() !== 'all') {
        const wanted = level.toLowerCase();
        list = list.filter(r => r.variants.some(v => (v.level || '').toLowerCase() === wanted));
    }
    if (q) list = list.filter(r => (r.title + ' ' + r.variants.map(v=>v.description).join(' ')).toLowerCase().includes(q));
    renderCards(list);
}

searchInput.addEventListener('input', () => applyFilters());
filterLevel.addEventListener('change', () => applyFilters());

renderCards(rutinas);

// Inicio nav: limpia filtros y vuelve a mostrar todas las rutinas
const navInicio = document.getElementById('nav-inicio');
if (navInicio) {
    navInicio.addEventListener('click', (e) => {
        e.preventDefault();
        if (searchInput) searchInput.value = '';
        if (filterLevel) filterLevel.value = 'all';
        applyFilters();
        if (container) container.scrollIntoView({ behavior: 'smooth' });
    });
}