import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-lsti',
  templateUrl: './plan-lsti.page.html',
  styleUrls: ['./plan-lsti.page.scss'],
})
export class PlanLSTIPage implements OnInit {

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
          nombre: "Introducción a la programación",
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
          nombre: "Fundamentos de la seguridad informática",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Fundamentos de sistemas operativos",
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
      numero: "Tercer Semestre",
      materias: [
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
          nombre: "Programa de seguridad",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Programación para ciberseguridad",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Laboratorio de programación para ciberseguridad",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Señales de transmisión",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
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
        }
      ]
    },
    {
      numero: "Cuarto Semestre",
      materias: [
        {
          nombre: "Criptografía",
          creditos: "3",
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
        },
        {
          nombre: "Fundamentos de redes",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Laboratorio de fundamentos de redes",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Normatividad y regulaciones de datos",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Seguridad en base de datos",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Laboratorio de seguridad en base de datos",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Teoría de la información",
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
      numero: "Quinto Semestre",
      materias: [
        {
          nombre: "Administración de riesgos de seguridad",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Conmutación de redes locales",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Laboratorio de conmutación de redes locales",
          creditos: "2",
          horas: "2",
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
          nombre: "Optativa I área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "4",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Seguridad en aplicaciones ",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Laboratorio de seguridad en aplicaciones",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Teoría de la información aplicada",
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
      numero: "Sexto Semestre",
      materias: [
        {
          nombre: "",
          creditos: "",
          horas: "",
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
          nombre: "",
          creditos: "",
          horas: "",
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
          nombre: "",
          creditos: "",
          horas: "",
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
          nombre: "",
          creditos: "",
          horas: "",
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
