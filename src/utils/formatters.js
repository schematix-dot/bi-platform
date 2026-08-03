export function formatCurrency(value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function formatNumber(value) {
  return value.toLocaleString("en-US");
}

export function formatPercent(value) {
  return `${value}%`;
}