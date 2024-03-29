import { Controller, Get } from '@nestjs/common';
import { TagService } from '@app/tag/tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  findAll() {
    return this.tagService.findAll();
  }
}
