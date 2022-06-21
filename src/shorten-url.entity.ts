export type ShortenURLProps = {
  id: string;
  urlRedirect: string;
  urlExpiration: Date;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export class ShortenURL {
  public props: Required<ShortenURLProps>;
  constructor(props: ShortenURLProps) {
    this.props = props;
  }
}
