
export interface IScreen {
  id?: number;
  name?: string;
}

export interface IScreenServer {
  id?: number;
  name?: string;
}

class ScreenBuilder {
  private json: IScreen;
  constructor(screen?: Screen) {
    this.json = screen ? screen.toJSON() : <IScreen>{};
  }
  public id(id: number): ScreenBuilder {
    this.json.id = id;
    return this;
  }
  public name(name: string): ScreenBuilder {
    this.json.name = name;
    return this;
  }

  public build(): Screen {
    return Screen.fromJSON(this.json);
  }
}

export class Screen implements IScreen {
  public readonly id?: number;
  public readonly name?: string;

  public constructor(
    id?: number,
    name?: string,

  ) {
    this.id = id;
    this.name = name;
  }

  public static fromJSON(json: IScreenServer): Screen {
    return new Screen(
      json.id,
      json.name
    );
  }

  public static builder(screen?: Screen): ScreenBuilder {
    return new ScreenBuilder(screen);
  }

  public toJSON(): IScreenServer {
    return {
      id: this.id,
      name: this.name      
    };
  }

}