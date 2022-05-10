//명령어: nest g controller boards --no-spec (--no-spec: 테스트코드를 생성하지않는다.)
import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoard() {
    return this.boardService.getAllBoards();
  }
}
