const minhaString: string = "string"
const meuNumero: number = 20
type NovoObjeto = {
    nome: string,
    idade: number,
    corFavorita: string
}
enum CoresArcoIris {
    AZUL = "Azul",
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    VERDE = "Verde",
    ANIL = "Anil",
    VIOLETA = "Violeta",
}
const objetoType: NovoObjeto = {
    nome: "arthur",
    idade: 20,
    corFavorita: CoresArcoIris.AZUL
}
// console.table(objetoType)

const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    // obterEstatisticas: (numeros) => {...}
    obterEstatisticas: (numeros: number[]) => {
        const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number, menor:number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
}
// console.log(amostraDeIdades)

type StringToString = [{
    autor: string,
    texto: string
},{
    autor: string,
    texto: string
},{
    autor: string,
    texto: string
},{
    autor: string,
    texto: string
},{
    autor: string,
    texto: string
}]
const posts:StringToString= [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  function buscarPostsPorAutor(posts:any, autorInformado:any) {
    return posts.filter(
      (post:any) => {
        return post.autor === autorInformado
      }
    )
  }
  console.log(buscarPostsPorAutor)