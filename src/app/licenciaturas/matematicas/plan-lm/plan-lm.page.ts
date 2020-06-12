import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-lm',
  templateUrl: './plan-lm.page.html',
  styleUrls: ['./plan-lm.page.scss'],
})
export class PlanLMPage implements OnInit {

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
              materia: "Metodología de la programación"
            },
            {
              materia: "Álgebra"
            },
            {
              materia: "Cálculo diferencial"
            }
          ]
        },
        {
          nombre: "Mecánica traslacional y rotacional",
          creditos: "6",
          horas: "7",
          requisitos: [
            {
              materia: "Física básica"
            }
          ]
        },
        {
          nombre: "Laboratorio de Programación Estructurada",
          creditos: "2",
          horas: "1",
          requisitos: [
            {
              materia: "Metodología de la programación"
            }
          ]
        },
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
          nombre: "Matemáticas computacionales",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Cultura de paz",
          creditos: "2",
          horas: "1",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Geometría moderna",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa I área curricular de formación profesional fundamental",
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
      numero: "Cuarto Semestre",
      materias: [
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
          nombre: "Variable compleja",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo de varias variables"
            }
          ]
        },
        {
          nombre: "Cálculo vectorial",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo de varias variables"
            }
          ]
        },
        {
          nombre: "Responsabilidad social y desarrollo sustentable",
          creditos: "2",
          horas: "1",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Probabilidad",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Tópicos de álgebra"
            },
            {
              materia: "Cálculo de varias variables"
            }
          ]
        },
        {
          nombre: "Liderazgo, emprendimiento e innovación",
          creditos: "2",
          horas: "1",
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
          nombre: "Tópicos de álgebra lineal",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Álgebra lineal"
            }
          ]
        },
        {
          nombre: "Tópicos de ecuaciones diferenciales",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Ecuaciones diferenciales"
            }
          ]
        },
        {
          nombre: "Historia de las matemáticas",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Ecuaciones diferenciales"
            }
          ]
        },
        {
          nombre: "Tópicos de variable compleja",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Variable compleja"
            }
          ]
        }
      ]
    },
    {
      numero: "Sexto Semestre",
      materias: [
        {
          nombre: "Análisis matemático",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo de varias variables"
            },
            {
              materia: "Variable compleja"
            }
          ]
        },
        {
          nombre: "Minería de datos",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Estadística"
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
          nombre: "Teoría de grupos",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Tópicos de álgebra lineal"
            }
          ]
        },
        {
          nombre: "Matemática educativa",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Historia de las matemáticas"
            }
          ]
        },
        {
          nombre: "Ética y cultura de la legalidad",
          creditos: "2",
          horas: "1",
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
          nombre: "Tópicos de análisis matemático",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Análisis matemático"
            }
          ]
        },
        {
          nombre: "Teoría de anillos y campos",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Teoría de grupos"
            }
          ]
        },
        {
          nombre: "Topología",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Análisis matemático"
            }
          ]
        },
        {
          nombre: "Enseñanza de las ciencias físico matemáticas",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Matemática educativa"
            }
          ]
        },
        {
          nombre: "Investigación de operaciones",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Programación lineal"
            },
            {
              materia: "Probabilidad"
            }
          ]
        },
        {
          nombre: "Optativa II área curricular de formación profesional fundamental",
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
      numero: "Octavo Semestre",
      materias: [
        {
          nombre: "Teoría de la medida",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Tópicos de análisis matemático"
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
          nombre: "Optativa III área curricular de formación profesional fundamental",
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
      numero: "Noveno Semestre",
      materias: [
        {
          nombre: "Geometría diferencial",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Topología"
            }
          ]
        },
        {
          nombre: "Métodos de optimización",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Investigación de operaciones"
            },
            {
              materia: "Tópicos de análisis matemático"
            }
          ]
        },
        {
          nombre: "Optativa IV área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa V área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa VI área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Taller para examen de egreso",
          creditos: "1",
          horas: "1",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Seminario de investigación	",
          creditos: "2",
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
        }
      ]
    }
  ]

  ngOnInit() {
  }

}
