import { PartialType } from "@nestjs/swagger";
import { CreateArticleDto } from "./createArticleDto";

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
