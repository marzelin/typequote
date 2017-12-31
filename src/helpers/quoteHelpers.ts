export function chooseDifferentItem<T>(items: T[]) {
  return (item: T | null) => {
    let newItem: T;
    do {
      newItem = randomItem(items);
    } while (newItem === item);
    return newItem;
  };
}

function randomItem(array: any[]) {
  return array[random(array.length)];
}

function random(range: number) {
  return Math.floor(Math.random() * range);
}

export function addIfUnique<T>(items: T[], item: T) {
  if (!items.includes(item)) {
    items = [...items, item];
  }
  return items;
}
