import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-lf',
  templateUrl: './plan-lf.page.html',
  styleUrls: ['./plan-lf.page.scss'],
})
export class PlanLFPage implements OnInit {

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
            }
          ]
        },
        {
          nombre: "Lenguajes de programación",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Metodología de la programación"
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
          nombre: "Ecuaciones diferenciales",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo integral"
            }
          ]
        },
        {
          nombre: "Gravitación, fluidos y calor",
          creditos: "6",
          horas: "7",
          requisitos: [
            {
              materia: "Mecánica traslacional y rotacional"
            }
          ]
        },
        {
          nombre: "Probabilidad y estadística",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo integral"
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
          nombre: "Electricidad",
          creditos: "6",
          horas: "7",
          requisitos: [
            {
              materia: "Gravitación, fluidos y calor"
            }
          ]
        },
        {
          nombre: "Mecánica teórica ",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Mecánica traslacional y rotacional"
            }
          ]
        },
        {
          nombre: "Diseño experimental",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Diseño experimental"
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
          nombre: "Didáctica de la física",
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
      numero: "Quinto Semestre",
      materias: [
        {
          nombre: "Métodos de la física teórica",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo vectorial"
            },
            {
              materia: "Variable compleja"
            },
            {
              materia: "Ecuaciones diferenciales"
            }
          ]
        },
        {
          nombre: "Termodinámica",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Cálculo de varias variables"
            }
          ]
        },
        {
          nombre: "Ondas y magnetismo",
          creditos: "6",
          horas: "7",
          requisitos: [
            {
              materia: "Cálculo vectorial"
            },
            {
              materia: "Electricidad"
            }
          ]
        },
        {
          nombre: "Mecánica de sistemas con restricciones",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Mecánica teórica"
            }
          ]
        },
        {
          nombre: "Física moderna ",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Electricidad"
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
        }
      ]
    },
    {
      numero: "Sexto Semestre",
      materias: [
        {
          nombre: "Cálculo variacional y tensorial",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Métodos de la física teórica"
            }
          ]
        },
        {
          nombre: "Física estadística",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Termodinámica"
            }
          ]
        },
        {
          nombre: "Teoría electrostática",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Ondas y magnetismo"
            }
          ]
        },
        {
          nombre: "Introducción a la mecánica cuántica",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Física moderna"
            }
          ]
        },
        {
          nombre: "Circuitos eléctricos",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Electricidad"
            }
          ]
        },
        {
          nombre: "Óptica",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Ondas y magnetismo"
            }
          ]
        }
      ]
    },
    {
      numero: "Séptimo Semestre",
      materias: [
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
          nombre: "Aplicaciones de física estadística",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Física estadística"
            }
          ]
        },
        {
          nombre: "Teoría electrodinámica",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Teoría electrostática"
            }
          ]
        },
        {
          nombre: "Mecánica cuántica",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Introducción a la mecánica cuántica"
            }
          ]
        },
        {
          nombre: "Electrónica",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Circuitos eléctronicos"
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
      numero: "Octavo Semestre",
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
          nombre: "Física computacional",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Física experimental",
          creditos: "3",
          horas: "3",
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
        }
      ]
    },
    {
      numero: "Noveno Semestre",
      materias: [
        {
          nombre: "Optativa Área curricular de formación profesional integradora",
          creditos: "16",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Seminario para el desempeño profesional",
          creditos: "2",
          horas: "2",
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
    }
  ]

  ngOnInit() {
  }

}
