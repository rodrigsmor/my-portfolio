export default function calculatePercentage(baseValue, value) {
  console.log(baseValue)
  console.log(value)
  return `${(value * 100) / baseValue}%`;
}