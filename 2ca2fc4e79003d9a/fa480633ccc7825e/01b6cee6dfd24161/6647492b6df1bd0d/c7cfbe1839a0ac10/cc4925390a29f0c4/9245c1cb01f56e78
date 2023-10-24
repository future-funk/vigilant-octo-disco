export type Extent = [number, number]

export type Scale = {
  domain: Extent
  range: Extent
}

const getLogScale = (scale: Scale) => {
  const { domain, range } = scale
  const domainStart = Math.log10(domain[0]),
    domainEnd = Math.log10(domain[1]),
    rangeStart = range[0],
    rangeEnd = range[1]

  return (value = 0) =>
    rangeStart +
    (rangeEnd - rangeStart) *
      ((Math.log10(value) - domainStart) / (domainEnd - domainStart))
}

export default getLogScale
