class Student {
    constructor() {
      this.ticsRequired = 6;
    }
  
    pass() {
      return this.ticsRequired === 0;
    }
  }
  
  class RegularStudent extends Student {
    constructor() {
      super();
    }
  }
  
  class NSStudent extends Student {
    constructor() {
      super();
      this.ticsRequired = 4; // NS students only need 4 tics to pass
    }
  }
  
  // Crear una lista de estudiantes
  const students = [
    new RegularStudent(),
    new RegularStudent(),
    new NSStudent(),
    new RegularStudent(),
    new NSStudent()
  ];
  
  // Mostrar el estado de aprobación de cada estudiante
  students.forEach((student, index) => {
    const studentType = student instanceof NSStudent ? "NS Student" : "Regular Student";
    console.log(`Estudiante ${index + 1} (${studentType}): ${student.pass() ? "Aprobado" : "No aprobado"}`);
  });
