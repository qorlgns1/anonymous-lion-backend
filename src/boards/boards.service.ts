//명령어: nest g service boards --no-spec (--no-spec: 테스트코드를 생성하지않는다.)
import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // getBoardById(id: string): Board {
  //   const findBoard = this.boards.find((board) => board.id === id);
  //   if (!findBoard) {
  //     throw new NotFoundException(`${id}의 게시물을 찾을 수 없습니다.`);
  //   }
  //   return findBoard;
  // }
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
