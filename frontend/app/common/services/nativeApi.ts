export class NativeApi {
  playAudio = (path: string, options?: { volume: number }) => {
    const audio = new Audio(path);

    audio.volume = options?.volume ?? 0.5;

    return audio.play();
  };
}

const nativeApi = new NativeApi();

export function getNativeApi() {
  return nativeApi;
}
