export function formatCurrency(value: number) {
  return new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  })
    .format(value)
    .replace(/\,00([^\d])/g, "$1");
}
