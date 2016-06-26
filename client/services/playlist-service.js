import Rebase from 're-base';

const base = Rebase.createClass('https://reacttestmaro.firebaseio.com/');

export function getPlaylistQueue(context) {
  return new Promise((resolve) => {
    base.fetch('items', {
      context: context,
      asArray: true,
      then(data) {
        resolve(data);
      }
    });
  });
}

export function postPlaylistQueue(data) {
  return new Promise((resolve) => {
    base.post('items', {
      data: data,
      then() {
        resolve(data);
      }
    });
  });
}
