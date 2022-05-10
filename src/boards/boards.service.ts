//명령어: nest g service boards --no-spec (--no-spec: 테스트코드를 생성하지않는다.)
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [];

  getAllBoards() {
    return this.boards;
  }
}
