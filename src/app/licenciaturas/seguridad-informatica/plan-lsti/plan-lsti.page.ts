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
              materia: "Introducción a la programación"
            }
          ]
        },
        {
          nombre: "Laboratorio de programación para ciberseguridad",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Introducción a la programación"
            }
          ]
        },
        {
          nombre: "Señales de transmisión",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Física básica"
            },
            {
              materia: "Cálculo integral"
            }
          ]
        },
        {
          nombre: "Teoría de autómatas",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "matemáticas discretas"
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
              materia: "Programación para ciberseguridad"
            },
            {
              materia: "Laboratorio de programación para ciberseguridad"
            },
            {
              materia: "Teoría de autómatas"
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
              materia: "Señales de transmisión"
            }
          ]
        },
        {
          nombre: "Laboratorio de fundamentos de redes",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Señales de transmisión"
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
              materia: "Programación para ciberseguridad"
            },
            {
              materia: "Laboratorio de programación para ciberseguridad"
            }
          ]
        },
        {
          nombre: "Laboratorio de seguridad en base de datos",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Programación para ciberseguridad"
            },
            {
              materia: "Laboratorio de programación para ciberseguridad"
            }
          ]
        },
        {
          nombre: "Teoría de la información",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Álgebra lineal"
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
              materia: "Programa de seguridad"
            }
          ]
        },
        {
          nombre: "Conmutación de redes locales",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Fundamentos de redes"
            },
            {
              materia: "Laboratorio de fundamentos de redes"
            }
          ]
        },
        {
          nombre: "Laboratorio de conmutación de redes locales",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Fundamentos de redes"
            },
            {
              materia: "Laboratorio de fundamentos de redes"
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
              materia: "Teoría de la información"
            }
          ]
        }
      ]
    },
    {
      numero: "Sexto Semestre",
      materias: [
        {
          nombre: "Derecho informático",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Normatividad y regularaciones de datos"
            }
          ]
        },
        {
          nombre: "Diseño de políticas de seguridad de la información",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Inglés para tecnologías",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Interconexión de redes locales",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Conmutación de redes locales"
            },
            {
              materia: "Laboratorio de conmutación de redes locales"
            }
          ]
        },
        {
          nombre: "Laboratorio de interconexión de redes locales",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Conmutación de redes locales"
            },
            {
              materia: "Laboratorio de conmutación de redes locales"
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
          nombre: "Optativa II área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "4",
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
          nombre: "Control de accesos ",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Interconexión de redes locales"
            },
            {
              materia: "Laboratorio de interconexión de redes locales"
            }
          ]
        },
        {
          nombre: "Laboratorio de control de accesos",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Interconexión de redes locales"
            },
            {
              materia: "Laboratorio de interconexión de redes locales"
            }
          ]
        },
        {
          nombre: "Diseño de arquitecturas de seguridad informática",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Diseño de políticas de seguridad informática"
            }
          ]
        },
        {
          nombre: "Gobierno, riesgo y cumplimiento",
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
          nombre: "Operación de la seguridad ",
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
          creditos: "4",
          horas: "4",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa IV área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "4",
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
          nombre: "Pruebas de vulnerabilidades",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Control de accesos"
            },
            {
              materia: "Laboratorio de control de accesos"
            },
            {
              materia: "Operación de la seguridad"
            }
          ]
        },
        {
          nombre: "Laboratorio de pruebas de vulnerabilidades",
          creditos: "2",
          horas: "2",
          requisitos: [
            {
              materia: "Control de accesos"
            },
            {
              materia: "Laboratorio de control de accesos"
            },
            {
              materia: "Operación de la seguridad"
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
          nombre: "Optativa V área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "4",
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
          nombre: "Computo forense",
          creditos: "4",
          horas: "5",
          requisitos: [
            {
              materia: "Pruebas de vulnerabilidades"
            },
            {
              materia: "Laboratorio de pruebas de vulnerabilidades"
            },
            {
              materia: "Gobierno, riesgo y cumplimiento"
            }
          ]
        },
        {
          nombre: "Continuidad de negocio y recuperación de desastres",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Gobierno, riesgo y cumplimiento"
            }
          ]
        },
        {
          nombre: "Gestión de incidentes de seguridad informática",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Gobierno, riesgo y cumplimiento"
            }
          ]
        },
        {
          nombre: "Modelo de negocios",
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
          creditos: "6",
          horas: "2",
          requisitos: [
            {
              materia: ""
            }
          ]
        },
        {
          nombre: "Optativa VI área curricular de formación profesional fundamental",
          creditos: "4",
          horas: "4",
          requisitos: [
            {
              materia: ""
            }
          ]
        }
      ]
    },
    {
      numero: "Décimo Semestre",
      materias: [
        {
          nombre: "Administración de amenazas operativas",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Inglés para tecnologías"
            }
          ]
        },
        {
          nombre: "Administración de dependencias externas",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Inglés para tecnologías"
            }
          ]
        },
        {
          nombre: "Programa de amenazas internas",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Inglés para tecnologías"
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
          nombre: "Transformación digital",
          creditos: "3",
          horas: "3",
          requisitos: [
            {
              materia: "Inglés para tecnologías"
            }
          ]
        },
      ]
    }
  ]

  ngOnInit() {
  }

}
