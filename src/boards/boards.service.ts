//명령어: nest g service boards --no-spec (--no-spec: 테스트코드를 생성하지않는다.)
import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { getManager } from 'typeorm';
@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  async getAllBoards(): Promise<Board[]> {
    const entityManager = getManager();
    const boards = await entityManager.query(
      `select * from board order by id desc;`,
    );

    return boards;
  }

  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { nickname, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     nickname,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`${id}의 게시물을 찾을 수 없습니다.`);
    }
    return found;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`can't find Board with id ${id}`);
    }
  }

  // deleteBoard(id: string): void {
  //   const findBoard = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== findBoard.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
