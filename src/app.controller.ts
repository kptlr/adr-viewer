import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';
import * as showdown from 'showdown';
import * as fs from 'fs';

@Controller('/adrs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':projectName/:adrId')
  //@Render('index')
  getRoot(
    @Param('projectName') projectName: string,
    @Param('adrId') adrId: string,
  ) {
    const converter = new showdown.Converter();
    return converter.makeHtml(
      fs.readFileSync('./adr/' + projectName + '/' + adrId + '.md', 'utf8'),
    );
  }
}
