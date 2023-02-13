import { Injectable } from '@nestjs/common';
import { HowLongToBeatEntry, HowLongToBeatService } from 'howlongtobeat';
import { sortById } from '../modules/utils';

@Injectable()
export class SearchService {
  private howLongToBeatService: HowLongToBeatService;

  constructor() {
    this.howLongToBeatService = new HowLongToBeatService();
  }

  public async search(query: string): Promise<HowLongToBeatEntry[]> {
    const response = await this.howLongToBeatService.search(query);
    console.log(response);
    return sortById(response);
  }

  public async getDetails(title: string): Promise<HowLongToBeatEntry> {
    const response = await this.howLongToBeatService.search(title);
    const [result] = response.filter((entry) => entry.name === title);
    return result;
  }
}
