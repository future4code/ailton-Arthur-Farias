export type Musicas = {
	musica: string
	artista: string
	ano: number
}

export type Aleatorio = [
	{
		userId: number
		id: number
		title: string
		completed: boolean
	}
]

export const playlist: Aleatorio[] = [
	{
		userId: 1,
		id: 1,
		title: 'delectus aut autem',
		completed: false,
	},
	{
		userId: 1,
		id: 2,
		title: 'quis ut nam facilis et officia qui',
		completed: false,
	},
	{
		userId: 1,
		id: 3,
		title: 'fugiat veniam minus',
		completed: false,
	},
	{
		userId: 1,
		id: 4,
		title: 'et porro tempora',
		completed: true,
	},
	{
		userId: 1,
		id: 5,
		title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
		completed: false,
	},
	{
		userId: 1,
		id: 6,
		title: 'qui ullam ratione quibusdam voluptatem quia omnis',
		completed: false,
	},
	{
		userId: 1,
		id: 7,
		title: 'illo expedita consequatur quia in',
		completed: false,
	},
	{
		userId: 1,
		id: 8,
		title: 'quo adipisci enim quam ut ab',
		completed: true,
	},
	{
		userId: 1,
		id: 9,
		title: 'molestiae perspiciatis ipsa',
		completed: false,
	},
	{
		userId: 1,
		id: 10,
		title: 'illo est ratione doloremque quia maiores aut',
		completed: true,
	},
	{
		userId: 1,
		id: 11,
		title: 'vero rerum temporibus dolor',
		completed: true,
	},
	{
		userId: 1,
		id: 12,
		title: 'ipsa repellendus fugit nisi',
		completed: true,
	},
	{
		userId: 1,
		id: 13,
		title: 'et doloremque nulla',
		completed: false,
	},
	{
		userId: 1,
		id: 14,
		title: 'repellendus sunt dolores architecto voluptatum',
		completed: true,
	},
]
