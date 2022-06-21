const partNumber = (number) => {
  const commaSeparatedNumber = number.toLocaleString('en-US')
  const truncatedNumber = commaSeparatedNumber.split(".")[0]

  return truncatedNumber
}

export default partNumber
