import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-lmad',
  templateUrl: './plan-lmad.page.html',
  styleUrls: ['./plan-lmad.page.scss'],
})
export class PlanLMADPage implements OnInit {

  constructor() { }

  semestres = [
    {
      numero: "Primer Semestre",
      materias: [
        {
          nombre: "Álgebra",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Cálculo diferencial",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Geometría analítica",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Metodología de la programación",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Física básica",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        }
      ]
    },
    {
      numero: "Segundo Semestre",
      materias: [
        {
          nombre: "Programación básica",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Metodología de la programación"
            }
          ]
        },
        {
          nombre: "Matemáticas para videojuegos I",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Álgebra"
            },
            {
              materia: "Geometría analítica"
            }
          ]
        },
        {
          nombre: "Tecnologías multimedia",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Dibujo de la anatomía humana",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Expresiones artísticas y socioculturales",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Responsabilidad social y desarrollo sustentable",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        }
      ]
    },
    {
      numero: "Tercer Semestre",
      materias: [
        {
          nombre: "Programación avanzada",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Programación básica"
            }
          ]
        },
        {
          nombre: "Matemáticas para videojuegos II",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Matemáticas para videojuegos I"
            }
          ]
        },
        {
          nombre: "Producción multimedia",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Tecnologías multimedia"
            }
          ]
        },
        {
          nombre: "Fundamentos de los videojuegos",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Modelado arquitectónico",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Ética y cultura de la legalidad",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        }
      ]
    },
    {
      numero: "Cuarto Semestre",
      materias: [
        {
          nombre: "Programación orientada a objetos",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Programación avanzada"
            }
          ]
        },
        {
          nombre: "Estructura de datos",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Programación avanzada"
            }
          ]
        },
        {
          nombre: "Lógica digital",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Matemáticas para videojuegos I"
            }
          ]
        },
        {
          nombre: "Sistemas operativos",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Propiedad intelectual",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa I área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Cultura de paz",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        }
      ]
    },
    {
      numero: "Quinto Semestre",
      materias: [
        {
          nombre: "Gráficas computacionales I",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Programación orientada a objetos"
            },
            {
              materia: "Matemáticas para videojuegos II"
            }
          ]
        },
        {
          nombre: "Modelos de administración de datos",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Programación orientada a objetos"
            },
            {
              materia: "Estructura de datos"
            }
          ]
        },
        {
          nombre: "Diseño de hápticos",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Lógica digital"
            }
          ]
        },
        {
          nombre: "Fotografía digital",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Cinematrografia",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Liderazgo, emprendimiento e innovación",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa II área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Optativa I área curricular de formación profesional fundamental"
            }
          ]
        }
      ]
    },
    {
      numero: "Sexto Semestre",
      materias: [
        {
          nombre: "Gráficas computacionales II",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Gráficas computacionales I"
            }
          ]
        },
        {
          nombre: "Programación web I",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Redes computacionales",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Diseño de hápticos"
            }
          ]
        },
        {
          nombre: "Escenarios de videojuegos",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Diseño de hápticos"
            }
          ]
        },
        {
          nombre: "Guionismo",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Cinematrografia"
            }
          ]
        },
        {
          nombre: "Optativa III área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Optativa II área curricular de formación profesional fundamental"
            }
          ]
        }
      ]
    },
    {
      numero: "Séptimo Semestre",
      materias: [
        {
          nombre: "Gráficas computacionales en web",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Gráficas computacionales II"
            }
          ]
        },
        {
          nombre: "Base de datos multimedia",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Modelos de administración de datos"
            },
            {
              materia: "Programación web I"
            }
          ]
        },
        {
          nombre: "Programación orientada a la internet",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Redes computacionales"
            }
          ]
        },
        {
          nombre: "Optimización de videojuegos",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Escenarios de videojuegos"
            }
          ]
        },
        {
          nombre: "Administración de proyectos",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Programación web de capa intermedia",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Programación web I"
            }
          ]
        },
        {
          nombre: "Optativa VI área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Optativa III área curricular de formación profesional fundamental"
            }
          ]
        }
      ]
    },
    {
      numero: "Octavo Semestre",
      materias: [
        {
          nombre: "Realidad Virtual",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Programación web II",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Procesamiento de imágenes",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Diseño de videojuegos en línea",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Optimización de videojuegos"
            }
          ]
        },
        {
          nombre: "Mercadotecnia",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa V área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: "Optativa IV área curricular de formación profesional fundamental"
            }
          ]
        }
      ]
    },
    {
      numero: "Noveno Semestre",
      materias: [
        {
          nombre: "Servicio social",
          creditos: "16",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "",
          creditos: "4",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa VI área curricular de formación profesional fundamental",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Optativa V área curricular de formación profesional fundamental"
            }
          ]
        }
      ]
    }
  ]

  ngOnInit() {
  }

}
