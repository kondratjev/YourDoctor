export function formatCurrency(value: number) {
  return new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  })
    .format(value)
    .replace(/\,00([^\d])/g, "$1");
}

export function getWordForm(number: number, words: string[]) {
  if (Number.isInteger(number)) {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }
  return words[1];
}
