import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-lcc',
  templateUrl: './plan-lcc.page.html',
  styleUrls: ['./plan-lcc.page.scss'],
})
export class PlanLCCPage implements OnInit {

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
          nombre: "Tópicos de álgebra",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Álgebra"
            }
          ]
        },
        {
          nombre: "Cálculo integral",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo diferencial"
            },
            {
              materia: "Álgebra"
            },
            {
              materia: "Geometría analítica"
            }
          ]
        },
        {
          nombre: "Programación estructurada",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Metodología de la programación"
            }
          ]
        },
        {
          nombre: "Matemáticas discretas",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Álgebra"
            },
            {
              materia: "Cálculo diferencial"
            }
          ]
        },
        {
          nombre: "Física",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Física básica"
            }
          ]
        },
        {
          nombre: "Laboratorio de programación estructurada",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Metodología de la programación"
            }
          ]
        },
        {
          nombre: "Laboratorio de física",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Física básica"
            }
          ]
        }
      ]
    },
    {
      numero: "Tercer Semestre",
      materias: [
        {
          nombre: "Cálculo de varias variables",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo integral"
            },
            {
              materia: "Tópicos de álgebra"
            }
          ]
        },
        {
          nombre: "Álgebra lineal",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Tópicos de álgebra"
            }
          ]
        },
        {
          nombre: "Programación orientada a objetos",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Programación estructurada"
            },
            {
              materia: "Laboratorio de programación estructurada"
            }
          ]
        },
        {
          nombre: "Circuitos digitales",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Física"
            },
            {
              materia: "Laboratorio de física"
            }
          ]
        },
        {
          nombre: "Tecnologías multimedia",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Estructura de datos",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Programación estructurada"
            },
            {
              materia: "Laboratorio de programación estructurada"
            }
          ]
        },
        {
          nombre: "Laboratorio de programación orientada a objetos",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Programación estructurada"
            },
            {
              materia: "Laboratorio de programación estructurada"
            }
          ]
        },
        {
          nombre: "Laboratorio de circuitos digitales",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Física"
            },
            {
              materia: "Laboratorio de física"
            }
          ]
        }
      ]
    },
    {
      numero: "Cuarto Semestre",
      materias: [
        {
          nombre: "Aplicaciones móviles",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Programación orientada a objetos"
            },
            {
              materia: "Laboratorio de programación orientada a objetos"
            }
          ]
        },
        {
          nombre: "Base de datos",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Estructura de datos"
            }
          ]
        },
        {
          nombre: "Teoría de autómatas",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Estructura de datos"
            }
          ]
        },
        {
          nombre: "Ecuaciones diferenciales",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo de varias variables"
            },
            {
              materia: "Álgebra lineal"
            }
          ]
        },
        {
          nombre: "Probabilidad",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo de varias variables"
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
        },
        {
          nombre: "Laboratorio de aplicaciones móviles",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Programación orientada a objetos"
            },
            {
              materia: "Laboratorio de programación orientada a objetos"
            }
          ]
        },
        {
          nombre: "Laboratorio de base de datos	",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Estructura de Datos"
            }
          ]
        }
      ]
    },
    {
      numero: "Quinto Semestre",
      materias: [
        {
          nombre: "Análisis matemático",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Ecuaciones diferenciales"
            }
          ]
        },
        {
          nombre: "Sistemas electrónicos",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Circuitos digitales"
            },
            {
              materia: "Laboratorio de circuitos digitales"
            }
          ]
        },
        {
          nombre: "Organización y arquitectura de computadoras",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Lenguajes modernos de programación",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Aplicaciones móviles"
            },
            {
              materia: "Laboratorio de aplicaciones móviles"
            }
          ]
        },
        {
          nombre: "Estadística",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Probabilidad"
            }
          ]
        },
        {
          nombre: "Programación lineal",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Álgebra lineal"
            },
            {
              materia: "Cálculo de varias variables"
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
        },
        {
          nombre: "Laboratorio de sistemas electrónicos",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Circuitos digitales"
            },
            {
              materia: "Laboratorio de circuitos digitales"
            }
          ]
        }
      ]
    },
    {
      numero: "Sexto Semestre",
      materias: [
        {
          nombre: "Microprocesadores",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Sistemas electrónicos"
            },
            {
              materia: "Laboratorio de sistemas electrónicos"
            }
          ]
        },
        {
          nombre: "Redes de computadoras",
          creditos: "3",
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
          nombre: "Inteligencia artificial",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Probabilidad"
            }
          ]
        },
        {
          nombre: "Laboratorio de microprocesadores",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Sistemas electrónicos"
            },
            {
              materia: "Laboratorio de sistemas electrónicos"
            }
          ]
        },
        {
          nombre: "Laboratorio de redes de computadoras",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Investigación de Operaciones",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Probabilidad"
            },
            {
              materia: "Programación lineal"
            }
          ]
        },
        {
          nombre: "Optativa I área curricular de formación profesional fundamental",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa II área curricular de formación profesional fundamental",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        }
      ]
    },
    {
      numero: "Séptimo Semestre",
      materias: [
        {
          nombre: "Sistemas operativos",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Microprocesadores"
            },
            {
              materia: "Laboratorio de microprocesadores"
            }
          ]
        },
        {
          nombre: "Administración",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Análisis de sistemas",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Criptografía y seguridad",
          creditos: "3",
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
        },
        {
          nombre: "Optativa III área curricular de formación profesional fundamental",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa IV área curricular de formación profesional fundamental",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        }
      ]
    },
    {
      numero: "Octavo Semestre",
      materias: [
        {
          nombre: "Seminario de computación",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Comportamiento organizacional",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Administración"
            }
          ]
        },
        {
          nombre: "Optativa V área curricular de formación profesional fundamental",
          creditos: "3",
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
              materia: ""
            }
          ]
        }
      ]
    },
    {
      numero: "Noveno Semestre",
      materias: [
        {
          nombre: "Administración de proyectos de software",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Análisis de sistemas"
            }
          ]
        },
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
          nombre: "Seminario de egreso",
          creditos: "1",
          horas: "1",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Seminario para el desempeño profesional",
          creditos: "1",
          horas: "1",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa VII área curricular de formación profesional fundamental",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        }
      ]
    }
  ]

  ngOnInit() {
  }

}
