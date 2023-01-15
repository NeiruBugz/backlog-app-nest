import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

const gamesList: Partial<Game>[] = [
  {
    title: 'God of War: Ragnarök',
    img: '',
    platform: 'PlayStation 5',
    status: 'completed',
  },
  {
    title: 'The Last Of Us Part I',
    img: '',
    platform: 'PlayStation 5',
    status: 'completed',
  },
  {
    title: 'Forza Horizon 5',
    img: '',
    platform: 'Xbox',
    status: 'backlog',
  },
  {
    title: 'Persona 5 Royal',
    img: 'https://assets1.ignimgs.com/2020/02/14/persona-5-royal---button-fin-1581716582492.jpg',
    platform: 'Nintendo Switch',
    status: 'in-progress',
  },
];

const enrichList = (list): Game[] => {
  return list.map((game) => {
    game.id = uuidv4();
    return game;
  });
};

@Injectable()
export class GamesService {
  private readonly games: Game[] = enrichList(gamesList);
  create(createGameDto: CreateGameDto) {
    const { title, platform, status, img } = createGameDto;
    const game = new Game(uuidv4(), title, status, platform, img);
    this.games.push(game);
    return true;
  }

  findAll() {
    return this.games;
  }

  findOne(id: string) {
    return `This action returns a #${id} game`;
  }

  update(id: string, updateGameDto: UpdateGameDto) {
    const gameIndex = this.games.findIndex((game) => game.id === id);
    const game = this.games[gameIndex];
    this.games[gameIndex] = { ...game, ...updateGameDto };
  }

  remove(id: string) {
    return `This action removes a #${id} game`;
  }
}
