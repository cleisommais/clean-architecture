import { ShortenURL, ShortenURLProps } from './shorten-url.entity';

describe('Tests to Shorten URL', () => {
  it('Creating a class and compare the properties', () => {
    const shortenURLProps: ShortenURLProps = {
      id: 'id',
      urlRedirect: 'urlRedirect',
      urlExpiration: new Date(),
      userId: 'userId',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const shortenURL = new ShortenURL(shortenURLProps);
    expect(shortenURL.props).toStrictEqual(shortenURLProps);
  });
});
