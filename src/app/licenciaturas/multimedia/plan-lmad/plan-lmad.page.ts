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
      numero: "Tercer Semestre",
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
      numero: "Cuarto Semestre",
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
      numero: "Quinto Semestre",
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
      numero: "Septimo Semestre",
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
