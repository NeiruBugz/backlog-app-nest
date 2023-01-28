import { Injectable } from '@nestjs/common';
import { HowLongToBeatEntry, HowLongToBeatService } from 'howlongtobeat';

@Injectable()
export class SearchService {
  private hltb = new HowLongToBeatService();
  private results: HowLongToBeatEntry[];

  private async htlbSearch(query: string) {
    const response = await this.hltb.search(query);
    console.log(response);
    return response;
  }

  search(query: string) {
    console.log(query);
    const r = this.htlbSearch(query);
    return r;
  }
}
