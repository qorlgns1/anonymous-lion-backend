import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  description: string;
}
