import { ApiProperty } from "@nestjs/swagger";

export enum ReviewStatus {
  PENDING = "PENDING",
  UNDER_APPROVED = "UNDER_APPROVED",
  APPROVED = "APPROVED",
}

export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  content: string;

  @ApiProperty({ required: false, default: false })
  published: boolean;

  @ApiProperty({ required: false })
  reviewStatus: ReviewStatus.PENDING;
}
