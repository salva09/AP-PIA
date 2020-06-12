import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-la',
  templateUrl: './plan-la.page.html',
  styleUrls: ['./plan-la.page.scss'],
})
export class PlanLAPage implements OnInit {

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
              materia: "Geometría analítica"
            }
          ]
        },
        {
          nombre: "Programación I",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Metodología de la programación"
            }
          ]
        },
        {
          nombre: "Matemáticas financieras",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Álgebra"
            },
          ]
        },
        {
          nombre: "Seguro de vida",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Física básica"
            }
          ]
        },
        {
          nombre: "Análisis de datos",
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
          nombre: "Probabilidad básica",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo integral"
            }
          ]
        },
        {
          nombre: "Economía",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Matemáticas financieras"
            }
          ]
        },
        {
          nombre: "Seguro de daños",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Seguro de vida"
            }
          ]
        },
        {
          nombre: "Contexto económico geopolítico",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Seguro de vida"
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
          nombre: "Probabilidad avanzada",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Probabilidad básica"
            }
          ]
        },
        {
          nombre: "Matemáticas financieras avanzadas",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Matemáticas financieras"
            },
            {
              materia: "Contexto económico geopolítico"
            }
          ]
        },
        {
          nombre: "Contabilidad",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Econoía"
            }
          ]
        },
        {
          nombre: "Análisis de datos avanzados",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Análisis de datos"
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
          nombre: "Inferencia estadística",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Probabilidad avanzada"
            }
          ]
        },
        {
          nombre: "Portafolios de inversión",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Matemáticas financieras avanzadas"
            }
          ]
        },
        {
          nombre: "Métodos numéricos",
          creditos: "2",
          horas: "3",
          requisitos: [
            {
              materia: "Programación I"
            }
          ]
        },
        {
          nombre: "Cálculo actuarial",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Matemáticas financieras avanzadas"
            },
            {
              materia: "Seguro de vida"
            }
          ]
        },
        {
          nombre: "Optativa I área curricular de formación profesional fundamental",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Matemáticas financieras avanzadas"
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
      numero: "Sexto Semestre",
      materias: [
        {
          nombre: "Procesos estocásticos",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Inferencia estadística"
            }
          ]
        },
        {
          nombre: "Métodos estadísticos",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Inferencia estadística"
            }
          ]
        },
        {
          nombre: "Matemáticas actuariales del seguro de vida",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo actuarial"
            }
          ]
        },
        {
          nombre: "Investigación de operaciones",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Inferencia estadística"
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
        }
      ]
    },
    {
      numero: "Séptimo Semestre",
      materias: [
        {
          nombre: "Demografía",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Métodos estadísticos"
            }
          ]
        },
        {
          nombre: "Estadística aplicada",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Métodos estadísticos"
            }
          ]
        },
        {
          nombre: "Productos financieros derivados",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Procesos estocásticos"
            }
          ]
        },
        {
          nombre: "Simulación",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Investigación de operaciones"
            }
          ]
        },
        {
          nombre: "Planeación estratégica",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Investigación de operaciones"
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
      numero: "Octavo Semestre",
      materias: [
        {
          nombre: "Pensiones",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Demografía"
            },
            {
              materia: "Matemáticas actuariales del seguro de vida"
            }
          ]
        },
        {
          nombre: "Administración del riesgo empresarial",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Finanzas corporativas",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Productos financieros derivados"
            }
          ]
        },
        {
          nombre: "Matemáticas actuariales del seguro de daños",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Matemáticas actuariales del seguro de vida"
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
        }
      ]
    },
    {
      numero: "Noveno Semestre",
      materias: [
        {
          nombre: "Teoría del riesgo",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Matemáticas actuariales del seguro de daños"
            }
          ]
        },
        {
          nombre: "Administración actuarial",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Matemáticas actuariales del seguro de daños"
            }
          ]
        },
        {
          nombre: "Administración del riesgo empresarial aplicada",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Administración del riesgo empresarial"
            }
          ]
        },
        {
          nombre: "Teoría del comportamiento",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Planeación estratégica"
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
        },
        {
          nombre: "Optativa Área curricular de formación profesional integradora",
          creditos: "5",
          horas: "5",
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
