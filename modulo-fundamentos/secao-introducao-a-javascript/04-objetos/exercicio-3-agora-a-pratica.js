const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

// Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.
const getValueByKey = (school, position) => {
  if (school.lessons[position]) return school.lessons[position]
  return `Objeto na posição ${position} não existe`
}
console.log(getValueByKey(school, 5));
console.log(getValueByKey(school, 2));

// Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
const getSumAllStudents = (school) => {
  let sumStudents = 0;
  const listLessons = school.lessons;
  for (let index = 0; index < listLessons.length; index++) {
    sumStudents += listLessons[index].students
  }
  return sumStudents;
}

console.log(getSumAllStudents(school))

// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
const validateKey = (objeto, key) => {
  const list = objeto.lessons;
  for (let index = 0; index < list.length; index++) {
    if (!(Object.keys(list[index]).includes(key))) {
      return false
    }
  }
  return true
}
console.log(validateKey(school, "students"));

// Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
const modifyValueShift = (school, nameCourse, newValue) => {
  const list = school.lessons;
  for (let index = 0; index < list.length; index++) {
    if (list[index].course === nameCourse) {
      list[index].shift = newValue
    }
  }
  return school;
}

console.log(modifyValueShift(school, 'Python', 'Tarde'));