export class Game {
  id: string;
  title: string;
  status: string;
  platform: string;
  img?: string;

  constructor(
    id: string,
    title: string,
    status: string,
    platform: string,
    img?: string,
  ) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.platform = platform;
    this.img = img;
  }
}
