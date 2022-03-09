import { get } from './fetch-options';

export function getRandomPlayerName() {
  // input.disabled = true;
  // confirmButton.disabled = true;

  // .then((res) => {
  //     input.value = res[0];
  // })
  // .finally(() => {
  //     input.disabled = false;
  //     confirmButton.disabled = false;
  // });

  return get('/api/getRandomPlayerName')

}

