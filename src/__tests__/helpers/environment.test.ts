import { getEnvironmentVariable } from '@helpers/environment';

describe('getEnvironmentVariable', () => {
  it('should return the value of the environment variable if it exists', () => {
    const foo = getEnvironmentVariable('foo');
    expect(foo).toBe<string>('bar');
  });

  it('should return the value of the environment variable if it exists and a default value is provided', () => {
    const foo = getEnvironmentVariable('foo', 'defaultValue');
    expect(foo).toBe<string>('bar');
  });

  it('should return the default value if the environment variable does not exist', () => {
    const bar = getEnvironmentVariable('bar', 'defaultValue');
    expect(bar).toBe<string>('defaultValue');
  });

  it('should throw an error if the environment variable does not exist and no default value is provided', () => {
    expect(() => getEnvironmentVariable('bar')).toThrow(
      'Required environment variable not set: bar'
    );
  });
});
