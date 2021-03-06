import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { nickname, description } = createBoardDto;

    const board = new Board();
    board.nickname = nickname;
    board.description = description;
    board.status = BoardStatus.PUBLIC;
    await board.save();

    return board;
  }
}
